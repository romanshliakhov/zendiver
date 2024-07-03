import Swiper from 'swiper';
import vars from "../_vars";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const { usefullSlider } = vars;

if(usefullSlider) {
  const swiper = new Swiper(usefullSlider, {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
      nextEl: ".slide-next",
      prevEl: ".slide-prev",
    },
  });  
}




