const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const progress = document.querySelector(".progress-bar");

var interval;

function getCurrentTime() {
    const d = new Date();
    let h = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    h = h < 10 ? "0" + h : h;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    hour.textContent = h + "\xa0:";
    minute.textContent = min + "\xa0:";
    second.textContent = sec;

    progress.style.width = +sec / 60 * 100 + "%";
}

interval = setInterval(getCurrentTime, 1000);