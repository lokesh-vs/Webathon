let x = 500;
let y = 500;
let contraction=true; // Boolean variable to control expansion
let canvas; // Reference to the p5.js canvas
let stepSize = 0.1389; // Rate of expansion and contraction

function setup() {
  let canvasContainer = document.getElementById("StartEx");
  canvas = createCanvas(500, 500); // Create a canvas
  canvas.parent(canvasContainer); // Set the canvas parent to StartEx div
  noStroke();
  fill("skyblue");
}

function draw() {
  clear(); // Clear canvas on each frame
  drawcircle();
  if(contraction){
    contractcircle();
  }
}

function drawcircle() {
  ellipse(width / 2, height / 2, x, y); // Center the circle
}

function contractcircle() {
  x -= stepSize;
  y -= stepSize;
  if (x <= 0 && y <= 0) {
    x = 0;
    y = 0;
    contraction=false; // Switch back to expansion phase
  }
}
