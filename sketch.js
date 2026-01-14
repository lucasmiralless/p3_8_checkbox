var l1=document.getElementById ("llum1");
var l2=document.getElementById ("llum2");

var relleno2 = 0;
var relleno1=0;

function setup() {
  var c=createCanvas(400, 400);
  c.parent ("canvasWrapper");
}

function draw() {
  background(220);
  if (l1.checked){
      relleno1= 255;
      relleno2=0;
      fill (255); 
  }else{
      fill (0);
      relleno1= 0;
      relleno2=255;
  }

  if (l2.checked){
    relleno2 = 255;
  }else{
    relleno2 = 0;
  }
noStroke ();
  fill (relleno1);
  rect (0,0,width/2,height);
  fill (relleno2);
  rect (width/2,0, width,height);
}
