const clock = document.querySelector("h2#clock");
const DY = document.querySelector("p.DY");

function getClock(){
    const date = new Date();
    const DYdateY = String(date.getFullYear()).padStart(4,"0");
    const DYdateM = date.getMonth();
    const DYdateD1 = date.getDate();
    const week = new Array("일","월","화","수","목","금","토");
    const DYdateD2 = week[date.getDay()];
    const Hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${Hours}:${Minutes}:${Seconds}`;
    DY.innerText = `${DYdateY}년 ${DYdateM}월 ${DYdateD1}일 ${DYdateD2}요일`;
}

getClock();
setInterval(getClock, 1000);




