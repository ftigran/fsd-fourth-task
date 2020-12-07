import {ViewBar} from './viewBar/viewBar.js'
export class View {
    constructor({
        rangeContainer = '.range-here',
        /*minVal= 100,
        maxVal=500,
        toVal=maxVal,
        fromVal=minVal,
        step= 100,
        units='₽',
        isGorizontal= true,*/
        isInterval= true,
        isShowVal= true,
    }={}){
        //this.rangeContainer=rangeContainer;
        /*this.minVal = minVal;
        this.maxVal=maxVal;
        this.toVal=toVal;
        this.fromVal=fromVal;
        this.step= step;
        this.units= units;
        this.isGorizontal= isGorizontal;
        this.isInterval= isInterval;
        */
        //let {minVal,maxVal}=arguments[0]
        this.isShowVal= isShowVal;
        this.isInterval= isInterval;
        //контейнер для бегунка
        this.container = this.getElement(rangeContainer)
        this.rangeSlider = this.createElement('div', 'range');
        this.rangeRange = this.createElement('div','range__range');

        this.viewBar = new ViewBar(this.isInterval, this.isShowVal)

        this.rangeSlider.append(this.viewBar.rangeValue);
        this.rangeRange.append(this.viewBar.rangeBorder)
        this.rangeSlider.append(this.rangeRange)
        this.container.append(this.rangeSlider);

    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
    
        return element
      }
    
      getElement(selector) {
        const element = document.querySelector(selector)
    
        return element
      }
}
