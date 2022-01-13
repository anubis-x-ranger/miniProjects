// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
async function getWeather() {
  try {
    let city = document.getElementById("city").value;
    let API = "5cbbab2169fc41036d61226941f60fe6";

    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
    );

    let data = await response.json();
    showWeather(data);
  } catch (err) {
    console.log("err:", err);
  }
}

let data_div = document.getElementById("showData");

function showWeather(weather) {
  let temp = document.createElement("p");
  temp.innerText = weather.main.temp;

  let pressure = document.createElement("p");
  pressure.innerText = weather.main.pressure;

  data_div.append(temp, pressure);
}
