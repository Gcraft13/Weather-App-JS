const apiKey = "727e0ab48aaefb4ca2fdb3d0ffd616d4";
const city = $("input");

async function getData(city) {
  const apiURL =
    "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

  try {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    $(".city-name").text(data.name);
    $(".temperature").text(Math.round(data.main.temp) + "°F");
    $(".percent").text(data.main.humidity + "%");
    $(".speed").text(Math.round(data.wind.speed) + " mph");

    let weather = data.weather[0].main;

    switch (weather) {
      case "Clouds":
        $("#weather-icon").attr("src", "./images/clouds.png");
        break;
      case "Clear":
        $("#weather-icon").attr("src", "./images/clear.png");
        break;
      case "Drizzle":
        $("#weather-icon").attr("src", "./images/drizzle.png");
        break;
      case "Mist":
        $("#weather-icon").attr("src", "./images/mist.png");
        break;
      case "Rain":
        $("#weather-icon").attr("src", "./images/rain.png");
        break;
      case "Snow":
        $("#weather-icon").attr("src", "./images/snow.png");
        break;

      // code block
    }
  } catch (error) {
    console.error(error.message);
    alert("Please try another city");
  }
}

$(".btn").click(function () {
  getData(city.val());
});
