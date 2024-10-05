// p5.js setup function
let arrow1, arrow2;
let composedArrow;

function setup() {
    createCanvas(windowWidth, windowHeight);
    arrow1 = new Arrow(createVector(50, 200), createVector(200, 200));
    arrow2 = new Arrow(createVector(200, 200), createVector(350, 200));
    composedArrow = arrow1.compose(arrow2);
    console.log("Hello World2");
}

// p5.js draw function
function draw() {
  background(51);
  fill(255);
  stroke(0);
  arrow1.display();
  arrow2.display();
  composedArrow.display();

  console.log("Hello from my_test.js!");
  
  // No continuous drawing needed
  noLoop();
}