var map;

// declare function for slider
// this slider 


// function to initialise the map	
function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osm = new L.TileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', 
	{minZoom: 1, maxZoom: 19, attribution:'&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']}).addTo( map );		

	// start the map in Northbridge
	map.setView(new L.LatLng(-31.949630, 115.859172),19);
	
	// add tiles
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
var year2015 = L.geoJson(geo_2015, {
	pointToLayer: customIcons,
	onEachFeature: popUpInfo
}).addTo(map); 


var year1908 = L.geoJson(geo_1908, {
	pointToLayer: customIcons,
	onEachFeature: popUpInfo
}); 

//JQuery time!
// turn the layer on and off with your jWuery
// if you look at index.html, you will see a DIV that is an on/off button
/* 
	if(map.hasLayer(geo_2015)){
		map.removeLayer(geo_2015);
	} else {
		map.addLayer(geo_2015);
	};
});
 */
 
function outputUpdate(vol) {
	document.querySelector('#volume').value = vol;
	}
	
	document.getElementById('fader').addEventListener('change', function() {

    date = this.value;
   		if (date == 5) {
			map.removeLayer(year2015);
		}
		
		else if (date == 3) {
			map.addLayer(year1908);
		}
		
	});