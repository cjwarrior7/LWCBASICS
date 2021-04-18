import { LightningElement } from 'lwc';

export default class DemoQwerySelector extends LightningElement {
    userList = ['Nick','Tom','Dick','harry'];
    clickbtn() {
        console.log('test');
        const elem = this.template.querySelector('h1');
        console.log(elem.innerText);
        const elements = this.template.querySelectorAll('.name');
        Array.from(elements).forEach(ele => {
            console.log(ele.innerText);
            ele.setAttribute("title",ele.innerText);
        });

        /// low:dom="mannual" demo
        const childElem = this.template.querySelector('.child');
        childElem.innerHTML = '<p>Hi cj</p>';
     }
}