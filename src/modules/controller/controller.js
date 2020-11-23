import {View} from '../view/view'
import {Model} from '../model/model.js'

export class Controller {
    constructor({
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
    }={}) {
      this.model = new Model()
      console.log(arguments[0])
      this.view = new View(arguments[0])
    }
    /*onRangeChanged = () => {
        this.view.displayRange()
      }*/
  }