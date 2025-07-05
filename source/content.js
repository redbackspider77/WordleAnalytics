const firebaseConfig = {
  apiKey: "AIzaSyCnNUSxeI3V8m8mH-ZAZuW_N_EHipEy4NE",
  authDomain: "wordleanalytics-94a4b.firebaseapp.com",
  projectId: "wordleanalytics-94a4b",
  storageBucket: "wordleanalytics-94a4b.firebasestorage.app",
  messagingSenderId: "34017571752",
  appId: "1:34017571752:web:a9f5874201d5e1fccda39d",
  measurementId: "G-7RSS026EKQ"
};

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const today = new Date().toISOString().slice(0, 10);

(async () => {
    const NYTAverage = (await getAverage(today, false)) || "unavailable";
    const NYTHardAverage = (await getAverage(today, false)) || "unavailable"; 
})();

async function getAverage(date, isHardMode) {
  const ref = doc(db, "games", date);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    const data = snap.data();

    if (isHardMode) {
        return data.NYTHardAverage;
    } else {
        return data.NYTAverage;
    }
  } else {
    console.log("No data for this date");
    return null;
  }
}

async function setAverage(date, average, isHardMode) {
    const ref = doc(db, "games", date);

    if (isHardMode) {
        await setDoc(ref, { NYTHardAverage: average });
    } else {
        await setDoc(ref, { NYTAverage: average });
    }
}

async function createPanel() {
    return new Promise((resolve) => {
        const iframe = document.createElement('iframe');
        iframe.src = chrome.runtime.getURL('panel.html');
        iframe.id = "wordle-panel";
        iframe.style.cssText = `
            position: fixed;
            top: 0;
            right: 0;
            width: 30vw;
            height: 100vh;
            border: none;
            z-index: 9999;
            box-shadow: -2px 0 5px rgba(0,0,0,0.2);
            transition: transform 0.3s ease;
            transform: translateX(100%);
        `;

        document.body.appendChild(iframe);

        console.log("Panel created!");

        updatePanel();

        requestAnimationFrame(() => {
            openPanel();
        });

        window.addEventListener("message", (event) => {
            if (event.data?.type === "close-panel") {
                closePanel();
            }

            if (event.data?.type === "open-panel") {
                openPanel();
            }
        });
    });
};

async function closePanel() {
    const iframe = document.getElementById("wordle-panel");
    if (iframe) {
        requestAnimationFrame(() => {
            iframe.style.transform = 'translateX(100%)';
        });
        console.log("Panel closed!");
    }
}

async function openPanel() {
    const iframe = document.getElementById("wordle-panel");
    if (iframe) {
        requestAnimationFrame(() => {
            iframe.style.transform = 'translateX(0%)';
        });
        console.log("Panel opened!");
    }
}

async function updatePanel() {
    const iframe = document.getElementById("wordle-panel");

    iframe.onload = () => {
        const id = setTimeout(function() {
            if (NYTAverage && NYTHardAverage) {  
                clearInterval(id);
            }
        }, 200);

        iframe.contentWindow.postMessage({ type: "loadPanel", average: NYTAverage, hardAverage: NYTHardAverage }, "*");
    }
}


chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'togglePanel') {
        console.log('Recieved messaage to toggle panel.');

        const panel = document.getElementById('wordle-panel');
        if (!panel) {
            createPanel();
        } else if (panel.style.transform === 'translateX(0%)') {
            closePanel();
        } else if (panel.style.transform === 'translateX(100%)') {
            openPanel();
        }
    }
});

async function saveUserGuess(day, guessCount, isHardMode) {
    console.log(`Game finished on ${day} in ${guessCount} guesses - ${isHardMode ? "hard" : "normal"} mode.`);

    const result = await chrome.storage.local.get("wordleStats");
    const data = result.wordleStats || {};
    data[day] = {
        guess: guessCount,
        mode: isHardMode ? "hard" : "normal"
    };

    await chrome.storage.local.set({ wordleStats: data });
}

const currentTab = window.location.toString();

if (currentTab && currentTab === "https://www.nytimes.com/games/wordle/index.html") {
    console.log("Monitoring for game finish...");

    let waiting = false;
    let id = setInterval(async () => {
        if (waiting) return;
        const finished = document.querySelector('.Header-module_statsHeading__NlnC1');
        if (finished) {
            const modeButton = document.querySelector('[aria-label*="Hard Mode"]');
            const isHardMode = modeButton?.getAttribute('aria-checked') === 'true';

            const rows = document.querySelectorAll('.Row-module_row__pwpBq');
            for (let i = 5; i > -2; i--) {
                let row = rows[i];

                if (row.textContent) {
                    const day = new Date().toISOString().slice(0, 10);
                    const guessCount = i + 1;
                    saveUserGuess(day, guessCount, isHardMode);
                    break;
                }

                if (i === -1) {
                    const day = new Date().toISOString().slice(0, 10);
                    saveUserGuess(day, 0, isHardMode);
                }
            }

            const panel = document.getElementById('wordle-panel');
            if (panel) {
                openPanel();
                updatePanel();
            } else {
                waiting = true;
                await createPanel();
            }

            clearInterval(id);
        }
    }, 100);
}