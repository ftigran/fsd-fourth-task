import {createElement} from '../../ElementFunctions/ElementFunctions'

export class ViewBar{
    rangeBorder:Element
    private rangeWrapper:Element
    private rangeProgressBar:Element
    private rangeTo:Element
    private rangeToNow?:Element
    private rangeFrom?:Element
    private rangeFromNow?:Element
    rangeValue:Element
    
      constructor(isInterval:boolean, isShowVal:boolean){
        this.rangeBorder = createElement('div', 'range__border');
        this.rangeWrapper = createElement('div', 'range__wrapper');

        this.rangeProgressBar = createElement('div','range__progress-bar');

        this.rangeTo = createElement('div', 'range__to');
        if(isShowVal){
          this.rangeToNow = createElement('span', 'range__now-value');
          this.rangeTo.append(this.rangeToNow);
        }
        
        if(isInterval){
          this.rangeFrom = createElement('div','range__from');
          if(isShowVal){
            this.rangeFromNow = createElement('span','range__now-value');
            this.rangeFrom.append(this.rangeFromNow);
          }
          
          this.rangeProgressBar.append(this.rangeFrom,this.rangeTo)
        }else {
          this.rangeProgressBar.append(this.rangeTo)
        }
        
        this.rangeBorder.append(this.rangeWrapper)
        this.rangeWrapper.append(this.rangeProgressBar)
        this.rangeValue = createElement('p','range__value');
    }
    }