function setup() {
  let canvas = createCanvas(windowWidth, windoeHeight);
  canvas.id("p5-canvas");
  background(220);
}

function draw() {
  stroke(255, 80)
  line(width / 2, height / 2, mouseX, mouseY)
}