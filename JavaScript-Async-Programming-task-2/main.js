let timeLeft = 10;
let countdown;
const timerElement = document.querySelector(".timer"); // 
const restartButton = document.querySelector(".restart-btn"); 

function startTimer() {
    timeLeft = 10;
    timerElement.textContent = timeLeft;
    timerElement.classList.remove("red");

    countdown = setInterval(() => {
        timeLeft--;

        if (timeLeft <= 3) { 
            timerElement.classList.add("red");
        } else {
            timerElement.classList.remove("red");
        }

        if (timeLeft >= 0) {
            timerElement.textContent = timeLeft;
        }

        if (timeLeft === 0) {
            clearInterval(countdown);
            timerElement.textContent = "Time's up!";
        }
    }, 1000);
}

function restartTimer() {
    clearInterval(countdown);
    startTimer();
}

restartButton.addEventListener("click", restartTimer); 

startTimer(); 
