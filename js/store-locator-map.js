(function ($, drupalSettings) {
  // Create map and set center and zoom.
  var map = L.map('map', {
    scrollWheelZoom: false,
    center: [drupalSettings.storeLocatorMap.center.lat, drupalSettings.storeLocatorMap.center.lon],
    zoom: drupalSettings.storeLocatorMap.zoom
  });
  // Add basemap tiles and attribution.
  var baseLayer = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  });
  // Add basemap to map.
  map.addLayer(baseLayer);

  var icon = new L.Icon({
    iconUrl: '/themes/custom/noble/images/map-marker.png',
    iconSize:    [32, 32],
    iconAnchor:  [16, 32],
    popupAnchor: [1, -25]
  });


  // Add points.
  function addDataToMap(data, map) {
    var markers = L.markerClusterGroup();
    var dataLayer = L.geoJson(data, {
      pointToLayer: function(feature, latlng) {
        return L.marker(latlng, {
          icon: icon
        });
      },
      onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.mapPopup);
      }
    });
    markers.addLayer(dataLayer);
    map.addLayer(markers);
    if (drupalSettings.storeLocatorMap.fitBounds) {
      map.fitBounds(dataLayer.getBounds());
    }
  }

  function getParameterByName(name, url) {
    if (!url) { url = window.location.href; }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) { return ''; }
    if (!results[2]) { return ''; }
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  var feed = '/stores-feed';
  var variation = getParameterByName('variation');
  if (variation.length > 0) {
    feed += '?variation=' + variation;
  }
  $.getJSON(feed, function(data) {
    addDataToMap(data, map);
  });

})(jQuery, drupalSettings);
