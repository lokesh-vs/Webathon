let x = 0;
let y = 0;
let expanding=true;
let canvas; // Reference to the p5.js canvas

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
  if (expanding) {
    expandcircle();
  }
  else{
    contractcircle();
  }
}

function drawcircle() {
  ellipse(width / 2, height / 2, x, y); // Center the circle
}

function expandcircle() {
  x += 1.8;
  if (x > width) {
    x = width; // Set x to maximum width
    y = height; // Set y to maximum height
    expanding = false;
  }
  y += 1.8;
  if (y > height) {
    x = width; // Set x to maximum width
    y = height; // Set y to maximum height
    expanding = false;
  }
}

function contractcircle() {
  x -= 1.8;
  y -= 1.8;
  if (x <= 0 && y <= 0) {
    x = 0;
    y = 0;
    expanding=true; // Switch back to expansion phase
  }
}