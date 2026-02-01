const navToggleIcon = document.querySelector('.burger-menu')
const menu = document.querySelector('.menu')
const cover = document.querySelector('.cover')
const resumeListItems = document.querySelectorAll('.resume-list__item')
const portfolioListItems = document.querySelectorAll('.portfolio-list__item');

navToggleIcon.addEventListener('click',function (){
    this.classList.toggle('nav__toggle-icon--open')
    menu.classList.toggle('menu--open')
    cover.classList.toggle('cover--show')
})

function navigationTabsInit(listItems, listItemActiveClass, contentItemShowClass) {
    listItems.forEach(listItem => {
        listItem.addEventListener('click', function () {
            removeActiveClass(listItemActiveClass);
            removeActiveClass(contentItemShowClass);
            this.classList.add(listItemActiveClass);
            let contentId = this.getAttribute('data-content-id');
            document.querySelector(contentId).classList.add(contentItemShowClass);
        })
    })
}
function removeActiveClass(className) {
    document.querySelector(`.${className}`).classList.remove(className);
}
navigationTabsInit(resumeListItems, 'resume-list__item--active', 'resume-content--show');
navigationTabsInit(portfolioListItems, 'portfolio-list__item--active', 'portfolio-content--show');
