import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
constructor(){
    super();
    //we cannot access frontend properties even they exist eg:this.template.querySelector('.abc');
    console.log('Parent constructor called');
}

connectedCallback(){
    console.log('Parent connectedCallback called'); 
}
renderedCallback(){
    console.log('Parent renderCallback called'); 
}
percent = 10
changeHandler(event){
    this.percent = event.target.value;

}
get percentageCalc(){
return `width:${this.percent}%`;
}
}