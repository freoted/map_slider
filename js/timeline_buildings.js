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
var year1908 = L.geoJson(geo_1908, {
	pointToLayer: customIcons,
	onEachFeature: popUpInfo
}).addTo(map); 

var year1912 = L.geoJson(geo_1912, {
	pointToLayer: customIcons,
	onEachFeature: popUpInfo
}); 

var year1915 = L.geoJson(geo_1915, {
	pointToLayer: customIcons,
	onEachFeature: popUpInfo
}); 

var year1920 = L.geoJson(geo_1920, {
	pointToLayer: customIcons,
	onEachFeature: popUpInfo
}); 

var year1930 = L.geoJson(geo_1930, {
	pointToLayer: customIcons,
	onEachFeature: popUpInfo
}); 

var year1949 = L.geoJson(geo_1949, {
	pointToLayer: customIcons,
	onEachFeature: popUpInfo
}); 

var year1982 = L.geoJson(geo_1982, {
	pointToLayer: customIcons,
	onEachFeature: popUpInfo
}); 

var year2005 = L.geoJson(geo_2005, {
	pointToLayer: customIcons,
	onEachFeature: popUpInfo
}); 

var year2015 = L.geoJson(geo_2015, {
	pointToLayer: customIcons,
	onEachFeature: popUpInfo
}); 

var geo_testYear = L.geoJson(testYear, {
	pointToLayer: customIcons,
	onEachFeature: popUpInfo
}); 


// make array of years to pull from by index
var years = [0, 1908, 1912, 1915, 1920, 1930, 1949, 1982, 2005, 2015, 2020];

function outputUpdate(vol) {
  document.querySelector('#volume').textContent = vol;
}

function removeAllLayers() {
	map.removeLayer(year1908);
	map.removeLayer(year1912);
	map.removeLayer(year1915);
	map.removeLayer(year1920);
	map.removeLayer(year1930);
	map.removeLayer(year1949);
	map.removeLayer(year1982);
	map.removeLayer(year2005);
	map.removeLayer(year2015);
	map.removeLayer(geo_testYear);
}
	
document.getElementById('fader').addEventListener('change', function() {

    date = this.value;
		//year = 1908
   		if (date == 1) {
			removeAllLayers();
			map.addLayer(year1908);
		}
		
		//year = 1912
		else if (date == 2) {
			removeAllLayers();
			map.addLayer(year1912);
		}
		
		//year = 1915
		else if (date == 3) {
			removeAllLayers();
			map.addLayer(year1915);
		}
		
		//year = 1920
		else if (date == 4) {
			removeAllLayers();
			map.addLayer(year1920);
		}
		
		//year = 1930
		else if (date == 5) {
			removeAllLayers();
			map.addLayer(year1930);
		}
		
		//year = 1949
		else if (date == 6) {
			removeAllLayers();
			map.addLayer(year1949);
		}
		
		//year = 1982
		else if (date == 7) {
			removeAllLayers();
			map.addLayer(year1982);
		}		
		
		//year = 2005
		else if (date == 8) {
			removeAllLayers();
			map.addLayer(year2005);
		}	
		
		//year = 2015
		else if (date == 9) {
			removeAllLayers();
			map.addLayer(year2015);
		}

		//year = 2020 (test year)
		else if (date == 10) {
			removeAllLayers();
			map.addLayer(geo_testYear);
		}
		
		
	});