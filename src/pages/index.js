import './index.scss'
// Кнопка меню
const menuBtn = document.querySelector('.menu-btn');
const menuBtnSpan = document.querySelector('.menu-btn__span');
const navMenu = document.querySelector('.nav')
// Переменная для списка меню
const menuList = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-btn_active')
    menuBtnSpan.classList.toggle('menu-btn__span_click')
    menuList.classList.toggle('menu_active')
    navMenu.classList.toggle('nav_active')
})
