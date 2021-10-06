let rotateIndex = 45;
let rotateYIndex = 45;
let rotateZIndex = 45;
let img;
let squareimg;
let font;
let pg;

function preload() {
    img = loadImage("https://cdn.insidesport.co/wp-content/uploads/2021/04/26105235/IPL-2020-2-1-1-7.jpg")
  
  //alert("Hover over the green sphere for spookiness")
}

function setup() {
  createCanvas(600, 600, WEBGL);
  pg = createGraphics(256, 256);
  pg.text('Spookiness, please', 0, 500)
}

function draw() {
    
  rotateIndex = rotateIndex + 1;
  rotateYIndex = rotateYIndex + 1;
  rotateZIndex = rotateZIndex + 1;
  
  //let dirY = (mouseY / height - 0.5) * 3;
//let dirX = (mouseX / width - 0.5)  * 3;
//directionalLight(250, 250, 250, dirX, -dirY, 0.25);
  
  background(220);
  
  
  fill(255,165,80)
  texture(img)
  cone(360)
  fill(255, 0, 0)
  translate(50, 50, 360)
  rotateX(radians(rotateIndex))
  rotateY(radians(rotateYIndex))
  rotateZ(radians(rotateZIndex))
  box(60, 60, 60);
}
