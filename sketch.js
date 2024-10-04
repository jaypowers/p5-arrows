// p5.js setup function
let arrow1, arrow2;
let composedArrow;
let test;

function setup() {
    createCanvas(windowWidth, windowHeight);
    arrow1 = new Arrow(createVector(50, 200), createVector(200, 200));
    arrow2 = new Arrow(createVector(200, 200), createVector(350, 200));
    composedArrow = arrow1.compose(arrow2);
    log("Hello World2");
}

// p5.js draw function
function draw() {
  background(51);
  fill(255);
  stroke(0);
  arrow1.display();
  arrow2.display();
  composedArrow.display();

  // my_test.js

  // create a new test object
  test = new Test('Equality test');
  test.test(1, 1);  // Test passed!
  
  // No continuous drawing needed
  noLoop();
}