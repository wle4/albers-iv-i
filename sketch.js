//test

let clrs = {
  top:'red',
  m1: 'yellow',
  m2: 'green',
  bottom: 'blue',
  strip: 'purple',
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  //top
  fillRect(0, height/2, clrs.top);
  //bottom
  fillRect(height/2, height/2, clrs.bottom);
  //center strip
  strip();
  //top middle
  fillRect(height/3, height/6, clrs.m1); 
  //bottom middle
  fillRect(height/2, height/6, clrs.m2); 
  if(mouseIsPressed){
      //top
    fillRect(0, height/2, clrs.top);
    //bottom
    fillRect(height/2, height/2, clrs.bottom);
    strip(); 
    
  }
}

function fillRect(tp, hght, clr){
  fill(clr);
  noStroke();
  rect(0, tp, width, hght);
}

function strip(){
  //center
  fill(clrs.strip);
  rect(width/3, height/6, width/3, height * 2/3);
  
}
