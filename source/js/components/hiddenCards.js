import {
    fadeIn,
    fadeOut,
    toggleCustomClass
} from "../functions/customFunctions";

const parents = document.querySelectorAll('[data-hidden-parent]');

if (parents) {
    parents.forEach(function(parent) {
        const items = parent.querySelectorAll(":scope > li");
        const showBtns = parent.parentNode.querySelectorAll("[data-more]");
        const baseItemsToShow = parseInt(parent.getAttribute('data-hidden-parent')) || 2;
        let flag = false;
        let shownCount = 0;
        let resizeTimeout;

        const setupItems = (animate = true) => {
            let itemsToShow;
            if (baseItemsToShow === 3) {
               
                if (window.innerWidth <= 1024) {
                    itemsToShow = 2;
                } else if (window.innerWidth <= 767) {
                    itemsToShow = 1;
                } else {
                    itemsToShow = baseItemsToShow;
                }
            } else {
                itemsToShow = window.innerWidth <= 767 ? (baseItemsToShow === 3 ? 2 : 1) : baseItemsToShow;
            }

            let currentShownCount = 0;

            items.forEach((item, index) => {
                if (index < shownCount || index < itemsToShow) {
                    if (animate) {
                        fadeIn(item, 0, "block");
                    } else {
                        
                        item.style.display = "block";
                        item.style.opacity = "1";
                    }
                    currentShownCount++;
                } else {
                    fadeOut(item, 0);
                }
            });

            shownCount = currentShownCount;

            if (shownCount >= items.length) {
                showBtns.forEach(function(btn) { btn.style.display = 'none'; });
            } else {
                showBtns.forEach(function(btn) { btn.style.display = 'flex'; });
            }
        };

        setupItems();

        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                setupItems(false);
            }, 100);
        });

        showBtns.forEach(function(showBtn) {
            showBtn.addEventListener("click", function(e) {
                e.preventDefault();
                if (!flag) {
                    let itemsToShowOnClick;
                    if (baseItemsToShow === 3) {
                        if (window.innerWidth <= 1024) {
                            itemsToShowOnClick = 2;
                        } else {
                            itemsToShowOnClick = 3;
                        }
                    } else {
                        itemsToShowOnClick = window.innerWidth <= 767 ? 2 : baseItemsToShow;
                    }

                    let newlyShownCount = 0;
                    items.forEach((item, index) => {
                        if (index >= shownCount && newlyShownCount < itemsToShowOnClick) {
                            fadeIn(item, 200, "block");
                            newlyShownCount++;
                        }
                    });

                    shownCount += newlyShownCount;
                    if (shownCount >= items.length) {
                        showBtns.forEach(function(btn) { btn.style.display = 'none'; });
                    }
                    flag = true;
                    setTimeout(function() {
                        flag = false;
                    }, 1000);
                }
            });
        });
    });
}
