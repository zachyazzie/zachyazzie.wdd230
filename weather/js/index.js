const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

// Date in footer
const d = new Date()
var dayNumber = d.getDay()
let dayOfWeek
if (dayNumber === 0) {
    dayOfWeek = 'Sunday';
}
else if (dayNumber === 1) {
    dayOfWeek = 'Monday';
}
else if (dayNumber === 2) {
    dayOfWeek = 'Tuesday';
}
else if (dayNumber === 3) {
    dayOfWeek = 'Wednesday';
}
else if (dayNumber === 4) {
    dayOfWeek = 'Thursday';
}
else if (dayNumber === 5) {
    dayOfWeek = 'Friday';
}
else {
    dayOfWeek = 'Saturday';
}

let dayInMonth = d.getDate();
let year = d.getFullYear();
let month = d.toLocaleString('default', { month: 'long' });
let fullDate = `${dayOfWeek}, ${dayInMonth} ${month} ${year}`;

document.getElementById("date-in-footer").innerHTML = fullDate;
