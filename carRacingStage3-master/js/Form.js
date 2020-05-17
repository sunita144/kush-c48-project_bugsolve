class Form {

  constructor() {
    this.input = createInput("Alias");
    this.male= createButton("Male");
    this.female = createButton("Female");
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset=createButton("Reset");
  }
  hide(){
    this.male.hide();
    this.female.hide();
    this.input.hide();
    this.title.hide();
    
  }
  display(){
    this.title.html("Football Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.male.position(displayWidth/2 + 30, displayHeight/2);
    this.female.position(displayWidth/2 - 30, displayHeight/2);
    this.reset.position(displayWidth-100 , 40);
    this.reset.mousePressed(()=>{
    player.updateCount(0);
    game.update(0);
    Player.updateCarsAtEnd();
    })
    this.male.mousePressed(()=>{
      this.hide();
      console.log("male");
      player.gender="male";
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello Player " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
     
      console.log(player.gender);
    
    });
    this.female.mousePressed(()=>{
      this.hide();
      player.gender="female";
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello Player " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
     
    });

  }
}
