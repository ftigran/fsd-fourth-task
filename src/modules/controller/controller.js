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
      this.view.setStepWidth(this.model.minVal,this.model.maxVal,this.model.step)
      this.view.bindRangeToMove(this.model.calcRangeValue.bind(this.model),this.view.displayRange.bind(this.view), 'toVal')
      this.view.bindRangeFromMove(this.model.calcRangeValue.bind(this.model),this.view.displayRange.bind(this.view),'fromVal')

      //Подписка на обновление значения "ToVal"
      this.model.toValUpdated.attach(()=>this.view.updateRangeTo(this.model.getRangeTo()))
      this.model.toValUpdated.attach(()=>this.view.displayRange(this.model.getRange()))
  
      //Подписка на обновление значения "fromVal"
      this.model.fromValUpdated.attach(()=>this.view.updateRangeFrom(this.model.getRangeFrom()))
      this.model.fromValUpdated.attach(()=>this.view.displayRange(this.model.getRange()))

      this.init();

      //this.model.toVal={arguments[0]}
    }
    init(){
      this.model.toVal=this.model.toVal
      this.model.fromVal=this.model.fromVal
        //this.view.displayRange(this.model.getRange())
        //this.updateRange(this.view.rangeFromNow,this.model.fromVal);
        //this.updateRange(this.view.rangeToNow,this.model.toVal);
        //console.log(this.model.toVal)
        
    }
    /*updateRange(rangeNow){
        this.view.displayRangeNow(rangeNow, this.model.getRangeTo())
        this.view.displayRange(this.model.getRange())
    }*/
  }
