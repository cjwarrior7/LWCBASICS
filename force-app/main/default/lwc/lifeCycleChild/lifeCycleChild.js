import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super();
        //we cannot access frontend properties even they exist eg:this.template.querySelector('.abc');
        console.log('Child constructor called');
    }

    connectedCallback(){
        console.log('Child connectedCallback called'); 
    }
    renderedCallback(){
        console.log('Child renderCallback called'); 
    } 
}