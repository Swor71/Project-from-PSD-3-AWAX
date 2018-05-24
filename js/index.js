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

(function () {

  $(document).ready(function () {

    $('#menu-icon').click(function () {
      $("#navbar-list").toggle(400, function () {
        $(this).toggleClass('toggle-menu').css('display', '');
      });
    })

    $(".carousel").slick({
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplaySpeed: 3500
    });


    let options = {
      ovalWidth: 450,
      ovalHeight: 25,
      offsetX: 75,
      offsetY: 320,
      angle: 0,
      activeItem: 0,
      duration: 350,
      className: 'profile-item'
    }

    const carousel = $('.profile-carousel').CircularCarousel(options);

    /* Fires when an item is about to start it's activate animation */
    carousel.on('itemBeforeActive', function (e, item) {
      $(item).css("box-shadow", "0 0 30px #b88b58");
    });

    /* Fires after an item finishes it's activate animation */
    carousel.on('itemActive', function (e, item) {
      $(item).css("box-shadow", "0 0 30px #b88b58");
    });

    /* Fires when an active item starts it's de-activate animation */
    carousel.on('itemBeforeDeactivate', function (e, item) {
      $(item).css("box-shadow", "0 0 30px #b88b58");
    })

    /* Fires after an active item has finished it's de-activate animation */
    carousel.on('itemAfterDeactivate', function (e, item) {
      $(item).css('box-shadow', '');
    })


    /* Previous button */
    $('.controls .previous').click(function (e) {
      carousel.cycleActive('previous');
      e.preventDefault();
    });

    /* Next button */
    $('.controls .next').click(function (e) {
      carousel.cycleActive('next');
      e.preventDefault();
    });

  });

})();