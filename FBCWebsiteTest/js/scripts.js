function initMap(){

   // Map Option
   var options = {
      mapId: "424ceb157ba63232",
      center: {lat: 26.272216021535108 , lng: -81.76569221157719 },
      zoom: 18
   }

   // New Map
   map = new google.maps.Map(document.getElementById("map"), options);

   // Marker
   
   const marker = new google.maps.Marker({
      position: {lat: 26.272216021535108 , lng: -81.76569221157719 },
      title: 'Family Birth Center',
      label: 'Family Birth Center',
      map: map
   });

   
}
