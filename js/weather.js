//날씨
const API_KEY = "e5fd13ec48be01be4320c4b668376465"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
     city.innerText = `🌍${data.name}`;
     weather.innerText = `🌝${data.weather[0].main}  🌡${data.main.temp}`;
    });
}


function onGeoError(){
    alert("당신을 찾을 수 없습니다. 날씨 정보가 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);