let orangePos = 200;
let ballPos = 270;

function setup() {
  createCanvas(600,600)
  background(100);
}

function draw() {
  //constructing the stadium and the ball ⚽ 
  fill(255, 255, 0)
  circle(260, 280, 500)
  fill(0, 255, 0)
  ellipse(260, 280, 400)
  fill(0,0,0)
  rect(190, 120, 120, 10)
  fill(0,0,0)
  rect(190, 420, 120, 10)
  fill(255,255, 255)
  circle(260, 270, 110)
  // the ball
  fill(255, 0, 0)
  ellipse(260, ballPos, 20, 20)
  ballPos = ballPos + 1;
  addPlayers();
}

function addPlayers() {
  //blue goalkeeper
  fill(0, 0, 255)
  square(width/2 - 110, height/2 + 70, 30)
  //orange goalkeeper
  fill(255, 165, 0)
  square(width/2 - 60, height/2 - 160, 30)
  //orange striker - to hit the ball
  fill(255, 165, 0)
  square(width/2 - 60, orangePos, 30)
  orangePos = orangePos + 1
  //blue striker
  fill(0, 0, 255)
  square(width/2 + 20, height/2 - 10, 30)
  
}
