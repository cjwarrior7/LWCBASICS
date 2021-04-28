import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super();
        //we cannot access frontend properties even they exist eg:this.template.querySelector('.abc');
        console.log('Child constructor called');
    }

    connectedCallback(){
        console.log('Child connectedCallback called'); 
        //window.addEventListener('click',this.handleClick);
        throw new Error('Load of child Component failed');
    }
    renderedCallback(){
        console.log('Child renderCallback called'); 
    } 
    disconnectedCallback(){
        alert('Child Disconnected Callback called');
        //window.removeEventListener('click',this.handleClick);//avoid memory Leak and to Increase performance of code
    }
}