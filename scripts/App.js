function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }




  function initMap() {
    // The location of your address
    var address = {lat: 37.7749, lng: -122.4194}; // Replace with your address
  
    // The map, centered at your address
    var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: address});
  
    // The marker, positioned at your address
    var marker = new google.maps.Marker({position: address, map: map});
  }
  