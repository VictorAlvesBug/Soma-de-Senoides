class Wave
{
	constructor(type)
	{
		this.amplitude = 50;
		this.wavelength = 50;
		this.xStart = 0;

		this.xAxis = height/10;

		switch(type)
		{
			case 1:
				this.color = color(255, 0, 0);
				//this.xAxis = 60;
			break;
			
			case 2:
				this.color = color(0, 255, 0);
				//this.xAxis = 160;
			break;
			
			case 3:
				this.color = color(0, 0, 255);
				//this.xAxis = 260;
			break;
			
			case 4:
				this.color = color(255, 255, 0);
				//this.xAxis = 360;
			break;
		}	
	}

	getPartialHeight(index)
	{
		let ds = (index + (this.xStart/100)*this.wavelength*4) % this.wavelength;
		let angle = map(ds, 0, this.wavelength, 0, TWO_PI);

		return this.amplitude*sin(angle);
	}

	show()
	{
		noFill();
		strokeWeight(2);
		stroke(this.color);

		beginShape();

		for(let i=0; i<800; i++)
		{
			vertex(200 + i, this.xAxis + this.getPartialHeight(i));
		}

		endShape();
	}
}