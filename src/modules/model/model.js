import {Event} from '../event/event.js'

export class Model {
    constructor({
        minVal= 100,
        maxVal=500,
        toVal=maxVal,
        fromVal=minVal,
        step= 100,
        units=' ₽',
        isGorizontal= true,
        isInterval= true,
        isShowVal= true,
    }={}) {
        this.toValUpdated = new Event(this)

        this.minVal = minVal;
        this.maxVal=maxVal;
        this.toVal=toVal;
        this.step= step;
        this.units= units;
        this.isGorizontal= isGorizontal;
        this.isInterval= isInterval;
        this.isShowVal= isShowVal;

        if(this.isInterval) {
            this.fromValUpdated = new Event(this)

            this._fromVal=fromVal;
            this.getRange= function(){
                return this.fromVal+this.units+' - ' + this.toVal+this.units
            }
            Object.defineProperty(this, 'fromVal', {
                get() {
                    return this._fromVal
                },
              
                set(arg) {
                    console.log( this)
                    this._fromVal=arg;
                    this.fromValUpdated.notify()
                }
              })
        }else {
            this.getRange= function(){
                return this.toVal+this.units
            }
        }

    }
    get toVal(){
        return this._toVal
    }
    set toVal(arg){
        this._toVal=arg;
        this.toValUpdated.notify()
    }


    getRangeTo(){
        return this.toVal+this.units
    }
    getRangeFrom(){
        return this.fromVal+this.units
    }

    calcValFormula(percent){
        return Math.ceil(percent*(this.maxVal-this.minVal)/this.step)*this.step+this.minVal;
    }
    calcRangeValue(percent, arg, handler){
        this[arg]=this.calcValFormula(percent)
        handler(this.getRange())
    }
  }
  