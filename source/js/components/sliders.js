import Swiper from 'swiper';
import vars from "../_vars";
import { Pagination, Autoplay, Navigation, Scrollbar } from "swiper/modules";

const { usefullSlider, feedbacksSlider } = vars;

if(usefullSlider) {
  const swiper = new Swiper(usefullSlider, {
    modules: [Autoplay, Pagination, Navigation],
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".slide-next",
      prevEl: ".slide-prev",
    },
    pagination: {
      clickable: true,
      el: ".usefull-section__pagination",
    },
    breakpoints:{
      320:{
        slidesPerView: 1.1,
        spaceBetween: 16,
      },
      768:{
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1241:{
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  });  
}

if(feedbacksSlider) {
  const swiper = new Swiper(feedbacksSlider, {
    modules: [Autoplay, Pagination, Navigation, Scrollbar],
    observer: true,
    observeParents: true,
    slidesPerView: 'auto',
    spaceBetween: 55,
    pagination: {
      clickable: true,
      el: ".feedbacks-section__pagination",
    },
    breakpoints:{
      320:{
        slidesPerView: 1.15,
        spaceBetween: 24,
      },
      768:{
        slidesPerView: 1.55,
        spaceBetween: 34,
      },
      1024:{
        slidesPerView: 2.15,
        spaceBetween: 44,
      },
      1241:{
        slidesPerView: 2.25,
        spaceBetween: 55,
      },
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      clickable: true,
    }
  });  
}





