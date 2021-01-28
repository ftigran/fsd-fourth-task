import {View} from '../view/view'
import {Model} from '../model/model'
import {IOptions,defOptions, IOptionsWithDef} from '../options/options'
const pluginOptions={class:'range'}

export class Controller {
    private model: Model;
    private view: View;
    constructor(options:IOptionsWithDef=defOptions) {
      this.view = new View(options);
      this.model = new Model(options);

      console.log(this.model);
      console.log(this.view);
    }
  }
