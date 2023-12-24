const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const sec = document.querySelector('.sec');

function analogclock() {
    const time = new Date();
    const s = time.getSeconds() / 60;
    const m = (s + time.getMinutes()) / 60;
    const h = (m + time.getHours()) / 12;
    hour.style.setProperty('--rotation', h * 360);
    minutes.style.setProperty('--rotation', m * 360);
    sec.style.setProperty('--rotation', s * 360);

}
analogclock();
setInterval(analogclock, 505);