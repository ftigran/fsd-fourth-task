type Listener=any;
type Sender=any;

  export class EventListener{

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