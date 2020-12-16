import './index.scss'

import {Controller} from '../modules/controller/controller.js'

import './index.ts'
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
++мининимально, максимального и текущего значения
++размер шага, 
вертикальный/горизонтальный вид, 
++одиночное значение или интервал,
++возможность на лету изменить значение "снаружи" javascript-ом, 
++возможность включать/отключать элемент над бегунком, который показывает значение
шкала значений - элемент, который отображает диапазон значений, в пределах которого можно двигать ползунок. Минимальное значение шкалы = значению min слайдера, максимальное = значению max слайдера. 
Шкала должна быть интерактивной. Т.е. при клике на значение шкалы, ползунок должен перемещаться на позицию этого значения.
прогресс бар - элемент от min до значения первого ползунка, при одиночном значении, либо, от значения первого ползунка до значения второго ползунка при интервале. Узнать как выглядит прогресс бар (разноцветные полоски)
 */
let firstSlider = new Controller({
    rangeContainer: '.range-1',
    minVal: 2000,
    maxVal:10000,
    toVal:7000,
    fromVal:2000,
    step: 100,
    isGorizontal: true,
    isInterval: true,
    isShowVal: true,
});
let secondSlider = new Controller({isShowVal: false,});
let thirdSlider = new Controller({
    rangeContainer: '.range-3',
    minVal: 0,
    maxVal:100,
    toVal:50,
    step: 5,
    isGorizontal: true,
    isInterval: false,
    isShowVal: true,
});
//firstSlider.view.setToVal(0.999)
