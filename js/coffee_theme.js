<script type="text/javascript">
/* Place google map in train_map div */
     var map = new google.maps.Map(document.getElementById('coffee_map'), {
      zoom: 13,
      center: new google.maps.LatLng(-31.959235, 115.849584),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
	
	/* 	Declare variables for placing markers on list from cafedata.js */
	var infowindow = new google.maps.InfoWindow();
	var marker;
	var i;
	
	
/*Loop through cafes variable in cafedata.js file and add marker on page for each station */
/* 	Add custom icon in each position */
	for (i = 0; i < cafes.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(cafes[i][1], cafes[i][2]),
        map: map,
		icon: cafes[i][3]
      });
/* Enable pop up info window for each marker */	  
	 google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(cafes[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
	}  
	  
/* Change colour of all elements on map */	
var styles = [
{
    featureType: "all",
    elementType: "all",
    stylers: [
		{ hue: "#e3b272" },
		{ saturation: 50 },
		{ lightness: 0 }
	]
},
/* After this change, some elements are the wrong colour, change individually*/	
{
	featureType: "water",
	elementType: "all",
	stylers: [
		{ hue: "#fcfbea" },
		{ saturation: 10 },
		{ lightness: 60 }]
	},
{	
	/* e.g. loftus st.*/
	featureType: "road.arterial",
	elementType: "all",
	stylers: [
		{ hue: "#b17f4a" },
		{ saturation: 50 },
		{ lightness: -40 }]
	},
	
{	
	/* e.g. stroke on arterial roads - too orange otherwise.*/
	featureType: "road.arterial",
	elementType: "geometry.stroke",
	stylers: [
		{ hue: "#b17f4a" },
		{ saturation: 50 },
		{ lightness: -40 }]
	},

{	
	/* small roads like oxford close.*/
	featureType: "road.local",
	elementType: "geometry",
	stylers: [
		{ hue: "#fdf9d8" },
		{ saturation: 20 },
		{ lightness: 0 }]
	},
{	
	/* e.g. freeway */
	featureType: "road.highway",
	elementType: "all",
	stylers: [
		{ hue: "#bc7962" },
		{ saturation: 40 },
		{ lightness: -60 }]
	},
{	
	/*all route numbers on roads */
	featureType: "road",
	elementType: "labels.icon",
	stylers: [
		{ visibility: "off" }]
	},
{	
	/* train stations (they are a bit orange otherwise */
	featureType: "transit.station",
	elementType: "all",
	stylers: [
		{ hue: "#e3b272" },
		{ saturation: 20 },
		{ lightness: -30 }]
	}
];
map.setOptions({styles: styles});
</script> 