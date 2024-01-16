$(document).ready(function () {
 
    const slider = $("#banner");
    slider.owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      autoplay: false,
      // autoplayTimeout: 5000,
      // autoplaySpeed: 2000,
      items: 1,
    });
  
    $("#prev-cskh").click(function () {
      slider.trigger("prev.owl.carousel");
    });
  
    $("#next-cskh").click(function () {
      slider.trigger("next.owl.carousel");
    });

  
 
});

