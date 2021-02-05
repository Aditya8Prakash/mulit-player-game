var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var player;
var form;
var p1,p2;
var cars=[]

function preload(){
  track = loadImage("../images/track.jpg");
  p_I = loadImage("../images/p.png");
  ground = loadImage("../images/track.png");
}

function setup(){
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
