chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "openSidePanel") {
        chrome.sidePanel.setOptions({
            path: "panel.html",
            enabled: true
        });
    }
});