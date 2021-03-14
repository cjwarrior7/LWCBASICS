import { LightningElement,track } from 'lwc';

export default class HelloWorldLwc extends LightningElement {
   //Local properties

   
    name ;//undefined;
    fullName ="cj";
    showValue = false;
    age = 30;
    @track details ={
        name:"sfdc",
        place:"India"
    };
    user =["A","B","C"];
    //Data binding-->is the synchronisation between controller (js) and template(HTML)
    title = "aura"
    changeEventHandler(event){
    this.title = event.target.value;
    console.log(title);
   }
   changeTrackProp(event){
       this.details.name = event.target.value;
       //this.user[2] = "D";
   }
   //getters example-->
   user =["Aman","Bhuwan","cjwarrior7"];
    get changeUser(){
      return this.user[0].toUpperCase() ;
   }
   num1 = 10;
   num2 = 20;
   // this.firstuser = this.user[0] // we have to update it every time when user is updated
   get multiply(){
       return this.num1 * this.num2;
   }
   

}