const iframe = window.parent;
const today = new Date().toISOString().slice(0, 10);

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
            const todayStats = result.wordleStats?.[today];

            if (todayStats) {
                const hardModeElement = document.getElementById("hardMode");
                if (todayStats.mode === "hard") {
                    hardModeElement.textContent = "Hard Mode";
                }

                const todayGuessesElement = document.getElementById("todayGuess");
                if (todayStats.guess === 0) {
                    todayGuessesElement.textContent = "Wordle was a tough one today, but there is always tomorrow! :)";
                } else {
                    todayGuessesElement.textContent = `You completed Wordle today on your ${ordinal(todayStats.guess)} guess!`;
                }

                console.log("Panel updated with today's guesses:", todayStats);
            }
        });

        chrome.storage.local.get(['NYTAverages'], (result) => {
            const averageElement = document.getElementById("NYTAverage");

            const data = result.NYTAverages;

            if (data && data[today]) {
                averageElement.textContent = data[today].average;
                console.log("Panel updated with stored NYT Average:", data[today].average);
            } else {
                chrome.runtime.sendMessage({ type: "getNYTAverage" }, (response) => {
                    

                    if (response.average && response.average !== "-1") {
                        averageElement.textContent = response.average;
                    } else {
                        averageElement.textContent = "Not available yet...";
                    }

                    console.log("Panel updated with NYT Average:", response.average);
                });
            }
        });
    }
});
