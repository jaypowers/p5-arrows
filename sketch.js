// p5.js setup function
function setup() {
    createCanvas(windowWidth, windowHeight);
    let arrow1 = new Arrow(createVector(50, 200), createVector(200, 200));
    let arrow2 = new Arrow(createVector(200, 200), createVector(350, 200));
    let composedArrow = arrow1.compose(arrow2);
    arrow1.display();
    arrow2.display();
    composedArrow.display();
}

// p5.js draw function
function draw() {
  background(51);
  // No continuous drawing needed
  noLoop();
}