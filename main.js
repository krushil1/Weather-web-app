const f = document.getElementById('form');
const q = document.getElementById('query');
console.log(q);
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKEY = '';
function submitted(event) {
  event.preventDefault();
  const url = apiURL + q.value + '&units=imperial&APPID=' + apiKEY;
  
  let getWeather = fetch(url);

  getWeather
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      let weatherNum = Math.round(`${resData.main.temp}`);
      let desc = `${resData.weather[0].main}`;

      switch (desc) {
        case "Clouds":
            document.getElementById("conditionIcon").className = "conditionIcon fas fa-cloud";
            break;

        case "Thunderstorm":
            document.getElementById("conditionIcon").className = "conditionIcon fas fa-bolt";
            break;

        case "Drizzle":
            document.getElementById("conditionIcon").className = "conditionIcon fas fa-cloud-rain";
          break;

        case "Rain":
            document.getElementById("conditionIcon").className = "conditionIcon fas fa-cloud-showers-heavy";
            break;

        case "Snow":
            document.getElementById("conditionIcon").className = "conditionIcon far fa-snowflake";
            break;

        case "Clear":
            document.getElementById("conditionIcon").className = "conditionIcon fas fa-sun";
            break;

        default:
            document.getElementById("conditionIcon").className = "conditionIcon fas fa-sun";
      }

      let weather = `${weatherNum} °F`;
      document.getElementById("currentTemp").innerHTML = weather;

      let realfeelNum = Math.round(`${resData.main.feels_like}`);
      let realfeel = `${realfeelNum} °F`;
      document.getElementById("feels").innerHTML = realfeel;

      let windspeedNum = Math.round(`${resData.wind.speed}`);
      let windspeed = `${windspeedNum} mph`;
      document.getElementById("windSpeed").innerHTML = windspeed;

      let humidityNum = Math.round(`${resData.main.humidity}`);
      let humidity = `${humidityNum}%`;
      document.getElementById("humidity").innerHTML = humidity;

      let highTemp = Math.round(`${resData.main.temp_max}`);
      let high = `${highTemp} °F`;
      document.getElementById('high').innerHTML = high;

      let lowTemp = Math.round(`${resData.main.temp_min}`);
      let low = `${lowTemp} °F`;
      document.getElementById('low').innerHTML = low;

      // let condition = `${resData.weather[0].description}`;
      // document.getElementById("conditionIcon").innerHTML = condition;

      let country = `${resData.sys.country}`;
      let city = `${resData.name}`;
      let location = `${city}, ${country}`;
      document.getElementById('location').innerHTML = location;

    })
    .catch((error) => {
       // document.getElementById("weather").innerHTML = "Error";
      // document.getElementById("conditionIcon").className = "fas fa-times";
      // console.log("error");
      console.log(error);
    });
}


f.addEventListener('submit', submitted); //Triggers the function 

var time = new Date();
document.getElementById('time').innerHTML = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });



var d = new Date();
var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
day = days[d.getDay()];
var  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
var monthName=months[d.getMonth()]; // "July" (or current month)
var dateNum = d.getDate();
var year = d.getFullYear();

let date = `${day}, ${monthName} ${dateNum}, ${year}`;
console.log(date);
document.getElementById('date').innerHTML = date;
