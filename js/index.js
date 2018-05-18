$(document).ready(function () {
    $(".carousel").slick({ 
        autoplay: false,
        arrows: false,
        dots: true,
        autoplaySpeed: 3500,
    });
});

function initMap() {
  const pos = { lat: -37.817211, lng: 144.955924 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: pos
  });
  const marker = new google.maps.Marker({
    position: pos,
    map: map
  });
}

$(document).ready(function() {
  $('#menu-icon').click(function() {
    $("#navbar-list").toggle(400, function() {
      $(this).toggleClass('toggle-menu').css('display', '');
    });
  })
})