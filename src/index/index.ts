//import { View } from "../view/view.js";
//import { Model } from "../model/model.js";

class Controller {
    private model: Model;
    private view: View;
    constructor(options: IOptions) {
      this.model = new Model(options);
      this.view = new View(options);
      console.log(this.model);
      console.log(this.view);
    }
  }
  class View {
    
    constructor(options: IOptions = defOptions) {}
  }
  class Model {
    constructor(options: IOptions = defOptions) {}
  }
  interface IOptions {
    rangeContainer:string,
    minVal: number;
    maxVal: number;
    toVal: number;
    fromVal: number;
    step: number;
    units: string;
    isGorizontal: boolean;
    isInterval: boolean;
    isShowVal: boolean;
  }
  const maxVal = 500;
  const minVal = 100;
  const defOptions: IOptions = {
    rangeContainer: '.range-here',
    minVal: minVal,
    maxVal: maxVal,
    toVal: maxVal,
    fromVal: minVal,
    step: 100,
    units: " ₽",
    isGorizontal: true,
    isInterval: true,
    isShowVal: true,
  };

  type Listener=any;
type Sender=any;
  class EventListener{
      


      private sender:Sender;
      private listeners: Listener[];
    constructor(sender:Sender){
        this.sender=sender;
        this.listeners= [];
    }
    attach(listener:Listener) {
        this.listeners.push(listener);
    }
    notify (args:any) {
        for (let index = 0; index < this.listeners.length; index += 1) {
            this.listeners[index](this.sender, args);
        }
    }
}