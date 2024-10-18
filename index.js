const apiKey = "&appid=727e0ab48aaefb4ca2fdb3d0ffd616d4";

async function getData() {
  const apiURL =
    "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=Virginia";
  try {
    const response = await fetch(`${apiURL}  +${apiKey}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

$(".btn").click(function () {
  getData();
});
