(function ($) {
  // Create map and set center and zoom.
  var map = L.map('map', { // The `L` stands for the Leaflet library.
    scrollWheelZoom: false,
    center: [35.9908385, -78.9005222],
    zoom: 12
  });
  // Add basemap tiles and attribution.
  var baseLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  });
  // Add basemap to map.
  map.addLayer(baseLayer);

  // Add points.
  function addDataToMap(data, map) {
    var dataLayer = L.geoJson(data, {
      onEachFeature: function(feature, layer) {
        var popupText = '<strong>' + feature.properties.name + '</strong><br />' + feature.properties.description;
        var properties = {'phone_number': 'P', 'web_address': 'W', 'google_maps': 'M'};
        for (var property in properties) {
          if (feature.properties[property].length > 0) {
            popupText += '<br />' + properties[property] + ': ' + feature.properties[property];
          }
        }
        layer.bindPopup(popupText);
      }
    });
    dataLayer.addTo(map);
    map.fitBounds(dataLayer.getBounds());
  }

  $.getJSON('/stores-feed', function(data) {
    addDataToMap(data, map);
  });

})(jQuery);
