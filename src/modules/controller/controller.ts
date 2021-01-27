import {View} from '../view/view'
import {Model} from '../model/model'
import {OptionsModule} from '../options/options'
const pluginOptions={class:'range'}

export class Controller {
    private model: Model;
    private view: View;
    constructor(options:OptionsModule.IOptions) {
      this.model = new Model(options);
      this.view = new View(options);
      console.log(this.model);
      console.log(this.view);
    }
  }
