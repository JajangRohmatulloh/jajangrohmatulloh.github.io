window.addEventListener('load', function () {
  this.document.getElementById('loading').setAttribute('style', 'display: none');
  this.document.getElementById('container').removeAttribute('style');
  setTimeout(function () {
    document.getElementsByClassName('name-card')[0].classList.add('name-card--transition');
    document.getElementsByClassName('navigation')[0].classList.add('navigation--transition');
  }, 1000)
  setTimeout(function () {
    document.getElementById('tagabout').setAttribute('id', 'about');
    document.getElementById('about').removeAttribute('style');
    document.getElementById('tagresume').setAttribute('id', 'resume');
    document.getElementById('resume').removeAttribute('style');
    document.getElementById('tagportfolio').setAttribute('id', 'portfolio');
    document.getElementById('portfolio').removeAttribute('style');
    document.getElementById('tagcontact').setAttribute('id', 'contact');
    document.getElementById('contact').removeAttribute('style');
  }, 3180)
})

document.addEventListener("scroll", function () {
  window.scrollY > 655 ?
    document.getElementsByClassName("navbar")[0].classList.add("navbar--transition") :
    document.getElementsByClassName("navbar")[0].classList.remove("navbar--transition")
});

document.getElementsByClassName('download')[0].addEventListener('click', function () {
  print();
});

var mymap = L.map('mapid').setView([-6.444875, 106.817220], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiamFqYW5ncm9obWF0dWxsb2giLCJhIjoiY2txYTRyeWR6MGRlZzMwbW82ejc3azFkNCJ9.YWC2otODQTmhOHBSHfVy_A'
}).addTo(mymap);

var marker = L.marker([-6.444875, 106.817220]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

var popup = L.popup()
  .setLatLng([-6.444875, 106.817220])
  .setContent("I am a standalone popup.")
  .openOn(mymap);

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
}

mymap.on('click', onMapClick);