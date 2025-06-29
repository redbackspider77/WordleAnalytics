/*const firebaseConfig = {
  apiKey: "AIzaSyCnNUSxeI3V8m8mH-ZAZuW_N_EHipEy4NE",
  authDomain: "wordleanalytics-94a4b.firebaseapp.com",
  projectId: "wordleanalytics-94a4b",
  storageBucket: "wordleanalytics-94a4b.firebasestorage.app",
  messagingSenderId: "34017571752",
  appId: "1:34017571752:web:a9f5874201d5e1fccda39d",
  measurementId: "G-7RSS026EKQ"
};

import { initializeApp } from "./firebase/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "./firebase/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
*/

async function saveNYTAverage(day, NYTAverage) {
    chrome.storage.local.get(['NYTAverages'], (result) => {
        result[day] = NYTAverage;
    });
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.action.onClicked.addListener((tab) => {
        chrome.tabs.sendMessage(tab.id, { type: 'togglePanel' });
    });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "getNYTAverage") {
        (async () => {
            const originalTab = await new Promise((resolve) => {
                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                    resolve(tabs[0]);
                });
            });

            const tab = await new Promise((resolve) => {
                chrome.tabs.create({
                    url: "https://www.nytimes.com/interactive/2022/upshot/wordle-bot.html",
                    active: true // false if you want to use experimental logic below
                }, resolve);
            });

            /* attempt to trigger wordle bot loading to scrape successfully with minimal user contact, but it seemed to be unnecessary and too hardcoded to continue working on
            const tabLoaded = new Promise((resolve) => {
                const listener = (tabId, changeInfo) => {
                    if (tabId === tab.id && changeInfo.status === 'complete') {
                        chrome.tabs.onUpdated.removeListener(listener);
                        resolve();
                    }
                };
                chrome.tabs.onUpdated.addListener(listener);
            });

            await tabLoaded;

            chrome.tabs.update(tab.id, { active: true });

            setTimeout(() => {
                chrome.tabs.update(originalTab, { active: true });
            }, 500);
            */

            const listener = (response) => {
                if (response.type === "NYTAverageResult") {
                    chrome.tabs.update(originalTab.id, { active: true });
                    chrome.tabs.remove(tab.id);
                    sendResponse({ average: response.average });
                    chrome.runtime.onMessage.removeListener(listener);
                    
                }
            };

            chrome.runtime.onMessage.addListener(listener);

            try {
                await chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ['scrapeNYTAverage.js']
                });
            } catch (error) {
                clearTimeout(timeoutId);
                chrome.tabs.update(originalTab.id, { active: true });
                chrome.tabs.remove(tab.id);
                sendResponse({ average: null, error: error.message });
                chrome.runtime.onMessage.removeListener(listener);
            }
        })();

        return true;
    }
});
