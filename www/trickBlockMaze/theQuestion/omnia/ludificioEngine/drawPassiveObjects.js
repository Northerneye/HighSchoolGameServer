var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var rectColor = [];
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
var binDirectory = "";
var textString = "";
var localX2 = 0;
var localX = 0;
var localY = 0;
var localString = "";
var localDirectory = [];
function drawPassiveRect(x1, y1, x2, y2, rectColor)
{
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x1+x2, y1);
	context.lineTo(x1+x2, y1+y2);
	context.lineTo(x1, y1+y2);
	context.lineTo(x1, y1);
	context.fillStyle = "rgba("+rectColor[0]+","+rectColor[1]+","+rectColor[2]+","+rectColor[3]+")";
	context.fill()
	context.closePath();
}
function drawPassiveRectOutline(x1, y1, x2, y2, rectColor)
{
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x1+x2, y1);
	context.lineTo(x1+x2, y1+y2);
	context.lineTo(x1, y1+y2);
	context.lineTo(x1, y1);
	context.strokeStyle = "rgba("+rectColor[0]+","+rectColor[1]+","+rectColor[2]+","+rectColor[3]+")";
	context.stroke();
	context.closePath();
}
function drawPassiveRectTexture(x1, y1, x2, y2, address)
{
	texture = document.createElement("img");
	texture.src = address;
	context.drawImage(texture, x1, y1, x2, y2);
}
function drawText(x1, y1, x2, y2, textString, binDirectory)
{
	for(var i = 0; i <= textString.length-1; i++)
	{
		localDirectory[i] = binDirectory;
	}
	for(var i = 0; i <= textString.length-1; i++)
	{
		if(textString.charAt(i) !== textString.charAt(i).toUpperCase())
		{
			localDirectory[i] += "lowerCase/";
		}
		if(textString.charAt(i) !== textString.charAt(i).toLowerCase())
		{
			localDirectory[i] += "upperCase/";
		}
		drawPassiveRectTexture(x1+(i*x2/textString.length-1), y1, x2/textString.length-1, y2, localDirectory[i]+textString.charAt(i)+".png");
	}
}
function onRectButton(x1, y1, x2, y2)
{
	if(mouseXPos > x1 && mouseXPos < x1+x2 && mouseYPos > y1 && mouseYPos < y1+y2 && isLeftMouseDown)
	{
		return true;
	}
}
function mouseOver(x1, y1, x2, y2)
{
	if(mouseXPos > x1 && mouseXPos < x1+x2 && mouseYPos > y1 && mouseYPos < y1+y2)
	{
		return true;
	}
}