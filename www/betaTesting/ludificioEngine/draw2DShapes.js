var dy = [[]];
var dx = [[]];
var dxMem = [];
var dyMem = [];
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
var rectId = -1;
var rectColor = [0, 0, 0, 0];
var s1Length = 0;
var s2Length = 0;
var dataStuff = [0, "", 0, 0, 0, 0];
var spriteId = 0;
var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var x3 = 0;
var y3 = 0;
var trix1 = 0;
var triy1 = 0;
var trix2 = 0;
var triy2 = 0;
var trix3 = 0;
var triy3 = 0;
var blockBounce = false;
var localVertex = [0, 0, 0, 0, 0, 0, 0, 0];
var gravity = 1;
var collision = false;
var rectBounce = false;
var rectOulineColor = [0, 0, 0, 0];
var triangleCollide = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var sprite2dId = 0;
var maxSprites = 0;
var spriteX1 = [];
var spriteY1 = [];
var spriteX2 = [];
var spriteY2 = [];
var spriteX3 = [];
var spriteY3 = [];
var spriteDrawX1 = [];
var spriteDrawY1 = [];
var spriteDrawX2 = [];
var spriteDrawY2 = [];
var spriteDrawX3 = [];
var spriteDrawY3 = [];
var spriteUser = [[]];
var triangleId = 0;
var isUser = false;
var pointXPri = 1;
var pointYPri = 1;
var sprited = [[]];
var spriteId = 0;
var localDX = 0;
var localDY = 0;
var user = false;
var movable = false;
var drawn = [[]];
var spriteCollision = [[]];
var clearVarInit = [];
var spriteDrawColorR = [];
var spriteDrawColorG = [];
var spriteDrawColorB = [];
var spriteDrawColorA = [];
var textureId = 0;
var address = "";
var texture;
var exception = [[[]]];
var xWidth = 0;
var yWidth = 0;
var wallColor = [];
var roomId = -1;
var doorSide = [""];
var doorLength = [];
var doorDistance = [];
var spriteDef = [[""]];
var textureSprited = [];
var spriteTexture = [];
function disconnectedCamera()
{
	for (var i = maxSprites; i >= 0; i--)
	{
		spriteX1[i] += dx[i];
		spriteX2[i] += dx[i];
		spriteX3[i] += dx[i];
		spriteY1[i] += dy[i];
		spriteY2[i] += dy[i];
		spriteY3[i] += dy[i];
		spriteDrawX1[i] += dx[i];
		spriteDrawX2[i] += dx[i];
		spriteDrawX3[i] += dx[i];
		spriteDrawY1[i] += dy[i];
		spriteDrawY2[i] += dy[i];
		spriteDrawY3[i] += dy[i];
		if(spriteCollision[spriteId])
		{
			spriteDrawX1[spriteId] = spriteX1[spriteId];
			spriteDrawX2[spriteId] = spriteX2[spriteId];
			spriteDrawX3[spriteId] = spriteX3[spriteId];
			spriteDrawY1[spriteId] = spriteY1[spriteId];
			spriteDrawY2[spriteId] = spriteY2[spriteId];
			spriteDrawY3[spriteId] = spriteY3[spriteId];
		}
	}
}
function connectedCamera()
{
	for (var i = maxSprites; i >= 0; i--)
	{
		if (spriteUser[i] == true)
		{
			localDX = -(dx[i]);
			localDY = -(dy[i]);
		}
	}
	for (var i = maxSprites; i >= 0; i--)
	{
		if (spriteUser[i] !== true)
		{
			spriteX1[i] += (localDX-dx[i]);
			spriteX2[i] += (localDX-dx[i]);
			spriteX3[i] += (localDX-dx[i]);
			spriteY1[i] += (localDY-dy[i]);
			spriteY2[i] += (localDY-dy[i]);
			spriteY3[i] += (localDY-dy[i]);
			spriteDrawX1[i] += (localDX-dx[i]);
			spriteDrawX2[i] += (localDX-dx[i]);
			spriteDrawX3[i] += (localDX-dx[i]);
			spriteDrawY1[i] += (localDY-dy[i]);
			spriteDrawY2[i] += (localDY-dy[i]);
			spriteDrawY3[i] += (localDY-dy[i]);
		}
		if(spriteCollision[spriteId])
		{
			spriteDrawX1[spriteId] = spriteX1[spriteId];
			spriteDrawX2[spriteId] = spriteX2[spriteId];
			spriteDrawX3[spriteId] = spriteX3[spriteId];
			spriteDrawY1[spriteId] = spriteY1[spriteId];
			spriteDrawY2[spriteId] = spriteY2[spriteId];
			spriteDrawY3[spriteId] = spriteY3[spriteId];
		}
	}
}
function clearVars()
{
	for (var i = maxSprites; i >= 0; i--)
	{
		if(spriteUser[i] == false)
		{
			if(clearVarInit[i] !== false)
			{
				dxMem[i] = dx[i];
				dyMem[i] = dy[i];
				clearVarInit[i] = false;
			}
			if(dxMem[i] !== dx[i])
			{
				dx[i] = dxMem[i];
			}
			if(dyMem[i] !== dy[i])
			{
				dy[i] = dyMem[i];
			}
		}
	}
}
function stopUser()
{
	for (var i = maxSprites; i >= 0; i--)
	{
		if(spriteUser[i] == true)
		{
			dx[i] = 0;
			dy[i] = 0;
		}
	}
}
function controls2D()
{
	for (var i = maxSprites; i >= 0; i--)
	{
		if (spriteUser[i] == true)
		{
			if (charStr[jQuery.inArray("w", charStr)] == "w")
			{		
				dy[i] -= 3;
			}
			if (charStr[jQuery.inArray("s", charStr)] == "s")
			{
				dy[i] += 3;
			}
			if (charStr[jQuery.inArray("a", charStr)] == "a")
			{
				dx[i] -= 3;
			}
			if (charStr[jQuery.inArray("d", charStr)] == "d")
			{
				dx[i] += 3;
			}
			if (charCode == 32)
			{
				if(gravity == -1)
				{
					gravity = 1;
				}
				else
				{
					gravity = -1;
				}
				charCode  = 0;
			}
			if (charCode == 37)
			{
				dx[i] -= 1;
			}
			if (charCode == 38)
			{
				dy[i] -= 1;
			}
			if (charCode == 39)
			{
				dx[i] += 1;
			}
			if (charCode == 40)
			{
				dy[i] += 1;
			}
			if (charStr[jQuery.inArray("t", charStr)] == "t")
			{
				color = [10, 10, 255, .2];
				stopBlocks();
				charStr[jQuery.inArray("t", charStr)] = "";
			}
		}
		//collided[i] = false;
	}
}
function Init()
{
	for (var i = 0; i <= 10000; i++)
	{
		exception.push([]);
	}
}
function Sprite2D(x1, y1, x2, y2, x3, y3, dirX, dirY, isUser, spriteId)
{
	sprite2dId = spriteId;
	if (sprited[spriteId] !== true)
	{
		dx[sprite2dId] = dirX;
		dy[sprite2dId] = dirY;
		spriteX1[sprite2dId] = x1;
		spriteY1[sprite2dId] = y1;
		spriteX2[sprite2dId] = x2;
		spriteY2[sprite2dId] = y2;
		spriteX3[sprite2dId] = x3;
		spriteY3[sprite2dId] = y3;
		spriteUser[sprite2dId] = isUser;
		sprited[spriteId] = true;
	}
	if (maxSprites < sprite2dId)
	{
		maxSprites = sprite2dId;
	}
}
function SpriteCount2D(spriteId)
{
	if (maxSprites < spriteId)
	{
		maxSprites = spriteId;
	}
}
function physics2D()
{
	for (var i = maxSprites; i >= 0; i--)
	{
		if(spriteUser[i] == true)
		{
			dy[i] += gravity;
		}
	}
}
function onScreen(spriteId)
{
	if(dx[spriteId] + spriteX1[spriteId] < 0 && dx[spriteId] + spriteX2[spriteId] < 0 && dx[spriteId] + spriteX3[spriteId] < 0)
	{
		return false;
	}	
	else if(dy[spriteId] + spriteY1[spriteId] < 0 && dy[spriteId] + spriteY3[spriteId] < 0 && dy[spriteId] + spriteY3[spriteId] < 0)
	{
		return false;
	}
	else if(dx[spriteId] + spriteX1[spriteId] > canvas.width && dx[spriteId] + spriteX2[spriteId] > canvas.width && dx[spriteId] + spriteX3[spriteId] > canvas.width)
	{
		return false;
	}
	else if(dy[spriteId] + spriteY1[spriteId] > canvas.height && dy[spriteId] + spriteY3[spriteId] > canvas.height && dy[spriteId] + spriteY3[spriteId] > canvas.height)
	{
		return false;
	}
	else
	{
		return true;
	}
}
function drawTriangle(x1, y1, x2, y2, x3, y3, triangleColor, collision, isUser, triangleId)
{
	if (drawn[triangleId] !== true)
	{
		dx[triangleId] = 0;
		dy[triangleId] = 0;
		spriteDrawX1[triangleId] = x1;
		spriteDrawX2[triangleId] = x2;
		spriteDrawX3[triangleId] = x3;	
		spriteDrawY1[triangleId] = y1;
		spriteDrawY2[triangleId] = y2;
		spriteDrawY3[triangleId] = y3;
		spriteDrawColorR[triangleId] = triangleColor[0];
		spriteDrawColorG[triangleId] = triangleColor[1];
		spriteDrawColorB[triangleId] = triangleColor[2];
		spriteDrawColorA[triangleId] = triangleColor[3];
		dx[triangleId] = 0;
		dy[triangleId] = 0;
		spriteCollision[triangleId] = collision;
		spriteUser[triangleId] = isUser;
		drawn[triangleId] = true;
	}
	if(spriteCollision[triangleId])
	{
		Sprite2D(x1, y1, x2, y2, x3, y3, 0, 0, isUser, triangleId);
		triangleCollision2D();
	}
	SpriteCount2D(triangleId);
	context.beginPath();
	context.moveTo(spriteDrawX1[triangleId], spriteDrawY1[triangleId]);
	context.lineTo(spriteDrawX2[triangleId], spriteDrawY2[triangleId]);
	context.lineTo(spriteDrawX3[triangleId], spriteDrawY3[triangleId]);
	context.lineTo(spriteDrawX1[triangleId], spriteDrawY1[triangleId]);
	context.fillStyle = "rgba("+spriteDrawColorR[triangleId]+","+spriteDrawColorG[triangleId]+","+spriteDrawColorB[triangleId]+","+spriteDrawColorA[triangleId]+")";
	context.strokeStyle = "rgba("+spriteDrawColorR[triangleId]+","+spriteDrawColorG[triangleId]+","+spriteDrawColorB[triangleId]+","+spriteDrawColorA[triangleId]+")";
	context.stroke();
	context.fill();
	context.closePath();
}
function drawTriangleOutline(x1, y1, x2, y2, x3, y3, triangleColor, collision, isUser, triangleId)
{
	Sprite2D(x1, y1, x2, y2, x3, y3, 0, 0, isUser, triangleId);
	if(collision)
	{
		////triangleCollision2D(spriteX1[triangleId], spriteY1[triangleId], spriteX2[triangleId], spriteY2[triangleId], spriteX3[triangleId], spriteY3[triangleId]);
	}
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.lineTo(x3, y3);
	context.lineTo(x1, y1);
	context.strokeStyle = "rgba("+triangleColor[0]+","+triangleColor[1]+","+triangleColor[2]+","+triangleColor[3]+")";
	context.stroke();
	context.closePath();
}
function drawSquare(x1, y1, sideLength, rectColor, collision, isUser, rectId)
{
	drawRect(x1, y1, sideLength, sideLength, rectColor, collision, isUser, rectId);
}
function drawRect(x1, y1, x2, y2, rectColor, collision, isUser, rectId)
{	
	exception[rectId][0] = rectId+1;
	exception[rectId+1][0] = rectId;	
	if(collided[rectId+1])
	{
		dx[rectId] = dx[rectId+1];
		dy[rectId] = dy[rectId+1];
		spriteX1[rectId] = spriteX2[rectId+1];
		spriteX2[rectId] = spriteX1[rectId+1];
		spriteX3[rectId] = spriteX2[rectId+1];
		spriteY1[rectId] = spriteY1[rectId+1];
		spriteY2[rectId] = spriteY1[rectId+1];
		spriteY3[rectId] = spriteY3[rectId+1];
		spriteDrawX1[rectId] = spriteX1[rectId];
		spriteDrawX2[rectId] = spriteX2[rectId];
		spriteDrawX3[rectId] = spriteX3[rectId];
		spriteDrawY1[rectId] = spriteY1[rectId];
		spriteDrawY2[rectId] = spriteY2[rectId];
		spriteDrawY3[rectId] = spriteY3[rectId];
		collided[rectId+1] = false;
	}
	if(collided[rectId])
	{
		dx[rectId+1] = dx[rectId];
		dy[rectId+1] = dy[rectId];
		spriteX1[rectId+1] = spriteX2[rectId];
		spriteX2[rectId+1] = spriteX1[rectId];
		spriteX3[rectId+1] = spriteX2[rectId];
		spriteY1[rectId+1] = spriteY1[rectId];
		spriteY2[rectId+1] = spriteY3[rectId];
		spriteY3[rectId+1] = spriteY3[rectId];
		spriteDrawX1[rectId+1] = spriteX1[rectId+1];
		spriteDrawX2[rectId+1] = spriteX2[rectId+1];
		spriteDrawX3[rectId+1] = spriteX3[rectId+1];
		spriteDrawY1[rectId+1] = spriteY1[rectId+1];
		spriteDrawY2[rectId+1] = spriteY2[rectId+1];
		spriteDrawY3[rectId+1] = spriteY3[rectId+1];
		collided[rectId] = false;
	}
	drawTriangle(x1, y1, x1+x2, y1, x1, y1+y2, rectColor, collision, isUser, rectId);
	drawTriangle(x1+x2, y1, x1, y1+y2, x1+x2, y1+y2, rectColor, collision, isUser, rectId+1);
	if(collided[rectId] && collided[rectId+1])
	{
		dx[rectId+1] = 0; 
		dx[rectId] = 0;
		dy[rectId+1] = 0;
		dy[rectId] = 0;
	}
}
function drawRectTexture(x1, y1, x2, y2, address, collision, isUser, textureId)
{
	if(textureSprited[textureId] !== true)
	{
		spriteTexture[textureId] = address;
		textureSprited[textureId] = true;
	}
	texture = document.createElement("img");
	texture.src = spriteTexture[textureId];
	texture.setAttribute("id", "texture");
	drawRect(x1, y1, x2, y2, [0, 0, 0, 0], collision, isUser, textureId);
	context.drawImage(texture, spriteDrawX1[textureId], spriteDrawY1[textureId], spriteDrawX2[textureId]-spriteDrawX1[textureId], spriteDrawY3[textureId]-spriteDrawY1[textureId]);
}
function drawCustomRectRoom(x1, y1, x2, y2, xWidth, yWidth, doorSide, doorLength, doorDistance, wallColor, roomId)
{
	for(var i = 7+doorSide.length*2+roomId; i >= roomId; i--)
	{
		for(var j = 8+doorSide.length*2+roomId; j >= roomId; j--)
		{
			exception[i][j] = j;
		}
	}
	if(doorSide[jQuery.inArray("top", doorSide)] !== "top")
	{
		drawRect(x1, y1, x2, yWidth, wallColor, true, false, roomId);
	}
	if(doorSide[jQuery.inArray("left", doorSide)] !== "left")
	{
		drawRect(x1, y1+yWidth, xWidth, y2-yWidth*2, wallColor, true, false, roomId+2);
	}
	if(doorSide[jQuery.inArray("right", doorSide)] !== "right")
	{
		drawRect(x1+x2-xWidth, y1+yWidth, xWidth, y2-yWidth*2, wallColor, true, false, roomId+4);
	}
	if(doorSide[jQuery.inArray("bottom", doorSide)] !== "bottom")
	{
		drawRect(x1, y1+y2-yWidth, x2, yWidth, wallColor, true, false, roomId+6);
	}
	if(doorSide[jQuery.inArray("top", doorSide)] == "top")
	{
		drawRect(x1, y1, doorDistance[jQuery.inArray("top", doorSide)], yWidth, wallColor, true, false, roomId);
		if(jQuery.inArray("top", doorSide) == 0)
		{
			drawRect(x1+doorDistance[0]+doorLength[0], y1, x2-(doorDistance[0]+doorLength[0]), yWidth, wallColor, true, false, roomId+8);
		}
		else if(jQuery.inArray("top", doorSide) == 1)
		{
			drawRect(x1+doorDistance[1]+doorLength[1], y1, x2-(doorDistance[1]+doorLength[1]), yWidth, wallColor, true, false, roomId+10);
		}
		else if(jQuery.inArray("top", doorSide) == 2)
		{
			drawRect(x1+doorDistance[2]+doorLength[2], y1, x2-(doorDistance[2]+doorLength[2]), yWidth, wallColor, true, false, roomId+12);
		}
		else if(jQuery.inArray("top", doorSide) == 3)
		{
			drawRect(x1+doorDistance[3]+doorLength[3], y1, x2-(doorDistance[3]+doorLength[3]), yWidth, wallColor, true, false, roomId+14);
		}
	}
	if(doorSide[jQuery.inArray("left", doorSide)] == "left")
	{
		drawRect(x1, y1+yWidth, xWidth, doorDistance[jQuery.inArray("left", doorSide)], wallColor, true, false, roomId+2);
		if(jQuery.inArray("left", doorSide) == 0)
		{
			drawRect(x1, y1+doorDistance[0]+doorLength[0]+yWidth, xWidth, y2-(y1+doorLength[0]+yWidth), wallColor, true, false, roomId+8);
		}
		else if(jQuery.inArray("left", doorSide) == 1)
		{
			drawRect(x1, y1+doorDistance[1]+doorLength[1]+yWidth, xWidth, y2-(y1+doorLength[1]+yWidth), wallColor, true, false, roomId+10);
		}
		else if(jQuery.inArray("left", doorSide) == 2)
		{
			drawRect(x1, y1+doorDistance[2]+doorLength[2]+yWidth, xWidth, y2-(y1+doorLength[2]+yWidth), wallColor, true, false, roomId+12);
		}
		else if(jQuery.inArray("left", doorSide) == 3)
		{
			drawRect(x1, y1+doorDistance[3]+doorLength[3]+yWidth, xWidth, y2-(y1+doorLength[3]+yWidth), wallColor, true, false, roomId+14);
		}
	}
	if(doorSide[jQuery.inArray("right", doorSide)] == "right")
	{
		drawRect(x1+x2-xWidth, y1+yWidth, xWidth, doorDistance[jQuery.inArray("right", doorSide)], wallColor, true, false, roomId+4);
		if(jQuery.inArray("right", doorSide) == 0)
		{
			drawRect(x1+x2-xWidth, y1+doorDistance[0]+doorLength[0]+yWidth, xWidth, y2-(y1+doorLength[0]+yWidth), wallColor, true, false, roomId+8);
		}
		else if(jQuery.inArray("right", doorSide) == 1)
		{
			drawRect(x1+x2-xWidth, y1+doorDistance[1]+doorLength[1]+yWidth, xWidth, y2-(y1+doorLength[1]+yWidth), wallColor, true, false, roomId+10);
		}
		else if(jQuery.inArray("right", doorSide) == 2)
		{
			drawRect(x1+x2-xWidth, y1+doorDistance[2]+doorLength[2]+yWidth, xWidth, y2-(y1+doorLength[2]+yWidth), wallColor, true, false, roomId+12);
		}
		else if(jQuery.inArray("right", doorSide) == 3)
		{
			drawRect(x1+x2-xWidth, y1+doorDistance[3]+doorLength[3]+yWidth, xWidth, y2-(y1+doorLength[3]+yWidth), wallColor, true, false, roomId+14);
		}
	}
	if(doorSide[jQuery.inArray("bottom", doorSide)] == "bottom")
	{
		drawRect(x1, y1+y2-yWidth, doorDistance[jQuery.inArray("bottom", doorSide)], yWidth, wallColor, true, false, roomId+6);
		if(jQuery.inArray("bottom", doorSide) == 0)
		{
			drawRect(x1+doorDistance[0]+doorLength[0], y1+y2-yWidth, x2-(doorDistance[0]+doorLength[0]), yWidth, wallColor, true, false, roomId+8);
		}
		else if(jQuery.inArray("bottom", doorSide) == 1)
		{
			drawRect(x1+doorDistance[1]+doorLength[1], y1+y2-yWidth, x2-(doorDistance[1]+doorLength[1]), yWidth, wallColor, true, false, roomId+10);
		}
		else if(jQuery.inArray("bottom", doorSide) == 2)
		{
			drawRect(x1+doorDistance[2]+doorLength[2], y1+y2-yWidth, x2-(doorDistance[2]+doorLength[2]), yWidth, wallColor, true, false, roomId+12);
		}
		else if(jQuery.inArray("bottom", doorSide) == 3)
		{
			drawRect(x1+doorDistance[3]+doorLength[3], y1+y2-yWidth, x2-(doorDistance[3]+doorLength[3]), yWidth, wallColor, true, false, roomId+14);
		}
	}
}
function drawRectRoom(x1, y1, x2, y2, xWidth, yWidth, doorSide, doorLength, wallColor, roomId)
{
	for(var i = 7+doorSide.length*2+roomId; i >= roomId; i--)
	{
		for(var j = 8+doorSide.length*2+roomId; j >= roomId; j--)
		{
			exception[i][j] = j;
		}
	}
	if(doorSide[jQuery.inArray("top", doorSide)] !== "top")
	{
		drawRect(x1, y1, x2, yWidth, wallColor, true, false, roomId);
	}
	if(doorSide[jQuery.inArray("left", doorSide)] !== "left")
	{
		drawRect(x1, y1+yWidth, xWidth, y2-yWidth*2, wallColor, true, false, roomId+2);
	}
	if(doorSide[jQuery.inArray("right", doorSide)] !== "right")
	{
		drawRect(x1+x2-xWidth, y1+yWidth, xWidth, y2-yWidth*2, wallColor, true, false, roomId+4);
	}
	if(doorSide[jQuery.inArray("bottom", doorSide)] !== "bottom")
	{
		drawRect(x1, y1+y2-yWidth, x2, yWidth, wallColor, true, false, roomId+6);
	}
	if(doorSide[jQuery.inArray("top", doorSide)] == "top")
	{
		drawRect(x1, y1, x2/2-doorLength/2, yWidth, wallColor, true, false, roomId);
		if(jQuery.inArray("top", doorSide) == 0)
		{
			drawRect(x1+x2/2+doorLength/2, y1, x2/2-doorLength/2, yWidth, wallColor, true, false, roomId+8);
		}
		else if(jQuery.inArray("top", doorSide) == 1)
		{
			drawRect(x1+x2/2+doorLength/2, y1, x2/2-doorLength/2, yWidth, wallColor, true, false, roomId+10);
		}
		else if(jQuery.inArray("top", doorSide) == 2)
		{
			drawRect(x1+x2/2+doorLength/2, y1, x2/2-doorLength/2, yWidth, wallColor, true, false, roomId+12);
		}
		else if(jQuery.inArray("top", doorSide) == 3)
		{
			drawRect(x1+x2/2+doorLength/2, y1, x2/2-doorLength/2, yWidth, wallColor, true, false, roomId+14);
		}
	}
	if(doorSide[jQuery.inArray("left", doorSide)] == "left")
	{
		drawRect(x1, y1+yWidth, xWidth, (y2-yWidth*2)/2-doorLength/2, wallColor, true, false, roomId+2);
		if(jQuery.inArray("left", doorSide) == 0)
		{
			drawRect(x1, y1+y2/2+doorLength/2, xWidth, (y2-yWidth*2)/2-doorLength/2, wallColor, true, false, roomId+8);
		}
		else if(jQuery.inArray("left", doorSide) == 1)
		{
			drawRect(x1, y1+y2/2+doorLength/2, xWidth, (y2-yWidth*2)/2-doorLength/2, wallColor, true, false, roomId+10);
		}
		else if(jQuery.inArray("left", doorSide) == 2)
		{
			drawRect(x1, y1+y2/2+doorLength/2, xWidth, (y2-yWidth*2)/2-doorLength/2, wallColor, true, false, roomId+12);
		}
		else if(jQuery.inArray("left", doorSide) == 3)
		{
			drawRect(x1, y1+y2/2+doorLength/2, xWidth, (y2-yWidth*2)/2-doorLength/2, wallColor, true, false, roomId+14);
		}
	}
	if(doorSide[jQuery.inArray("right", doorSide)] == "right")
	{
		drawRect(x1+x2-xWidth, y1+yWidth, xWidth, (y2-yWidth*2)/2-doorLength/2, wallColor, true, false, roomId+4);
		if(jQuery.inArray("right", doorSide) == 0)
		{
			drawRect(x1+x2-xWidth, y1+y2/2+doorLength/2, xWidth, (y2-yWidth*2)/2-doorLength/2, wallColor, true, false, roomId+8);
		}
		else if(jQuery.inArray("right", doorSide) == 1)
		{
			drawRect(x1+x2-xWidth, y1+y2/2+doorLength/2, xWidth, (y2-yWidth*2)/2-doorLength/2, wallColor, true, false, roomId+10);
		}
		else if(jQuery.inArray("right", doorSide) == 2)
		{
			drawRect(x1+x2-xWidth, y1+y2/2+doorLength/2, xWidth, (y2-yWidth*2)/2-doorLength/2, wallColor, true, false, roomId+12);
		}
		else if(jQuery.inArray("right", doorSide) == 3)
		{
			drawRect(x1+x2-xWidth, y1+y2/2+doorLength/2, xWidth, (y2-yWidth*2)/2-doorLength/2, wallColor, true, false, roomId+14);
		}
	}
	if(doorSide[jQuery.inArray("bottom", doorSide)] == "bottom")
	{
		drawRect(x1, y1+y2-yWidth, x2/2-doorLength/2, yWidth, wallColor, true, false, roomId+6);
		if(jQuery.inArray("bottom", doorSide) == 0)
		{
			drawRect(x1+x2/2+doorLength/2, y1+y2-yWidth, x2/2-doorLength/2, yWidth, wallColor, true, false, roomId+8);
		}
		else if(jQuery.inArray("bottom", doorSide) == 1)
		{
			drawRect(x1+x2/2+doorLength/2, y1+y2-yWidth, x2/2-doorLength/2, yWidth, wallColor, true, false, roomId+10);
		}
		else if(jQuery.inArray("bottom", doorSide) == 2)
		{
			drawRect(x1+x2/2+doorLength/2, y1+y2-yWidth, x2/2-doorLength/2, yWidth, wallColor, true, false, roomId+12);
		}
		else if(jQuery.inArray("bottom", doorSide) == 3)
		{
			drawRect(x1+x2/2+doorLength/2, y1+y2-yWidth, x2/2-doorLength/2, yWidth, wallColor, true, false, roomId+14);
		}
	}
}
function drawRectOutline(x1, y1, x2, y2, rectColor, collision, isUser, rectId)
{
	drawTriangleOutline(x1, y1, x1+x2, y1, x1, y1+y2, rectColor, collision, isUser, rectId);
	spriteX1[rectId+1] = spriteX2[rectId];
	spriteX2[rectId+1] = spriteX3[rectId];
	spriteX3[rectId+1] = spriteX1[rectId+1];
	spriteY1[rectId+1] = spriteY2[rectId];
	spriteY2[rectId+1] = spriteY3[rectId];
	spriteY3[rectId+1] = spriteY2[rectId+1];
	drawTriangleOutline(x1+x2, y1, x1, y1+y2, x1+x2, y1+y2, rectColor, collision, isUser, ++rectId);
	context.beginPath();
	context.moveTo(spriteX2[rectId], spriteY2[rectId]);
	context.lineTo(spriteX3[rectId], spriteY3[rectId]);
	context.strokeStyle = "rgba(255, 255, 255, 1)";
	context.stroke();
	context.closePath();
}
function drawRectWithOutline(x1, y1, x2, y2, rectColor, rectOutlineColor, collision, isUser, rectId)
{
	drawRectOutline(x1, y1, x2, y2, rectOutlineColor, false, isUser, ++rectId);
	drawRect(x1, y1, x2, y2, rectColor, collision, isUser, rectId);
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