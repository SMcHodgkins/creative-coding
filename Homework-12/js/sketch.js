var x= 50;
var y= 50;
var x1= 600;
var y1= 200;
var d=60;
var s=4;
var s1=6;
var x2=165;
var y2=600;
var d2=150;
var s2=1;
var s3=2;
var s4=5;
var ts=12;
var mousex = 0;
var mousey = 0;
function setup()
   {
       createCanvas(800,800);
   }
   function draw(){
    background(137)
   exit()
   player()
   movement()
   victory()
   hazard1()
   hazard2()
   addCircle()
}
function movement(){
  if (keyIsDown(LEFT_ARROW)){
    x-=s4
  }
  else if (keyIsDown(RIGHT_ARROW)){
    x+=s4
  }
  else if (keyIsDown(UP_ARROW)){
    y-=s4
  }
  else if (keyIsDown(DOWN_ARROW)){
    y+=s4
  }
  if (x==800){
    x=0
  }
  else if(x==0){
    x=800
  }
}
function player(){
  fill(50,100,56);
  square(x,y,40);
}
function exit(){
  fill(0);
  textSize(ts)
  text('Exit',725,725);
  rect(765,725,10,100);
  rect(695,725,10,100);
}
function victory(){
  if(y>=height && x>=695){
    d=0
    d2=0
    textSize(40);
    text('You win!',350,400);
  }
}
function hazard1(){
  fill(256,60,80);
  circle(x1,y1,d);
  if (x1>=width-d/2 || x1<= 0+d/2){
    s*=-1;
  }
    else if (y1>=height-d/2 || y1 <= d/2){
  s1*=-1;
  }
  x1+=s;
  y1+=s1;
}
function hazard2(){
  fill(200,130,65);
  circle(x2,y2,d2);
  if (x2>=width-d2/2 || x2<= 0+d2/2){
    s2*=-1;
  }
    else if (y2>=height-d2/2 || y2 <= d2/2){
  s3*=-1;
  }
  x2+=s2;
  y2+=s3;
}
function addCircle(){
    ellipse(mouseX, mouseY, 5, 5);}
function mouseMoved(){
      mousex = mouseX;
      mousey = mouseY;

    }
