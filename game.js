var canvas, canvasContext;
var ballX = 75;
var ballY = 75;
var ballSpeedX = 2;
var ballSpeedY = 3;

const BRICK_W = 100;
const BRICK_H = 50;
const BRICK_COUNT = 4;

const PADDLE_WIDTH = 100;
const PADDE_THICKNESS = 10;
const PADDLE_DIST_FROM_EDGE = 60;
var paddleX = 400;
var mouseX, mouseY;
const BOUNCE_SOUND = new Audio('bounce.mp3');


function updateMousePos(event) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  mouseX = event.clientX - rect.left - root.scrollLeft;
  mouseY = event.clientY - rect.top - root.scrollTop;

  paddleX = mouseX - PADDLE_WIDTH / 2;
  //console.log(paddleX);
}
window.onload = function () {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  var framesPerSecond = 100;
  setInterval(updateAll, 1000 / framesPerSecond);

  canvas.addEventListener('mousemove', updateMousePos);
}

function ballReset() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
}

function updateAll() {
  moveAll();
  drawAll();
}

function moveAll() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballX < 0 || ballX > canvas.width) {
    ballSpeedX *= -1;
    BOUNCE_SOUND.play();
  }

  if (ballY < 0) {
    ballSpeedY *= -1;
    BOUNCE_SOUND.play();
  }

  if (ballY > canvas.height) {
    ballSpeedY *= -1;
  }

  // var paddleTopEdgeY = canvas.height - PADDLE_DIST_FROM_EDGE;
  // var paddleBottomEdgeY = paddleTopEdgeY + PADDE_THICKNESS / 2;
  // var paddleLeftEdgeX = paddleX;
  // var paddleRightEdgeX = paddleLeftEdgeX + PADDLE_WIDTH;
  // if (ballY > paddleTopEdgeY &&
  //   ballY <= paddleBottomEdgeY &&
  //   ballX > paddleLeftEdgeX &&
  //   ballX < paddleRightEdgeX) {
  //   ballSpeedY *= -1;
  //   BOUNCE_SOUND.play();
  //   var centerOfPaddleX = paddleX + PADDLE_WIDTH / 2;
  //   var ballDistFromPaddleCenterX = ballX - centerOfPaddleX;
  //   ballSpeedX = ballDistFromPaddleCenterX * 0.2;
  // }
}

function drawAll() {
  //draw game background
  colorRect(0, 0, canvas.width, canvas.height, 'black');

  //draw the ball
  colorCircle(ballX, ballY, 10, 'white');


  colorCircle(ballX*2, ballY*2, 10, 'white');


  colorCircle(ballX*3, ballY*3, 10, 'white');

  //draw the paddleX
  colorRect(paddleX, canvas.height - PADDLE_DIST_FROM_EDGE, PADDLE_WIDTH, PADDE_THICKNESS);

  colorText(mouseX + ',' + mouseY, mouseX, mouseY, 'yellow');

  drawBrick();

}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function colorText(showWords, textX, textY, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillText(showWords, textX, textY);
}

function drawBrick() {
  for (var i = 0; i < BRICK_COUNT; i++) {
    if(i != 0 ){
      colorRect((BRICK_W+2)*i, 0, BRICK_W, BRICK_H, '#eeeeee');
    }else{
      colorRect(0, 0, BRICK_W, BRICK_H, '#eeeeee');
    }
  }
  //colorRect(0, 0, BRICK_W, BRICK_H, '#eeeeee');
}