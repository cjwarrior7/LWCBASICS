import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
  selected = {} //for storing Answers
  correctAnswer;
  isSubmitted = false;
  questions = [
      { id :"question1",
      ques :"Which of the following is not loop in lwc ?",
      options : {
        a:"for:each",
        b:"Iterator",
        c:"Map:loop"
      },
      correctAnswer : 'c'
      },
      
      { id :"question2",
      ques :"Which of the file  is inavlid in lwc folder structure ?",
      options : {
        a:".svg",
        b:".apex",
        c:".js"
      },
      correctAnswer : 'b'
    },

    { id :"question3",
    ques :"Which of the following  is not a directive ?",
    options : {
      a:"for:each",
      b:"if:true",
      c:"@track"
    },
    correctAnswer : 'c'
    }
  ]
  changeHandler(event){
    console.log('name:'+event.target.name);
    console.log('value:'+event.target.value);
    const{name,value} = event.target;
    this.selected = {...this.selected ,[name]:value};
  }

  handleSubmit(event){
    //console.log('handlesubmit:'+event.target.name);
    event.preventDefault();
    let correct = this.questions.filter(item =>this.selected[item.id] === item.correctAnswer);
    console.log('correct:'+correct)
    this.correctAnswer = correct.length;
    console.log('correctAnswer:'+this.correctAnswer )
    this.isSubmitted = true;
}
  handleReset(event){
    console.log('handlereset:'+event.target.name);
    this.selected = {};
    this.correctAnswer = 0;
    this.isSubmitted = false;

  }
  get getAllNotSelected(){
    return !(Object.keys(this.selected).length === this.questions.length)
  }
  get isFullScored(){
    return `slds-text-heading_large ${this.questions.length === this.correctAnswer ? 'slds-text-color_success':'slds-text-color_error'}`
  }

}