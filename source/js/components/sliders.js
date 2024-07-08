import Swiper from 'swiper';
import vars from "../_vars";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const { usefullSlider, feedbacksSlider } = vars;

if(usefullSlider) {
  const swiper = new Swiper(usefullSlider, {
    modules: [Autoplay, Pagination, Navigation],
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
      nextEl: ".slide-next",
      prevEl: ".slide-prev",
    },
  });  
}

if(feedbacksSlider) {
  const swiper = new Swiper(feedbacksSlider, {
    modules: [Autoplay, Pagination, Navigation],
    observer: true,
    observeParents: true,
    slidesPerView: 2,
    spaceBetween: 55,
    // loop: true,
    pagination: {
      el: ".feedbacks-section__pagination",
      type: "progressbar",
    },
  });  
}





