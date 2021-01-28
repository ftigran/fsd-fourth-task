//import {Event} from '../eventListenner/eventListenner'
import {IOptionsWithDef} from '../options/options'
import {EventListener} from '../eventListenner/eventListenner'
export class Model {
    private options:IOptionsWithDef;

    constructor(options: IOptionsWithDef) {
      this.options=options;
    }
    getPercentOfVal(val:number){
      return (val-this.options.minVal)/(this.options.maxVal-this.options.minVal)
  }

  getRangeTo(){
      return this.options.toVal+this.options.units
  }
  getRangeFrom(){
      return this.options.fromVal+this.options.units
  }

  calcValFormula(percent:number):number{
      return Math.ceil(percent*(this.options.maxVal-this.options.minVal)/this.options.step)*this.options.step+this.options.minVal;
  }
  calcRangeValue(percent:number, arg:string){
      this.options[arg]=this.calcValFormula(percent)
      //handler(this.getRange())
  }    
  }