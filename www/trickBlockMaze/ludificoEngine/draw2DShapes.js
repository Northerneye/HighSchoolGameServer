var dy = 0;
var dx = 0;
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
var rectColor = [0, 0, 0, 0];
var object = 0;
var objects = [];
var objectNumber = 0;
var xPosition = 0;
var yPosition = 0;
var s1Length = 0;
var s2Length = 0;
var dataStuff = [0, "", 0, 0, 0, 0];
var spriteID = 0;
var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var x3 = 0;
var y3 = 0;
var blockBounce = false;
var xBoxLength = 0;
var yBoxLength = 0;
var localVertex = [0, 0, 0, 0, 0, 0, 0, 0];
var rectx1 = [];
var recty1 = [];
var rectx2 = [];
var recty2 = [];
var xUser = 0;
var yUser = 0;
var x2User = 0;
var y2User = 0;
var stopit = false;
var xUserLength = 100;
var yUserLength = 100;
var gravity = 3;
var collision = false;
var rectBounce = false;
var rectOulineColor = [0, 0, 0, 0];
function controls2D()
{
	dx = 0;
	dy = 0;
	if (scrollWheel)
	{
		//userSpawn(0, 0);
	}
	if (charStr[jQuery.inArray("w", charStr)] == "w")
	{		
		dy -= 5;
	}
	if (charStr[jQuery.inArray("s", charStr)] == "s")
	{
		dy += 5;
	}
	if (charStr[jQuery.inArray("d", charStr)] == "d")
	{
		dx += 3;
	}
	if (charStr[jQuery.inArray("a", charStr)] == "a")
	{
		dx -= 3;
	}
	/*if (charStr == "q")
	{
		xUserLength -= 10;
		yUserLength += 10;
	}
	if (charStr == "e")
	{
		xUserLength += 10;
		yUserLength -= 10;
	}*/
	if (charCode == 32)
	{
		if(gravity == -3)
		{
			gravity = 3;
		}
		else
		{
			gravity = -3;
		}
	}
	if (charCode == 37)
	{
		dx -= 3;
	}
	if (charCode == 38)
	{
		dy -= 5;
	}
	if (charCode == 39)
	{
		dx += 3;
	}
	if (charCode == 40)
	{
		dy += 5;
	}
	if (charStr[jQuery.inArray("t", charStr)] == "t")
	{
		stopBlocks();
	}
}
function stopBlocks()
{
	dx = 0;
	dy = 0;
}
function userSpawn(x, y)
{
	xUser = x;
	yUser = y;
}
function triangleCollision2D(x1, y1, x2, y2, x3, y3)
{
	while(dy + yUser > (dx+xUser)*((y1-y2)/(x1-x2)) + (y1 - ((x1)*((y1-y2)/(x1-x2)))) && dy + yUser < (dx+xUser)*((y2-y3)/(x2-x3)) + (y2 - ((x2)*((y2-y3)/(x2-x3)))))
	{
		dy = 0;
		dx = 0;
		drawRect(600, 100, 100, 100, [255, 255, 0, 1], true, false, false);
	}/**/
	/*while(dy + yUser < (dx+xUser)*((y2+y3)/(x2+x3)))
	{
		dx = 0;
		dy = 0;
		drawRect(600, 600, 100, 100, [0, 255, 0, 1], true, false, false);
	}/**/
	/*while(dy + yUser > (dx+xUser)*((y2-y3)/(x2-x3)))
	{
		dy = 0;
		dx = 0;
		drawRect(600, 100, 100, 100, [0, 255, 0, 1], true, false);
	}/**/
	/*while(dy + yUser > (dx+xUser)*((y3-y1)/(x3-x1)))
	{
		dy = 0;
		dx = 0;
		drawRect(600, 100, 100, 100, [255, 0, 0, 1], true, false);
	}/**/
}
function rectCollision2D(xBlock, yBlock, xBlockLength, yBlockLength, blockBounce)
{
	while(dx + xUser < xBlock + xBlockLength && yUser < yBlock + yBlockLength && yUser + yUserLength > yBlock && xUser + xUserLength > xBlock + xBlockLength && xUser >= xBlock + xBlockLength)
	{
		if (!blockBounce)
		{
			dx += 1;
		}
		if (blockBounce)
		{
			dx = -dx+1;
		}
	}
	while(dy + yUser < yBlock + yBlockLength && xUser < xBlock + xBlockLength && xUser + xUserLength > xBlock && yUser + yUserLength > yBlock + yBlockLength && yUser >= yBlock + yBlockLength)
	{
		if (!blockBounce)
		{
			dy += 1;
		}
		if (blockBounce)
		{
			dy = -dy+1;
		}
	}
	while(dy + yUser + yUserLength > yBlock && xUser < xBlock + xBlockLength && xUser + xUserLength > xBlock && yUser + yUserLength <= yBlock + yBlockLength)
	{
		if (!blockBounce)
		{
			dy -= 1;
		}
		if(blockBounce)
		{
			dy = -dy-1;
		}
	}
	while(dx + xUser + xUserLength > xBlock && yUser < yBlock + yBlockLength && yUser + yUserLength > yBlock && xUser + xUserLength <= xBlock + xBlockLength)
	{
		if (!blockBounce)
		{
			dx -= 1;
		}
		if (blockBounce)
		{
			dx = -dx-1;
		}
	}
}
function physics2D()
{
	dy += gravity;
}
function wallCollision(bounce1, bounce2, bounce3, bounce4)
{
	while(dx + xUser < 0)
	{
		if(!bounce1)
		{
			dx = 0;
		}
		if(bounce1)
		{
			dx = -dx;
		}
	}
	while(dy + yUser + yUserLength > canvas.height)
	{
		if(!bounce2)
		{
			dy = 0;
		}
		if(bounce2)
		{
			dy = -dy+gravity;
		}
	}
	while(dy + yUser < 0)
	{
		if(!bounce3)
		{
			dy = 0;
		}
		if(bounce3)
		{
			dy = -dy+gravity;
		}
	}
	while(dx + xUser + xUserLength > canvas.width)
	{
		if(!bounce4)
		{
			dx = 0;
		}
		if(bounce4)
		{
			dx = -dx;
		}
	}
}
function movement2D()
{
	xUser += dx;
	yUser += dy;
}
/*
function rotate2D(xVertex, yVertex, radius, center)
{
	localVertex = [0, 0, 0, 0, 0, 0, 0, 0];
	for(var y = 0; y < canvas.height; y++)
	{
		if(Math.pow(xVertex[0]+1, 2) + Math.pow(y, 2) == Math.pow(radius, 2))
		{
			localVertex[0] = y;
		}
		if(Math.pow(xVertex[1]+1, 2) + Math.pow(y, 2) == Math.pow(radius, 2))
		{
			localVertex[2] = y;
		}
		if(Math.pow(xVertex[2]+1, 2) + Math.pow(y, 2) == Math.pow(radius, 2))
		{
			localVertex[4] = y; 
		}
		if(Math.pow(xVertex[3]+1, 2) + Math.pow(y, 2) == Math.pow(radius, 2))
		{
			localVertex[6] = y;
		}
	}
}*/
function clear()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	document.body.innerHTML = "";
}
function drawTriangle(x1, y1, x2, y2, x3, y3, triangleColor)
{
	triangleCollision2D(x1, y1, x2, y2, x3, y3);
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.lineTo(x3, y3);
	context.fillStyle = "rgba("+triangleColor[0]+","+triangleColor[1]+","+triangleColor[2]+","+triangleColor[3]+")";
	context.fill();
	context.closePath();
}
function drawTriangleOutline(x1, y1, x2, y2, x3, y3, triangleColor)
{
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.lineTo(x3, y3);
	context.lineTo(x1, y1);
	context.strokeStyle = "rgba("+triangleColor[0]+","+triangleColor[1]+","+triangleColor[2]+","+triangleColor[3]+")";
	context.stroke();
	context.closePath();
}
function drawSquare(x1, y1, sideLength, rectColor, collision, rectBounce)
{
	drawRect(x1, y1, sideLength, sideLength, rectColor, collision, rectBounce);
}
function drawRect(x1, y1, x2, y2, rectColor, collision, rectBounce, user)
{
	if (collision)
	{
		rectCollision2D(x1, y1, x2, y2, rectBounce);
	}
	if (user)
	{
		x1 = xUser;
		y1 = yUser;
		xUserLength = x2;
		yUserLength = y2;
	}
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x1, y1+y2);
	context.lineTo(x1+x2, y1+y2);
	context.lineTo(x1+x2, y1);
	context.lineTo(x1, y1);
	context.fillStyle = "rgba("+rectColor[0]+","+rectColor[1]+","+rectColor[2]+","+rectColor[3]+")";
	context.fill();
	context.closePath();
}
function drawRectOutline(x1, y1, x2, y2, rectColor, collision, rectBounce)
{
	if (collision)
	{
		rectCollision2D(x1, y1, x2, y2, rectBounce);
	}
	context.beginPath();
	context.moveTo(x1+x2, y1);
	context.lineTo(x1, y1);
	context.lineTo(x1, y1+y2);
	context.lineTo(x1+x2, y1+y2);
	context.lineTo(x1+x2, y1);
	context.strokeStyle = "rgba("+rectColor[0]+","+rectColor[1]+","+rectColor[2]+","+rectColor[3]+")";
	context.stroke();
	context.closePath();
}
function drawRectWithOutline(x1, y1, x2, y2, rectColor, rectOutlineColor, collision, rectBounce)
{
	drawRect(x1, y1, x2, y2, rectColor, collision, rectBounce);
	drawRectOutline(x1, y1, x2, y2, rectOutlineColor, false, false)
}
function drawSemiCircle(y1, x1, radius, circleColor)
{//no collision
	context.beginPath();
	context.arc(y1, x1, radius, 0, Math.PI);
	context.fillStyle = "rgba("+circleColor[0]+","+circleColor[1]+","+circleColor[2]+","+circleColor[3]+")";
	context.fill();
	context.closePath();
}
function drawCircle(y1, x1, radius, circleColor)
{
	context.beginPath();
	context.arc(y1, x1, radius, 0, 2*Math.PI);
	context.fillStyle = "rgba("+circleColor[0]+","+circleColor[1]+","+circleColor[2]+","+circleColor[3]+")";
	context.fill();
	context.closePath();
}
function drawCustomCircle(y1, x1, radius, cut, pi, circleColor)
{
	context.beginPath();
	context.arc(y1, x1, radius, cut, pi);
	context.fillStyle = "rgba("+circleColor[0]+","+circleColor[1]+","+circleColor[2]+","+circleColor[3]+")";
	context.fill();
	context.closePath();
}
function drawCutCircle(y1, x1, radius, cut, circleColor)
{
	context.beginPath();
	context.arc(y1, x1, radius, cut, 2*Math.PI);
	context.fillStyle = "rgba("+circleColor[0]+","+circleColor[1]+","+circleColor[2]+","+circleColor[3]+")";
	context.fill();
	context.closePath();
}
function drawSemiCircleOutline(y1, x1, radius, circleColor)
{
	context.beginPath();
	context.arc(y1, x1, radius, 0, Math.PI);
	context.strokeStyle = "rgba("+circleColor[0]+","+circleColor[1]+","+circleColor[2]+","+circleColor[3]+")";
	context.stroke();
	context.closePath();
}
function drawCircleOutline(y1, x1, radius, circleColor)
{
	context.beginPath();
	context.arc(y1, x1, radius, 0, 2*Math.PI);
	context.strokeStyle = "rgba("+circleColor[0]+","+circleColor[1]+","+circleColor[2]+","+circleColor[3]+")";
	context.stroke();
	context.closePath();
}
function drawCustomCircleOutline(y1, x1, radius, cut, pi, circleColor)
{
	context.beginPath();
	context.arc(y1, x1, radius, cut, pi);
	context.strokeStyle = "rgba("+circleColor[0]+","+circleColor[1]+","+circleColor[2]+","+circleColor[3]+")";
	context.stroke();
	context.closePath();
}
function drawCutCircleOutline(y1, x1, radius, cut, circleColor)
{
	context.beginPath();
	context.arc(y1, x1, radius, cut, 2*Math.PI);
	context.strokeStyle = "rgba("+circleColor[0]+","+circleColor[1]+","+circleColor[2]+","+circleColor[3]+")";
	context.stroke();
	context.closePath();
}
function drawSemiCircleWithOutline(y1, x1, radius, circleColor, circleOutlineColor)
{
	context.beginPath();
	context.arc(y1, x1, radius, 0, Math.PI);
	context.fillStyle = "rgba("+circleColor[0]+","+circleColor[1]+","+circleColor[2]+","+circleColor[3]+")";
	context.fill();
	context.strokeStyle = "rgba("+rectOutlineColor[0]+","+rectOutlineColor[1]+","+rectOutlineColor[2]+","+rectOutlineColor[3]+")";
	context.stroke();
	context.closePath();
}
function drawCircleWithOutline(y1, x1, radius, circleColor, circleOutlineColor)
{
	context.beginPath();
	context.arc(y1, x1, radius, 0, 2*Math.PI);
	context.fillStyle = "rgba("+circleColor[0]+","+circleColor[1]+","+circleColor[2]+","+circleColor[3]+")";
	context.fill();
	context.strokeStyle = "rgba("+rectOutlineColor[0]+","+rectOutlineColor[1]+","+rectOutlineColor[2]+","+rectOutlineColor[3]+")";
	context.stroke();
	context.closePath();
}
function drawCustomCircleWithOutline(y1, x1, radius, cut, pi, circleColor, circleOutlineColor)
{
	context.beginPath();
	context.arc(y1, x1, radius, cut, pi);
	context.fillStyle = "rgba("+circleColor[0]+","+circleColor[1]+","+circleColor[2]+","+circleColor[3]+")";
	context.fill();
	context.strokeStyle = "rgba("+rectOutlineColor[0]+","+rectOutlineColor[1]+","+rectOutlineColor[2]+","+rectOutlineColor[3]+")";
	context.stroke();
	context.closePath();
}
function drawCutCircleWithOutline(y1, x1, radius, cut, circleColor, circleOutlineColor)
{
	context.beginPath();
	context.arc(y1, x1, radius, cut, 2*Math.PI);
	context.fillStyle = "rgba("+circleColor[0]+","+circleColor[1]+","+circleColor[2]+","+circleColor[3]+")";
	context.fill();
	context.strokeStyle = "rgba("+rectOutlineColor[0]+","+rectOutlineColor[1]+","+rectOutlineColor[2]+","+rectOutlineColor[3]+")";
	context.stroke();
	context.closePath();
}
/*function turn8Bit()
{
	var bitData = [];
	var k = 0;
	var m = 0;
	var bitWidth = canvas.width/8;
	var bitHeight = canvas.height/8;
	for(var j = 0; j <= canvas.height; j++)
	{
		if (j >= 7 * bitHeight)
		{
			k = 7 * bitHeight;
		}
		if (j >= 6 * bitHeight)
		{
			k = 6 * bitHeight;
		}
		if (j >= 5 * bitHeight)
		{
			k = 5 * bitHeight;
		}
		if (j >= 4 * bitHeight)
		{
			k = 4 * bitHeight;
		}
		if (j >= 3 * bitHeight)
		{
			k = 3 * bitHeight;
		}
		if (j >= 2 * bitHeight)
		{
			k = 2 * bitHeight;
		}
		if (j >= bitHeight)
		{
			k = bitHeight;
		}
		if (j < bitHeight)
		{
			k = 0;
		}
		for(var l = 0; l <= canvas.width; l++)
		{
			if (l >= 7 * bitWidth)
			{
				m = 7 * bitWidth;
			}
			if (l >= 6 * bitWidth)
			{
				m = 6 * bitWidth;
			}
			if (l >= 5 * bitWidth)
			{
				m = 5 * bitWidth;
			}
			if (l >= 4 * bitWidth)
			{
				m = 4 * bitWidth;
			}
			if (l >= 3 * bitWidth)
			{
				m = 3 * bitWidth;
			}
			if (l >= 2 * bitWidth)
			{
				m = 2 * bitWidth;
			}
			if (l >= bitWidth)
			{
				m = bitWidth;
			}
			if (l < bitWidth)
			{
				m = 0;
			}
			for(var a = 0; a <= bitHeight; a++)
			{
				for(var b = 0; b < bitWidth; b++)
				{
					var bitStoof = document.getElementById("gameCanvas").getContext("2d");
					var bitStuff = bitStoof.getImageData(k + a, m + b, 1, 1);
					for (var g = 0; g < 4 * b; g += 4)
					{
						bitData[g] = bitStuff.data[g];
						bitData[g+1] = bitStuff.data[g+1];
						bitData[g+2] = bitStuff.data[g+2];
						bitData[g+3] = bitStuff.data[g+3];
						if(a == bitHeight && b == bitWidth || a == 2 * bitHeight && b == 2 * bitWidth || a == 3 * bitHeight && b == 3 * bitWidth || a == 4 * bitHeight && b == 4 * bitWidth || a == 5 * bitHeight && b == 5 * bitWidth || a == 6 * bitHeight && b == 6 * bitWidth || a == 7 * bitHeight && b == 7 * bitWidth || a == 8 * bitHeight && b == 8 * bitWidth)
						{
							var red = 0;
							var green = 0;
							var blue = 0;
							var t = 0;
							for (var g = 0; g <= bitWidth * bitWidth; g += 4)
							{
								t += 1;
								red += bitData[g];
							}
							red = red/t;
							bitData[0] = red;
							t = 0;
							for (var g = 1; g <= bitWidth * bitWidth; g += 4)
							{
								t += 1;
								green += bitData[g];
							}
							green = green/t;
							bitData[1] = green;
							t = 0;
							for (var g = 2; g <= bitWidth * bitWidth; g += 4)
							{
								t += 1;
								blue += bitData[g];
							}
							blue = blue/t;
							bitData[2] = blue;
							t = 0;
							for (var g = 3; g <= bitWidth * bitWidth; g += 4)
							{
								t += 1;
								alpha += bitData[g];
							}
							alpha = alpha/t;
							bitData[3] = alpha;
							t = 0;
							for (var g = 0; g <= bitWidth * bitWidth; g += 1)
							{
								bitStoof.putImageData(bitData, 0, 0)
							}
						}
					}
				}
			}
		}
	}
}/**/