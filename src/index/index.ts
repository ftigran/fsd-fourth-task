//import { View } from "../view/view.js";

import { optimize } from "webpack";
import {Controller} from '../modules/controller/controller'
//import { Model } from "../model/model.js";


let firstSlider = new Controller({
    rangeContainer: '.range-1',
    minVal: 2000,
    maxVal:10000,
    toVal:7000,
    fromVal:2000,
    step: 100,
    units: '$',
    isGorizontal: true,
    isInterval: true,
    isShowVal: true,
});
let secondSlider = new Controller({
  rangeContainer: '.range',
  minVal: 2000,
  maxVal:10000,
  toVal:7000,
  fromVal:2000,
  step: 100,
  units: '$',
  isGorizontal: true,
  isInterval: true,
  isShowVal: false,
});
let thirdSlider = new Controller({
  rangeContainer: '.range-3',
  minVal: 2000,
  maxVal:10000,
  toVal:7000,
  fromVal:2000,
  step: 100,
  units: '$',
  isGorizontal: true,
  isInterval: false,
  isShowVal: true,
});










function sum(a:number, b:number) {
  return a + b;
}
module.exports=sum;