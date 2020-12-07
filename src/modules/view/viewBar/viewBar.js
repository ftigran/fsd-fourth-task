export class ViewBar {
    constructor(isInterval, isShowVal){
        this.rangeBorder = this.createElement('div', 'range__border');
        this.rangeWrapper = this.createElement('div', 'range__wrapper');

        this.rangeProgressBar = this.createElement('div','range__progress-bar');

        this.rangeTo = this.createElement('div', 'range__to');
        if(isShowVal){
          this.rangeToNow = this.createElement('span', 'range__now-value');
          this.rangeTo.append(this.rangeToNow);
        }
        
        if(isInterval){
          this.rangeFrom = this.createElement('div','range__from');
          if(isShowVal){
            this.rangeFromNow = this.createElement('span','range__now-value');
            this.rangeFrom.append(this.rangeFromNow);
          }
          
          this.rangeProgressBar.append(this.rangeFrom,this.rangeTo)
        }else {
          this.rangeProgressBar.append(this.rangeTo)
        }
        
        this.rangeBorder.append(this.rangeWrapper)
        this.rangeWrapper.append(this.rangeProgressBar)
        this.rangeValue = this.createElement('p','range__value');
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
      updateRangeFrom(text){
        this.displayRangeNow(this.rangeFromNow,text)
      }
      displayRange(text){
        this.rangeValue.innerHTML=text;
      }
      displayRangeNow(rangeNow, text){
        rangeNow.innerHTML  = text;
      }
      //--
      setStepWidth(min, max, step){
        this.stepWidth=this.rangeWrapper.clientWidth/((max-min)/step)
      }

      setToVal(percents){
        this.rangeProgressBar.style.marginRight = (1-percents)*this.rangeWrapper.clientWidth + 'px';
      }
      setfromVal(percents){
        this.rangeProgressBar.style.marginLeft = (percents)*this.rangeWrapper.clientWidth + 'px';
      }


      //binds
      bindRangeToMove(handler, handl, arg){

        this.rangeTo.onpointerdown = (event)=> {
            event.preventDefault();

            //Компенсация положения мыши относительно ползунка
            this.shiftX = event.pageX - this.rangeProgressBar.getBoundingClientRect().right;
            
            this.rangeTo.setPointerCapture(event.pointerId);
          };

          this.rangeTo.onpointerup = (event)=> {
            this.rangeTo.releasePointerCapture(event.pointerId);
            this.shiftX=undefined;
          };
          this.rangeTo.onpointermove = (event) =>{
            if(this.shiftX){
              
              let right = this.rangeWrapper.getBoundingClientRect().right+this.shiftX - event.clientX

              document.getElementsByClassName('')
              // если указатель находится за пределами слайдера => отрегулировать "right", чтобы оставаться в пределах границ
              if (right < 0) {
                  right = 0;
              }
              let leftEdge =this.rangeWrapper.getBoundingClientRect().right-this.rangeProgressBar.getBoundingClientRect().left-this.stepWidth
              if (right > leftEdge) {
                  right = leftEdge;
              }
              this.rangeProgressBar.style.marginRight = right + 'px';
              
              //this.view.rangeToNow.innerHTML=
              handler(this.rangeProgressBar.getBoundingClientRect().right/this.rangeWrapper.getBoundingClientRect().right, arg, handl)
            }

};
        
          //this.view.rangeTo.ondragstart = () => false;
      }
      bindRangeFromMove(handler, handl, arg){
        this.rangeFrom.onpointerdown = (event)=> {
          event.preventDefault();
          this.shiftX = event.pageX - this.rangeProgressBar.getBoundingClientRect().left;
          this.rangeFrom.setPointerCapture(event.pointerId);
        };
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
              const rightEdge =this.rangeProgressBar.getBoundingClientRect().right-this.rangeWrapper.getBoundingClientRect().left-this.stepWidth
              
              if (left > rightEdge) {
                left = rightEdge;
              }
              this.rangeProgressBar.style.marginLeft = left + 'px';
              
              //this.view.rangeToNow.innerHTML=
              handler(this.rangeProgressBar.getBoundingClientRect().left/this.rangeWrapper.getBoundingClientRect().right, arg,handl)
            }

};
              }
}