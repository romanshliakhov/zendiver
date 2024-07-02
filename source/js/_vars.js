export default {
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  accParrent: [...document.querySelectorAll('[data-accordion-init]')],
  header: document.querySelector('header'),
  footer: document.querySelector('footer'),
  overlay: document.querySelector('[data-overlay]'),
  mobileMenu: document.querySelector('.header-menu'),
  burger: document.querySelector('.burger'),
  blogSlider: document.querySelector('.blog-slider'),
  rewiewsSlider: document.querySelector('.rewiews-slider'),
  brandsSlider: document.querySelector('.brands-slider'),
  worksSlider: document.querySelector('.works-slider'),
  cookies: document.querySelector('.cookies-inner'),
  faqAcc: document.querySelector('.faq-acc'),
  faqAccParent: document.querySelector('.faq-section__box'),
  faqAccParentMob: document.querySelector('.faq-section__inner'),
  forms: document.querySelectorAll('.main-form'),
  social: document.querySelector('.footer__social'),
  socialParent: document.querySelector('.footer__wrapp'),
  asideMenu: document.querySelector('.aside-menu'),
  socialParentMob: document.querySelector('.footer__box').firstElementChild,
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],

  activeMode: 'active-mode',
  innerButtonModal: [...document.querySelectorAll('[data-btn-inner]')],
}





