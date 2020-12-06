import {View} from '../view/view.js'
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
      this.view.bindChangeRangeToMove(this.model.calcRangeToValue.bind(this.model),this.view.displayRange.bind(this.view))
      this.model.toValUpdated.attach(()=>this.view.updateRangeTo(this.model.getRange()))
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
    handlerPointerMove(){
      //this.model.
    }
    bindChangeRangeTo(){
        let shiftX;
        this.view.rangeTo.onpointerdown = function(event) {
          this.eventOfRangeTo=event;
            event.preventDefault(); // prevent selection start (browser action)
            shiftX = event.pageX - this.getBoundingClientRect().left-(this.clientWidth/2);
            this.setPointerCapture(event.pointerId);
            console.log(this.eventOfRangeTo.pointerId)
          };
          this.view.rangeTo.onpointerup = function(event) {
            //this.eventOfRangeTo=event;
              this.releasePointerCapture(event.pointerId);
              console.log(event.pointerId)

            };
          /*this.view.rangeTo.onpointerup = function(event) {
            this.releasePointerCapture(event.pointerId);
          };*/
        
          this.view.rangeTo.ondragstart = () => false;
    }
    
    /*onRangeChanged = () => {
        this.view.displayRange()
      }*/

      //--
  }
