const API_KEY = "664f090ce68a71ed878329a26b8e2e47";
const weather = document.querySelector(".js-weather");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = data.name;
            const temperature = data.main.temp;
            weather.innerText = `${temperature}°C  🌎${city}`;

            console.log(`${temperature}°C  🌎${city}`);
            console.dir(weather);
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);