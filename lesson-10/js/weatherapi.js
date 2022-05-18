fetch("http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=75486451e28df760e1f3e0981126cb56")
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
  });