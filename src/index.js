console.log("hello world");

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoiandlbGNvbWUiLCJhIjoiY2prazRlcTl0MW1rdTNxcDltNWVhdXM5dSJ9.GWwbTB6a7TO5piHdDHKvow';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // chicago coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
