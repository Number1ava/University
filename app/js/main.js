document.addEventListener('DOMContentLoaded', () => {

  // Jquery - counter
  let Animation = function () {
    let hFrom = $(window).scrollTop();
    let hTo = $(window).scrollTop() + ($(window).height() / 1);
    if ($(".counter").offset().top > hFrom && $(".counter").offset().top < hTo) {
      $('.counter__main span').delay(300).spincrement({
        thousandSeparator: "",
        duration: 3000
      });
    }
  };
  $(window).scroll(function () {
    Animation();
  });
  Animation();

  // slider
  $(function () {
    $('.sliders').slick({
      infinite: true,
      arrows: false,
      speed: 400,
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
          breakpoint: 631,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
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
