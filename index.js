// Top Nav Bar

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var x = document.getElementById("demo");

//GEO Location

function getLocation() {
 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(showPosition);
 } else {
   x.innerHTML = "Geolocation is not supported by this browser.";
 }
}
 
function showPosition(position) {
 x.innerHTML = "Latitude: " + position.coords.latitude +
 "<br>Longitude: " + position.coords.longitude;
}

//Range Slider #1

var slider = document.getElementById("myLength");
var output = document.getElementById("lengthDemo");
output.innerHTML = slider.value;

slider.oninput = function() {
output.innerHTML = this.value;
}

//Range Slider #2

var slider = document.getElementById("myDistance");
var output = document.getElementById("distanceDemo");
output.innerHTML = slider.value;

slider.oninput = function() {
output.innerHTML = this.value;
}

//Range Slider #3

var slider = document.getElementById("myRiders");
var output = document.getElementById("ridersDemo");
output.innerHTML = slider.value;

slider.oninput = function() {
output.innerHTML = this.value;
}
