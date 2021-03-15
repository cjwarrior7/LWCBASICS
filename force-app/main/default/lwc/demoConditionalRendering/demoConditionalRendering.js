import { LightningElement } from 'lwc';

export default class DemoConditionalRendering extends LightningElement {
    isvisible = false;
    handleClick(){
        this.isvisible = true;  
    }
    name;
    changeHandler(event){
      this.name = event.target.value;
    }
    get helloMethod(){
        return this.name === 'hello';
    }
}