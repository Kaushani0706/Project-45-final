class Round2 {
    constructor() {
  
      this.hint = createElement("h3");
      this.input = createInput("").attribute("placeholder","Enter Your Answer");
      this.button = createButton("Submit");
      this.message = createElement("h2");
    }
  
    
    hide(){
      this.input.hide();
      this.button.hide();
      this.message.hide();
    }
  
    play(){
      image(bg4Image,0,0,width,height);
      //console.log("play is working");
    }
  
    display(){
      this.hint.html("Hint:- Hold Multiple Elements.");
      this.hint.position(150,80);
      this.input.position(150,230);
      this.button.position(290,300);
      this.input.class("customInput");
      this.button.class("customButton");
      this.hint.class("greeting");
      this.message.class("greeting");
  
      this.button.mousePressed(()=>{
        
       

        if(Answer2 === this.input.value() ){
          score = score + 1;
          this.input.hide();
          this.button.hide();
          this.hint.hide();
          round3.display();
        }
        else{
          score = score - 1;
          this.message.html("Correct Answer :- ARRAY ");
          this.message.position(350,350);
          this.input.hide();
          this.button.hide();
          this.hint.hide();
          
          
  
        }
        
      })
    }
  }
  