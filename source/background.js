async function saveNYTAverage(day, NYTAverage) {
    chrome.storage.local.get(['NYTAverages'], (result) => {
        const NYTAverages = result.NYTAverages || {};
        NYTAverages[day] = { average: NYTAverage };
        chrome.storage.local.set({ NYTAverages });
        console.log("Saved NYTAverage:", {day: { average: NYTAverage }});
    });
}

chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, { type: 'togglePanel' });
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
                    saveNYTAverage((new Date().toISOString().slice(0, 10)), response.average);
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
                chrome.tabs.update(originalTab.id, { active: true });
                chrome.tabs.remove(tab.id);
                sendResponse({ average: null, error: error.message });
                chrome.runtime.onMessage.removeListener(listener);
            }
        })();

        return true;
    }
});
