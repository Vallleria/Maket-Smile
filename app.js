/*
Общая задача:
 Отобразить слайдер

 1. Базовая верстка слайдера
   - разобраться как сделать переключатели
 2. Связать слайды с радио кнопками
 3. Обработать клик по радио кнопке, чтобы переключить слайд
 4. Скрыть слайды (все) и откроем выбранный слайд (добавим класс open)

email  phone   && (and)   || (or)
 T       T       T         T  
 F       T       F         T
 T       F       F         T
 F       F       F         F

 isLoggedIn  !isLoggedIn   !!isLoggedIn
   T             F             T
   F             T             F

   &&, || -> возвращают само значение без преобразования к логоич (bolean) типу данных
*/

//let quotesSliderCtrls = document.querySelector('.quotes-slider-controls');
// let quotesSlider = document.querySelector('.quotes-slider');

// quotesSliderCtrls.addEventListener('click', onQuotesSliderCtrls);


// function onQuotesSliderCtrls(event) {
//     let targetElement = event.target;
//     if (targetElement.type && targetElement.type == "radio") {
//         // проверка что есть св-во type у элемента И что оно равно radio
//         hideOpenSide();
//         openSlide(targetElement.dataset.id); // openSlide('quotes-slide-1')
//     }
// }

// function hideOpenSide() {
//     let slide = quotesSlider.querySelector('.open');
//     slide.classList.remove('open');
// }

// function openSlide(slideId) { // slideId = 'quotes-slide-1'
//     let slide = quotesSlider.querySelector('#' + slideId);
//     slide.classList.add('open');
// }




$(document).ready(function(){
    $('.quotes-slider').slick({
        dots: true,
        horizontal: true,
        
      });
  });