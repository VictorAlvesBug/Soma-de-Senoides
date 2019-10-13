var amplitude1;
var wavelength1;
var xStart1;
var amplitude2;
var wavelength2;
var xStart2;
var amplitude3;
var wavelength3;
var xStart3;
var amplitude4;
var wavelength4;
var xStart4;

var wave1;
var wave2;
var wave3;
var wave4;

let slidersHeight;

function setup()
{
	createCanvas(1000, 600);

	wave1 = new Wave(1);
	wave2 = new Wave(2);
	wave3 = new Wave(3);
	wave4 = new Wave(4);

	let q1 = 0*height/4;
	let q2 = 1*height/4;
	let q3 = 2*height/4;
	let q4 = 3*height/4;

	slidersHeight = (height/4)*(9/10);

	//SLIDERS
	amplitude1 = createSlider(-50, 50, 30);
  	amplitude1.position(20, q1+slidersHeight/2-20);
  	amplitude1.size(150, 20);
	wavelength1 = createSlider(1, 300, 50);
  	wavelength1.position(20, q1+slidersHeight/2);
  	wavelength1.size(150, 20);
	xStart1 = createSlider(0, 100, 0);
  	xStart1.position(20, q1+slidersHeight/2+20);
  	xStart1.size(150, 20);
  	
	amplitude2 = createSlider(-50, 50, 30);
  	amplitude2.position(20, q2+slidersHeight/2-20);
  	amplitude2.size(150, 20);
	wavelength2 = createSlider(1, 300, 100);
  	wavelength2.position(20, q2+slidersHeight/2);
  	wavelength2.size(150, 20);
	xStart2 = createSlider(0, 100, 0);
  	xStart2.position(20, q2+slidersHeight/2+20);
  	xStart2.size(150, 20);
  	
	amplitude3 = createSlider(-50, 50, 0);
  	amplitude3.position(20, q3+slidersHeight/2-20);
  	amplitude3.size(150, 20);
	wavelength3 = createSlider(1, 300, 50);
  	wavelength3.position(20, q3+slidersHeight/2);
  	wavelength3.size(150, 20);
	xStart3 = createSlider(0, 100, 0);
  	xStart3.position(20, q3+slidersHeight/2+20);
  	xStart3.size(150, 20);
  	
	amplitude4 = createSlider(-50, 50, 0);
  	amplitude4.position(20, q4+slidersHeight/2-20);
  	amplitude4.size(150, 20);
	wavelength4 = createSlider(1, 300, 50);
  	wavelength4.position(20, q4+slidersHeight/2);
  	wavelength4.size(150, 20);
	xStart4 = createSlider(0, 100, 0);
  	xStart4.position(20, q4+slidersHeight/2+20);
  	xStart4.size(150, 20);
}

function draw()
{
	background(0);

	///////////////////////////

	noStroke();
	fill(wave1.color);
	rect(amplitude1.x-10, amplitude1.y-40, 170, slidersHeight);

	wave1.amplitude = amplitude1.value();
	wave1.wavelength = wavelength1.value();
	wave1.xStart = xStart1.value();

	///////////////////////////

	noStroke();
	fill(wave2.color);
	rect(amplitude2.x-10, amplitude2.y-40, 170, slidersHeight);

	wave2.amplitude = amplitude2.value();
	wave2.wavelength = wavelength2.value();
	wave2.xStart = xStart2.value();
	
	///////////////////////////

	noStroke();
	fill(wave3.color);
	rect(amplitude3.x-10, amplitude3.y-40, 170, slidersHeight);

	wave3.amplitude = amplitude3.value();
	wave3.wavelength = wavelength3.value();
	wave3.xStart = xStart3.value();
	
	///////////////////////////

	noStroke();
	fill(wave4.color);
	rect(amplitude4.x-10, amplitude4.y-40, 170, slidersHeight);

	wave4.amplitude = amplitude4.value();
	wave4.wavelength = wavelength4.value();
	wave4.xStart = xStart4.value();
	
	///////////////////////////

	wave4.show();
	wave3.show();
	wave2.show();
	wave1.show();

	generateSumWave();
}

function generateSumWave()
{
	noFill();
	stroke(255);
	strokeWeight(2);

	beginShape();
	for(let i=0; i<800; i++)
	{
		let h1 = wave1.getPartialHeight(i);
		let h2 = wave2.getPartialHeight(i);
		let h3 = wave3.getPartialHeight(i);
		let h4 = wave4.getPartialHeight(i);

		vertex(200 + i, (6*height/10) + (h1+h2+h3+h4));
	}
	endShape();
}