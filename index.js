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

//Range Slider 

  var slider = document.getElementById("myRange");
var output = document.getElementById("slideDemo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}