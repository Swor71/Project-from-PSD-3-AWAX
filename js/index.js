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

    var mySwiper = new Swiper(".client-swiper-container", {
      effect: "flip",
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    $('#menu-icon').click(function () {
      $("#navbar-list").toggle(400, function () {
        $(this).toggleClass('toggle-menu').css('display', '');
      });
    })

    $(".carousel").slick({
      autoplay: true,
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

    carousel.on('itemBeforeActive', function (e, item) {
      $(item).css("box-shadow", "0 0 30px #b88b58");
    });

    carousel.on('itemActive', function (e, item) {
      $(item).css("box-shadow", "0 0 30px #b88b58");
    });

    carousel.on('itemBeforeDeactivate', function (e, item) {
      $(item).css("box-shadow", "0 0 30px #b88b58");
    })

    carousel.on('itemAfterDeactivate', function (e, item) {
      $(item).css('box-shadow', '');
    })

    $('.controls .previous').click(function (e) {
      carousel.cycleActive('previous');
      e.preventDefault();
    });

    $('.controls .next').click(function (e) {
      carousel.cycleActive('next');
      e.preventDefault();
    });

  });

})();