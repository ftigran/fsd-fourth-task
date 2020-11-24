import './index.scss'

import {Controller} from '../modules/controller/controller.js'

'use strict';
let params = {
    minVal: 1000,
    maxVal:5000,
    step: 100,
    isGorizontal: true,
    isInterval: true,
    isShowVal: true,
}
/*
Добавить:
мининимально, максимального и текущего значения
размер шага, 
вертикальный/горизонтальный вид, 
одиночное значение или интервал,
возможность на лету изменить значение "снаружи" javascript-ом, 
возможность включать/отключать элемент над бегунком, который показывает значение
шкала значений - элемент, который отображает диапазон значений, в пределах которого можно двигать ползунок. Минимальное значение шкалы = значению min слайдера, максимальное = значению max слайдера. 
Шкала должна быть интерактивной. Т.е. при клике на значение шкалы, ползунок должен перемещаться на позицию этого значения.
прогресс бар - элемент от min до значения первого ползунка, при одиночном значении, либо, от значения первого ползунка до значения второго ползунка при интервале. Узнать как выглядит прогресс бар (разноцветные полоски)
 */
let firstSlider = new Controller({
    rangeContainer: '.range-1',
    minVal: 2000,
    maxVal:10000,
    toVal:7000,
    fromVal:4500,
    step: 100,
    isGorizontal: true,
    isInterval: true,
    isShowVal: true,
});
let secondSlider = new Controller();

//firstSlider.createElements(document.querySelector('.range-here'), 5000, 10000, '₽');

/*let view = {
    
};

view.createElements(document.querySelector('.range-here'), 5000, 10000, '₽');
*/




/*
let rangeTo = document.querySelector('.range__to');
let rangeToValNow=rangeTo.querySelector('.range__now-value')
console.log(rangeToValNow)
let bar = document.querySelector('.range__progress-bar');
let slider=document.querySelector('.range__border');
let shiftX;
//let minVal=100;
//let maxVal=200;
rangeTo.onpointerdown = function(event) {
    event.preventDefault(); // prevent selection start (browser action)
    shiftX = event.clientX - rangeTo.getBoundingClientRect().left;
    rangeTo.setPointerCapture(event.pointerId);
  };
  rangeTo.onpointermove = function(event) {
    let newWidth = event.clientX - shiftX - slider.getBoundingClientRect().left;
    // если указатель находится за пределами слайдера => отрегулировать "left", чтобы оставаться в пределах границ
    if (newWidth < 0) {
        newWidth = 0;
    }
    let rightEdge = slider.offsetWidth - rangeTo.offsetWidth;
    if (newWidth > rightEdge) {
        newWidth = rightEdge;
    }

    bar.style.width = newWidth + 'px';
    
    rangeToValNow.innerHTML=Math.ceil(newWidth/slider.offsetWidth*(params.maxVal-params.minVal)/params.step)*params.step+params.minVal;
  };

  rangeTo.ondragstart = () => false;
*/

