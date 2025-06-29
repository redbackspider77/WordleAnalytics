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
        iframe.contentWindow.postMessage({ type: "loadPanel" }, "*");
    }
}


chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'togglePanel') {
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

const currentTab = window.location.toString();

if (currentTab && currentTab === "https://www.nytimes.com/games/wordle/index.html") {
    console.log("Monitoring for game finish...");

    let waiting = false;
    let id = setInterval(async () => {
        if (waiting) return;
        const finished = document.querySelector('.Header-module_statsHeading__NlnC1');
        if (finished) {
            const rows = document.querySelectorAll('.Row-module_row__pwpBq');
            for (let i = 5; i > -2; i--) {
                let row = rows[i];

                if (row.textContent) {
                    const day = new Date().toISOString().slice(0, 10);
                    const guessCount = i + 1;
                    saveUserGuess(day, guessCount);
                    break;
                }

                if (i === -1) {
                    const day = new Date().toISOString().slice(0, 10);
                    saveUserGuess(day, 0);
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

async function saveUserGuess(day, guessCount) {
    console.log(`Game finished on ${day} in ${guessCount} guesses.`);

    const result = await chrome.storage.local.get("wordleStats");
    const data = result.wordleStats || {};
    data[day] = guessCount;

    await chrome.storage.local.set({ wordleStats: data });
}
