chrome.runtime.onInstalled.addListener(() => {
    chrome.action.onClicked.addListener((tab) => {
        chrome.tabs.sendMessage(tab.id, { type: 'togglePanel' });
    });
});