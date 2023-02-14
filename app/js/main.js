document.addEventListener('DOMContentLoaded', () => {
  const menuBtns = document.querySelectorAll('.menu__list-btn');
  menuBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.menu__list-item').querySelector('.dropdown');
      drop.classList.toggle('dropdown--active');
    });
  });
});
