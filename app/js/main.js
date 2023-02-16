document.addEventListener('DOMContentLoaded', () => {
  const menuBtns = document.querySelectorAll('.menu__list-btn');
  menuBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.menu__list-item').querySelector('.dropdown');
      drop.classList.toggle('dropdown--active');
    });
  });

  // Jquery - counter
  let Animation = function () {
    let hFrom = $(window).scrollTop();
    let hTo = $(window).scrollTop() + ($(window).height() / 1);
    if ($(".counter").offset().top > hFrom && $(".counter").offset().top < hTo) {
      $('.counter__main span').delay(400).spincrement({
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
});
