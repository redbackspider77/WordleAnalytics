async function openPanel() {
    const panelHTML = (await fetch(chrome.runtime.getURL("panel.html"))).text();
    
    // create a container and inject html
    const container = document.createElement("div");
    container.innerHTML = panelHTML;
    document.body.appendChild(container);

    // inject css
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = chrome.runtime.getURL("panel.css");
    document.head.appendChild(style);
};