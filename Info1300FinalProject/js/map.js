function show_map() {
  var position = {lat: 42.439608 , lng: -76.496993};
  var google_map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: position
  });
  var place_marker = new google.maps.Marker({
    position: position,
    map: google_map
  });
  var parking_position = {lat: 42.438943 , lng: -76.49660};
  var parking_marker = new google.maps.Marker({
    position: parking_position,
    map: google_map
  });

}

//Learned from https://developers.google.com/maps/documentation/javascript/adding-a-google-map