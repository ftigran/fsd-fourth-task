import {createElement,getElement} from '../ElementFunctions/ElementFunctions'
import {IOptions} from '../options/options'
import {ViewBar} from './viewBar/viewBar'

export class View {
    private container:Element
    private rangeSlider:Element
    private rangeRange:Element
    private viewBar:ViewBar

    private options:IOptions;
    constructor(options: IOptions) {
      this.options=options;

      this.container=getElement(options.rangeContainer)
        this.rangeSlider = createElement('div', 'range');
        this.rangeRange = createElement('div','range__range');

        this.viewBar = new ViewBar(this.options.isInterval, this.options.isShowVal)

        this.rangeSlider.append(this.viewBar.rangeValue);
        this.rangeRange.append(this.viewBar.rangeBorder)
        this.rangeSlider.append(this.rangeRange)
        this.container.append(this.rangeSlider);
    }
  }
  module.exports=View