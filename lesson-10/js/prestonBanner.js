const d = new Date()
var dayNumber = d.getDay();
let dayOfWeek;
if (dayNumber === 0) {
    dayOfWeek = 'Sunday';
    document.getElementById('friday-banner').style.display='none'
}
else if (dayNumber === 1) {
    dayOfWeek = 'Monday';
    document.getElementById('friday-banner').style.display='none'
}
else if (dayNumber === 2) {
    dayOfWeek = 'Tuesday';
    document.getElementById('friday-banner').style.display='none'
}
else if (dayNumber === 3) {
    dayOfWeek = 'Wednesday';
    document.getElementById('friday-banner').style.display='none'
}
else if (dayNumber === 4) {
    dayOfWeek = 'Thursday';
    document.getElementById('friday-banner').style.display='none'
}
else if (dayNumber === 5) {
    dayOfWeek = 'Friday';
}
else {
    dayOfWeek = 'Saturday';
    document.getElementById('friday-banner').style.display='none'
}