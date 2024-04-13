const inputbox = document.querySelector(".intname");
const seabtn = document.querySelector(".btn1");
const weimg = document.querySelector(".weather-img");
const tmp = document.querySelector(".temp");
const desc = document.querySelector(".des");
const humidity = document.querySelector(".humidity-per");
const windspeed = document.querySelector(".wind-speed");

async function getweather(city) {
  const api_key = "80c3245257a316b9e0619a4dc29db70c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((Response) =>
    Response.json()
  );

  console.log(weather_data);
  tmp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  humidity.innerHTML = `${weather_data.main.humidity}`;
  windspeed.innerHTML = `${weather_data.wind.speed}`;
     desc.innerHTML = `${weather_data.weather[0].main}`;

      switch(weather_data.weather[0].main){
        case 'Clear' :
          weimg.src = "clear.png";
        break;
        case 'Clouds' :
        weimg.src = "cloud.png";

        break;
        case 'Mist' :
        weimg.src = "mist.png";

        break;
        case 'Rain' :
        weimg.src = "rain.png";

        break;
        case 'Snow' :
        weimg.src = "snow.png";
        break;
      }

}

seabtn.addEventListener("click", () => {
  getweather(inputbox.value);
});

