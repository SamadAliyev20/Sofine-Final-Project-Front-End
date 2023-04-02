$(document).ready(function(){
    $('.hero-slider').slick({
      dots: true,
      infinite: false,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe: true
          }
        }
      ]
    });
  });