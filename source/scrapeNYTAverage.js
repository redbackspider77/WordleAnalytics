console.log("Scraping NYT Average...");

let buttonsId = setInterval(() => {
    const buttons = Array.from(document.querySelectorAll('.action-item'));

    if (buttons.length > 2) {
        buttons.forEach(button => {
            if (button.innerText.includes("analysis")) {
                button.click();
            }
        });

        let valuesId = setInterval(() => {
            const NYTElements = Array.from(document.querySelectorAll('.nyt-value'));
            if (NYTElements.length > 2) {
                console.log("NYT Elements found:", NYTElements);
                NYTElements.forEach((element) => {
                    let numId = setInterval(() => {
                        if (element.innerText.includes(".")) {
                            const num = element.querySelector('.num');

                            console.log("NYT Number found:", num);
                            const NYTAverage = num.textContent.trim();
                            console.log("NYT Average:", NYTAverage);

                            chrome.runtime.sendMessage({ type: "NYTAverageResult", average: NYTAverage || "-1" });
                        
                            clearInterval(numId);
                        }
                    }, 100);
                });

                clearInterval(valuesId);
            }
        }, 100);

        clearInterval(buttonsId);
    };
}, 100);
