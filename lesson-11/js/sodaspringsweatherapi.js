const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=75486451e28df760e1f3e0981126cb56";

// SODA SPRINGS: 5607916
// FISH HAVEN: 5585010

const output = (weatherList) => {
    //create parent article to hold all elements
    let article = document.createElement("article");

    //current condition
    let currentCondition = document.createElement("p");
    currentCondition.innerText = weatherList.weather[0].description.charAt(0).toUpperCase() + weatherList.weather[0].description.slice(1);

    //max temp
    let maxTempP = document.createElement("p");
    let maxTempSpan = document.createElement("span");
    maxTempP.innertText = "°F";
    maxTempSpan.innerText = weatherList.main.temp_max;
    maxTempSpan.setAttribute('id', "temperature");
    maxTempP.appendChild(maxTempSpan);

    //wind chill
    let windChill = document.createElement("p");
    let windChillSpan = document.createElement("span");
    let windChillFSpan = document.createElement("span");
    windChillSpan.setAttribute('id', "wind-chill");
    windChillFSpan.setAttribute('id', "wind-chill-f");
    
    ///////////////////////////////////////////////
    // WIND CHILL FORMULA
    let temp = parseInt(weatherList.main.temp_max);
    let windSpeed = parseInt(weatherList.wind.speed);
    let calculateWindChill = (temp, windSpeed) => {
        return Math.round(35.74 + (0.6215*temp) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * (temp*(windSpeed ** 0.16))));
    };
    if (temp <= 50 && windSpeed > 3) {
        windChillSpan.innerText = calculateWindChill(temp, windSpeed);
        windChillFSpan.innerText = '°F';
    }
    else {
        windChillSpan.innerText = 'N/A'
        windChillFSpan.innerText = '';
    }
    ///////////////////////////////////////////////
    windChill.appendChild(windChillSpan);
    windChill.appendChild(windChillFSpan);


    //humidity
    let humidity = document.createElement("p");
    humidity.innerText = `${weatherList.main.humidity}%`;

    //wind speed
    let windSpeedP = document.createElement("p");
    let windSpeedSpan = document.createElement("span");
    windSpeedSpan.setAttribute('id', "wind-speed");
    windSpeedSpan.innerText = `${weatherList.wind.speed} mph`;
    windSpeedP.appendChild(windSpeedSpan);
    
    //append to preston-weather-info-right
    article.appendChild(currentCondition);
    article.appendChild(maxTempP);
    article.appendChild(windChill);
    article.appendChild(humidity);
    article.appendChild(windSpeedP);

    document.querySelector('.preston-weather-info-right').appendChild(article);
}

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherArray) => {
    output(weatherArray)
  });
