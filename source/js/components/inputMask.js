import  Inputmask from '../vendor/inputMask.js';

// input Mask
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+38 (999) 999-99-99');
im.mask(selector);