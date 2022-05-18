let d = new Date();
let year = d.getFullYear();
document.getElementById("current-year").textContent = year;

let text = document.lastModified;
document.getElementById("footer-date").innerHTML = text;