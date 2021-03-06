//λ μ¨
const API_KEY = "e5fd13ec48be01be4320c4b668376465"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
     city.innerText = `π${data.name}`;
     weather.innerText = `π${data.weather[0].main}  π‘${data.main.temp}`;
    });
}


function onGeoError(){
    alert("λΉμ μ μ°Ύμ μ μμ΅λλ€. λ μ¨ μ λ³΄κ° μμ΅λλ€.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);