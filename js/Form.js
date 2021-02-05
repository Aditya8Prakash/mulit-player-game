class Form {

  constructor() {
    this.input = createInput("Enter Your Name Here");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Huddel Racing Game");
    this.title.position(window.innerWidth/2 - this.title.width/10, window.innerHeight/6);

    this.input.position(window.innerWidth/2 - this.input.width/2 , window.innerHeight/2 - 100);
    this.button.position(window.innerWidth/2 -this.button.width/2, window.innerHeight/2 );

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(window.innerWidth/2 - 70, window.innerHeight/4);
    });

  }
}
