var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
var xSideLength = 0;
var y1SideLength = 0;
var cubeColor = [0,0,0];
var backSide = false;
function drawCube(x1, y1, sideLength, cubeColor, cameraAngle, backSide)
{
	var cubeVertex = [x1, y1, sideLength];
	xSideLength = sideLength;
	y1SideLength = sideLength;
	y2SideLength = sideLength/2;
	for(var i = 0; i<1; i++)
	{
		context.beginPath();
		context.moveTo(x1-xSideLength,y1-y2SideLength);
		context.lineTo(x1+xSideLength,y1-y2SideLength);
		context.lineTo(x1, y1);
		context.fillStyle = "rgba("+cubeColor[0]+","+cubeColor[1]+","+cubeColor[2]+", .75)";
		context.fill();
		context.closePath();
		
		context.beginPath();
		context.moveTo(x1+xSideLength,y1-y2SideLength);
		context.lineTo(x1-xSideLength,y1-y2SideLength);
		context.lineTo(x1, y1-y1SideLength);
		context.fillStyle = "rgba("+cubeColor[0]+","+cubeColor[1]+","+cubeColor[2]+", .75)";
		context.fill();
		context.closePath();
		
		
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x1+xSideLength,y1-y2SideLength);
		context.lineTo(x1, y1+y1SideLength);
		context.fillStyle = "rgba("+cubeColor[0]+","+cubeColor[1]+","+cubeColor[2]+", 1)";
		context.fill();
		context.closePath();
		
		context.beginPath();
		context.moveTo(x1+xSideLength, y1-y2SideLength);
		context.lineTo(x1, y1+y1SideLength);
		context.lineTo(x1+xSideLength, y1+y2SideLength);
		context.fillStyle = "rgba("+cubeColor[0]+","+cubeColor[1]+","+cubeColor[2]+", 1)";
		context.fill();
		context.closePath();
		
		
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x1-xSideLength, y1-y2SideLength);
		context.lineTo(x1, y1+y1SideLength);
		context.fillStyle = "rgba("+cubeColor[0]+","+cubeColor[1]+","+cubeColor[2]+", .5)";
		context.fill();
		context.closePath();
		
		context.beginPath();
		context.moveTo(x1-xSideLength, y1-y2SideLength);
		context.lineTo(x1, y1+y1SideLength);
		context.lineTo(x1-xSideLength, y1+y2SideLength);
		context.fillStyle = "rgba("+cubeColor[0]+","+cubeColor[1]+","+cubeColor[2]+", .5)";
		context.fill();
		context.closePath();
		
		if (backSide)
		{
			context.beginPath();
			context.moveTo(x1+xSideLength,y1+y2SideLength);
			context.lineTo(x1-xSideLength,y1+y2SideLength);
			context.lineTo(x1, y1);
			context.fillStyle = "rgba("+cubeColor[0]+","+cubeColor[1]+","+cubeColor[2]+", .75)";
			context.fill();
			context.closePath();
			
			context.beginPath();
			context.moveTo(x1-xSideLength,y1+y2SideLength);
			context.lineTo(x1+xSideLength,y1+y2SideLength);
			context.lineTo(x1, y1+y1SideLength);
			context.fillStyle = "rgba("+cubeColor[0]+","+cubeColor[1]+","+cubeColor[2]+", .75)";
			context.fill();
			context.closePath();
			
			
			context.beginPath();
			context.moveTo(x1, y1);
			context.lineTo(x1-xSideLength,y1+y2SideLength);
			context.lineTo(x1, y1-y1SideLength);
			context.fillStyle = "rgba("+cubeColor[0]+","+cubeColor[1]+","+cubeColor[2]+", .5)";
			context.fill();
			context.closePath();
			
			context.beginPath();
			context.moveTo(x1-xSideLength, y1+y2SideLength);
			context.lineTo(x1, y1-y1SideLength);
			context.lineTo(x1-xSideLength, y1-y2SideLength);
			context.fillStyle = "rgba("+cubeColor[0]+","+cubeColor[1]+","+cubeColor[2]+", .5)";
			context.fill();
			context.closePath();
			
			
			context.beginPath();
			context.moveTo(x1, y1);
			context.lineTo(x1+xSideLength, y1+y2SideLength);
			context.lineTo(x1, y1-y1SideLength);
			context.fillStyle = "rgba("+cubeColor[0]+","+cubeColor[1]+","+cubeColor[2]+", 1)";
			context.fill();
			context.closePath();
			
			context.beginPath();
			context.moveTo(x1+xSideLength, y1+y2SideLength);
			context.lineTo(x1, y1-y1SideLength);
			context.lineTo(x1+xSideLength, y1-y2SideLength);
			context.fillStyle = "rgba("+cubeColor[0]+","+cubeColor[1]+","+cubeColor[2]+", 1)";
			context.fill();
			context.closePath();
		}
	}
}
function drawRectangularPrism()
{
	
}
function collision3D()
{
	
}
