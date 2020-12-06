
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
        //this.rangeContainer=rangeContainer;
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
        this.container = this.getElement(rangeContainer)
        this.rangeSlider = this.createElement('div', 'range');
        this.rangeValue = this.createElement('p','range__value');
        this.rangeSlider.append(this.rangeValue);


        this.rangeRange = this.createElement('div','range__range');

        this.rangeBorder = this.createElement('div', 'range__border');
        this.rangeWrapper = this.createElement('div', 'range__wrapper');

        this.rangeProgressBar = this.createElement('div','range__progress-bar');

        this.rangeFrom = this.createElement('div','range__from');

        this.rangeFromNow = this.createElement('span','range__now-value');
        this.rangeFrom.append(this.rangeFromNow);

        this.rangeTo = this.createElement('div', 'range__to');

        this.rangeToNow = this.createElement('span', 'range__now-value');
        //this.rangeToNow.innerHTML=this.toVal+this.units;
        this.rangeTo.append(this.rangeToNow);

        this.rangeProgressBar.append(this.rangeFrom,this.rangeTo)
        this.rangeBorder.append(this.rangeWrapper)
        this.rangeWrapper.append(this.rangeProgressBar)

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
      updateRangeTo(text){
        this.displayRangeNow(this.rangeToNow,text)
      }
      displayRange(text){
        this.rangeValue.innerHTML=text;
      }
      displayRangeNow(rangeNow, text){
        rangeNow.innerHTML  = text;
      }
      //--
      bindRangeToMove(handler, handl){

        this.rangeTo.onpointerdown = (event)=> {
            event.preventDefault();

            //Компенсация положения мыши относительно ползунка
            this.shiftX = event.pageX - this.rangeProgressBar.getBoundingClientRect().right;
            
            this.rangeTo.setPointerCapture(event.pointerId);
            console.log(this.shiftX)
            console.log(event.pageX)

          };
          console.log(this)
          this.rangeTo.onpointerup = (event)=> {
            this.rangeTo.releasePointerCapture(event.pointerId);
            this.shiftX=undefined;
          };
          this.rangeTo.onpointermove = (event) =>{
            console.log(this.shiftX)
            if(this.shiftX){
              
              let right = this.rangeWrapper.getBoundingClientRect().right+this.shiftX - event.clientX

              document.getElementsByClassName('')
              // если указатель находится за пределами слайдера => отрегулировать "right", чтобы оставаться в пределах границ
              if (right < 0) {
                  right = 0;
              }
              /*let rightEdge =this.rangeBorder.clientWidth+((this.rangeBorder.offsetWidth-this.rangeBorder.clientWidth)/2)+this.rangeBorder.getBoundingClientRect().left -this.rangeProgressBar.getBoundingClientRect().left
              if (right > rightEdge) {
                  right = rightEdge;
              }*/
              this.rangeProgressBar.style.marginRight = right + 'px';
              
              //this.view.rangeToNow.innerHTML=
              handler(this.rangeProgressBar.getBoundingClientRect().right/this.rangeWrapper.getBoundingClientRect().right,handl)
            }

};
        
          //this.view.rangeTo.ondragstart = () => false;
      }
      bindRangeFromMove(handler, handl){
        this.rangeFrom.onpointerdown = (event)=> {
          event.preventDefault();
          this.shiftX = event.pageX - this.rangeProgressBar.getBoundingClientRect().left;
          this.rangeFrom.setPointerCapture(event.pointerId);
        };
        console.log(this)
        this.rangeFrom.onpointerup = (event)=> {
          this.rangeFrom.releasePointerCapture(event.pointerId);
          this.shiftX=undefined;
        };
          this.rangeFrom.onpointermove = (event) =>{
            if(this.shiftX){
              let left = event.clientX-this.rangeWrapper.getBoundingClientRect().left-this.shiftX

              document.getElementsByClassName('')
              // если указатель находится за пределами слайдера => отрегулировать "left", чтобы оставаться в пределах границ
              if (left < 0) {
                left = 0;
              }
              /*let rightEdge =this.rangeProgressBar.getBoundingClientRect().left
              if (left > rightEdge) {
                left = rightEdge;
              }*/
              this.rangeProgressBar.style.marginLeft = left + 'px';
              
              //this.view.rangeToNow.innerHTML=
              handler(this.rangeProgressBar.getBoundingClientRect().left/this.rangeWrapper.getBoundingClientRect().right,handl)
            }

};
              }
}
