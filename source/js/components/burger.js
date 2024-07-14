import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import vars from '../_vars';

import {toggleCustomClass, removeCustomClass, addCustomClass } from '../functions/customFunctions';
const { burger, mobileMenu, bodyEl} = vars;

const menuLinks = mobileMenu.querySelectorAll('.main-nav__link');

const filterMenu = document.querySelector('.filter-menu');
const filterMenuBtn = document.querySelector('[data-filter-btn]');

menuLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    hideMenuHandler(mobileMenu, burger, bodyEl);
  })
})

const mobileMenuHandler = function(mobileMenu, burger) {
    burger.addEventListener('click', function(e){
      e.preventDefault();
      toggleCustomClass(mobileMenu);
      toggleCustomClass(burger);
      toggleCustomClass(bodyEl);
    })
}

const hideMenuHandler = function(mobileMenu, burger) {
    removeCustomClass(mobileMenu);
    removeCustomClass(burger);
    removeCustomClass(bodyEl);
}

if (mobileMenu) {
  mobileMenuHandler(mobileMenu,burger, bodyEl);
  document.addEventListener("click", function (event) {
    const e = mobileMenu;
    if (!mobileMenu.contains(event.target) && !burger.contains(event.target)) {
      hideMenuHandler(mobileMenu, burger, bodyEl);
    }
  });
}


if(filterMenu && filterMenuBtn){
  const closeBtn = filterMenu.querySelector('.filter-menu__close');
  const clearBtn = filterMenu.querySelector('.filter-menu__clear');

  filterMenuBtn.addEventListener('click', function(e){
    e.preventDefault();
    addCustomClass(filterMenu, 'active');
    disableScroll();
  })

  closeBtn && closeBtn.addEventListener('click', function(e){
    e.preventDefault();
    removeCustomClass(filterMenu, 'active');
    enableScroll();
  })


  clearBtn && clearBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const checkboxes = filterMenu.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
  });
}