import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import vars from '../_vars';

import { addCustomClass, toggleClassInArray, toggleCustomClass, removeCustomClass, removeClassInArray } from '../functions/customFunctions';
const { burger, mobileMenu, bodyEl } = vars;

const menuLinks = mobileMenu.querySelectorAll('.main-nav__link');

menuLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        hideMenuHandler(mobileMenu, burger, bodyEl);
    });
});

const mobileMenuHandler = function (mobileMenu, burger, bodyEl) {
    burger.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            toggleCustomClass(mobileMenu);
            toggleClassInArray(burger);
            toggleCustomClass(bodyEl);
            btn.classList.contains('active') ? disableScroll() : enableScroll();
        });
    });
};

const hideMenuHandler = function (mobileMenu, burger, bodyEl) {
    removeCustomClass(mobileMenu);
    removeClassInArray(burger);
    removeCustomClass(bodyEl);
    enableScroll();
};

if (mobileMenu) {
    mobileMenuHandler(mobileMenu, burger, bodyEl);
    document.addEventListener('click', function (event) {
        const e = mobileMenu;
        if (burger[0].classList.contains('active')) {
            if (!mobileMenu.contains(event.target) && !burger[0].contains(event.target)) {
                hideMenuHandler(mobileMenu, burger, bodyEl);
            }
        }
    });
}

const filterMenu = document.querySelector('.filter-menu');
const filterMenuBtn = document.querySelector('[data-filter-btn]');

if (filterMenu && filterMenuBtn) {
    const closeBtn = filterMenu.querySelector('.filter-menu__close');
    const clearBtn = filterMenu.querySelector('.filter-menu__clear');

    filterMenuBtn.addEventListener('click', function (e) {
        e.preventDefault();
        addCustomClass(filterMenu, 'active');
        disableScroll();
    });

    closeBtn && closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        removeCustomClass(filterMenu, 'active');
        enableScroll();
    });

    clearBtn && clearBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const checkboxes = filterMenu.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => (checkbox.checked = false));
        checkboxes[0].checked = true; // Устанавливаем первый чекбокс в checked
        updateClearBtnVisibility(); // Обновляем видимость кнопки
    });

    const checkboxes = filterMenu.querySelectorAll('input[type="checkbox"]');
    checkboxes[0].checked = true; // Устанавливаем первый чекбокс в checked по умолчанию

    checkboxes.forEach(function (checkbox, index) {
        checkbox.addEventListener('click', function (e) {
            if (index === 0 && checkbox.checked) {
                checkboxes.forEach((cb, idx) => {
                    if (idx !== 0) cb.checked = false; // Убираем checked со всех остальных
                });
            } else if (checkbox.checked) {
                checkboxes[0].checked = false; // Убираем checked с первого input, если выбран любой другой
            }
            updateClearBtnVisibility(); // Обновляем видимость кнопки
        });
    });

    function updateClearBtnVisibility() {
        const allExceptFirstChecked = Array.from(checkboxes).slice(1).every((cb) => cb.checked);
        if (allExceptFirstChecked || checkboxes[0].checked) {
            clearBtn.style.display = 'none'; // Прячем кнопку
        } else {
            clearBtn.style.display = 'block'; // Показываем кнопку
        }
    }

    updateClearBtnVisibility(); // Обновляем видимость кнопки при загрузке
}
