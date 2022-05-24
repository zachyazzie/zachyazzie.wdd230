
let temp = parseInt(document.querySelector("#temperature").textContent);

let windSpeed = parseInt(document.querySelector("#wind-speed").textContent);
console.log(`windSpeed = ${windSpeed}`);
let calculateWindChill = (temp, windSpeed) => {
    return Math.round(35.74 + (0.6215*temp) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * (temp*(windSpeed ** 0.16))));
};

if (temp <= 50 && windSpeed > 3) {
    document.querySelector("#wind-chill").innerText = calculateWindChill(temp, windSpeed);
}
else {
    document.querySelector("#wind-chill-f").innerText = 'None';
}
