var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var allPlayers;
var car1,car2,car3,car4,cars;
var car1_image,car2_image,car3_image,car4_image;
var ground_image;
var track_image;

function preload(){
  car1_image = loadImage("car1.png");
  car2_image = loadImage("car2.png");
  car3_image = loadImage("car3.png");
  car4_image = loadImage("car4.png");

  ground_image = loadImage("ground.png");

  track_image = loadImage("track.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
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
