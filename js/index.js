
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

$(document).ready(function () {
  
  var heroSwiper = new Swiper(".hero-swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000
    },
    speed: 800,
    slidesPerView: 1,
    grabCursor: true,
    loop: true
  });
  
  var teamSwiper = new Swiper(".team-swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    initialSlide: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
  
  var clientSwiper = new Swiper(".client-swiper-container", {
    effect: "flip",
    grabCursor: true,
    loop: true,
    speed: 400,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
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

});
