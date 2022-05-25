
const forecastOutput = (weatherArray) => {
    weatherArray.forEach(day => {
        if (day.dt_txt.split(" ")[1] == '18:00:00') {

            //create parent article to hold all elements
            let div = document.createElement("div");
            div.setAttribute('class', 'flex-col')

            //create date
            let date = document.createElement("span");
            date.setAttribute('class', 'col-head');
            date.innerText = `${day.dt_txt.split(" ")[0].split("-")[1]}/${day.dt_txt.split(" ")[0].split("-")[2]}`;

            //create icon
            const imagesrc = 'https://openweathermap.org/img/wn/' + day.weather[0].icon + '.png';
            let icon = document.createElement("img");
            icon.setAttribute('src', imagesrc);
            icon.setAttribute('alt', `${day.weather[0].description}`);

            //create temperature
            let temp = document.createElement("span");
            temp.setAttribute('class', 'data')
            temp.innerText = `${day.main.temp}°F`;

            div.appendChild(date);
            div.appendChild(icon);
            div.appendChild(temp);

            document.querySelector('.flex-forecast').appendChild(div);  
        }
    })
};
fetch("https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=75486451e28df760e1f3e0981126cb56")
  .then((response) => response.json())
  .then((weatherArray) => {
    forecastOutput(weatherArray.list);
  });

  // HOW TO PULL OUT SPECIFIC TIME OF DAY FORMAT: 21:00:00
  // weatherArray.list[0].dt_txt.split(" ")[1]

    //HOW TO GET DATE FORMAT AS: ['2022', '05', '18']
  // weatherArray.list[0].dt_txt.split(" ")[0].split("-")