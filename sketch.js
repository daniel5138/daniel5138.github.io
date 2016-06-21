var colors=[];
var size;
var osc;
var notes=[]
function setup() {

createCanvas(window.innerWidth, window.innerHeight);
colors[0]=color(149,255,44);
colors[1]=color(40,232,147);
colors[2]=color(22,142,255);
colors[3]=color(96,8,232);
colors[4]=color(255,48,134);
frameRate(60);
size=100;

notes=[49.00,466.16,65.41,2217.46,73.42,87.31,196.00]

osc=new p5.Oscillator();
osc.setType('sine');
osc.freq(300);
osc.amp(0.5);
osc.start();

delay = new p5.Delay()
}




function draw() {
	//background(225);
	//size=ramdom(100)
   
   if (size<100){size++;}
   if (size==100){size=1;}
	fill(255,3);
	 rect(0,0,width,height);

	if (mouseIsPressed){
		fill(colors[parseInt(random(5))]);
	}else fill(255);

	ellipse(mouseX,mouseY,size,size);
	ellipse(width-mouseX,mouseY,size,size);
	ellipse(mouseX,height-mouseY,size,size);
	ellipse(width-mouseX,height-mouseY,size,size);


if (mouseX>0&&mouseX<=width/6) {osc.freq(notes[0]);}
if (mouseX>width/6&&mouseX<=2*width/6) {osc.freq(notes[1]);}
if (mouseX>2*width/6&&mouseX<=3*width/6) {osc.freq(notes[2]);}
if (mouseX>3*width/6&&mouseX<=4*width/6) {osc.freq(notes[3]);}
if (mouseX>4*width/6&&mouseX<=5*width/6) {osc.freq(notes[4]);}

  
}