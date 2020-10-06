let a = 0;

function setup() {
  createCanvas(400, 400); 
  n_slider = createSlider(1, 30, 4, 1);
}

function draw() {
  background(220);
  translate(width/2, height/2);
  
  noFill();
  circle(0,0, 200);
  
  // a is the angle that decides the speed of the animation
  a += 0.01;
  
  fill(255,0,255);
  
  // n is the number of dots
  n = n_slider.value();
  
  for (let i = 0; i < n; i++) {
    rotate(PI/n);
    line(-100,0, 100,0); // trajectory line
  }
  
  for (let i = 0; i < n; i++) {
    // rotate every time you draw a new dot and then draw a cirle and move it in a straight trajectory
    rotate(PI/n);
    x = cos(a + (n-i)*PI/n) * 100;
    circle(x, 0, 10);
  }
  
}
