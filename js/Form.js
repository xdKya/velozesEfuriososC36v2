class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  setElements(){
    this.titleImg.position(120,50);
    this.titleImg.class("gameTitle");

    this.playButton.position(width/2 -100,height/2);
    this.playButton.class("customButton");

    this.input.position(width/2-125,height/2-50);
    this.input.class("customInput");

    this.greeting.position(width/2-125,height/2-50);
    this.greeting.class("greeting");

  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  mouseClicked(){

  }
  
  display(){
    this.setElements();

  }
}

 