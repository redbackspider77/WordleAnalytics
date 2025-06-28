const iframe = window.parent;

function ordinal(n) {
    const s = ["th", "st", "nd", "rd"],
        v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

document.getElementById("close-panel").addEventListener("click", () => {
    iframe.postMessage({ type: "close-panel" }, "*");
});

window.addEventListener("message", (event) => {
    const message = event.data;

    if (message.type === "loadPanel") {
        chrome.storage.local.get("wordleStats", (result) => {
            const today = new Date().toISOString().slice(0, 10);
            const todayStats = result.wordleStats?.[today];

            if (todayStats) {
                const todayGuessesElement = document.getElementById("todayGuess");
                todayGuessesElement.textContent = `You completed Wordle today on your ${ordinal(todayStats)} guess!`;
                console.log("Panel updated with today's guesses:", todayStats);
            }
        });
    }
});
