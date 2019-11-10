var globalPos = [true];
var areas = [true];
var areaInit = [];
var mapping = false;
var localX1 = 0;
var localY1 = 0;
var localX2 = 0;
var localY2 = 0;
var localX3 = 0;
var localY3 = 0;
var localID = 0;
var localString = "";
var localString2 = "";
var localString3 = "";
var localCount = 0;
var shotCount = 0;
var shoot = 100;
var reload = 15;
var speed = 15;
var xttp = new XMLHttpRequest();
var xhtp = new XMLHttpRequest();
var xtpp = new XMLHttpRequest();
var xmlh = new XMLHttpRequest();
var spawnRand = 0;
var playerhp = [];
var resourceCollected = [];
var upgrade = 0;
var teleport = false;
var invertedMovement = false;
var currentArea = "";
var mapping = false;
var rocketSide = "";
var trading = [];
createAudio("../ludificioEngine/audioFiles/8-Bit/keygen/dynamite.mp3", "dynamite");
changeVolume("dynamite", .60);
createAudio("../ludificioEngine/audioFiles/8-Bit/keygen/inferno.mp3", "inferno");
changeVolume("inferno", .60);
playerColorR = [];
playerColorG = [];
playerColorB = [];
var areaOK = false;
var engineUsed = 0;
var fuelColor = [];
var emrspeed = 0;
var metal = 0;
var rockets = 0;
var clicked = false;
var localVar;
var myString = "";
var myString2 = "";
var myString3 = "";
var mySArray = [];
var playerFirstRun = false;
var shotUpdated = true;
function displayModTexturePlayers(areaId, textureId)
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
function modifiedControls(areaId)
{
	for (var i = 0; i <= maxSprites; i++)
	{
		if (spriteUser[areaId][i] == true)
		{
			if(areaId !== 0)
			{
				if(areaId == 1)
				{
					currentArea = "snow";
				}
				if(areaId == 2)
				{
					currentArea = "planet1";
				}
				if(areaId == 3)
				{
					currentArea = "station1";
				}
				if(areaId == 4)
				{
					currentArea = "grady";
				}
				if(areaId == 5)
				{
					currentArea = "magnetic";
				}
				if (charStr[jQuery.inArray("w", charStr)] == "w")
				{
					dy[areaId][i] = -15;
				}
				if (charStr[jQuery.inArray("s", charStr)] == "s")
				{
					dy[areaId][i] = 15;
				}
				if (charStr[jQuery.inArray("a", charStr)] == "a")
				{
					dx[areaId][i] = -15;
				}
				if (charStr[jQuery.inArray("d", charStr)] == "d")
				{
					dx[areaId][i] = 15;
				}
				if (isLeftMouseDown && shoot >= 100)
				{
					localX1 = Math.round(mouseXPos-(spriteDrawAreaX1[areaId][0]+(spriteDrawAreaX2[areaId][0]-spriteDrawAreaX1[areaId][0])/2));
					localY1 = Math.round(mouseYPos-(spriteDrawAreaY1[areaId][0]+(spriteDrawAreaY3[areaId][0]-spriteDrawAreaY1[areaId][0])/2));
					localX2 = localX1/(Math.abs(localX1)+Math.abs(localY1));
					localY2 = localY1/(Math.abs(localX1)+Math.abs(localY1)) ;
					localX3 = Math.round(localX2*20);
					localY3 = Math.round(localY2*20);
					xhttp.open("POST", "playerShot.php?x="+localX3+"&y="+localY3+"&area="+currentArea, false);
					xhttp.send();
					xhttp.onreadystatechange = function() {
						if (xhttp.readyState == 4 && xhttp.status == 200) 
						{
							shoot = 0;
						}
					}
				}
			}
			else if(areaId == 0)
			{
				currentArea = "userinfo";
				if (charStr[jQuery.inArray("w", charStr)] == "w")
				{		
					dy[areaId][i] = -10;
				}
				if (charStr[jQuery.inArray("s", charStr)] == "s")
				{
					dy[areaId][i] = 10;
				}
				if (charStr[jQuery.inArray("a", charStr)] == "a")
				{
					dx[areaId][i] = -10;
				}
				if (charStr[jQuery.inArray("d", charStr)] == "d")
				{
					dx[areaId][i] = 10;
				}
			}
		}
		areaCollided[areaId][i] = false;
	}
}
function displayShots(areaId)
{
	if(areaSpriteX1[areaId][94] !== undefined)
	{
		for(var i = 94; i <= shotCount; i += 2)
		{
			areaRect(areaSpriteX1[areaId][i], areaSpriteY1[areaId][i], areaSpriteX2[areaId][i]-areaSpriteX1[areaId][i], areaSpriteY3[areaId][i]-areaSpriteY1[areaId][i], [200, 200, 200, 1], true, false, i, areaId);
		}
	}
}
function updateShots(areaId)
{
	if(shotUpdated)
	{
		shotUpdated = false;
		localX1 = 0;
		localY1 = 0;
		localX2 = 0;
		localY2 = 0;
		localX3 = 0;
		localY3 = 0;
		localString = "";
		localString2 = "";
		localString3 = "";
		//shotCount = 94;
		xttp.open("POST", "getShots.php?area="+currentArea+"&_=" + Math.random(), true);
		xttp.send();
		xttp.onreadystatechange = function() {
			if (xttp.readyState == 4 && xttp.status == 200) 
			{
				for(m = 94; m <= 148; m += 2)
				{
					tpRectSprite(0, 0, 0, 0, areaId, m);
				}
				shotCount = 94;
				localString = xttp.responseText;
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
					tpRectSprite(localX1, localY1, localX2-localX1, localY3-localY1, areaId, shotCount);
					shotCount += 2;
				}
				shotUpdated = true;
				if(shotCount >= 94)
				{
					shotCount -= 2;
				}
			}
		};
	}
}
function updatePlayers(areaId)
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
	playerCount = 0
	if(playerFirstRun == false)
	{
		xhttp.open("GET", "playerVerts.php?area="+currentArea+"&x1="+areaSpriteX1[areaId][0]+"&y1="+areaSpriteY1[areaId][0]+"&x2="+areaSpriteX2[areaId][0]+"&y2="+areaSpriteY2[areaId][0]+"&x3="+areaSpriteX3[areaId][0]+"&y3="+areaSpriteY3[areaId][0]+"&dx="+dx[areaId][0]+"&dy="+dy[areaId][0]+"&_=" + Math.random(), false);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) 
			{
				playerCount = 0;
				localString = xhttp.responseText;
				while(localString !== "")
				{
					for(i = 0; i <= 7; i++)
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
								else if(i==6)
								{
									localDX = Number(localString3);
								}
								else if(i==7)
								{
									localDY = Number(localString3);
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
						dx[areaId][playerCount] = localDX;
						dy[areaId][playerCount] = localDY;
					}
					playerCount += 2;
				}
				playerCount -= 2;
			}
			playerFirstRun = true;
		};
	}
	else{
		playerFirstRun = false;
		/*xhttp.open("POST", "playerVerts.php?area="+currentArea+"&x1="+areaSpriteX1[areaId][0]+"&y1="+areaSpriteY1[areaId][0]+"&x2="+areaSpriteX2[areaId][0]+"&y2="+areaSpriteY2[areaId][0]+"&x3="+areaSpriteX3[areaId][0]+"&y3="+areaSpriteY3[areaId][0]+"&dx="+dx[areaId][0]+"&dy="+dy[areaId][0]+"&_=" + Math.random(), true);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) 
			{
				playerCount = 0;
				localString = xhttp.responseText;
				while(localString !== "")
				{
					for(i = 0; i <= 7; i++)
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
								else if(i==6)
								{
									localDX = Number(localString3);
								}
								else if(i==7)
								{
									localDY = Number(localString3);
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
						dx[areaId][playerCount] = localDX;
						dy[areaId][playerCount] = localDY;
					}
					playerCount += 2;
				}
				playerCount -= 2;
			}
		};*/
	}
}
function living(areaId)
{
	xhtp.open("POST", "playerHealth.php", true);
	xhtp.send();
	xhtp.onreadystatechange = function() {
		if (xhtp.readyState == 4 && xhtp.status == 200) 
		{
			playerhp = [];
			localString = "";
			localString2 = "";
			localString3 = "";
			i = 0;
			localString = xhtp.responseText;
			while(localString !== "")
			{
				if(localString.charAt(0) == " ")
				{
					localString2 = localString;
					localString = "";
					for(j = 1; j <= localString2.length-1; j++)
					{
						localString += localString2.charAt(j);
					}
					if(localString3 !== "")
					{
						playerhp[i] = localString3;
						localString3 = "";
						i++;
					}
				}
				else{
					localString3 += localString.charAt(0);
					localString2 = localString;
					localString = "";
					for(j = 1; j <= localString2.length-1; j++)
					{
						localString += localString2.charAt(j);
					}
				}				
			}
			if(playerhp[0] <= 0)
			{
				xhttp.open("POST", "resetHealth.php", false);
				xhttp.send();
				xhttp.onreadystatechange = function() {
					if (xhttp.readyState == 4 && xhttp.status == 200)
					{
					}
				}
				areas[0] = true;
				areas[1] = false;
				areas[2] = false;
				areas[3] = false;
				areas[4] = false;
				tpRectSprite(100, 100, 100, 100, 0, 0);
				drawArea(250000, 250000, 0);
			}
			/*for(i = 0; i <= playerhp.length; i++)
			{
				if(playerhp[i] == 6)
				{
					areaColor[areaId][i*2] = [255, 255, 255, 1];
				}
				if(playerhp[i] == 5)
				{
					areaColor[areaId][i*2] = [0, 0, 0, 1];
				}
				if(playerhp[i] == 4)
				{
					areaColor[areaId][i*2] = [0, 255, 0, 1];
				}
				else if(playerhp[i] == 3)
				{
					areaColor[areaId][i*2] = [0, 0, 255, 1];
				}
				else if(playerhp[i] == 2)
				{
					areaColor[areaId][i*2] = [255, 255, 0, 1];
				}
				else if(playerhp[i] == 1)
				{
					areaColor[areaId][i*2] = [255, 0, 255, 1];
				}
				else if(playerhp[i] == 0)
				{
					areaColor[areaId][i*2] = [255, 0, 0, 1];
				}
			}*/
		}
	}
}
function solarSystem1()
{
	if(globalPos[0])
	{
		if(areas[0])
		{
			title();
		}
		else if(areas[1])
		{
			if(shoot<100)
			{
				shoot += reload;
			}
			snow();
		}
		else if(areas[2])
		{
			if(shoot<100)
			{
				shoot += reload;
			}
			planet1();
		}
		else if(areas[3])
		{
			shoot = 0;
			station1();
		}
		else if(areas[4])
		{
			shoot = 0;
			grady();
		}
		else if(areas[5])
		{
			shoot = 0;
			magnetic();
		}
	}
}
var random;
var playerUpdate1;
var fixLocalPlayer1;
var playerShot1;
var playerUpdate2;
var fixLocalPlayer2;
var playerShot2;
var playerUpdate3;
var fixLocalPlayer3;
var playerShot2;
var playerUpdate4;
var fixLocalPlayer4;
var playerShot4;
var playerUpdate5;
var fixLocalPlayer5;
var playerShot5;
function title()
{
	stopAreaUser(0);
	modifiedControls(0);
	textureAnimation();
	areaObjectAI();
	if(rectContact(0, 52, 0))
	{
		pauseSong("dynamite");
		clearInterval(playerUpdate0);
		clearInterval(fixLocalPlayer0);
		areas[0] = false;
		areas[1] = true;
	}
	/*else if(rectContact(0, 156, 0))
	{
		clearInterval(playerUpdate0);
		clearInterval(fixLocalPlayer0);
		areas[0] = false;
		areas[2] = true;
	}
	else if(rectContact(0, 148, 0))
	{
		clearInterval(playerUpdate0);
		clearInterval(fixLocalPlayer0);
		areas[0] = false;
		areas[3] = true;
	}
	else if(rectContact(0, 174, 0))
	{
		clearInterval(playerUpdate0);
		clearInterval(fixLocalPlayer0);
		areas[0] = false;
		areas[5] = true;
	}
	else if(rectContact(0, 168, 0))
	{
		clearInterval(playerUpdate0);
		clearInterval(fixLocalPlayer0);
		areas[0] = false;
		areas[4] = true;
	}*/
	else{
		playSong("dynamite");
		displayModTexturePlayers(0, "spriteModels/playerModel2/frontFacing");
		areaRect(0, 0, 400, 400, [200, 200, 200, 1], false, false, 52, 0);
		areaRect(0, 900, 400, 400, [170, 170, 0, 1], false, false, 54, 0);
		//areaRect(0, 0, 400, 400, [200, 200, 200, 1], false, false, 56, 0);
		//areaRect(0, 0, 400, 400, [200, 200, 200, 1], false, false, 58, 0);
		areaRect(400, 0, 50, 200, [50, 50, 50, 1], true, false, 60, 0);
		areaRect(0, 400, 200, 50, [50, 50, 50, 1], true, false, 62, 0);
		areaRect(0, 0, 2000, 1300, [125, 125, 200, 1], false, false, 150, 0);
		drawArea(2000, 1300, 0);
		openWorldCamera(0);
		drawPassiveRectTexture(mouseXPos-25, mouseYPos-25, 50, 50, "spriteModels/newCursor")
		//drawText(spriteDrawAreaX1[0][54],spriteDrawAreaY1[0][54],spriteDrawAreaX2[0][54]-spriteDrawAreaX1[0][54],spriteDrawAreaY3[0][54]-spriteDrawAreaY1[0][54]-100, "coming soon", "../ludificioEngine/text/fonts/8-bit/black/");
		if(mouseOver(0, 0, canvas.width/20, canvas.height/20))
		{
			drawPassiveRect(0, 0, canvas.width/20, canvas.height/20, [200, 125, 125, .5]);
			if(isLeftMouseDown)
			{
				window.location = windowDirectory.replace("teamShot/", "");
			}
		}
		/*if(mapping)
		{
			map(0, 0, canvas.width, canvas.height, 0)
			mapping = false;
			if(isRightMouseDown)
			{
				drawText(canvas.width-250, canvas.height-100, 200, 50, "solar pos", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width-300, canvas.height-35, 20, 30, "X", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width-275, canvas.height-35, 100, 30, ""+Math.floor((mouseXPos/canvas.width)*1500), "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width-150, canvas.height-35, 20, 30, "Y", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width-125, canvas.height-35, 100, 30, ""+Math.floor((mouseYPos/canvas.height)*1500), "../ludificioEngine/text/fonts/8-bit/white/");
			}
		}*/
	}
	if(areas[1])
	{
		currentArea = "snow";
		playerUpdate1 = setInterval(function(){updatePlayers(1)}, 80);
		fixLocalPlayer1 = setInterval(function(){fixPlayer(1)}, 1000);
		playerShot1 = setInterval(function(){updateShots(1)}, 80);
		random = (Math.floor(4*Math.random())+1);
		if(random == 1)
		{
			tpRectSprite(100, 100, 75, 75, 1, 0);
		}
		else if(random == 2)
		{
			tpRectSprite(4825, 100, 75, 75, 1, 0);
		}
		else if(random == 3)
		{
			tpRectSprite(100, 4825, 75, 75, 1, 0);
		}
		else if(random == 4)
		{
			tpRectSprite(4825, 4825, 75, 75, 1, 0);
		}
		drawArea(5000, 5000, 1);
	}
	else if(areas[2])
	{
		currentArea = "planet1";
		playerUpdate2 = setInterval(function(){updatePlayers(2)}, 80);
		fixLocalPlayer2 = setInterval(function(){fixPlayer(2)}, 1000);	
		tpRectSprite(500, 100, 100, 100, 2, 180);
		drawArea(2000, 2000, 2);
	}
	else if(areas[3])
	{
		currentArea = "station1";
		playerUpdate3 = setInterval(function(){updatePlayers(3)}, 80);
		fixLocalPlayer3 = setInterval(function(){fixPlayer(3)}, 1000);	
		tpRectSprite(500, 400, 100, 100, 3, 0);
		drawArea(1750, 1000, 3);
	}
	else if(areas[4])
	{
		currentArea = "grady";
		playerUpdate4 = setInterval(function(){updatePlayers(4)}, 80);
		fixLocalPlayer4 = setInterval(function(){fixPlayer(4)}, 1000);	
		tpRectSprite(300, 1300, 100, 100, 4, 0);
		drawArea(3000, 2000, 4);
	}
	else if(areas[5])
	{
		currentArea = "magnetic";
		playerUpdate5 = setInterval(function(){updatePlayers(5)}, 80);
		fixLocalPlayer5 = setInterval(function(){fixPlayer(5)}, 1000);	
		tpRectSprite(300, 1300, 100, 100, 5, 0);
		drawArea(2000, 2000, 5);
	}
	drawText(0,0,canvas.width/20,canvas.height/20, "exit", "../ludificioEngine/text/fonts/8-bit/black/");
}
function snow()
{
	playSong("inferno");
	stopAreaUser(1);
	modifiedControls(1);
	followTexture(1000, 1000, "spriteModels/snowBackground", 150, 1)
	displayModTexturePlayers(1, "spriteModels/playerModel2/frontFacing");
	textureAnimation();
	//updateShots(1);
	displayShots(1);
	areaTextureRect(400, 500, 200, 200, "spriteModels/snowTree", true, false, 50, 1);
	areaTextureRect(1600, 700, 200, 200, "spriteModels/snowTree", true, false, 52, 1);
	areaTextureRect(1000, 1500, 200, 200, "spriteModels/snowTree", true, false, 54, 1);
	areaTextureRect(500, 2500, 200, 200, "spriteModels/snowTree", true, false, 56, 1);
	areaTextureRect(1000, 3400, 200, 200, "spriteModels/snowTree", true, false, 58, 1);
	areaTextureRect(2400, 1200, 200, 200, "spriteModels/snowTree", true, false, 60, 1);
	areaTextureRect(3600, 700, 200, 200, "spriteModels/snowTree", true, false, 62, 1);
	areaTextureRect(4200, 1500, 200, 200, "spriteModels/snowTree", true, false, 64, 1);
	areaTextureRect(3200, 2000, 200, 200, "spriteModels/snowTree", true, false, 66, 1);
	areaTextureRect(3800, 2800, 200, 200, "spriteModels/snowTree", true, false, 68, 1);
	areaTextureRect(3000, 3400, 200, 200, "spriteModels/snowTree", true, false, 70, 1);
	areaTextureRect(3900, 4000, 200, 200, "spriteModels/snowTree", true, false, 72, 1);
	areaTextureRect(2300, 4200, 200, 200, "spriteModels/snowTree", true, false, 74, 1);
	areaTextureRect(1400, 4300, 200, 200, "spriteModels/snowTree", true, false, 76, 1);
	areaTextureRect(1700, 2100, 200, 200, "spriteModels/snowTree", true, false, 78, 1);
	areaTextureRect(1900, 3400, 200, 200, "spriteModels/snowTree", true, false, 80, 1);
	areaTextureRect(2400, 2700, 200, 200, "spriteModels/snowTree", true, false, 82, 1);
	//areaRect(5, 5, 400, 400, [100, 100, 100, 1], true, false, 50, 1);
	//areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 72, 1);
	//areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 74, 1);
	//resources(1);
	/*areaRect(300, 600, 200, 200, [85, 85, 0, 1], false, false, 78, 1);
	areaRect(1000, 1100, 300, 300, [85, 85, 0, 1], false, false, 92, 1);*/
	//areaRect(0, 0, 2000, 2000, [100, 100, 0, 1], false, false, 180, 1);
	drawArea(5000, 5000, 1);
	openWorldCamera(1);
	drawPassiveRectTexture(mouseXPos-25, mouseYPos-25, 50, 50, "spriteModels/scope")
	//map(0, 0, canvas.width, canvas.height, 1)
}
function planet1()
{
	playSong("fate");
	stopAreaUser(2);
	modifiedControls(2);
	followTexture(1000, 1000, "spriteModels/grassBackground", 150, 2)
	displayModTexturePlayers(2, "spriteModels/playerModel2/frontFacing");
	textureAnimation();
	updateShots(2);
	displayShots(2);
	areaRect(5, 5, 400, 400, [100, 100, 100, 1], true, false, 50, 2);
	areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 72, 2);
	areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 74, 2);
	areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 76, 2);
	areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 78, 2);
	areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 80, 2);
	areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 82, 2);
	areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 84, 2);
	areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 86, 2);
	areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 88, 2);
	resources(2);
	areaRect(0, 1600, 150, 50, [50, 50, 0, 1], true, false, 90, 2);
	areaRect(1840, 110, 50, 400, [50, 50, 0, 1], true, false, 92, 2);
	areaRect(0, 0, 10000, 10000, [0, 100, 0, 1], false, false, 210, 2);
	drawArea(10000, 10000, 2);
	openWorldCamera(2);
	if(mapping)
	{
		map(canvas.width-300, canvas.height-300, 300, 300, 2)
		mapping = false;
	}
}
function station1()
{
	stopAreaUser(3);
	modifiedControls(3);
	if(rectContact(0, 50, 3))
	{
		clearInterval(playerUpdate3);
		clearInterval(fixLocalPlayer3);
		playerUpdate0 = setInterval(function(){updatePlayers(0)}, 80);
		fixLocalPlayer0 = setInterval(function(){fixPlayer(0)}, 1000);
		areas[3] = false;
		areas[0] = true;
	}
	else{
		displayModTexturePlayers(3, "spriteModels/playerModel2/frontFacing");
		textureAnimation();
		areaRect(5, 300, 400, 400, [100, 100, 100, 1], true, false, 50, 3);
		areaTextureRect(1250, 217, 150, 150, "spriteModels/stationWalrus", false, false, 70, 3);
		areaRect(0, 0, 1750, 1000, [70, 70, 70, 1], false, false, 150, 3);
		drawArea(1750, 1000, 3);
		openWorldCamera(3);
	}
	if(areas[0])
	{
		xhttp.open("POST", "updateHealth.php?area="+currentArea+"&nextArea="+"userinfo", false);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200)
			{
			}
		}
		currentArea = "userinfo";
		xhttp.open("POST", "removeUser.php?area=station1", false);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) 
			{
			}
		}
		dx[0][0] = 0;
		dy[0][0] = 0;
	}
}
function grady()
{
	stopAreaUser(4);
	modifiedControls(4);
	if(rectContact(0, 50, 4))
	{
		clearInterval(playerUpdate4);
		clearInterval(fixLocalPlayer4);
		areas[4] = false;
		areas[0] = true;
		playerUpdate0 = setInterval(function(){updatePlayers(0)}, 80);
		fixLocalPlayer0 = setInterval(function(){fixPlayer(0)}, 1000);
	}
	else{
		displayModTexturePlayers(4, "spriteModels/playerModel2/frontFacing");
		textureAnimation();
		areaRect(200, 1600, 300, 300, [100, 100, 100, 1], true, false, 50, 4);
		areaRect(0, 0, 2000, 2000, [100, 100, 0, 1], false, false, 150, 4);
		drawArea(3000, 2000, 4);
		openWorldCamera(4);
	}
	if(areas[0])
	{
		xhttp.open("POST", "updateHealth.php?area="+currentArea+"&nextArea="+"userinfo", false);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200)
			{
			}
		}
		currentArea = "userinfo";
		xhttp.open("POST", "removeUser.php?area=grady", false);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) 
			{
			}
		}
		dx[0][0] = 0;
		dy[0][0] = 0;
	}
}
function magnetic()
{
	stopAreaUser(5);
	modifiedControls(5);
	if(rectContact(0, 50, 5))
	{
		clearInterval(playerUpdate5);
		clearInterval(fixLocalPlayer5);
		areas[5] = false;
		areas[0] = true;
		playerUpdate0 = setInterval(function(){updatePlayers(0)}, 80);
		fixLocalPlayer0 = setInterval(function(){fixPlayer(0)}, 1000);
	}
	else{
		displayModTexturePlayers(5, "spriteModels/playerModel2/frontFacing");
		textureAnimation();
		areaRect(5, 5, 400, 400, [100, 100, 100, 1], true, false, 50, 5);
		areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 72, 5);
		areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 74, 5);
		resources(1);
		areaRect(300, 600, 200, 200, [85, 85, 0, 1], false, false, 78, 5);
		areaRect(800, 300, 300, 300, [80, 80, 0, 1], false, false, 80, 5);
		areaRect(700, 1600, 200, 200, [80, 80, 0, 1], false, false, 82, 5);
		areaRect(400, 1200, 200, 200, [90, 90, 0, 1], false, false, 84, 5);
		areaRect(1500, 200, 200, 200, [90, 90, 0, 1], false, false, 86, 5);
		areaRect(1600, 1600, 200, 200, [90, 90, 0, 1], false, false, 88, 5);
		areaRect(1000, 1100, 300, 300, [85, 85, 0, 1], false, false, 92, 5);
		areaRect(0, 0, 2000, 2000, [100, 100, 0, 1], false, false, 150, 5);
		drawArea(2000, 2000, 5);
		openWorldCamera(5);
	}
	if(areas[0])
	{
		xhttp.open("POST", "updateHealth.php?area="+currentArea+"&nextArea="+"userinfo", false);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200)
			{
			}
		}
		currentArea = "userinfo";
		xhttp.open("POST", "removeUser.php?area=magnetic", false);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) 
			{
			}
		}
		dx[0][0] = 0;
		dy[0][0] = 0;
	}
}