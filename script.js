
let circularProgress = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");
let progressNums = document.querySelector(".num-values h2");

let progressStartValue = 0;
let progressEndValue = 80; 
let speed = 20; 

let progress = setInterval(() => {
    progressStartValue++;

    circularProgress.style.background = `conic-gradient(
        rgb(175, 5, 175) 0deg ${progressStartValue}deg,
        rgb(252, 35, 6) ${progressStartValue + 40}deg,
        rgb(229, 229, 12) ${progressStartValue * 3}deg,
        rgb(69, 230, 69) ${progressStartValue * 3.3}deg,
        rgb(239, 235, 235) ${progressStartValue}deg 360deg
    )`;

    progressValue.style.rotate = `${progressStartValue * 2.8}deg`;
    progressNums.innerHTML = progressStartValue * 2;

    if (progressStartValue === progressEndValue) {
        clearInterval(progress);
    }
}, speed);
