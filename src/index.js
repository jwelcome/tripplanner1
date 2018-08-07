const mapboxgl = require('mapbox-gl');
const newMarker = require('./marker.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiandlbGNvbWUiLCJhIjoiY2prazRlcTl0MW1rdTNxcDltNWVhdXM5dSJ9.GWwbTB6a7TO5piHdDHKvow';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

const marker = document.createElement("div")
marker.style.width = "32px";
marker.style.height = "39px";
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(marker).setLngLat([-87.641, 41.895]).addTo(map);

newMarker([-87.5, 41.9], "hotel");
