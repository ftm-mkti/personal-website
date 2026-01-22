const navToggleIcon = document.querySelector('.burger-menu')
// const menuLine = document.querySelector('.burger-menu__line')
const menu = document.querySelector('.menu')
const cover = document.querySelector('.cover')


navToggleIcon.addEventListener('click', function () {
    this.classList.toggle('nav__toggle-icon--open')
    menu.classList.toggle('menu--open')
    cover.classList.toggle('cover--show')
})