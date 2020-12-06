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
      this.view = new View(arguments[0])
      this.bindChangeRangeTo()
      this.view.bindRangeToMove(this.model.calcRangeToValue.bind(this.model),this.view.displayRange.bind(this.view))
      this.view.bindRangeFromMove(this.model.calcRangeToValue.bind(this.model),this.view.displayRange.bind(this.view))

      //Подписка на обновление значения "ToVal"
      this.model.toValUpdated.attach(()=>this.view.updateRangeTo(this.model.getRangeTo()))
      this.model.toValUpdated.attach(()=>this.view.displayRange(this.model.getRange()))



      this.init();

      //this.model.toVal={arguments[0]}
    }
    init(){
      this.model.toVal=this.model.toVal
        //this.view.displayRange(this.model.getRange())
        //this.updateRange(this.view.rangeFromNow,this.model.fromVal);
        //this.updateRange(this.view.rangeToNow,this.model.toVal);
        //console.log(this.model.toVal)
        
    }
    /*updateRange(rangeNow){
        this.view.displayRangeNow(rangeNow, this.model.getRangeTo())
        this.view.displayRange(this.model.getRange())
    }*/

    bindChangeRangeTo(){
        let shiftX;
        this.view.rangeTo.onpointerdown = function(event) {
          this.eventOfRangeTo=event;
            event.preventDefault();
            shiftX = event.pageX - this.getBoundingClientRect().left-(this.clientWidth/2);
            this.setPointerCapture(event.pointerId);
            console.log(this.eventOfRangeTo.pointerId)
          };
          this.view.rangeTo.onpointerup = function(event) {
              this.releasePointerCapture(event.pointerId);
              console.log(event.pointerId)
            };
    }
  }
