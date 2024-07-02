import vars from "../_vars";
import { throttle } from "../functions/throttle";

const {
 social,socialParent,socialParentMob,faqAcc,faqAccParent,faqAccParentMob
} = vars;


const replaceElementsFunction = (
  element,
  parentDesktop,
  parentMobile,
  breakpoint,
  firstRule,
  lastRule
) => {
  let containerWidth = document.documentElement.clientWidth;

  if (element) {
    if (containerWidth <= `${breakpoint}`) {
      parentMobile.insertAdjacentElement(`${firstRule}`, element);
    }
    if (containerWidth > `${breakpoint}`) {
      parentDesktop.insertAdjacentElement(`${lastRule}`, element);
    }
  }
};

if(social){
  window.addEventListener("resize", () => {
    throttle(
      replaceElementsFunction(
        social,
        socialParent,
        socialParentMob,
        768,
        "beforeend",
        "beforeend"
      )
    );
  });

  window.addEventListener("DOMContentLoaded", () => {
    throttle(
      replaceElementsFunction(
        social,
        socialParent,
        socialParentMob,
        768,
        "beforeend",
        "beforeend"
      )
    );
  });
}

if(faqAcc && faqAccParent){
  window.addEventListener("resize", () => {
    throttle(
      replaceElementsFunction(
        faqAcc,
        faqAccParent,
        faqAccParentMob,
        768,
        "afterbegin",
        "beforeend"
      )
    );
  });

  window.addEventListener("DOMContentLoaded", () => {
    throttle(
      replaceElementsFunction(
        faqAcc,
        faqAccParent,
        faqAccParentMob,
        768,
        "afterbegin",
        "beforeend"
      )
    );
  });
}

