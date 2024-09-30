function setup() {
    createCanvas(500, 500);
    background("purple");
  }
  
  function draw() {
  
    stroke("white");
    fill("violet");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }