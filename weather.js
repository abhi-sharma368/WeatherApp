// https://api.openweathermap.org/data/2.5/weather?q=fatuha&appid=34a0c63cfdebd51b1c1e89e906601124&units=metric
// const URL="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";



const apiKey = "34a0c63cfdebd51b1c1e89e906601124";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".inputt input");
const btn = document.querySelector(".btn");
const icon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const err = document.querySelector(".err");


let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");


async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();


    if (data.cod == "200") {

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".strength").innerHTML = data.main.humidity + "%";
        document.querySelector(".speed").innerHTML = data.wind.speed + " Km/h";
        document.querySelector(".climate").innerHTML = data.weather[0].main;

        if (data.weather[0].main == "Clouds") {
            icon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            icon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            icon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            icon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Snow") {
            icon.src = "images/snow.png";
        }
        else {
            icon.src = "images/mist.png";
        }

        err.classList.add("hide");
        weather.classList.remove("hide");

    }
    else {

        err.classList.remove("hide");
        weather.classList.add("hide");
    }

}

btn.addEventListener("click", () => {
    checkWeather(search.value.toLowerCase());
});

setInterval(() => {
    let time = new Date();
    hr.innerHTML = time.getHours();
    min.innerHTML = time.getMinutes();
    sec.innerHTML = time.getSeconds();
    day.innerHTML = time.getDate();
    year.innerHTML = time.getFullYear();
    // month.innerHTML = time.getMonth();



    let monthName=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    month.innerHTML=monthName[time.getMonth()];
}, 1000);
