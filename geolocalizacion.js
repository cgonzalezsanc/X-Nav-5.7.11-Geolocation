
function showMap(position) {
	// Muestro los datos
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	$("body").append(" Lat " + latitude + " Long " + longitude + "<br>");
	// Muestro el mapa
	var map_url = 'http://maps.google.com/maps/api/staticmap?center=' + 
				  latitude + ',' + longitude +
				  '&zoom=12&size=800x600&markers=' + latitude +
				  ',' + longitude;
	$("body").append('<img src="' + map_url + '">');
}

function get_location() {
	if (Modernizr.geolocation) {
		navigator.geolocation.getCurrentPosition(showMap);
	} else {
		$("body").append("No se pudieron obtener las coordenadas");
	}
}

$(document).ready(function() {
	get_location();
});

