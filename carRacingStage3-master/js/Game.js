class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    player1 = createSprite(200,400);
  

    player2 = createSprite(300,600);
    player3 = createSprite(500,400);

    player4 = createSprite(700,400);
    player1.scale=0.5;
    player2.scale=0.5;
    player3.scale=0.5;
    player4.scale=0.5;

    
    
players=[player1,player2,player3,player4];


  }
  
play(){
    form.hide();
    form.greeting.hide();
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track,0,0,displayWidth,displayHeight);
      
      var index = 0;
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        index = index + 1 ;

        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        players[index-1].x = x;
        players[index-1].y = y;


       if(allPlayers[plr].gender==="male"){

        players[index - 1].addImage("boy",boy_img);
      }

      if(allPlayers[plr].gender==="female"){

        players[index - 1].addImage("girl",girl_img);
      }
        if (index === player.index){
          stroke(10);
          fill("red");
          
          ellipse(x,y,120,120);
          players[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = players[index-1].y;
        }
        }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank +=1
      Player.updateCarsAtEnd(player.rank)
    }
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}