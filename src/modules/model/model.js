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
        this.minVal = minVal;
        this.maxVal=maxVal;
        this.toVal=toVal;
        this.fromVal=fromVal;
        this.step= step;
        this.units= units;
        this.isGorizontal= isGorizontal;
        this.isInterval= isInterval;
        this.isShowVal= isShowVal;
    }
    get toVal(){
        return this._toVal
    }
    get fromVal(){
        return this._fromVal
    }
    set toVal(arg){
        this._toVal=arg;
    }
    set fromVal(arg){
        this._fromVal=arg;
    }
    getRange(){
        return this.fromVal+this.units+' - ' + this.toVal+this.units
    }
    getRangeNow(ValNow){
        return ValNow+this.units
    }
    changeValue(){

    }
  }