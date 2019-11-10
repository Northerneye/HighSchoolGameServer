var spriteId1 = -1;
var spriteId2 = -1;
var areaId = 0;
var areaSpriteX1 = [[]];
var areaSpriteY1 = [[]];
var areaSpriteX2 = [[]];
var areaSpriteY2 = [[]];
var areaSpriteX3 = [[]];
var areaSpriteY3 = [[]];
var areaSprited = [[]];
var areaXLength = [[]];
var areaYLength = [[]];
var spriteAreaX1 = [[]];
var spriteAreaX2 = [[]];
var spriteAreaX3 = [[]];
var spriteAreaY1 = [[]];
var spriteAreaY2 = [[]];
var spriteAreaY3 = [[]];
var spriteDrawAreaX1 = [[]];
var spriteDrawAreaX2 = [[]];
var spriteDrawAreaX3 = [[]];
var spriteDrawAreaY1 = [[]];
var spriteDrawAreaY2 = [[]];
var spriteDrawAreaY3 = [[]];
var localX = 0;
var localY = 0;
var localX1 = 0;
var localY1 = 0;
var localX2 = 0;
var localY2 = 0;
var localX3 = 0;
var localY3 = 0;
var areaColor = [[]]
var areaSpriteTextured = [[]];
var areaSpawn = [[]];
var areaCollided = [[]];
var spriteDrawAreaColorR = [[]];
var spriteDrawAreaColorG = [[]];
var spriteDrawAreaColorB = [[]];
var spriteDrawAreaColorA = [[]];
var areaTextureSprited = [[]];
var triangleColor = [[]];
var areaZoom = [];
var amount = 0;
var mapAreaX1 = [[]];
var mapAreaX2 = [[]];
var mapAreaX3 = [[]];
var mapAreaY1 = [[]];
var mapAreaY2 = [[]];
var mapAreaY3 = [[]];
var playersX1 = [];
var playersY1 = [];
var playersX2 = [];
var playersY2 = [];
var playersX3 = [];
var playersY3 = [];
var playerNumber = 0;
var playerCount = 0;
var playerInit = [];
var wallWidth = 0;
var doorSide = [];
var doorPos = [];
var doorLength = [];
var roomColor = [];
var roomId = 0;
var baseColor = [];
var playersInit = [];
var localDX2 = 0;
var localDY2 = 0;
var xhttp = new XMLHttpRequest();
var xttp = new XMLHttpRequest();
var xhhp = new XMLHttpRequest();
var xxtp = new XMLHttpRequest();
var xhtt = new XMLHttpRequest();
for (var i = 0; i <= 10000; i++)
{
	triangleColor.push([]);
	mapAreaX1.push([]);
	mapAreaX2.push([]);
	mapAreaX3.push([]);
	mapAreaY1.push([]);
	mapAreaY2.push([]);
	mapAreaY3.push([]);
	areaZoom.push(1);
	exception[i] = [];
	for(var j = 0; j <= 500; j++)
	{
		exception[i][j] = [];
	}
	areaSpriteX1.push([]);
	areaSpriteY1.push([]);
	areaSpriteX2.push([]);
	areaSpriteY2.push([]);
	areaSpriteX3.push([]);
	areaSpriteY3.push([]);
	areaSprited.push([]);
	areaXLength.push([]);
	areaYLength.push([]);
	spriteAreaX1.push([]);
	spriteAreaX2.push([]);
	spriteAreaX3.push([]);
	spriteAreaY1.push([]);
	spriteAreaY2.push([]);
	spriteAreaY3.push([]);
	spriteDrawAreaX1.push([]);
	spriteDrawAreaX2.push([]);
	spriteDrawAreaX3.push([]);
	spriteDrawAreaY1.push([]);
	spriteDrawAreaY2.push([]);
	spriteDrawAreaY3.push([]);
	areaColor.push([]);
	baseColor.push([]);
	areaSpriteTextured.push([]);
	areaSpawn.push([]);
	areaCollided.push([]);
	spriteDrawAreaColorR.push([]);
	spriteDrawAreaColorG.push([]);
	spriteDrawAreaColorB.push([]);
	spriteDrawAreaColorA.push([]);
	dy.push([]);
	dx.push([]);
	for(var j = 0; j <= 500; j++)
	{
		dx[i][j] = 0;
		dy[i][j] = 0;
	}
	spriteUser.push([]);
	sprited.push([]);
	drawn.push([]);
	spriteCollision.push([]);
	spriteDef.push([]);
	spriteTexture.push([]);
	areaTextureSprited.push([]);
}
function spriteProximity(spriteId1, spriteId2, areaId)
{
	x1 = (areaSpriteX1[areaId][spriteId1]+areaSpriteX2[areaId][spriteId1])/2 - (areaSpriteX1[areaId][spriteId2]+areaSpriteX2[areaId][spriteId2])/2;
	y1 = (areaSpriteY1[areaId][spriteId1]+areaSpriteY3[areaId][spriteId1])/2 - (areaSpriteY1[areaId][spriteId2]+areaSpriteY3[areaId][spriteId2])/2;
	y2 = Math.sqrt(Math.pow(x1,2)+Math.pow(y1,2))
	return y2;
}
function followTexture(localWidth, localHeight, localTexture, spriteId, areaId)
{
	for(i = 0; i <= 2; i++)
	{
		for(j = 0; j <= 2; j++)
		{
			areaTextureRect(i*localWidth, j*localHeight, localWidth, localHeight, localTexture, false, false, spriteId+i*6+j*2, areaId);
		}
	}
	if(areaSpriteX1[areaId][findUser(areaId)]+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2 > areaSpriteX2[areaId][spriteId+8])
	{
		tpRectSprite(areaSpriteX1[areaId][spriteId]+localWidth, areaSpriteY1[areaId][spriteId], localWidth, localHeight, areaId, spriteId)
		tpRectSprite(areaSpriteX1[areaId][spriteId+2]+localWidth, areaSpriteY1[areaId][spriteId+2], localWidth, localHeight, areaId, spriteId+2)
		tpRectSprite(areaSpriteX1[areaId][spriteId+4]+localWidth, areaSpriteY1[areaId][spriteId+4], localWidth, localHeight, areaId, spriteId+4)
		tpRectSprite(areaSpriteX1[areaId][spriteId+6]+localWidth, areaSpriteY1[areaId][spriteId+6], localWidth, localHeight, areaId, spriteId+6)
		tpRectSprite(areaSpriteX1[areaId][spriteId+8]+localWidth, areaSpriteY1[areaId][spriteId+8], localWidth, localHeight, areaId, spriteId+8)
		tpRectSprite(areaSpriteX1[areaId][spriteId+10]+localWidth, areaSpriteY1[areaId][spriteId+10], localWidth, localHeight, areaId, spriteId+10)
		tpRectSprite(areaSpriteX1[areaId][spriteId+12]+localWidth, areaSpriteY1[areaId][spriteId+12], localWidth, localHeight, areaId, spriteId+12)
		tpRectSprite(areaSpriteX1[areaId][spriteId+14]+localWidth, areaSpriteY1[areaId][spriteId+14], localWidth, localHeight, areaId, spriteId+14)
		tpRectSprite(areaSpriteX1[areaId][spriteId+16]+localWidth, areaSpriteY1[areaId][spriteId+16], localWidth, localHeight, areaId, spriteId+16)
		tpRectSprite(areaSpriteX1[areaId][spriteId+18]+localWidth, areaSpriteY1[areaId][spriteId+18], localWidth, localHeight, areaId, spriteId+18)
		tpRectSprite(areaSpriteX1[areaId][spriteId+20]+localWidth, areaSpriteY1[areaId][spriteId+20], localWidth, localHeight, areaId, spriteId+20)
	}
	if(areaSpriteY1[areaId][findUser(areaId)]+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2 > areaSpriteY3[areaId][spriteId+8])
	{
		tpRectSprite(areaSpriteX1[areaId][spriteId], areaSpriteY1[areaId][spriteId]+localHeight, localWidth, localHeight, areaId, spriteId)
		tpRectSprite(areaSpriteX1[areaId][spriteId+2], areaSpriteY1[areaId][spriteId+2]+localHeight, localWidth, localHeight, areaId, spriteId+2)
		tpRectSprite(areaSpriteX1[areaId][spriteId+4], areaSpriteY1[areaId][spriteId+4]+localHeight, localWidth, localHeight, areaId, spriteId+4)
		tpRectSprite(areaSpriteX1[areaId][spriteId+6], areaSpriteY1[areaId][spriteId+6]+localHeight, localWidth, localHeight, areaId, spriteId+6)
		tpRectSprite(areaSpriteX1[areaId][spriteId+8], areaSpriteY1[areaId][spriteId+8]+localHeight, localWidth, localHeight, areaId, spriteId+8)
		tpRectSprite(areaSpriteX1[areaId][spriteId+10], areaSpriteY1[areaId][spriteId+10]+localHeight, localWidth, localHeight, areaId, spriteId+10)
		tpRectSprite(areaSpriteX1[areaId][spriteId+12], areaSpriteY1[areaId][spriteId+12]+localHeight, localWidth, localHeight, areaId, spriteId+12)
		tpRectSprite(areaSpriteX1[areaId][spriteId+14], areaSpriteY1[areaId][spriteId+14]+localHeight, localWidth, localHeight, areaId, spriteId+14)
		tpRectSprite(areaSpriteX1[areaId][spriteId+16], areaSpriteY1[areaId][spriteId+16]+localHeight, localWidth, localHeight, areaId, spriteId+16)
		tpRectSprite(areaSpriteX1[areaId][spriteId+18], areaSpriteY1[areaId][spriteId+18]+localHeight, localWidth, localHeight, areaId, spriteId+18)
		tpRectSprite(areaSpriteX1[areaId][spriteId+20], areaSpriteY1[areaId][spriteId+20]+localHeight, localWidth, localHeight, areaId, spriteId+20)
	}
	if(areaSpriteX1[areaId][findUser(areaId)]+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2 < areaSpriteX1[areaId][spriteId+8])
	{
		tpRectSprite(areaSpriteX1[areaId][spriteId]-localWidth, areaSpriteY1[areaId][spriteId], localWidth, localHeight, areaId, spriteId)
		tpRectSprite(areaSpriteX1[areaId][spriteId+2]-localWidth, areaSpriteY1[areaId][spriteId+2], localWidth, localHeight, areaId, spriteId+2)
		tpRectSprite(areaSpriteX1[areaId][spriteId+4]-localWidth, areaSpriteY1[areaId][spriteId+4], localWidth, localHeight, areaId, spriteId+4)
		tpRectSprite(areaSpriteX1[areaId][spriteId+6]-localWidth, areaSpriteY1[areaId][spriteId+6], localWidth, localHeight, areaId, spriteId+6)
		tpRectSprite(areaSpriteX1[areaId][spriteId+8]-localWidth, areaSpriteY1[areaId][spriteId+8], localWidth, localHeight, areaId, spriteId+8)
		tpRectSprite(areaSpriteX1[areaId][spriteId+10]-localWidth, areaSpriteY1[areaId][spriteId+10], localWidth, localHeight, areaId, spriteId+10)
		tpRectSprite(areaSpriteX1[areaId][spriteId+12]-localWidth, areaSpriteY1[areaId][spriteId+12], localWidth, localHeight, areaId, spriteId+12)
		tpRectSprite(areaSpriteX1[areaId][spriteId+14]-localWidth, areaSpriteY1[areaId][spriteId+14], localWidth, localHeight, areaId, spriteId+14)
		tpRectSprite(areaSpriteX1[areaId][spriteId+16]-localWidth, areaSpriteY1[areaId][spriteId+16], localWidth, localHeight, areaId, spriteId+16)
		tpRectSprite(areaSpriteX1[areaId][spriteId+18]-localWidth, areaSpriteY1[areaId][spriteId+18], localWidth, localHeight, areaId, spriteId+18)
		tpRectSprite(areaSpriteX1[areaId][spriteId+20]-localWidth, areaSpriteY1[areaId][spriteId+20], localWidth, localHeight, areaId, spriteId+20)
	}
	if(areaSpriteY1[areaId][findUser(areaId)]+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2 < areaSpriteY1[areaId][spriteId+8])
	{
		tpRectSprite(areaSpriteX1[areaId][spriteId], areaSpriteY1[areaId][spriteId]-localHeight, localWidth, localHeight, areaId, spriteId)
		tpRectSprite(areaSpriteX1[areaId][spriteId+2], areaSpriteY1[areaId][spriteId+2]-localHeight, localWidth, localHeight, areaId, spriteId+2)
		tpRectSprite(areaSpriteX1[areaId][spriteId+4], areaSpriteY1[areaId][spriteId+4]-localHeight, localWidth, localHeight, areaId, spriteId+4)
		tpRectSprite(areaSpriteX1[areaId][spriteId+6], areaSpriteY1[areaId][spriteId+6]-localHeight, localWidth, localHeight, areaId, spriteId+6)
		tpRectSprite(areaSpriteX1[areaId][spriteId+8], areaSpriteY1[areaId][spriteId+8]-localHeight, localWidth, localHeight, areaId, spriteId+8)
		tpRectSprite(areaSpriteX1[areaId][spriteId+10], areaSpriteY1[areaId][spriteId+10]-localHeight, localWidth, localHeight, areaId, spriteId+10)
		tpRectSprite(areaSpriteX1[areaId][spriteId+12], areaSpriteY1[areaId][spriteId+12]-localHeight, localWidth, localHeight, areaId, spriteId+12)
		tpRectSprite(areaSpriteX1[areaId][spriteId+14], areaSpriteY1[areaId][spriteId+14]-localHeight, localWidth, localHeight, areaId, spriteId+14)
		tpRectSprite(areaSpriteX1[areaId][spriteId+16], areaSpriteY1[areaId][spriteId+16]-localHeight, localWidth, localHeight, areaId, spriteId+16)
		tpRectSprite(areaSpriteX1[areaId][spriteId+18], areaSpriteY1[areaId][spriteId+18]-localHeight, localWidth, localHeight, areaId, spriteId+18)
		tpRectSprite(areaSpriteX1[areaId][spriteId+20], areaSpriteY1[areaId][spriteId+20]-localHeight, localWidth, localHeight, areaId, spriteId+20)
	}
	for(i = 0; i <= 2; i++)
	{
		for(j = 0; j <= 2; j++)
		{
			areaTextureRect(areaSpriteX1[areaId][spriteId+i*6+j*2], areaSpriteY1[areaId][spriteId+i*6+j*2], localWidth, localHeight, localTexture, false, false, spriteId+i*6+j*2, areaId);
		}
	}
}
function rectPlayerException(spriteId, areaId)
{
	exception[areaId][0][spriteId] = spriteId;
	exception[areaId][1][spriteId] = spriteId;
	exception[areaId][0][spriteId+1] = spriteId+1;
	exception[areaId][1][spriteId+1] = spriteId+1;
	exception[areaId][spriteId][0] = 0;
	exception[areaId][spriteId+1][0] = 0;
	exception[areaId][spriteId][1] = 1;
	exception[areaId][spriteId+1][1] = 1;
}
function rectExceptions(spriteId1, spriteId2, areaId)
{
	exception[areaId][spriteId2][spriteId1] = spriteId1;
	exception[areaId][spriteId2+1][spriteId1] = spriteId1;
	exception[areaId][spriteId2][spriteId1+1] = spriteId1+1;
	exception[areaId][spriteId2+1][spriteId1+1] = spriteId1+1;
	exception[areaId][spriteId1][spriteId2] = spriteId2;
	exception[areaId][spriteId1+1][spriteId2] = spriteId2;
	exception[areaId][spriteId1][spriteId2+1] = spriteId2+1;
	exception[areaId][spriteId1+1][spriteId2+1] = spriteId2+1;
}
function tpRectSprite(x1, y1, x2, y2, areaId, spriteId)
{
	areaSpriteX1[areaId][spriteId] = x1;
	areaSpriteY1[areaId][spriteId] = y1;
	areaSpriteX2[areaId][spriteId] = x1+x2;
	areaSpriteY2[areaId][spriteId] = y1;
	areaSpriteX3[areaId][spriteId] = x1;
	areaSpriteY3[areaId][spriteId] = y1+y2;
	areaSpriteX1[areaId][spriteId+1] = x1+x2;
	areaSpriteY1[areaId][spriteId+1] = y1;
	areaSpriteX2[areaId][spriteId+1] = x1;
	areaSpriteY2[areaId][spriteId+1] = y1+y2;
	areaSpriteX3[areaId][spriteId+1] = x1+x2;
	areaSpriteY3[areaId][spriteId+1] = y1+y2;
	areaSpawn[areaId][spriteId] = false;
	areaSpawn[areaId][spriteId+1] = false;
	areaCollided[areaId][spriteId] = true;
	areaCollided[areaId][spriteId+1] = false;
	sprited[areaId][spriteId] = false;
	sprited[areaId][spriteId+1] = false;
	drawn[areaId][spriteId] = false;
	drawn[areaId][spriteId+1] = false;
	for(var i = 0; i <= maxSprites; i++)
	{
		if(!spriteUser[areaId][i])
		{
			areaSpawn[areaId][i] = false;
			sprited[areaId][i] = false;
			drawn[areaId][i] = false;
		}
	}
}
function resetRectSprite(areaId, spriteId)
{
	areaSprited[areaId][spriteId] = false;
	areaSprited[areaId][spriteId+1] = false;
	areaSpawn[areaId][spriteId] = false;
	areaSpawn[areaId][spriteId+1] = false;
	areaCollided[areaId][spriteId] = true;
	areaCollided[areaId][spriteId+1] = false;
	sprited[areaId][spriteId] = false;
	sprited[areaId][spriteId+1] = false;
	drawn[areaId][spriteId] = false;
	drawn[areaId][spriteId+1] = false;
	for(var i = 0; i <= maxSprites; i++)
	{
		if(!spriteUser[areaId][i])
		{
			areaSpawn[areaId][i] = false;
			sprited[areaId][i] = false;
			drawn[areaId][i] = false;
		}
	}
}
function fixPlayer(areaId)
{
	tpRectSprite(areaSpriteX1[areaId][0], areaSpriteY1[areaId][0], areaSpriteX2[areaId][0]-areaSpriteX1[areaId][0], areaSpriteY3[areaId][0]-areaSpriteY1[areaId][0], areaId, 0);
}
/*function updateServerPlayers(areaId)
{
	localX1 = 0;
	localY1 = 0;
	localX2 = 0;
	localY2 = 0;
	localX3 = 0;
	localY3 = 0;
	localString = "";
	localString2 = "";
	localString3 = "";
	playerCount = 0;
	xhttp.open("POST", "getPlayersVertecies.php?x1="+areaSpriteX1[areaId][0]+"&y1="+areaSpriteY1[areaId][0]+"&x2="+areaSpriteX2[areaId][0]+"&y2="+areaSpriteY2[areaId][0]+"&x3="+areaSpriteX3[areaId][0]+"&y3="+areaSpriteY3[areaId][0]+"&dx="+dx[areaId][0]+"&dy="+dy[areaId][0]+"&_=" + Math.random(), false);
	xhttp.send();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) 
		{	playerCount = 0;
			localString = xhttp.responseText;
			while(localString !== "")
			{
				for(i = 0; i <= 5; i++)
				{
					if(localString.charAt(0) == " ")
					{
						localString2 = localString;
						localString = "";
						for(j = 1; j <= localString2.length-1; j++)
						{
							localString += localString2.charAt(j);
						}
					}
					localString3 = "";
					while(true)
					{
						if(localString.charAt(0) == " " || localString.length == 0)
						{
							if(i==0)
							{
								localX1 = Number(localString3);
							}
							else if(i==1)
							{
								localY1 = Number(localString3);
							}
							else if(i==2)
							{
								localX2 = Number(localString3);
							}
							else if(i==3)
							{
								localY2 = Number(localString3);
							}
							else if(i==4)
							{
								localX3 = Number(localString3);
							}
							else if(i==5)
							{
								localY3 = Number(localString3);
							}
							break;
						}
						else
						{
							localString3 += localString.charAt(0);
							localString2 = localString;
							localString = "";
							for(j = 1; j <= localString2.length-1; j++)
							{
								localString += localString2.charAt(j);
							}
						}
					}
				}
				if(playerCount == 0 && playerInit[areaId] !== false)
				{
					areaSpriteX1[areaId][playerCount] = localX1;
					areaSpriteY1[areaId][playerCount] = localY1;
					areaSpriteX2[areaId][playerCount] = localX2;
					areaSpriteY2[areaId][playerCount] = localY2;
					areaSpriteX3[areaId][playerCount] = localX3;
					areaSpriteY3[areaId][playerCount] = localY3;
					playerInit[areaId] = false;
				}
				if(playerCount !== 0)
				{
					tpRectSprite(localX1, localY1, localX2-localX1, localY3-localY1, areaId, playerCount);
				}
				playerCount += 2;
			}
			playerCount -= 2;
		}
	};
}*/
function displayRectPlayers(areaId, baseColor)
{
	if(playersInit[areaId] !== true || true)
	{
		if(areaSpriteX1[areaId][0] !== undefined)
		{
			for(i = 0; i <= playerCount; i += 2)
			{
				if(i==0)
				{
					areaRect(areaSpriteX1[areaId][i], areaSpriteY1[areaId][i], areaSpriteX2[areaId][i]-areaSpriteX1[areaId][i], areaSpriteY3[areaId][i]-areaSpriteY1[areaId][i], baseColor, true, true, i, areaId);
				}
				else
				{
					areaRect(areaSpriteX1[areaId][i], areaSpriteY1[areaId][i], areaSpriteX2[areaId][i]-areaSpriteX1[areaId][i], areaSpriteY3[areaId][i]-areaSpriteY1[areaId][i], baseColor, true, false, i, areaId);
				}
				playersInit[areaId] = true;
			}
		}
	}
}
function displayTexturePlayers(areaId, textureId)
{
	if(playersInit[areaId] !== true || true)
	{
		if(areaSpriteX1[areaId][0] !== undefined)
		{
			for(i = 0; i <= playerCount; i += 2)
			{
				if(i==0)
				{
					areaTextureRect(areaSpriteX1[areaId][i], areaSpriteY1[areaId][i], areaSpriteX2[areaId][i]-areaSpriteX1[areaId][i], areaSpriteY3[areaId][i]-areaSpriteY1[areaId][i], textureId, true, true, i, areaId);
				}
				else
				{
					areaTextureRect(areaSpriteX1[areaId][i], areaSpriteY1[areaId][i], areaSpriteX2[areaId][i]-areaSpriteX1[areaId][i], areaSpriteY3[areaId][i]-areaSpriteY1[areaId][i], textureId, true, false, i, areaId);
				}
				playersInit[areaId] = true;
			}
		}
	}
}
function InitServerVert(x1, y1, x2, y2, x3, y3, id)
{
	areaSpriteX1[0][id] = x1;
	areaSpriteY1[0][id] = y1;
	areaSpriteX2[0][id] = x2;
	areaSpriteY2[0][id] = y2;
	areaSpriteX3[0][id] = x3;
	areaSpriteY3[0][id] = y3;
}
function findUser(areaId)
{
	for(var i = 0; i <= maxSprites; i++)
	{
		if(spriteUser[areaId][i])
		{
			return i;
		}
	}
}
function stopAreaUser(areaId)
{
	for (var i = maxSprites; i >= 0; i--)
	{
		if(spriteUser[areaId][i] == true)
		{
			dx[areaId][i] = 0;
			dy[areaId][i] = 0;
		}
	}
}
function areaControls2D(areaId)
{
	for (var i = maxSprites; i >= 0; i--)
	{
		if (spriteUser[areaId][i] == true)
		{
			if (charStr[jQuery.inArray("w", charStr)] == "w")
			{		
				dy[areaId][i] -= 3;
			}
			if (charStr[jQuery.inArray("s", charStr)] == "s")
			{
				dy[areaId][i] += 3;
			}
			if (charStr[jQuery.inArray("a", charStr)] == "a")
			{
				dx[areaId][i] -= 3;
			}
			if (charStr[jQuery.inArray("d", charStr)] == "d")
			{
				dx[areaId][i] += 3;
			}
			if (charCode == 32)
			{
				charCode  = 0;
			}
			if (charCode == 37)
			{
				dx[areaId][i] -= 1;
			}
			if (charCode == 38)
			{
				dy[areaId][i] -= 1;
			}
			if (charCode == 39)
			{
				dx[areaId][i] += 1;
			}
			if (charCode == 40)
			{
				dy[areaId][i] += 1;
			}
		}
		areaCollided[areaId][i] = false;
	}
}
function areaSprite2D(x1, y1, x2, y2, x3, y3, areaSpriteColor, collision, isUser, spriteId, areaId)
{
	if (areaSprited[areaId][spriteId] !== true)
	{
		areaSpriteX1[areaId][spriteId] = x1;
		areaSpriteY1[areaId][spriteId] = y1;
		areaSpriteX2[areaId][spriteId] = x2;
		areaSpriteY2[areaId][spriteId] = y2;
		areaSpriteX3[areaId][spriteId] = x3; 
		areaSpriteY3[areaId][spriteId] = y3;
		spriteCollision[areaId][spriteId] = collision;
		areaColor[areaId][spriteId] = areaSpriteColor;
		spriteUser[areaId][spriteId] = isUser;
		areaSprited[areaId][spriteId] = true;
	}
	if(spriteId > maxSprites)
	{
		maxSprites = spriteId;
	}
}
function pushRectException(areaId, spriteId1, spriteId2)
{
	exception[areaId][spriteId1].push(spriteid2);
	exception[areaId][spriteId1].push(spriteid2+1);
	exception[areaId][spriteId1+1].push(spriteid2);
	exception[areaId][spriteId1+1].push(spriteid2+1);
}
function openWorldCamera(areaId)
{
	if(dx[areaId][findUser(areaId)]+areaSpriteX1[areaId][findUser(areaId)]-canvas.width/2+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2 > 0 && dx[areaId][findUser(areaId)]+areaSpriteX1[areaId][findUser(areaId)]+canvas.width/2+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2 < areaXLength[areaId])
	{
		for (var i = maxSprites; i >= 0; i--)
		{
			areaSpriteX1[areaId][i] += dx[areaId][i];
			areaSpriteX2[areaId][i] += dx[areaId][i];
			areaSpriteX3[areaId][i] += dx[areaId][i];
			if (spriteUser[areaId][i] == true)
			{
				localDX = -(dx[areaId][i]);
			}
		}
		for (var i = maxSprites; i >= 0; i--)
		{
			
			if (spriteUser[areaId][i] !== true)
			{
				spriteDrawAreaX1[areaId][i] += (localDX+dx[areaId][i])/areaZoom[areaId];
				spriteDrawAreaX2[areaId][i] += (localDX+dx[areaId][i])/areaZoom[areaId];
				spriteDrawAreaX3[areaId][i] += (localDX+dx[areaId][i])/areaZoom[areaId];
				if(spriteCollision[areaId][i])
				{
					spriteAreaX1[areaId][i] += (localDX+dx[areaId][i])/areaZoom[areaId];
					spriteAreaX2[areaId][i] += (localDX+dx[areaId][i])/areaZoom[areaId];
					spriteAreaX3[areaId][i] += (localDX+dx[areaId][i])/areaZoom[areaId];
					spriteDrawAreaX1[areaId][i] = spriteAreaX1[areaId][i];
					spriteDrawAreaX2[areaId][i] = spriteAreaX2[areaId][i];
					spriteDrawAreaX3[areaId][i] = spriteAreaX3[areaId][i];
				}
			}
		}
	}
	else
	{
		for (var i = maxSprites; i >= 0; i--)
		{
			spriteAreaX1[areaId][i] += dx[areaId][i]/areaZoom[areaId];
			spriteAreaX2[areaId][i] += dx[areaId][i]/areaZoom[areaId];
			spriteAreaX3[areaId][i] += dx[areaId][i]/areaZoom[areaId];
			spriteDrawAreaX1[areaId][i] += dx[areaId][i]/areaZoom[areaId];
			spriteDrawAreaX2[areaId][i] += dx[areaId][i]/areaZoom[areaId];
			spriteDrawAreaX3[areaId][i] += dx[areaId][i]/areaZoom[areaId];
			if(spriteCollision[areaId][i])
			{
				spriteDrawAreaX1[areaId][i] = spriteAreaX1[areaId][i];
				spriteDrawAreaX2[areaId][i] = spriteAreaX2[areaId][i];
				spriteDrawAreaX3[areaId][i] = spriteAreaX3[areaId][i];
			}
			areaSpriteX1[areaId][i] += dx[areaId][i];
			areaSpriteX2[areaId][i] += dx[areaId][i];
			areaSpriteX3[areaId][i] += dx[areaId][i];
		}
	}
	if(dy[areaId][findUser(areaId)]+areaSpriteY1[areaId][findUser(areaId)]-canvas.height/2+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2 > 0 && dy[areaId][findUser(areaId)]+areaSpriteY1[areaId][findUser(areaId)]+canvas.height/2+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2 < areaYLength[areaId])
	{
		for (var i = maxSprites; i >= 0; i--)
		{
			areaSpriteY1[areaId][i] += dy[areaId][i];
			areaSpriteY2[areaId][i] += dy[areaId][i];
			areaSpriteY3[areaId][i] += dy[areaId][i];
			if (spriteUser[areaId][i] == true)
			{
				localDY = -(dy[areaId][i]);
			}
		}
		for (var i = maxSprites; i >= 0; i--)
		{
			
			if (spriteUser[areaId][i] !== true)
			{
				spriteDrawAreaY1[areaId][i] += (localDY+dy[areaId][i])/areaZoom[areaId];
				spriteDrawAreaY2[areaId][i] += (localDY+dy[areaId][i])/areaZoom[areaId];
				spriteDrawAreaY3[areaId][i] += (localDY+dy[areaId][i])/areaZoom[areaId];
				if(spriteCollision[areaId][i])
				{
					spriteAreaY1[areaId][i] += (localDY+dy[areaId][i])/areaZoom[areaId];
					spriteAreaY2[areaId][i] += (localDY+dy[areaId][i])/areaZoom[areaId];
					spriteAreaY3[areaId][i] += (localDY+dy[areaId][i])/areaZoom[areaId];
					spriteDrawAreaY1[areaId][i] = spriteAreaY1[areaId][i];
					spriteDrawAreaY2[areaId][i] = spriteAreaY2[areaId][i];
					spriteDrawAreaY3[areaId][i] = spriteAreaY3[areaId][i];
				}
			}
		}
	}
	else
	{
		for (var i = maxSprites; i >= 0; i--)
		{
			spriteAreaY1[areaId][i] += dy[areaId][i]/areaZoom[areaId];
			spriteAreaY2[areaId][i] += dy[areaId][i]/areaZoom[areaId];
			spriteAreaY3[areaId][i] += dy[areaId][i]/areaZoom[areaId];
			spriteDrawAreaY1[areaId][i] += dy[areaId][i]/areaZoom[areaId];
			spriteDrawAreaY2[areaId][i] += dy[areaId][i]/areaZoom[areaId];
			spriteDrawAreaY3[areaId][i] += dy[areaId][i]/areaZoom[areaId];
			if(spriteCollision[areaId][i])
			{
				spriteDrawAreaY1[areaId][i] = spriteAreaY1[areaId][i];
				spriteDrawAreaY2[areaId][i] = spriteAreaY2[areaId][i];
				spriteDrawAreaY3[areaId][i] = spriteAreaY3[areaId][i];
			}
			areaSpriteY1[areaId][i] += dy[areaId][i];
			areaSpriteY2[areaId][i] += dy[areaId][i];
			areaSpriteY3[areaId][i] += dy[areaId][i];
		}
	}
}
function areaStopUser(areaId)
{
	for (var i = maxSprites; i >= 0; i--)
	{
		if(spriteUser[areaId][i] == true)
		{
			dx[areaId][i] = 0;
			dy[areaId][i] = 0;
		}
	}
}
function areaCollision(areaId)
{
	for (var i = maxSprites; i >= 0; i--)
	{
		if(spriteUser[areaId][i] == true)
		{
			while(dx[areaId][i] + areaSpriteX1[areaId][i] < 0)
			{
				dx[areaId][i] += 1;
				areaCollided[areaId][i] = true;
			}	
			while(dx[areaId][i] + areaSpriteX2[areaId][i] < 0)
			{
				dx[areaId][i] += 1;
				areaCollided[areaId][i] = true;
			}
			while(dx[areaId][i] + areaSpriteX3[areaId][i] < 0)
			{
				dy[areaId][i] += 1;
				areaCollided[areaId][i] = true;
			}
			while(dy[areaId][i] + areaSpriteY1[areaId][i] < 0)
			{
				dy[areaId][i] += 1;
				areaCollided[areaId][i] = true;
			}
			while(dy[areaId][i] + areaSpriteY2[areaId][i] < 0)
			{
				dy[areaId][i] += 1;
				areaCollided[areaId][i] = true;
			}
			while(dy[areaId][i] + areaSpriteY3[areaId][i] < 0)
			{
				dy[areaId][i] += 1;
				areaCollided[areaId][i] = true;
			}
			while(dx[areaId][i] + areaSpriteX1[areaId][i] > areaXLength[areaId])
			{
				dx[areaId][i] -= 1;
				areaCollided[areaId][i] = true;
			}
			while(dx[areaId][i] + areaSpriteX2[areaId][i] > areaXLength[areaId])
			{
				dx[areaId][i] -= 1;
				areaCollided[areaId][i] = true;
			}
			while(dx[areaId][i] + areaSpriteX3[areaId][i] > areaXLength[areaId])
			{
				dy[areaId][i] -= 1;
				areaCollided[areaId][i] = true;
			}
			while(dy[areaId][i] + areaSpriteY1[areaId][i] > areaYLength[areaId])
			{
				dy[areaId][i] -= 1;
				areaCollided[areaId][i] = true;
			}
			while(dy[areaId][i] + areaSpriteY2[areaId][i] > areaYLength[areaId])
			{
				dy[areaId][i] -= 1;
				areaCollided[areaId][i] = true;
			}
			while(dy[areaId][i] + areaSpriteY3[areaId][i] > areaYLength[areaId])
			{
				dy[areaId][i] -= 1;
				areaCollided[areaId][i] = true;
			}
		}
	}
}
function areaRoom(x1, y1, x2, y2, wallWidth, doorSide, doorPos, doorLength, roomColor, roomId, areaId)
{
	for (var i = roomId; i <= roomId+15; i++)
	{
		k = 1;
		for(var j = roomId; j <= roomId+15; j++)
		{
			exception[areaId][i][k] = j;
			k++;
		}
	}
	if(doorSide[jQuery.inArray("top", doorSide)] == "top")
	{
		areaRect(x1, y1, wallWidth+doorPos[jQuery.inArray("top", doorSide)]-doorLength[jQuery.inArray("top", doorSide)]/2, wallWidth, roomColor, true, false, roomId, areaId);
		areaRect(x1+wallWidth+doorPos[jQuery.inArray("top", doorSide)]+doorLength[jQuery.inArray("top", doorSide)]/2, y1, x2-doorPos[jQuery.inArray("top", doorSide)]-wallWidth-doorLength[jQuery.inArray("top", doorSide)]/2, wallWidth, roomColor, true, false, roomId+2, areaId);
	}
	else{
		areaRect(x1, y1, x2-wallWidth, wallWidth, roomColor, true, false, roomId, areaId);
	}
	if(doorSide[jQuery.inArray("right", doorSide)] == "right")
	{
		areaRect(x1+x2-wallWidth, y1, wallWidth, doorPos[jQuery.inArray("right", doorSide)]+wallWidth-doorLength[jQuery.inArray("right", doorSide)]/2, roomColor, true, false, roomId+4, areaId);
		areaRect(x1+x2-wallWidth, y1+doorPos[jQuery.inArray("right", doorSide)]+wallWidth+doorLength[jQuery.inArray("right", doorSide)]/2, wallWidth, y2-(doorPos[jQuery.inArray("right", doorSide)]+wallWidth+doorLength[jQuery.inArray("right", doorSide)]/2), roomColor, true, false, roomId+6, areaId);
	}
	else{
		areaRect(x1+x2-wallWidth, y1, wallWidth, y2-wallWidth, roomColor, true, false, roomId+4, areaId);
	}
	if(doorSide[jQuery.inArray("left", doorSide)] == "left")
	{
		areaRect(x1, y1+wallWidth, wallWidth, doorPos[jQuery.inArray("left", doorSide)]-doorLength[jQuery.inArray("left", doorSide)]/2, roomColor, true, false, roomId+8, areaId);
		areaRect(x1, y1+wallWidth+doorPos[jQuery.inArray("left", doorSide)]+doorLength[jQuery.inArray("left", doorSide)]/2, wallWidth, y2-doorPos[jQuery.inArray("left", doorSide)]-wallWidth-doorLength[jQuery.inArray("left", doorSide)]/2, roomColor, true, false, roomId+10, areaId);
	}
	else{
		areaRect(x1, y1+wallWidth, wallWidth, y2-wallWidth, roomColor, true, false, roomId+8, areaId);
	}
	if(doorSide[jQuery.inArray("bottom", doorSide)] == "bottom")
	{
		areaRect(x1+wallWidth, y1+y2-wallWidth, doorPos[jQuery.inArray("bottom", doorSide)]-doorLength[jQuery.inArray("bottom", doorSide)]/2, wallWidth, roomColor, true, false, roomId+12, areaId);
		areaRect(x1+wallWidth+doorPos[jQuery.inArray("bottom", doorSide)]+doorLength[jQuery.inArray("bottom", doorSide)]/2, y1+y2-wallWidth, x2-doorPos[jQuery.inArray("bottom", doorSide)]-wallWidth-doorLength[jQuery.inArray("bottom", doorSide)]/2, wallWidth, roomColor, true, false, roomId+14, areaId);
	}
	else{
		areaRect(x1+wallWidth, y1+y2-wallWidth, x2-wallWidth, wallWidth, roomColor, true, false, roomId+12, areaId);
	}
}
function areaTriangle(x1, y1, x2, y2, x3, y3, triangleColor, collision, isUser, triangleId, areaId)
{
	areaSprite2D(x1, y1, x2, y2, x3, y3, triangleColor, collision, isUser, triangleId, areaId);
	spriteDef[areaId][triangleId] = "triangle";
}
function areaRect(x1, y1, x2, y2, rectColor, collision, isUser, rectId, areaId)
{
	areaTriangle(x1, y1, x1+x2, y1, x1, y1+y2, rectColor, collision, isUser, rectId, areaId);
	areaTriangle(x1+x2, y1, x1, y1+y2, x1+x2, y1+y2, rectColor, collision, isUser, rectId+1, areaId);
	spriteDef[areaId][rectId] = "rect";
	spriteDef[areaId][rectId+1] = "";
}
function areaTextureRect(x1, y1, x2, y2, address, collision, isUser, rectId, areaId)
{
	if(areaSpriteTextured[areaId][rectId] !== true)
	{
		spriteTexture[areaId][rectId] = address;
		areaSpriteTextured[areaId][rectId] = true;
	}
	areaRect(x1, y1, x2, y2, [0, 0, 0, 1], collision, isUser, rectId, areaId);
	spriteDef[areaId][rectId] = "textureRect";
	spriteDef[areaId][rectId+1] = "";
}
function SpriteArea2D(x1, y1, x2, y2, x3, y3, dirX, dirY, isUser, spriteId, areaId)
{
	sprite2dId = spriteId;
	if (sprited[areaId][spriteId] !== true)
	{
		spriteAreaX1[areaId][sprite2dId] = x1;
		spriteAreaY1[areaId][sprite2dId] = y1;
		spriteAreaX2[areaId][sprite2dId] = x2;
		spriteAreaY2[areaId][sprite2dId] = y2;
		spriteAreaX3[areaId][sprite2dId] = x3;
		spriteAreaY3[areaId][sprite2dId] = y3;
		spriteUser[areaId][sprite2dId] = isUser;
		sprited[areaId][spriteId] = true;
	}
	if (maxSprites < sprite2dId)
	{
		maxSprites = sprite2dId;
	}
}
function drawAreaTriangle(x1, y1, x2, y2, x3, y3, triangleColor, collision, isUser, triangleId, areaId)
{
	if (drawn[areaId][triangleId] !== true)
	{
		spriteDrawAreaX1[areaId][triangleId] = x1;
		spriteDrawAreaX2[areaId][triangleId] = x2;
		spriteDrawAreaX3[areaId][triangleId] = x3;
		spriteDrawAreaY1[areaId][triangleId] = y1;
		spriteDrawAreaY2[areaId][triangleId] = y2;
		spriteDrawAreaY3[areaId][triangleId] = y3;
		spriteDrawAreaColorR[areaId][triangleId] = triangleColor[0];
		spriteDrawAreaColorG[areaId][triangleId] = triangleColor[1];
		spriteDrawAreaColorB[areaId][triangleId] = triangleColor[2];
		spriteDrawAreaColorA[areaId][triangleId] = triangleColor[3];
		spriteCollision[areaId][triangleId] = collision;
		spriteUser[areaId][triangleId] = isUser;
		drawn[areaId][triangleId] = true;
	}
	if(spriteCollision[areaId][triangleId])
	{
		SpriteArea2D(x1, y1, x2, y2, x3, y3, 0, 0, isUser, triangleId, areaId);
		areaTriangleCollision2D(triangleId, areaId);
	}
	SpriteCount2D(triangleId);
	context.beginPath();
	context.moveTo(spriteDrawAreaX1[areaId][triangleId], spriteDrawAreaY1[areaId][triangleId]);
	context.lineTo(spriteDrawAreaX2[areaId][triangleId], spriteDrawAreaY2[areaId][triangleId]);
	context.lineTo(spriteDrawAreaX3[areaId][triangleId], spriteDrawAreaY3[areaId][triangleId]);
	context.lineTo(spriteDrawAreaX1[areaId][triangleId], spriteDrawAreaY1[areaId][triangleId]);
	context.fillStyle = "rgba("+spriteDrawAreaColorR[areaId][triangleId]+","+spriteDrawAreaColorG[areaId][triangleId]+","+spriteDrawAreaColorB[areaId][triangleId]+","+spriteDrawAreaColorA[areaId][triangleId]+")";
	if(spriteDrawAreaColorA[areaId][triangleId] == 1)
	{
		context.strokeStyle = "rgba("+spriteDrawAreaColorR[areaId][triangleId]+","+spriteDrawAreaColorG[areaId][triangleId]+","+spriteDrawAreaColorB[areaId][triangleId]+","+spriteDrawAreaColorA[areaId][triangleId]+")";
	}
	else{
		context.strokeStyle = "rgba("+spriteDrawAreaColorR[areaId][triangleId]+","+spriteDrawAreaColorG[areaId][triangleId]+","+spriteDrawAreaColorB[areaId][triangleId]+","+(Math.pow(spriteDrawAreaColorA[areaId][triangleId], 3)/2)+")";
	}
	context.stroke();
	context.fill();
	context.closePath();
}
function drawAreaRect(x1, y1, x2, y2, rectColor, collision, isUser, rectId, areaId)
{
	exception[areaId][rectId][0] = rectId+1;
	exception[areaId][rectId+1][0] = rectId;	
	if(areaCollided[areaId][rectId+1])
	{
		dx[areaId][rectId] = dx[areaId][rectId+1];
		dy[areaId][rectId] = dy[areaId][rectId+1];
		spriteAreaX1[areaId][rectId] = spriteAreaX2[areaId][rectId+1];
		spriteAreaX2[areaId][rectId] = spriteAreaX1[areaId][rectId+1];
		spriteAreaX3[areaId][rectId] = spriteAreaX2[areaId][rectId+1];
		spriteAreaY1[areaId][rectId] = spriteAreaY1[areaId][rectId+1];
		spriteAreaY2[areaId][rectId] = spriteAreaY1[areaId][rectId+1];
		spriteAreaY3[areaId][rectId] = spriteAreaY3[areaId][rectId+1];
		spriteDrawAreaX1[areaId][rectId] = spriteAreaX1[areaId][rectId];
		spriteDrawAreaX2[areaId][rectId] = spriteAreaX2[areaId][rectId];
		spriteDrawAreaX3[areaId][rectId] = spriteAreaX3[areaId][rectId];
		spriteDrawAreaY1[areaId][rectId] = spriteAreaY1[areaId][rectId];
		spriteDrawAreaY2[areaId][rectId] = spriteAreaY2[areaId][rectId];
		spriteDrawAreaY3[areaId][rectId] = spriteAreaY3[areaId][rectId];
		areaCollided[areaId][rectId+1] = false;
	}
	if(areaCollided[areaId][rectId])
	{
		dx[areaId][rectId+1] = dx[areaId][rectId];
		dy[areaId][rectId+1] = dy[areaId][rectId];
		spriteAreaX1[areaId][rectId+1] = spriteAreaX2[areaId][rectId];
		spriteAreaX2[areaId][rectId+1] = spriteAreaX1[areaId][rectId];
		spriteAreaX3[areaId][rectId+1] = spriteAreaX2[areaId][rectId];
		spriteAreaY1[areaId][rectId+1] = spriteAreaY1[areaId][rectId];
		spriteAreaY2[areaId][rectId+1] = spriteAreaY3[areaId][rectId];
		spriteAreaY3[areaId][rectId+1] = spriteAreaY3[areaId][rectId];
		spriteDrawAreaX1[areaId][rectId+1] = spriteAreaX1[areaId][rectId+1];
		spriteDrawAreaX2[areaId][rectId+1] = spriteAreaX2[areaId][rectId+1];
		spriteDrawAreaX3[areaId][rectId+1] = spriteAreaX3[areaId][rectId+1];
		spriteDrawAreaY1[areaId][rectId+1] = spriteAreaY1[areaId][rectId+1];
		spriteDrawAreaY2[areaId][rectId+1] = spriteAreaY2[areaId][rectId+1];
		spriteDrawAreaY3[areaId][rectId+1] = spriteAreaY3[areaId][rectId+1];
		areaCollided[areaId][rectId] = false;
	}
	drawAreaTriangle(x1, y1, x1+x2, y1, x1, y1+y2, rectColor, collision, isUser, rectId, areaId);
	drawAreaTriangle(x1+x2, y1, x1, y1+y2, x1+x2, y1+y2, rectColor, collision, isUser, rectId+1, areaId);
}
function drawAreaRectTexture(x1, y1, x2, y2, address, collision, isUser, textureId, areaId)
{
	if(areaTextureSprited[areaId][textureId] !== true)
	{
		spriteTexture[areaId][textureId] = address;
		areaTextureSprited[areaId][textureId] = true;
	}
	texture = document.createElement("img");
	texture.src = spriteTexture[areaId][textureId];
	texture.setAttribute("id", "texture");
	drawAreaRect(x1, y1, x2, y2, [0, 0, 0, 0], collision, isUser, textureId, areaId);
	context.drawImage(texture, spriteDrawAreaX1[areaId][textureId], spriteDrawAreaY1[areaId][textureId], spriteDrawAreaX2[areaId][textureId]-spriteDrawAreaX1[areaId][textureId], spriteDrawAreaY3[areaId][textureId]-spriteDrawAreaY1[areaId][textureId]);
}
function drawArea(xLength, yLength, areaId)
{
	areaXLength[areaId] = xLength;
	areaYLength[areaId] = yLength;
	areaCollision(areaId);
	for(var i = maxSprites; i >= 0; i --)
	{
		if(spriteDef[areaId][i] == "rect")
		{
			localX2 = areaSpriteX2[areaId][i]-areaSpriteX1[areaId][i];
			localY2 = areaSpriteY3[areaId][i]-areaSpriteY1[areaId][i];
			localX = areaSpriteX1[areaId][i]-areaSpriteX1[areaId][findUser(areaId)]+canvas.width/2-(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2;
			localY = areaSpriteY1[areaId][i]-areaSpriteY1[areaId][findUser(areaId)]+canvas.height/2-(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2;
			localX = ((localX-areaSpriteX1[areaId][i]/areaZoom[areaId])+areaSpriteX1[areaId][i]);
			localY = ((localY-areaSpriteY1[areaId][i]/areaZoom[areaId])+areaSpriteY1[areaId][i]);
			localX2 = localX2*areaZoom[areaId];
			localY2 = localY2*areaZoom[areaId];
			if (areaSpawn[areaId][i] !== true)
			{
				if(areaSpriteX1[areaId][findUser(areaId)]-canvas.width/2+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2 < 0)
				{
					localX += (areaSpriteX1[areaId][findUser(areaId)]-canvas.width/2)+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2;
				}
				if(areaSpriteX1[areaId][findUser(areaId)]+canvas.width/2+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2 > areaXLength[areaId])
				{
					localX += (areaSpriteX1[areaId][findUser(areaId)]+(canvas.width/2+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2)-areaXLength[areaId]);
				}
				if(areaSpriteY1[areaId][findUser(areaId)]-canvas.height/2+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2 < 0)
				{
					localY += (areaSpriteY1[areaId][findUser(areaId)]-canvas.height/2)+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2;
				}
				if(areaSpriteY1[areaId][findUser(areaId)]+canvas.height/2+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2 > areaYLength[areaId])
				{
					localY += (areaSpriteY1[areaId][findUser(areaId)]+(canvas.height/2+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2)-areaYLength[areaId]);
				}
				areaSpawn[areaId][i] = true;
			}
			drawAreaRect(localX, localY, localX2, localY2, areaColor[areaId][i], spriteCollision[areaId][i], spriteUser[areaId][i], i, areaId)
			i--;
		}
		if(spriteDef[areaId][i] == "textureRect")
		{
			localX2 = areaSpriteX2[areaId][i]-areaSpriteX1[areaId][i];
			localY2 = areaSpriteY3[areaId][i]-areaSpriteY1[areaId][i];
			localX = areaSpriteX1[areaId][i]-areaSpriteX1[areaId][findUser(areaId)]+canvas.width/2-(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2;
			localY = areaSpriteY1[areaId][i]-areaSpriteY1[areaId][findUser(areaId)]+canvas.height/2-(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2;
			localX = ((localX-areaSpriteX1[areaId][i]/areaZoom[areaId])+areaSpriteX1[areaId][i]);
			localY = ((localY-areaSpriteY1[areaId][i]/areaZoom[areaId])+areaSpriteY1[areaId][i]);
			localX2 = localX2*areaZoom[areaId];
			localY2 = localY2*areaZoom[areaId];
			if (areaSpawn[areaId][i] !== true)
			{
				if(areaSpriteX1[areaId][findUser(areaId)]-canvas.width/2+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2 < 0)
				{
					localX += (areaSpriteX1[areaId][findUser(areaId)]-(canvas.width)/2)+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2;
				}
				if(areaSpriteX1[areaId][findUser(areaId)]+canvas.width/2+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2 > areaXLength[areaId])
				{
					localX += (areaSpriteX1[areaId][findUser(areaId)]+(canvas.width/2+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2)-areaXLength[areaId]);
				}
				if(areaSpriteY1[areaId][findUser(areaId)]-canvas.height/2+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2 < 0)
				{
					localY += (areaSpriteY1[areaId][findUser(areaId)]-(canvas.height)/2)+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2;
				}
				if(areaSpriteY1[areaId][findUser(areaId)]+canvas.height/2+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2 > areaYLength[areaId])
				{
					localY += (areaSpriteY1[areaId][findUser(areaId)]+(canvas.height/2+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2)-areaYLength[areaId]);
				}
				areaSpawn[areaId][i] = true;
			}
			drawAreaRectTexture(localX, localY, localX2, localY2, spriteTexture[areaId][i], spriteCollision[areaId][i], spriteUser[areaId][i], i, areaId);
			i--;
		}
		if(spriteDef[areaId][i] == "triangle")
		{
			localX = areaSpriteX1[areaId][i]-areaSpriteX1[areaId][findUser(areaId)]+canvas.width/2-(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2;
			localY = areaSpriteY1[areaId][i]-areaSpriteY1[areaId][findUser(areaId)]+canvas.height/2-(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2;
			localX2 = areaSpriteX2[areaId][i]-areaSpriteX1[areaId][findUser(areaId)]+canvas.width/2-(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2;
			localY2 = areaSpriteY2[areaId][i]-areaSpriteY1[areaId][findUser(areaId)]+canvas.height/2-(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2;
			localX3 = areaSpriteX3[areaId][i]-areaSpriteX1[areaId][findUser(areaId)]+canvas.width/2-(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2;
			localY3 = areaSpriteY3[areaId][i]-areaSpriteY1[areaId][findUser(areaId)]+canvas.height/2-(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2;
			localX = ((localX-areaSpriteX1[areaId][i]/areaZoom[areaId])+areaSpriteX1[areaId][i]);
			localX2 = ((localX2-areaSpriteX1[areaId][i]/areaZoom[areaId])+areaSpriteX1[areaId][i]);
			localX3 = ((localX3-areaSpriteX1[areaId][i]/areaZoom[areaId])+areaSpriteX1[areaId][i]);
			localY = ((localY-areaSpriteY1[areaId][i]/areaZoom[areaId])+areaSpriteY1[areaId][i]);
			localY2 = ((localY2-areaSpriteY1[areaId][i]/areaZoom[areaId])+areaSpriteY1[areaId][i]);
			localY3 = ((localY3-areaSpriteY1[areaId][i]/areaZoom[areaId])+areaSpriteY1[areaId][i]);
			if (areaSpawn[areaId][i] !== true)
			{
				if(areaSpriteX1[areaId][findUser(areaId)]-canvas.width/2+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2 < 0)
				{
					localX += (areaSpriteX1[areaId][findUser(areaId)]-canvas.width/2)+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2;
					localX2 += (areaSpriteX1[areaId][findUser(areaId)]-canvas.width/2)+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2;
					localX3 += (areaSpriteX1[areaId][findUser(areaId)]-canvas.width/2)+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2;
				}
				if(areaSpriteX1[areaId][findUser(areaId)]+canvas.width/2+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2 > areaXLength[areaId])
				{
					localX += (areaSpriteX1[areaId][findUser(areaId)]+(canvas.width/2+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2)-areaXLength[areaId]);
					localX2 += (areaSpriteX1[areaId][findUser(areaId)]+(canvas.width/2+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2)-areaXLength[areaId]);
					localX3 += (areaSpriteX1[areaId][findUser(areaId)]+(canvas.width/2+(areaSpriteX2[areaId][findUser(areaId)]-areaSpriteX1[areaId][findUser(areaId)])/2)-areaXLength[areaId]);
				}
				if(areaSpriteY1[areaId][findUser(areaId)]-canvas.height/2+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2 < 0)
				{
					localY += (areaSpriteY1[areaId][findUser(areaId)]-(canvas.height)/2)+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2;
					localY2 += (areaSpriteY1[areaId][findUser(areaId)]-(canvas.height)/2)+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2;
					localY3 += (areaSpriteY1[areaId][findUser(areaId)]-(canvas.height)/2)+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2;
				}
				if(areaSpriteY1[areaId][findUser(areaId)]+canvas.height/2+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2 > areaYLength[areaId])
				{
					localY += (areaSpriteY1[areaId][findUser(areaId)]+(canvas.height/2+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2)-areaYLength[areaId]);
					localY2 += (areaSpriteY1[areaId][findUser(areaId)]+(canvas.height/2+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2)-areaYLength[areaId]);
					localY3 += (areaSpriteY1[areaId][findUser(areaId)]+(canvas.height/2+(areaSpriteY3[areaId][findUser(areaId)]-areaSpriteY1[areaId][findUser(areaId)])/2)-areaYLength[areaId]);
				}
				areaSpawn[areaId][i] = true;
			}
			drawAreaTriangle(localX, localY, localX2, localY2, localX3, localY3, areaColor[areaId][i], spriteCollision[areaId][i], spriteUser[areaId][i], i, areaId)
		}
	}
}
function zoom(amount, areaId)
{
	areaZoom[areaId] = areaZoom[areaId]*amount;
	for (var i = 0; i <= maxSprites; i++)
	{
		spriteAreaX1[areaId][i] = ((spriteAreaX1[areaId][i]-canvas.width/2)/amount+canvas.width/2);
		spriteAreaX2[areaId][i] = ((spriteAreaX2[areaId][i]-canvas.width/2)/amount+canvas.width/2);
		spriteAreaX3[areaId][i] = ((spriteAreaX3[areaId][i]-canvas.width/2)/amount+canvas.width/2);
		spriteAreaY1[areaId][i] = ((spriteAreaY1[areaId][i]-canvas.height/2)/amount+canvas.height/2);
		spriteAreaY2[areaId][i] = ((spriteAreaY2[areaId][i]-canvas.height/2)/amount+canvas.height/2);
		spriteAreaY3[areaId][i] = ((spriteAreaY3[areaId][i]-canvas.height/2)/amount+canvas.height/2);
		spriteDrawAreaX1[areaId][i] = ((spriteDrawAreaX1[areaId][i]-canvas.width/2)/amount+canvas.width/2);
		spriteDrawAreaX2[areaId][i] = ((spriteDrawAreaX2[areaId][i]-canvas.width/2)/amount+canvas.width/2);
		spriteDrawAreaX3[areaId][i] = ((spriteDrawAreaX3[areaId][i]-canvas.width/2)/amount+canvas.width/2);
		spriteDrawAreaY1[areaId][i] = ((spriteDrawAreaY1[areaId][i]-canvas.height/2)/amount+canvas.height/2);
		spriteDrawAreaY2[areaId][i] = ((spriteDrawAreaY2[areaId][i]-canvas.height/2)/amount+canvas.height/2);
		spriteDrawAreaY3[areaId][i] = ((spriteDrawAreaY3[areaId][i]-canvas.height/2)/amount+canvas.height/2);		
	}
}
function drawMap(areaId)
{
	for(i = maxSprites; i >= 0; i--)
	{
		if(spriteDef[areaId][i] == "rect")
		{
			drawPassiveRect(mapAreaX1[areaId][i], mapAreaY1[areaId][i], mapAreaX2[areaId][i]-mapAreaX1[areaId][i], mapAreaY3[areaId][i]-mapAreaY1[areaId][i], [spriteDrawAreaColorR[areaId][i], spriteDrawAreaColorG[areaId][i], spriteDrawAreaColorB[areaId][i], spriteDrawAreaColorA[areaId][i]])
			i--;
		}
		else if(spriteDef[areaId][i] == "textureRect")
		{
			drawPassiveRectTexture(mapAreaX1[areaId][i], mapAreaY1[areaId][i], mapAreaX2[areaId][i]-mapAreaX1[areaId][i], mapAreaY3[areaId][i]-mapAreaY1[areaId][i], spriteTexture[areaId][i])
			i--;
		}
		else if(spriteDef[areaId][i] == "triangle")
		{
			
		}
	}
}
function map(x1, y1, x2, y2, areaId)
{
	for (i = 0; i <= maxSprites; i++)
	{
		mapAreaX1[areaId][i] = x1+((areaSpriteX1[areaId][i])/areaXLength[areaId])*x2;
		mapAreaX2[areaId][i] = x1+((areaSpriteX2[areaId][i])/areaXLength[areaId])*x2;
		mapAreaX3[areaId][i] = x1+((areaSpriteX3[areaId][i])/areaXLength[areaId])*x2;
		mapAreaY1[areaId][i] = y1+((areaSpriteY1[areaId][i])/areaYLength[areaId])*y2;
		mapAreaY2[areaId][i] = y1+((areaSpriteY2[areaId][i])/areaYLength[areaId])*y2;
		mapAreaY3[areaId][i] = y1+((areaSpriteY3[areaId][i])/areaYLength[areaId])*y2;
	}
	drawMap(areaId);
}
/*function reInit(areaId)
{
	for(var i = maxSprites; i >= 0; i--)
	{
		drawn[areaId][i] = false;
		sprited[areaId][i] = false;
		dx[areaId][i] = undefined;
		dy[areaId][i] = undefined;
		spriteAreaX1[areaId][i] = undefined;
		spriteAreaY1[areaId][i] = undefined;
 		spriteAreaX2[areaId][i] = undefined;
		spriteAreaY2[areaId][i] = undefined;
		spriteAreaX3[areaId][i] = undefined;
		spriteAreaY3[areaId][i] = undefined;
		spriteDrawAreaX1[areaId][i] = undefined;
		spriteDrawAreaX2[areaId][i] = undefined;
		spriteDrawAreaX3[areaId][i] = undefined;	
		spriteDrawAreaY1[areaId][i] = undefined;
		spriteDrawAreaY2[areaId][i] = undefined;
		spriteDrawAreaY3[areaId][i] = undefined;
		spriteDrawColorR[areaId][i] = undefined;
		spriteDrawColorG[areaId][i] = undefined;
		spriteDrawColorB[areaId][i] = undefined;
		spriteDrawColorA[areaId][i] = undefined;
		dx[areaId][i] = undefined;
		dy[areaId][i] = undefined;
		spriteCollision[areaId][i] = false;
		spriteUser[areaId][i] = false;
		areaSprited[areaId][i] = false;
		textureSprited[areaId][i] = false;
		areaSpriteX1[areaId][i] = undefined;
		areaSpriteX2[areaId][i] = undefined;
		areaSpriteX3[areaId][i] = undefined;
		areaSpriteY1[areaId][i] = undefined;
		areaSpriteY2[areaId][i] = undefined;
		areaSpriteY3[[areaId]i] = undefined;
	}
}*/
function SpriteReInit(spriteId, areaId)
{
	//drawn[areaId][spriteId] = false;
	//sprited[areaId][spriteId] = false;
	dx[areaId][spriteId] = undefined;
	dy[areaId][spriteId] = undefined;
	spriteAreaX1[areaId][spriteId] = undefined;
	spriteAreaY1[areaId][spriteId] = undefined;
	spriteAreaX2[areaId][spriteId] = undefined;
	spriteAreaY2[areaId][spriteId] = undefined;
	spriteAreaX3[areaId][spriteId] = undefined;
	spriteAreaY3[areaId][spriteId] = undefined;
	spriteDrawAreaX1[areaId][spriteId] = undefined;
	spriteDrawAreaX2[areaId][spriteId] = undefined;
	spriteDrawAreaX3[areaId][spriteId] = undefined;	
	spriteDrawAreaY1[areaId][spriteId] = undefined;
	spriteDrawAreaY2[areaId][spriteId] = undefined;
	spriteDrawAreaY3[areaId][spriteId] = undefined;
	//spriteCollision[areaId][spriteId] = false;
	//spriteUser[areaId][spriteId] = false;
	areaSprited[areaId][spriteId] = false;
	areaSpriteX1[areaId][spriteId] = undefined;
	areaSpriteX2[areaId][spriteId] = undefined;
	areaSpriteX3[areaId][spriteId] = undefined;
	areaSpriteY1[areaId][spriteId] = undefined;
	areaSpriteY2[areaId][spriteId] = undefined;
	areaSpriteY3[areaId][spriteId] = undefined;
}
function changeAreaRectSprite(x1, y1, x2, y2, spriteId, areaId)
{
	spriteAreaX1[areaId][spriteId] = x1;
	spriteAreaY1[areaId][spriteId] = y1;
	spriteAreaX2[areaId][spriteId] = x1+x2;
	spriteAreaY2[areaId][spriteId] = y1;
	spriteAreaX3[areaId][spriteId] = x1;
	spriteAreaY3[areaId][spriteId] = y1+y2;
	spriteDrawAreaX1[areaId][spriteId] = spriteAreaX1[areaId][spriteId];
	spriteDrawAreaX2[areaId][spriteId] = spriteAreaX2[areaId][spriteId];
	spriteDrawAreaX3[areaId][spriteId] = spriteAreaX3[areaId][spriteId];
	spriteDrawAreaY1[areaId][spriteId] = spriteAreaY1[areaId][spriteId];
	spriteDrawAreaY2[areaId][spriteId] = spriteAreaY2[areaId][spriteId];
	spriteDrawAreaY3[areaId][spriteId] = spriteAreaY3[areaId][spriteId];
}
function rectContact(spriteId1, spriteId2, areaId)
{
	if(contact(spriteId1, spriteId2, areaId) || contact(spriteId1, spriteId2+1, areaId) || contact(spriteId1+1, spriteId2, areaId) || contact(spriteId1+1, spriteId2+1, areaId))
	{
		return true;
	}
}
function contact(spriteId1, spriteId2, areaId)
{
	for(var k = 1; k >= 0; k--)
	{
		if(k == 1)
		{
			i = spriteId1;
			sprite2dId = spriteId2;
		}
		if(k == 0)
		{
			i = spriteId2;
			sprite2dId = spriteId1;
		}
		if (spriteDrawAreaY3[areaId][i] > (spriteDrawAreaX3[areaId][i])*((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX2[areaId][i])) + (spriteDrawAreaY1[areaId][i] - ((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX2[areaId][i]))*(spriteDrawAreaX1[areaId][i])))
		{
			if (spriteDrawAreaY2[areaId][i] > (spriteDrawAreaX2[areaId][i])*((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i])) + (spriteDrawAreaY1[areaId][i] - (((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]))*(spriteDrawAreaX1[areaId][i]))) || (spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]) == 0 && spriteDrawAreaX2[areaId][i] > spriteDrawAreaX1[areaId][i])
			{
				if(spriteDrawAreaY1[areaId][i] < (spriteDrawAreaX1[areaId][i])*((spriteDrawAreaY2[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX2[areaId][i]-spriteDrawAreaX3[areaId][i])) + (spriteDrawAreaY2[areaId][i] - (((spriteDrawAreaY2[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX2[areaId][i]-spriteDrawAreaX3[areaId][i]))*(spriteDrawAreaX2[areaId][i]))))
				{
					if (dy[areaId][sprite2dId]+spriteDrawAreaY1[areaId][sprite2dId] >= ((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY1[areaId][i] - (((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX2[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX1[areaId][i]))))
					{
						if(dy[areaId][sprite2dId]+spriteDrawAreaY1[areaId][sprite2dId] >= ((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY1[areaId][i] - (((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX1[areaId][i]))) || (spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]) == 0 && dx[areaId][sprite2dId] + spriteDrawAreaX1[areaId][sprite2dId] >= dx[areaId][i]+spriteDrawAreaX1[areaId][i])
						{
							if(dy[areaId][sprite2dId]+spriteDrawAreaY1[areaId][sprite2dId] <= ((spriteDrawAreaY2[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX2[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY2[areaId][i] - (((spriteDrawAreaY2[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX2[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX2[areaId][i]))))
							{
								return true;
							}
						}
					}
					if (dy[areaId][sprite2dId]+spriteDrawAreaY2[areaId][sprite2dId] >= ((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY1[areaId][i] - (((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX2[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX1[areaId][i]))))
					{
						if(dy[areaId][sprite2dId]+spriteDrawAreaY2[areaId][sprite2dId] >= ((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY1[areaId][i] - (((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX1[areaId][i]))) || (spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]) == 0 && dx[areaId][sprite2dId] + spriteDrawAreaX2[areaId][sprite2dId] >= dx[areaId][i]+spriteDrawAreaX1[areaId][i])
						{
							if(dy[areaId][sprite2dId]+spriteDrawAreaY2[areaId][sprite2dId] <= ((spriteDrawAreaY2[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX2[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY2[areaId][i] - (((spriteDrawAreaY2[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX2[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX2[areaId][i]))))
							{
								return true;
							}
						}
					}
					if (dy[areaId][sprite2dId]+spriteDrawAreaY3[areaId][sprite2dId] >= ((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY1[areaId][i] - (((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX2[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX1[areaId][i]))))
					{
						if(dy[areaId][sprite2dId]+spriteDrawAreaY3[areaId][sprite2dId] >= ((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY1[areaId][i] - (((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX1[areaId][i]))) || (spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]) == 0 && dx[areaId][sprite2dId] + spriteDrawAreaX3[areaId][sprite2dId] >= dx[areaId][i]+spriteDrawAreaX1[areaId][i])
						{
							if(dy[areaId][sprite2dId]+spriteDrawAreaY3[areaId][sprite2dId] <= ((spriteDrawAreaY2[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX2[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY2[areaId][i] - (((spriteDrawAreaY2[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX2[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX2[areaId][i]))))
							{
								return true;
							}
						}
					}
				}
			}
		}
		if(spriteDrawAreaY1[areaId][i] < ((spriteDrawAreaY2[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX2[areaId][i]-spriteDrawAreaX3[areaId][i]))*(spriteDrawAreaX1[areaId][i]) + (spriteDrawAreaY2[areaId][i] - (((spriteDrawAreaY2[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX2[areaId][i]-spriteDrawAreaX3[areaId][i]))*(spriteDrawAreaX2[areaId][i]))))
		{
			if(spriteDrawAreaY2[areaId][i] < ((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]))*(spriteDrawAreaY2[areaId][i]) + (spriteDrawAreaY1[areaId][i] - (((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]))*(spriteDrawAreaX2[areaId][i]))) || (spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]) == 0 && spriteDrawAreaX2[areaId][i] < spriteDrawAreaX3[areaId][i])
			{
				if(spriteDrawAreaY3[areaId][i] < ((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i])/(spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i]))*(spriteDrawAreaX3[areaId][i]) + (spriteDrawAreaY1[areaId][i] - (((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX2[areaId][i]))*(spriteDrawAreaX1[areaId][i]))))
				{
					if(movable == false)
					{
						if (dy[areaId][sprite2dId]+spriteDrawAreaY1[areaId][sprite2dId] <= ((spriteDrawAreaY2[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX2[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY2[areaId][i] - (((spriteDrawAreaY2[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX2[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX2[areaId][i]))))
						{
							if(dy[areaId][sprite2dId]+spriteDrawAreaY1[areaId][sprite2dId] <= ((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY1[areaId][i] - (((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX1[areaId][i]))) || (spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]) == 0 && dx[areaId][sprite2dId] + spriteDrawAreaX1[areaId][sprite2dId] <= dx[areaId][i]+spriteDrawAreaX1[areaId][i])
							{
								if(dy[areaId][sprite2dId]+spriteDrawAreaY1[areaId][sprite2dId] >= ((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY1[areaId][i] - (((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX2[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX1[areaId][i]))))
								{
									return true;
								}
							}
						}
						
						if (dy[areaId][sprite2dId]+spriteDrawAreaY2[areaId][sprite2dId] <= ((spriteDrawAreaY2[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX2[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY2[areaId][i] - (((spriteDrawAreaY2[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX2[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX2[areaId][i]))))
						{
							if(dy[areaId][sprite2dId]+spriteDrawAreaY2[areaId][sprite2dId] <= ((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY1[areaId][i] - (((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX1[areaId][i]))) || (spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]) == 0 && dx[areaId][sprite2dId] + spriteDrawAreaX2[areaId][sprite2dId] <= dx[areaId][i]+spriteDrawAreaX1[areaId][i])
							{
								if(dy[areaId][sprite2dId]+spriteDrawAreaY2[areaId][sprite2dId] >= ((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY1[areaId][i] - (((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX2[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX1[areaId][i]))))
								{
									return true;
								}
							}
						}
						if (dy[areaId][sprite2dId]+spriteDrawAreaY3[areaId][sprite2dId] <= ((spriteDrawAreaY2[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX2[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY2[areaId][i] - (((spriteDrawAreaY2[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX2[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX2[areaId][i]))))
						{
							if(dy[areaId][sprite2dId]+spriteDrawAreaY3[areaId][sprite2dId] <= ((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY1[areaId][i] - (((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY3[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX1[areaId][i]))) || (spriteDrawAreaX1[areaId][i]-spriteDrawAreaX3[areaId][i]) == 0 && dx[areaId][sprite2dId] + spriteDrawAreaX3[areaId][sprite2dId] <= dx[areaId][i]+spriteDrawAreaX1[areaId][i])
							{
								if(dy[areaId][sprite2dId]+spriteDrawAreaY3[areaId][sprite2dId] >= ((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteDrawAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteDrawAreaY1[areaId][i] - (((spriteDrawAreaY1[areaId][i]-spriteDrawAreaY2[areaId][i])/(spriteDrawAreaX1[areaId][i]-spriteDrawAreaX2[areaId][i]))*(dx[areaId][i]+spriteDrawAreaX1[areaId][i]))))
								{
									return true;
								}
							}
						}
					}
				}
			}
		}
	}
}
function areaTriangleCollision2D(sprite2dId, areaId)
{
	for (var i = maxSprites; i >= 0; i--)
	{
		if (i == sprite2dId)
		{
			i--;
		}
		for(var k = exception[areaId][sprite2dId].length; k >= 0; k--)
		{
			if(exception[areaId][sprite2dId][k] == i)
			{
				i--;
			}
		}
		if (i == sprite2dId)
		{
			i--;
		}
		if (spriteAreaY3[areaId][i] > (spriteAreaX3[areaId][i])*((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])) + (spriteAreaY1[areaId][i] - ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(spriteAreaX1[areaId][i])))
		{
			if (spriteAreaY2[areaId][i] > (spriteAreaX2[areaId][i])*((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])) + (spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX1[areaId][i]))) || (spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) == 0 && spriteAreaX2[areaId][i] > spriteAreaX1[areaId][i])
			{
				if(spriteAreaY1[areaId][i] < (spriteAreaX1[areaId][i])*((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])) + (spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX2[areaId][i]))))
				{
					if(movable == false)
					{
						if (dy[areaId][sprite2dId]+spriteAreaY1[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))))
						{
							if(dy[areaId][sprite2dId]+spriteAreaY1[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))) || (spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) == 0 && dx[areaId][sprite2dId] + spriteAreaX1[areaId][sprite2dId] >= dx[areaId][i]+spriteAreaX1[areaId][i])
							{
								if(dy[areaId][sprite2dId]+spriteAreaY1[areaId][sprite2dId] <= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX2[areaId][i]))))
								{
									if(spriteAreaY1[areaId][sprite2dId] <= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(spriteAreaX1[areaId][sprite2dId]) + (spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(spriteAreaX1[areaId][i]))) && (spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) !== 0)
									{
										while(dy[areaId][sprite2dId]+spriteAreaY1[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))))
										{
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) <= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))
											{
												if((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))||true)
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) >= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))
											{
												if((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if(spriteAreaY1[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX1[areaId][sprite2dId]) + (spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX1[areaId][i]))))
									{
										while(dy[areaId][sprite2dId]+spriteAreaY1[areaId][sprite2dId] <= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))))
										{
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) <= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) >= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if(spriteAreaY1[areaId][sprite2dId] >= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX1[areaId][sprite2dId]) + (spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX2[areaId][i]))) && (spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) !== 0)
									{
										while(dy[areaId][sprite2dId]+spriteAreaY1[areaId][sprite2dId] <= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX2[areaId][i]))))
										{
											if(Math.abs(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) <= Math.abs(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) >= Math.abs(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) == 0 && spriteAreaX1[areaId][sprite2dId] <= spriteAreaX1[areaId][i])
									{
										while(dx[areaId][sprite2dId] + spriteAreaX1[areaId][sprite2dId] >= dx[areaId][i]+spriteAreaX1[areaId][i])
										{
											if(Math.abs(dx[areaId][sprite2dId]) >= Math.abs(dx[areaId][i]))
											{
												dx[areaId][sprite2dId] -= 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dx[areaId][sprite2dId]) < Math.abs(dx[areaId][i])) // add <= to become moveable
											{
												dx[areaId][i] += 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
									if((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) == 0 && spriteAreaY1[areaId][sprite2dId] <= spriteAreaY1[areaId][i])
									{
										while(dy[areaId][sprite2dId] + spriteAreaY1[areaId][sprite2dId] >= dy[areaId][i]+spriteAreaY1[areaId][i])
										{
											if(Math.abs(dy[areaId][sprite2dId]) >= Math.abs(dy[areaId][i]))
											{
												dy[areaId][sprite2dId] -= 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dy[areaId][sprite2dId]) < Math.abs(dy[areaId][i])) // add <= to become moveable
											{
												dy[areaId][i] += 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
									if((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) == 0 && spriteAreaY1[areaId][sprite2dId] <= spriteAreaY2[areaId][i])
									{
										while(dy[areaId][sprite2dId] + spriteAreaY1[areaId][sprite2dId] >= dy[areaId][i]+spriteAreaY2[areaId][i])
										{
											if(Math.abs(dy[areaId][sprite2dId]) >= Math.abs(dy[areaId][i]))
											{
												dy[areaId][sprite2dId] -= 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dy[areaId][sprite2dId]) < Math.abs(dy[areaId][i])) // add <= to become moveable
											{
												dy[areaId][i] += 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
								}
							}
						}
						//spriteY2
						if (dy[areaId][sprite2dId]+spriteAreaY2[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))))
						{
							if(dy[areaId][sprite2dId]+spriteAreaY2[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))) || (spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) == 0 && dx[areaId][sprite2dId] + spriteAreaX2[areaId][sprite2dId] >= dx[areaId][i]+spriteAreaX1[areaId][i])
							{
								if(dy[areaId][sprite2dId]+spriteAreaY2[areaId][sprite2dId] <= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX2[areaId][i]))))
								{//alert(2)
									if(spriteAreaY2[areaId][sprite2dId] <= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(spriteAreaX2[areaId][sprite2dId]) + (spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(spriteAreaX1[areaId][i]))) && (spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) !== 0)
									{
										while(dy[areaId][sprite2dId]+spriteAreaY2[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))) && (spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) !== 0)
										{
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) <= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))
											{
												if((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))||true)
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) >= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))
											{
												if((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if(spriteAreaY2[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX2[areaId][sprite2dId]) + (spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX1[areaId][i]))))
									{
										while(dy[areaId][sprite2dId]+spriteAreaY2[areaId][sprite2dId] <= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))))
										{
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) <= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) >= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if(spriteAreaY2[areaId][sprite2dId] >= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX2[areaId][sprite2dId]) + (spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX2[areaId][i]))) && (spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) !== 0)
									{
										while(dy[areaId][sprite2dId]+spriteAreaY2[areaId][sprite2dId] <= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX2[areaId][i]))))
										{
											if(Math.abs(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) <= Math.abs(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) >= Math.abs(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) == 0 && spriteAreaX2[areaId][sprite2dId] <= spriteAreaX1[areaId][i])
									{
										while(dx[areaId][sprite2dId] + spriteAreaX2[areaId][sprite2dId] >= dx[areaId][i]+spriteAreaX1[areaId][i])
										{
											if(Math.abs(dx[areaId][sprite2dId]) >= Math.abs(dx[areaId][i]))
											{
												dx[areaId][sprite2dId] -= 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dx[areaId][sprite2dId]) < Math.abs(dx[areaId][i])) // add <= to become moveable
											{
												dx[areaId][i] += 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
									if((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) == 0 && spriteAreaY2[areaId][sprite2dId] <= spriteAreaY1[areaId][i])
									{
										while(dy[areaId][sprite2dId] + spriteAreaY2[areaId][sprite2dId] >= dy[areaId][i]+spriteAreaY1[areaId][i])
										{
											if(Math.abs(dy[areaId][sprite2dId]) >= Math.abs(dy[areaId][i]))
											{
												dy[areaId][sprite2dId] -= 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dy[areaId][sprite2dId]) < Math.abs(dy[areaId][i])) // add <= to become moveable
											{
												dy[areaId][i] += 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
									if((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) == 0 && spriteAreaY2[areaId][sprite2dId] <= spriteAreaY2[areaId][i])
									{
										while(dy[areaId][sprite2dId] + spriteAreaY2[areaId][sprite2dId] >= dy[areaId][i]+spriteAreaY2[areaId][i])
										{
											if(Math.abs(dy[areaId][sprite2dId]) >= Math.abs(dy[areaId][i]))
											{
												dy[areaId][sprite2dId] -= 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dy[areaId][sprite2dId]) < Math.abs(dy[areaId][i])) // add <= to become moveable
											{
												dy[areaId][i] += 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
								}
							}
						}
						//spriteY3
						if (dy[areaId][sprite2dId]+spriteAreaY3[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))))
						{
							if(dy[areaId][sprite2dId]+spriteAreaY3[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))) || (spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) == 0 && dx[areaId][sprite2dId] + spriteAreaX3[areaId][sprite2dId] >= dx[areaId][i]+spriteAreaX1[areaId][i])
							{
								if(dy[areaId][sprite2dId]+spriteAreaY3[areaId][sprite2dId] <= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX2[areaId][i]))))
								{//alert(3)
									if(spriteAreaY3[areaId][sprite2dId] <= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(spriteAreaX3[areaId][sprite2dId]) + (spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(spriteAreaX1[areaId][i]))) && (spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) !== 0)
									{
										while(dy[areaId][sprite2dId]+spriteAreaY3[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))) && (spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) !== 0)
										{
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) <= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))
											{
												if((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))||true)
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) >= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))
											{
												if((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if(spriteAreaY3[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX3[areaId][sprite2dId]) + (spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX1[areaId][i]))))
									{
										while(dy[areaId][sprite2dId]+spriteAreaY3[areaId][sprite2dId] <= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))))
										{
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) <= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) >= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
														
													}
												}
											}
										}
									}
									if(spriteAreaY3[areaId][sprite2dId] >= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX3[areaId][sprite2dId]) + (spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX2[areaId][i]))) && (spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) !== 0)
									{
										while(dy[areaId][sprite2dId]+spriteAreaY3[areaId][sprite2dId] <= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX2[areaId][i]))))
										{
											if(Math.abs(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) <= Math.abs(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) >= Math.abs(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) == 0 && spriteAreaX3[areaId][sprite2dId] <= spriteAreaX1[areaId][i])
									{
										while(dx[areaId][sprite2dId] + spriteAreaX3[areaId][sprite2dId] >= dx[areaId][i]+spriteAreaX1[areaId][i])
										{
											if(Math.abs(dx[areaId][sprite2dId]) >= Math.abs(dx[areaId][i]))
											{
												dx[areaId][sprite2dId] -= 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dx[areaId][sprite2dId]) < Math.abs(dx[areaId][i])) // add <= to become moveable
											{
												dx[areaId][i] += 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
									if((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) == 0 && spriteAreaY3[areaId][sprite2dId] <= spriteAreaY1[areaId][i])
									{
										while(dy[areaId][sprite2dId] + spriteAreaY3[areaId][sprite2dId] >= dy[areaId][i]+spriteAreaY1[areaId][i])
										{
											if(Math.abs(dy[areaId][sprite2dId]) >= Math.abs(dy[areaId][i]))
											{
												dy[areaId][sprite2dId] -= 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dy[areaId][sprite2dId]) < Math.abs(dy[areaId][i])) // add <= to become moveable
											{
												dy[areaId][i] += 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
									if((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) == 0 && spriteAreaY3[areaId][sprite2dId] <= spriteAreaY2[areaId][i])
									{
										while(dy[areaId][sprite2dId] + spriteAreaY3[areaId][sprite2dId] >= dy[areaId][i]+spriteAreaY2[areaId][i])
										{
											if(Math.abs(dy[areaId][sprite2dId]) >= Math.abs(dy[areaId][i]))
											{
												dy[areaId][sprite2dId] -= 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dy[areaId][sprite2dId]) < Math.abs(dy[areaId][i])) // add <= to become moveable
											{
												dy[areaId][i] += 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		if(spriteAreaY1[areaId][i] < ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX1[areaId][i]) + (spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX2[areaId][i]))))
		{
			if(spriteAreaY2[areaId][i] < ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaY2[areaId][i]) + (spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX2[areaId][i]))) || (spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) == 0 && spriteAreaX2[areaId][i] < spriteAreaX3[areaId][i])
			{
				if(spriteAreaY3[areaId][i] < ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))*(spriteAreaX3[areaId][i]) + (spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(spriteAreaX1[areaId][i]))))
				{
					if(movable == false)
					{
						if (dy[areaId][sprite2dId]+spriteAreaY1[areaId][sprite2dId] <= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX2[areaId][i]))))
						{
							if(dy[areaId][sprite2dId]+spriteAreaY1[areaId][sprite2dId] <= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))) || (spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) == 0 && dx[areaId][sprite2dId] + spriteAreaX1[areaId][sprite2dId] <= dx[areaId][i]+spriteAreaX1[areaId][i])
							{
								if(dy[areaId][sprite2dId]+spriteAreaY1[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))))
								{//alert(4)
									if(spriteAreaY1[areaId][sprite2dId] >= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX1[areaId][sprite2dId]) + (spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX2[areaId][i]))) && (spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) !== 0)
									{
										while(dy[areaId][sprite2dId]+spriteAreaY1[areaId][sprite2dId] <= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX2[areaId][i]))))
										{
											if(Math.abs(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) <= Math.abs(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) >= Math.abs(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if(spriteAreaY1[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX1[areaId][sprite2dId]) + (spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX1[areaId][i]))))
									{
										while(dy[areaId][sprite2dId]+spriteAreaY1[areaId][sprite2dId] <= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))) || (spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) == 0 && dx[areaId][sprite2dId] + spriteAreaX1[areaId][sprite2dId] < dx[areaId][i]+spriteAreaX1[areaId][i])
										{
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) <= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) >= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if(spriteAreaY1[areaId][sprite2dId] <= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(spriteAreaX1[areaId][sprite2dId]) + (spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(spriteAreaX1[areaId][i]))) && (spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) !== 0)
									{
										while(dy[areaId][sprite2dId]+spriteAreaY1[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX1[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))))
										{
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) <= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))
											{
												if((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) >= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))
											{
												if((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i] == 0 && spriteAreaX1[areaId][sprite2dId] >= spriteAreaX1[areaId][i])
									{
										while(dx[areaId][sprite2dId]+spriteAreaX1[areaId][sprite2dId] <= dx[areaId][i]+spriteAreaX1[areaId][i])
										{
											if(Math.abs(dx[areaId][sprite2dId]) >= Math.abs(dx[areaId][i]))
											{
												dx[areaId][sprite2dId] += 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dx[areaId][sprite2dId]) < Math.abs(dx[areaId][i]))
											{
												dx[areaId][i] -= 1;
												areaCollided[areaId][i] = true;	
											}
										}
									}
									if(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i] == 0 && spriteAreaY1[areaId][sprite2dId] >= spriteAreaY2[areaId][i])
									{
										while(dy[areaId][sprite2dId]+spriteAreaY1[areaId][sprite2dId] <= dy[areaId][i]+spriteAreaY2[areaId][i])
										{
											if(Math.abs(dy[areaId][sprite2dId]) >= Math.abs(dy[areaId][i]))
											{
												dy[areaId][sprite2dId] += 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dy[areaId][sprite2dId]) < Math.abs(dy[areaId][i]))
											{
												dy[areaId][i] -= 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
									if(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i] == 0 && spriteAreaY1[areaId][sprite2dId] >= spriteAreaY2[areaId][i])
									{
										while(dy[areaId][sprite2dId]+spriteAreaY1[areaId][sprite2dId] <= dy[areaId][i]+spriteAreaY2[areaId][i])
										{
											if(Math.abs(dy[areaId][sprite2dId]) >= Math.abs(dy[areaId][i]))
											{
												dy[areaId][sprite2dId] += 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dy[areaId][sprite2dId]) < Math.abs(dy[areaId][i]))
											{
												dy[areaId][i] -= 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
								}
							}
						}
						
						if (dy[areaId][sprite2dId]+spriteAreaY2[areaId][sprite2dId] <= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX2[areaId][i]))))
						{
							if(dy[areaId][sprite2dId]+spriteAreaY2[areaId][sprite2dId] <= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))) || (spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) == 0 && dx[areaId][sprite2dId] + spriteAreaX2[areaId][sprite2dId] <= dx[areaId][i]+spriteAreaX1[areaId][i])
							{
								if(dy[areaId][sprite2dId]+spriteAreaY2[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))))
								{//alert(5)
									if(spriteAreaY2[areaId][sprite2dId] >= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX2[areaId][sprite2dId]) + (spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX2[areaId][i]))) && (spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) !== 0)
									{
										while(dy[areaId][sprite2dId]+spriteAreaY2[areaId][sprite2dId] <= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX2[areaId][i]))))
										{
											if(Math.abs(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) <= Math.abs(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) >= Math.abs(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if(spriteAreaY2[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX2[areaId][sprite2dId]) + (spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX1[areaId][i]))))
									{
										while(dy[areaId][sprite2dId]+spriteAreaY2[areaId][sprite2dId] <= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))) || (spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) == 0 && dx[areaId][sprite2dId] + spriteAreaX2[areaId][sprite2dId] < dx[areaId][i]+spriteAreaX1[areaId][i])
										{
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) <= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) >= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if(spriteAreaY2[areaId][sprite2dId] <= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(spriteAreaX2[areaId][sprite2dId]) + (spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(spriteAreaX1[areaId][i]))) && (spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) !== 0)
									{
										while(dy[areaId][sprite2dId]+spriteAreaY2[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX2[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))))
										{
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) <= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))
											{
												if((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) >= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))
											{
												if((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i] == 0 && spriteAreaX2[areaId][sprite2dId] >= spriteAreaX1[areaId][i])
									{
										while(dx[areaId][sprite2dId]+spriteAreaX2[areaId][sprite2dId] <= dx[areaId][i]+spriteAreaX1[areaId][i])
										{
											if(Math.abs(dx[areaId][sprite2dId]) >= Math.abs(dx[areaId][i]))
											{
												dx[areaId][sprite2dId] += 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dx[areaId][sprite2dId]) < Math.abs(dx[areaId][i]))
											{
												dx[areaId][i] -= 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
									if(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i] == 0 && spriteAreaY2[areaId][sprite2dId] >= spriteAreaY2[areaId][i])
									{
										while(dy[areaId][sprite2dId]+spriteAreaY2[areaId][sprite2dId] <= dy[areaId][i]+spriteAreaY2[areaId][i])
										{
											if(Math.abs(dy[areaId][sprite2dId]) >= Math.abs(dy[areaId][i]))
											{
												dy[areaId][sprite2dId] += 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dy[areaId][sprite2dId]) < Math.abs(dy[areaId][i]))
											{
												dy[areaId][i] -= 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
									if(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i] == 0 && spriteAreaY2[areaId][sprite2dId] >= spriteAreaY2[areaId][i])
									{
										while(dy[areaId][sprite2dId]+spriteAreaY2[areaId][sprite2dId] <= dy[areaId][i]+spriteAreaY2[areaId][i])
										{
											if(Math.abs(dy[areaId][sprite2dId]) >= Math.abs(dy[areaId][i]))
											{
												dy[areaId][sprite2dId] += 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dy[areaId][sprite2dId]) < Math.abs(dy[areaId][i]))
											{
												dy[areaId][i] -= 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
								}
							}
						}
						if (dy[areaId][sprite2dId]+spriteAreaY3[areaId][sprite2dId] <= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX2[areaId][i]))))
						{
							if(dy[areaId][sprite2dId]+spriteAreaY3[areaId][sprite2dId] <= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))) || (spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) == 0 && dx[areaId][sprite2dId] + spriteAreaX3[areaId][sprite2dId] <= dx[areaId][i]+spriteAreaX1[areaId][i])
							{
								if(dy[areaId][sprite2dId]+spriteAreaY3[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))))
								{//alert(6)
									if(spriteAreaY3[areaId][sprite2dId] >= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX3[areaId][sprite2dId]) + (spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX2[areaId][i]))) && (spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) !== 0)
									{
										while(dy[areaId][sprite2dId]+spriteAreaY3[areaId][sprite2dId] <= ((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY2[areaId][i] - (((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX2[areaId][i]))))
										{
											if(Math.abs(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) <= Math.abs(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) >= Math.abs(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX2[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if(spriteAreaY3[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX3[areaId][sprite2dId]) + (spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(spriteAreaX1[areaId][i]))))
									{
										while(dy[areaId][sprite2dId]+spriteAreaY3[areaId][sprite2dId] <= ((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))) || (spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) == 0 && dx[areaId][sprite2dId] + spriteAreaX3[areaId][sprite2dId] < dx[areaId][i]+spriteAreaX1[areaId][i])
										{
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) <= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) >= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i]))
											{
												if((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY3[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if(spriteAreaY3[areaId][sprite2dId] <= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(spriteAreaX3[areaId][sprite2dId]) + (spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(spriteAreaX1[areaId][i]))) && (spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) !== 0)
									{
										while(dy[areaId][sprite2dId]+spriteAreaY3[areaId][sprite2dId] >= ((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][sprite2dId]+spriteAreaX3[areaId][sprite2dId]) + (dy[areaId][i]+spriteAreaY1[areaId][i] - (((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))*(dx[areaId][i]+spriteAreaX1[areaId][i]))))
										{
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) <= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))
											{
												if((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dy[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dy[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))) // add <= to become moveable
													{
														dy[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
											if(Math.abs(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) >= Math.abs(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i]))
											{
												if((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) <= 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][sprite2dId] -= 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] += 1;
														areaCollided[areaId][i] = true;
													}
												}
												if((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]) > 0)
												{
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) >= (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))))
													{
														dx[areaId][sprite2dId] += 1;
														areaCollided[areaId][sprite2dId] = true;
													}
													if((Math.abs(dx[areaId][sprite2dId])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][sprite2dId])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i]))) < (Math.abs(dx[areaId][i])*Math.abs((spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])/(spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])))+(Math.abs(dy[areaId][i])*Math.abs((spriteAreaX1[areaId][i]-spriteAreaX2[areaId][i])/(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i])))) // add <= to become moveable
													{
														dx[areaId][i] -= 1;
														areaCollided[areaId][i] = true;
													}
												}
											}
										}
									}
									if(spriteAreaX1[areaId][i]-spriteAreaX3[areaId][i] == 0 && spriteAreaX3[areaId][sprite2dId] >= spriteAreaX1[areaId][i])
									{
										while(dx[areaId][sprite2dId]+spriteAreaX3[areaId][sprite2dId] <= dx[areaId][i]+spriteAreaX1[areaId][i])
										{
											if(Math.abs(dx[areaId][sprite2dId]) >= Math.abs(dx[areaId][i]))
											{
												dx[areaId][sprite2dId] += 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dx[areaId][sprite2dId]) < Math.abs(dx[areaId][i]))
											{
												dx[areaId][i] -= 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
									if(spriteAreaY2[areaId][i]-spriteAreaY3[areaId][i] == 0 && spriteAreaY3[areaId][sprite2dId] >= spriteAreaY2[areaId][i])
									{
										while(dy[areaId][sprite2dId]+spriteAreaY3[areaId][sprite2dId] <= dy[areaId][i]+spriteAreaY2[areaId][i])
										{
											if(Math.abs(dy[areaId][sprite2dId]) >= Math.abs(dy[areaId][i]))
											{
												dy[areaId][sprite2dId] += 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dy[areaId][sprite2dId]) < Math.abs(dy[areaId][i]))
											{
												dy[areaId][i] -= 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
									if(spriteAreaY1[areaId][i]-spriteAreaY2[areaId][i] == 0 && spriteAreaY3[areaId][sprite2dId] >= spriteAreaY2[areaId][i])
									{
										while(dy[areaId][sprite2dId]+spriteAreaY3[areaId][sprite2dId] <= dy[areaId][i]+spriteAreaY2[areaId][i])
										{
											if(Math.abs(dy[areaId][sprite2dId]) >= Math.abs(dy[areaId][i]))
											{
												dy[areaId][sprite2dId] += 1;
												areaCollided[areaId][sprite2dId] = true;
											}
											if(Math.abs(dy[areaId][sprite2dId]) < Math.abs(dy[areaId][i]))
											{
												dy[areaId][i] -= 1;
												areaCollided[areaId][i] = true;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}