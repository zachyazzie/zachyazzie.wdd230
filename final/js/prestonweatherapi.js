const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&appid=75486451e28df760e1f3e0981126cb56";

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

    
    //append to preston-weather-info-right
    article.appendChild(currentCondition);
    article.appendChild(maxTempP);

    document.querySelector('.preston-weather-info-right').appendChild(article);
}

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherArray) => {
    output(weatherArray)
  });
