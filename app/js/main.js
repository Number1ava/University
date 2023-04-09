window.addEventListener('DOMContentLoaded', () => {
  $(window).on('load', function () {
    $('.loader__wrap').delay(600).fadeOut('slow');
    $("html,body").addClass("hidden");
    setTimeout(function () {
      $("html,body").removeClass("hidden");
    }, 800);
  });

  // menu__burger
  const menu = document.querySelector('.nav'),
    burger = document.querySelector('.burger'),
    mobileBack = document.querySelector('.mobile-back'),
    overlay = document.querySelector('.overlay');

  const lockScroll = () => {
    document.body.classList.add('lock');
  }

  const unlockScroll = () => {
    document.body.classList.remove('lock');
  }

  const initialMenu = () => {
    document.querySelector('.nav__list--dropdown').classList.remove('transformation');
    document.querySelector('.nav').querySelector('.nav__list').classList.remove('transformation');
    scrollTop();
  }

  const scrollTop = () => {
    menu.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  burger.addEventListener('click', () => {
    menu.classList.add('open');
    overlay.classList.add('open');
    lockScroll();
    initialMenu();
  });

  overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
  });

  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link--drop')) {
      e.preventDefault();
      e.target.closest('.nav__list').classList.add('transformation');
      e.target.closest('.nav__item').querySelector('.nav__list--dropdown').classList.add('transformation');
      scrollTop();
    }

    if (e.target.classList.contains('mobile-back__link')) {
      e.preventDefault();
      e.target.closest('.nav__list--dropdown').classList.remove('transformation');
      e.target.closest('.nav').querySelector('.nav__list').classList.remove('transformation');
      scrollTop();
    }

    if (e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--drop')) {
      e.preventDefault();
      menu.classList.remove('open');
      overlay.classList.remove('open');
      unlockScroll();
    }
  });

  // slider
  $(function () {
    $('.sliders').slick({
      infinite: true,
      arrows: false,
      speed: 600,
      autoplaySpeed: 3000,
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
            centerPadding: '150px',
          }
        },
        {
          breakpoint: 620,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '130px',
          }
        },
        {
          breakpoint: 580,
          settings: {
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
          breakpoint: 520,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '100px',
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
