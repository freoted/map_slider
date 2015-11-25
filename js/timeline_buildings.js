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
//function for pop up markers
function popUpInfo (feature, layer) {
	layer.bindPopup(feature.properties.name_and_business);
};
//function to load custom markers
function customIcons(feature, latlng) {
var myIcon = L.icon({
    iconUrl: "img/" + feature.properties.icon + '.png'
	});
return L.marker(latlng, {icon: myIcon});
};
	
//call function to load map   
initmap();

//load geoJson layer - call functions to load current markers and get info to pop ups
L.geoJson(geo_1908, {
	pointToLayer: customIcons,
	onEachFeature: popUpInfo
}).addTo(map);

