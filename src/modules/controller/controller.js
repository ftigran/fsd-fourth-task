import {View} from '../view/view'
import {Model} from '../model/model.js'

export class Controller {
    constructor(/*{
        rangeContainer = 'range-here',
        minVal= 100,
        maxVal=500,
        toVal=maxVal,
        fromVal=minVal,
        step= 100,
        units='₽',
        isGorizontal= true,
        isInterval= true,
        isShowVal= true,
    }={}*/) {
      this.model = new Model(arguments[0])
      console.log(arguments[0])
      this.view = new View(arguments[0])
      this.init();
      this.bindChangeRangeTo()
    }
    init(){
        //this.view.displayRange(this.model.getRange())
        this.updateRange(this.view.rangeFromNow,this.model.fromVal);
        this.updateRange(this.view.rangeToNow,this.model.toVal);
        console.log(this.model.toVal)
        
    }
    updateRange(rangeNow,val){
        this.view.displayRangeNow(rangeNow, this.model.getRangeNow(val))
        this.view.displayRange(this.model.getRange())
    }
    
    bindChangeRangeTo(){
        let shiftX;
        this.view.rangeTo.onpointerdown = function(event) {
            event.preventDefault(); // prevent selection start (browser action)
            shiftX = event.pageX - this.getBoundingClientRect().left;
            console.log(shiftX +' shift')
            this.setPointerCapture(event.pointerId);
          };
          /*this.view.rangeTo.onpointerup = function(event) {
            this.releasePointerCapture(event.pointerId);
          };*/
          this.view.rangeTo.onpointermove = (event) =>{
            //let newWidth = event.clientX - shiftX - this.view.rangeProgressBar.getBoundingClientRect().left;
            console.log(event.clientX)

            let newWidth = event.clientX - shiftX - this.view.rangeBorder.getBoundingClientRect().left;
            
            // если указатель находится за пределами слайдера => отрегулировать "left", чтобы оставаться в пределах границ
            if (newWidth < 0) {
                newWidth = this.view.rangeTo.offsetWidth;
            }
            console.log(this.view.rangeBorder.offsetWidth  +' ww')

            let rightEdge = this.view.rangeBorder.offsetWidth// - this.view.rangeTo.offsetWidth;
            if (newWidth > rightEdge) {
                newWidth = rightEdge;
            }
        console.log(rightEdge + 'assadsadasdasdqqqqww')
        console.log(newWidth)
            this.view.rangeProgressBar.style.width = newWidth + 'px';
            
            this.view.rangeToNow.innerHTML=Math.ceil(newWidth/this.view.rangeBorder.offsetWidth*(this.model.maxVal-this.model.minVal)/this.model.step)*this.model.step+this.model.minVal;
          };
        
          this.view.rangeTo.ondragstart = () => false;
    }
    /*onRangeChanged = () => {
        this.view.displayRange()
      }*/
  }