import {
    addClassInArray,
    removeCustomClass,
    fadeOut,
    fadeIn,
    addCustomClass,
  } from "../functions/customFunctions";
  
  const sectionParents = document.querySelectorAll("[data-quiz]");
  const btnClass = "form-quiz__btn--disable";
  
  sectionParents.forEach(function (section) {
    const quizSlides = section.querySelectorAll(".form-quiz__list:not(.skip-item)");
    const quizSlidesLength = quizSlides.length;
    const btnNext = section.querySelector("[data-next]");
    const btnPrev = section.querySelector("[data-prev]");
    const sendBtn = section.querySelector('.form-quiz__btn.hide');
    const resultSendBtn = section.querySelector('.form-quiz__results button');
    console.log(resultSendBtn);
  
    btnNext.addEventListener("click", function (e) {
      e.preventDefault();
  
      if (!quizSlides[quizSlidesLength - 1].classList.contains("active")) {
        showNextSlide(btnNext);
        removeCustomClass(btnPrev, btnClass);
      }
  
      if (quizSlides[quizSlidesLength - 1].classList.contains("active")) {
        fadeOut(btnNext, 0);
        fadeIn(sendBtn, 0);
      } else {
          fadeIn(btnNext, 0);
          fadeOut(sendBtn, 0);
      }
    });
  
    btnPrev.addEventListener("click", function (e) {
      e.preventDefault();
  
      if (!quizSlides[0].classList.contains("active")) {
        showPrevSlide(btnPrev, btnNext);
      }
      if (quizSlides[0].classList.contains("active")) {
        addCustomClass(btnPrev, btnClass);
      }
  
      if (quizSlides[quizSlidesLength - 1].classList.contains("active")) {
            fadeOut(btnNext, 0);
          fadeIn(sendBtn, 0);
        } else {
          fadeIn(btnNext, 0);
          fadeOut(sendBtn, 0);
        }
    });

    sendBtn.addEventListener('click', function (e) {
      e.preventDefault();

      fadeOut(section.querySelector('.form-quiz__heading'), 0);
      fadeOut(section.querySelector('.form-quiz__controls'), 0);
      showNextSlide(this);
    })
  
    document.addEventListener("DOMContentLoaded", function () {
      addClassInArray([btnNext, btnPrev], btnClass);
    });
  
    document.body.addEventListener('click', function(e){
      if(e.target.type === 'radio' || e.target.type === 'checkbox'){
        checkState(btnNext);
      }
    })


    resultSendBtn.addEventListener('click', function(e) {
      e.preventDefault();

      fadeOut(section.querySelector('.result'));
      fadeIn(section.querySelector('.send'));
    })

    // var wpcf7Elm = document.querySelector( '.wpcf7' );
  
    // wpcf7Elm.addEventListener( 'wpcf7submit', function( event ) {
    //   fadeOut(section.querySelector('.result'));
    //   fadeIn(section.querySelector('.send'));
    // }, false );
  });
  
  function checkCheckboxes(selector) {
    const checkboxes = selector.querySelectorAll("input");
  
    for (let checkbox of checkboxes) {
      if (checkbox.checked) {
        return true;
      }
    }
    return false;
  }
  
  function checkState(btn) {
    const activeSlide = document.querySelector(".form-quiz__list.active");
    const checkboxes = activeSlide.querySelectorAll("input");
    
    checkboxes.forEach(function (checkbox) {
      if (checkCheckboxes(activeSlide)) {
        removeCustomClass(btn, btnClass);
      }
      if (!checkCheckboxes(activeSlide)) {
        addCustomClass(btn, btnClass);
      }
    });
  }
  
  function showNextSlide(btn) {
    const activeSlide = document.querySelector(".form-quiz__list.active");
    const nextSlide = activeSlide.nextElementSibling;
  
    if (checkCheckboxes(activeSlide)) {
      fadeOut(activeSlide, 0);
      removeCustomClass(activeSlide);
      fadeIn(nextSlide, 600, "flex");
      addCustomClass(nextSlide);
    }
  
    if (!checkCheckboxes(nextSlide)) {
      addCustomClass(btn, btnClass);
    }
  }
  
  function showPrevSlide(btn, nextBtn, number) {
    const activeSlide = document.querySelector(".form-quiz__list.active");
    const prevSlide = activeSlide.previousElementSibling;
    fadeOut(activeSlide, 0);
    removeCustomClass(activeSlide);
    fadeIn(prevSlide, 600, "flex");
    addCustomClass(prevSlide);
    removeCustomClass(btn, btnClass);
  
    if (checkCheckboxes(prevSlide)) {
      removeCustomClass(nextBtn, btnClass);
    }
  
    const position =
      document.querySelector(".quiz-section__box").offsetTop -
      document.querySelector("header").offsetHeight;
  
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }