const navToggle= document.querySelector(".mobile-nav-toggle");
const primaryNav= document.querySelector('.primary-navigation');
navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible')
     ? navToggle.setAttribute('area-expand', false)
     :  navToggle.setAttribute('area-expand', true);
    primaryNav.toggleAttribute("data-visible");
})