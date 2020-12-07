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

      ///----need change
      this.view.viewBar.setStepWidth(this.model.minVal,this.model.maxVal,this.model.step)

      this.view.viewBar.bindRangeToMove(this.model.calcRangeValue.bind(this.model),this.view.viewBar.displayRange.bind(this.view.viewBar), 'toVal')

      //Подписка на обновление значения "ToVal"
      if(this.view.isShowVal) this.model.toValUpdated.attach(()=>this.view.viewBar.updateRangeTo(this.model.getRangeTo()))
      this.model.toValUpdated.attach(()=>this.view.viewBar.displayRange(this.model.getRange()))

      this.model.toVal=this.model.toVal
      
      //Инициализация положения toVal
      this.view.viewBar.setToVal(this.model.getPercentOfVal(this.model.toVal))
      if (this.model.isInterval){
      this.view.viewBar.bindRangeFromMove(this.model.calcRangeValue.bind(this.model),this.view.viewBar.displayRange.bind(this.view.viewBar),'fromVal')
      //Подписка на обновление значения "fromVal"
      if(this.view.viewBar.isShowVal) this.model.fromValUpdated.attach(()=>this.view.viewBar.updateRangeFrom(this.model.getRangeFrom()));
      this.model.fromValUpdated.attach(()=>this.view.viewBar.displayRange(this.model.getRange()))
      
      this.model.fromVal=this.model.fromVal      

      //Инициализация положения fromVal
      this.view.viewBar.setfromVal(this.model.getPercentOfVal(this.model.fromVal))
      }
    }
  }
