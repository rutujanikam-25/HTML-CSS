$(document).ready(function () {
    $('.slider').slick({
       slidesToShow: 6,
       slidesToScroll: 1,
       infinite: true,
       prevArrow: $('#nextArrow'),
       nextArrow: $('#prevArrow'),
       responsive: [
          {
             breakpoint: 1024,
             settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
             },
          },
          {
             breakpoint: 768,
             settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
             },
          },
          {
             breakpoint: 480,
             settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
             },
          },
       ],
    });
 });