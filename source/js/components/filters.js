document.addEventListener('DOMContentLoaded', function () {
  const categories = document.querySelector('.categories');

  if (categories) {
      const categoriesTrigger = categories.querySelector('.categories__head');
      const categoriesList = categories.querySelector('.categories__body');
      const tagsHead = document.querySelector('.categories__head-current');

      function categoriesActiveClass(toggleElement, targetElement, activeClass = 'active') {
          document.addEventListener("click", function (event) {
              if (!targetElement.contains(event.target) && event.target !== toggleElement) {
                  targetElement.classList.remove(activeClass);
              } else if (event.target === toggleElement) {
                  targetElement.classList.toggle(activeClass);
              }
          });
      }

      categoriesActiveClass(categoriesTrigger, categoriesList);

      const categoryCheckbox = categories.querySelectorAll('.categories__checkbox');
      const inputData = [];

      // Выбор первого input по умолчанию
      categoryCheckbox[0].checked = true;
      inputData.push({
          value: categoryCheckbox[0].value,
          name: categoryCheckbox[0].getAttribute('data-name')
      });

      // Обновление плейсхолдера
      selectPlaceholder(inputData, tagsHead);

      categoryCheckbox.forEach(function (item) {
          item.addEventListener('click', function (e) {
              checkedHandler(this);
          });
      });

      function checkedHandler(input) {
          const inputValue = input.value;
          const inputName = input.getAttribute('data-name');
          const inputIndex = inputData.findIndex(obj => obj.value === inputValue);

          // Если первый input выбран
          if (input === categoryCheckbox[0] && input.checked) {
              // Убираем checked со всех остальных
              categoryCheckbox.forEach(function (item, index) {
                  if (index !== 0) {
                      item.checked = false;
                      const itemIndex = inputData.findIndex(obj => obj.value === item.value);
                      if (itemIndex !== -1) {
                          inputData.splice(itemIndex, 1);
                      }
                  }
              });
          } else if (input !== categoryCheckbox[0] && input.checked) {
              // Убираем checked с первого input, если выбран любой другой
              categoryCheckbox[0].checked = false;
              const firstInputIndex = inputData.findIndex(obj => obj.value === categoryCheckbox[0].value);
              if (firstInputIndex !== -1) {
                  inputData.splice(firstInputIndex, 1);
              }
          }

          if (inputIndex !== -1) {
              inputData.splice(inputIndex, 1);
          } else {
              inputData.push({
                  value: inputValue,
                  name: inputName
              });
          }
          selectPlaceholder(inputData, tagsHead);
      }

      function selectPlaceholder(arr, currentBox) {
          const dataContent = currentBox.getAttribute('data-content');
          const tagCounter = arr.length;
          const currentBoxText = currentBox.getAttribute('data-placeholder');

          if (categoryCheckbox[0].checked) {
              currentBox.innerText = categoryCheckbox[0].value;
          } else if (Array.from(categoryCheckbox).slice(1).every(checkbox => checkbox.checked)) {
              currentBox.innerText = "All selected";
          } else {
              tagCounter > 0 ?
                  currentBox.innerText = `${tagCounter} ${dataContent}` :
                  currentBox.innerHTML = currentBoxText;
          }
      }
  }
});
