var map;

function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osm = new L.TileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', 
	{minZoom: 1, maxZoom: 19, attribution:'&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']}).addTo( map );		

	// start the map in Northbridge
	map.setView(new L.LatLng(-31.949630, 115.859172),19);
	map.addLayer(osm);
}
function popUpInfo (feature, layer) {
	layer.bindPopup("<h2>Hi, I'm an info window in Northbridge.</h2><p>" + feature.properties.name_and_business + "</p>");
};

initmap();


L.geoJson(sample_set, {
	onEachFeature: popUpInfo
}).addTo(map);