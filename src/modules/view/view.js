
export class View {
    constructor({
        rangeContainer = '.range-here',
        /*minVal= 100,
        maxVal=500,
        toVal=maxVal,
        fromVal=minVal,
        step= 100,
        units='₽',
        isGorizontal= true,
        isInterval= true,
        isShowVal= true,*/
    }={}){
        this.rangeContainer=rangeContainer;
        /*this.minVal = minVal;
        this.maxVal=maxVal;
        this.toVal=toVal;
        this.fromVal=fromVal;
        this.step= step;
        this.units= units;
        this.isGorizontal= isGorizontal;
        this.isInterval= isInterval;
        this.isShowVal= isShowVal;*/
        //контейнер для бегунка
        this.container = this.getElement(this.rangeContainer)
        console.log(this)
        console.log(this.container+'dsasadasd')
        this.rangeSlider = this.createElement('div', 'range');
        this.rangeValue = this.createElement('p','range__value');
        this.rangeSlider.append(this.rangeValue);


        this.rangeRange = this.createElement('div','range__range');

        this.rangeBorder = this.createElement('div', 'range__border');

        this.rangeProgressBar = this.createElement('div','range__progress-bar');

        this.rangeFrom = this.createElement('div','range__from');

        this.rangeFromNow = this.createElement('span','range__now-value');
        this.rangeFrom.append(this.rangeFromNow);

        this.rangeTo = this.createElement('div', 'range__to');

        this.rangeToNow = this.createElement('span', 'range__now-value');
        //this.rangeToNow.innerHTML=this.toVal+this.units;
        this.rangeTo.append(this.rangeToNow);

        this.rangeProgressBar.append(this.rangeFrom,this.rangeTo)
        this.rangeBorder.append(this.rangeProgressBar)
        this.rangeRange.append(this.rangeBorder)
        this.rangeSlider.append(this.rangeRange)
        this.container.append(this.rangeSlider);

        //this.createElements()
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
      displayRange(text){
        this.rangeValue.innerHTML=text;
      }
      displayRangeNow(rangeNow, text){
        rangeNow.innerHTML  = text;
        

      }
}
