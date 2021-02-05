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

    p1 = createSprite(100,200);
    p1.addImage("p_I1",p_I);
    p2 = createSprite(300,200);
    p2.addImage("p_I2",p_I);
    cars = [p1, p2];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      push();
      rotate(90)
        image(track, 0,-window.innerHeight*7,window.innerWidth, window.innerHeight*5);
        image(ground, 0,camera.position.x*7,camera.position.y, window.innerHeight*5);
      pop();
      
      var index = 0;

      var y = 175 ;
      var x;

      for(var plr in allPlayers){

        index = index + 1 ;

        y = y + window.innerWidth/4;

        x = window.innerWidth + allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          camera.position.y = window.innerWidth/2;
          camera.position.x = cars[index-1].x;
        }

      }

    }

    if(keyIsDown(32) && player.index !== null){
      player.distance += 45;
      player.update();
    }

    if(player.distance > 5265){
      gameState = 2;
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}
