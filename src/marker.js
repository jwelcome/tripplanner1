const mapboxgl = require("mapbox-gl");

const buildMarker = (cordArr, type) => {

  const newmarker = document.createElement("div")
  newmarker.style.width = "32px";
  newmarker.style.height = "39px";

  let url1;

  switch(type) {
    case "activity":
      url1 = "url(http://i.imgur.com/WbMOfMl.png)"
      break;
    case "hotel":
      url1 = "url(http://i.imgur.com/D9574Cu.png)"
      break;
    default:
      url1 = "url(http://i.imgur.com/cqR6pUI.png)"
  }

  newmarker.style.backgroundImage = url1;
  console.log("newmarker:" + newmarker)

  return new mapboxgl.Marker(newmarker).setLngLat(cordArr);
}

module.exports = buildMarker;
