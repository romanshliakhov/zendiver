import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import vars from '../_vars';

import {toggleCustomClass, removeCustomClass, addCustomClass, removeClassInArray} from '../functions/customFunctions';
const {overlay, burger, mobileMenu, cookies, asideMenu} = vars;

const menuLinks = mobileMenu.querySelectorAll('.main-nav__link');

menuLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    hideMenuHandler(mobileMenu, burger);
  })
})

const mobileMenuHandler = function(mobileMenu, burger) {
    burger.addEventListener('click', function(e){
      e.preventDefault();
      toggleCustomClass(mobileMenu);
      toggleCustomClass(burger);
    })
}

const hideMenuHandler = function(mobileMenu, burger) {
    removeCustomClass(mobileMenu);
    removeCustomClass(burger);
}

if (mobileMenu) {
  mobileMenuHandler(mobileMenu,burger);
  document.addEventListener("click", function (event) {
    const e = mobileMenu;
    if (!mobileMenu.contains(event.target) && !burger.contains(event.target)) {
      hideMenuHandler(mobileMenu, burger);
    }
  });
}

if(asideMenu){
  const btn = asideMenu.querySelector('.aside-menu__btn');
  const wrapp = asideMenu.querySelector('.aside-menu__list');

  function asideHandler(asideMenu, btn,wrapp){
    btn.addEventListener('click', function(e){
      e.preventDefault();
      toggleCustomClass(asideMenu, 'active');
      toggleCustomClass(btn, 'active');
      toggleCustomClass(wrapp, 'active');
  
      btn.classList.contains('active') ? document.addEventListener('click', outsideClickHandler) : '';
    })
  }
  
  function closeAsideHandler(asideMenu,btn, wrapp){
    removeCustomClass(asideMenu, 'active')
    removeCustomClass(btn, 'active');
    removeCustomClass(wrapp, 'active');
  }
  
  function outsideClickHandler(e) {
    if (!asideMenu.contains(e.target)) {
      closeAsideHandler(btn, wrapp);
    }
  }

  asideHandler(asideMenu, btn, wrapp);
}

if(cookies){
  setTimeout(function(){
    addCustomClass(cookies, 'active');
  }, 5000)
}


