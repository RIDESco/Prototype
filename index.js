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

//Clickable event in HTML/JS https://stackoverflow.com/questions/1947263/using-an-html-button-to-call-a-javascript-function

//- Using a function pointer:
document.getElementById("clickMe").onclick = doFunction;

//- Using an anonymous function:
document.getElementById("clickMe").onclick = function () { alert('hello!'); };

// Clickable event in HTML/JS: Attaching function to the event handler https://stackoverflow.com/questions/1947263/using-an-html-button-to-call-a-javascript-function

var el = document.getElementById("clickMe");
if (el.addEventListener)
    el.addEventListener("click", doFunction, false);
else if (el.attachEvent)
    el.attachEvent('onclick', doFunction);

//QR Code Scanner https://github.com/chriselles/instascan

let opts = {
  // Whether to scan continuously for QR codes. If false, use scanner.scan() to manually scan.
  // If true, the scanner emits the "scan" event when a QR code is scanned. Default true.
  continuous: true,
  
  // The HTML element to use for the camera's video preview. Must be a <video> element.
  // When the camera is active, this element will have the "active" CSS class, otherwise,
  // it will have the "inactive" class. By default, an invisible element will be created to
  // host the video.
  video: document.getElementById('preview'),
  
  // Whether to horizontally mirror the video preview. This is helpful when trying to
  // scan a QR code with a user-facing camera. Default true.
  mirror: true,
  
  // Whether to include the scanned image data as part of the scan result. See the "scan" event
  // for image format details. Default false.
  captureImage: false,
  
  // Only applies to continuous mode. Whether to actively scan when the tab is not active.
  // When false, this reduces CPU usage when the tab is not active. Default true.
  backgroundScan: true,
  
  // Only applies to continuous mode. The period, in milliseconds, before the same QR code
  // will be recognized in succession. Default 5000 (5 seconds).
  refractoryPeriod: 5000,
  
  // Only applies to continuous mode. The period, in rendered frames, between scans. A lower scan period
  // increases CPU usage but makes scan response faster. Default 1 (i.e. analyze every frame).
  scanPeriod: 1
};