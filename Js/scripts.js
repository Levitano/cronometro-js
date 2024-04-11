const minute = document.getElementById("minutes")
const second = document.querySelector("#seconds")
const milisecond = document.querySelector("#miliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer)




function startTimer() {
    interval = setInterval(() => {

        if (!isPaused) {
            miliseconds += 10

            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            if (second == 5) {
                changeThemeBgColor("black")
            }

            minute.textContent = formatTime(minutes)
            second.textContent = formatTime(seconds)
            milisecond.textContent = formaMilisecond(miliseconds)
        }

    }, 10)


    startBtn.style.display = "none"
    pauseBtn.style.display = "block"

}


function pauseTimer() {
    isPaused = true

    pauseBtn.style.display = "none"
    resumeBtn.style.display = "block"

}

function resumeTimer() {
    isPaused = false
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function resetTimer() {

    clearInterval(interval)
    minutes = 0
    seconds = 0
    miliseconds = 0

    minute.innerHTML = "00"
    second.innerHTML = "00"
    milisecond.innerHTML = "000"

    startBtn.style.display = "block"
    resumeBtn.style.display = "none"
    pauseBtn.style.display = "none"

}



function formatTime(time) {
    return time < 10 ? `0${time}` : time

}

function formaMilisecond(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}