document.addEventListener('DOMContentLoaded', () => {
  $(window).on('load', function () {
    $('.loader__wrap').delay(800).fadeOut('slow');
    $("html,body").addClass("hidden");
    setTimeout(function () {
      $("html,body").removeClass("hidden");
    }, 900);
  });



  // slider
  $(function () {
    $('.sliders').slick({
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1145,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 881,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 641,
          settings: {
            dots: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '120px',
          }
        },
        {
          breakpoint: 552,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });
  // burger menu
  function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger__menu-button");
    let overlay = menu.find('.burger__menu-overlay');
    button.on("click", (e) => {
      e.preventDefault();
      toggleMenu();
    });
    overlay.on('click', () => toggleMenu());
    function toggleMenu() {
      menu.toggleClass('burger__menu-active');
      if (menu.hasClass('burger__menu-active')) {
        $('body').css('overflow', 'hidden');
      } else {
        $('body').css('overflow', 'visible');
      }
    }
  }
  burgerMenu(".burger__menu");
});
