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
var reload = 30;
var speed = 30;
var xttp = new XMLHttpRequest();
var xhtp = new XMLHttpRequest();
var spawnRand = 0;
var playerhp = [];
var upgradeCollected = false;
var upgrade = 0;
var teleport = false;
var invertedMovement = false;
createAudio("../ludificioEngine/audioFiles/8-Bit/predestinedFate.mp3", "fate");
changeVolume("fate", .60);
playerColorR = [];
playerColorG = [];
playerColorB = [];
function modifiedControls()
{
	for (var i = 0; i <= maxSprites; i++)
	{
		if (spriteUser[areaId][i] == true)
		{
			if(invertedMovement)
			{
				if (charStr[jQuery.inArray("w", charStr)] == "w")
				{		
					dy[areaId][i] = speed;
				}
				if (charStr[jQuery.inArray("s", charStr)] == "s")
				{
					dy[areaId][i] = -speed;
				}
				if (charStr[jQuery.inArray("a", charStr)] == "a")
				{
					dx[areaId][i] = speed;
				}
				if (charStr[jQuery.inArray("d", charStr)] == "d")
				{
					dx[areaId][i] = -speed;
				}
			}
			else{
				if (charStr[jQuery.inArray("w", charStr)] == "w")
				{		
					dy[areaId][i] = -speed;
				}
				if (charStr[jQuery.inArray("s", charStr)] == "s")
				{
					dy[areaId][i] = speed;
				}
				if (charStr[jQuery.inArray("a", charStr)] == "a")
				{
					dx[areaId][i] = -speed;
				}
				if (charStr[jQuery.inArray("d", charStr)] == "d")
				{
					dx[areaId][i] = speed;
				}
			}
				/*if (charStr[jQuery.inArray("l", charStr)] == "l")
				{
					dx[areaId][i] *= 1.5;
					dy[areaId][i] *= 1.5;
				}*/
				if (isLeftMouseDown == true && teleport)
				{
					tpRectSprite(mouseXPos-spriteDrawAreaX1[areaId][0]-50+areaSpriteX1[areaId][0], mouseYPos-spriteDrawAreaY1[areaId][0]-50+areaSpriteY1[areaId][0], 100, 100, areaId, 0);
					areaColor[0][150] = [100, 0, 0, 1];
					teleport = false;
				}
				if(charCode == 37 && shoot >= 100)
				{
					xhttp.open("GET", "playerShot.php?s="+"left", false);
					xhttp.send();
					xhttp.onreadystatechange = function() {
						if (xhttp.readyState == 4 && xhttp.status == 200) 
						{
						}
					}
					shoot = 0;
					charCode = 0;
				}
				if(charCode == 38 && shoot >= 100)
				{
					xhttp.open("GET", "playerShot.php?s="+"up", false);
					xhttp.send();
					xhttp.onreadystatechange = function() {
						if (xhttp.readyState == 4 && xhttp.status == 200) 
						{
						}
					}
					shoot = 0;
					charCode = 0;
				}
				if(charCode == 39 && shoot >= 100)
				{
					xhttp.open("GET", "playerShot.php?s="+"right", false);
					xhttp.send();
					xhttp.onreadystatechange = function() {
						if (xhttp.readyState == 4 && xhttp.status == 200) 
						{
						}
					}
					shoot = 0;
					charCode = 0;
				}
				if(charCode == 40 && shoot >= 100)
				{
					xhttp.open("GET", "playerShot.php?s="+"down", false);
					xhttp.send();
					xhttp.onreadystatechange = function() {
						if (xhttp.readyState == 4 && xhttp.status == 200) 
						{
						}
					}
					shoot = 0;
					charCode = 0;
				}
				if(charStr[jQuery.inArray("k", charStr)] == "k" && shoot >= 100)
				{
					xhttp.open("POST", "playerShot.php?s="+"right", false);
					xhttp.send();
					xhttp.onreadystatechange = function() {
						if (xhttp.readyState == 4 && xhttp.status == 200) 
						{
						}
					}
					shoot = 0;
					charCode = 0;
				}
				if(charStr[jQuery.inArray("j", charStr)] == "j" && shoot >= 100)
				{
					xhttp.open("POST", "playerShot.php?s="+"down", false);
					xhttp.send();
					xhttp.onreadystatechange = function() {
						if (xhttp.readyState == 4 && xhttp.status == 200) 
						{
						}
					}
					shoot = 0;
					charCode = 0;
				}
				if(charStr[jQuery.inArray("h", charStr)] == "h" && shoot >= 100)
				{
					xhttp.open("POST", "playerShot.php?s="+"left", false);
					xhttp.send();
					xhttp.onreadystatechange = function() {
						if (xhttp.readyState == 4 && xhttp.status == 200) 
						{
						}
					}
					shoot = 0;
					charCode = 0;
				}
				if(charStr[jQuery.inArray("u", charStr)] == "u" && shoot >= 100)
				{
					xhttp.open("POST", "playerShot.php?s="+"up", false);
					xhttp.send();
					xhttp.onreadystatechange = function() {
						if (xhttp.readyState == 4 && xhttp.status == 200) 
						{
						}
					}
					shoot = 0;
					charCode = 0;
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
function updateServerPlayers(areaId)
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
}
function updateServerShots(areaId)
{
	localX1 = 0;
	localY1 = 0;
	localX2 = 0;
	localY2 = 0;
	localX3 = 0;
	localY3 = 0;
	shotCount = 94;
	localString = "";
	localString2 = "";
	localString3 = "";
	xttp.open("POST", "getShots.php?_=" + Math.random(), false);
	xttp.send();
	xttp.onreadystatechange = function() {
		if (xttp.readyState == 4 && xttp.status == 200) 
		{
			for(m = 94; m <= 148; m += 2)
			{
				tpRectSprite(0, 0, 0, 0, 0, m);
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
			if(shotCount > 94)
			{
				shotCount -= 2;
			}
		}
	};
}
function living()
{
	xhtp.open("GET", "playerHealth.php", true);
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
				speed = 15;
				reload = 15;
				teleport = false;
				invertedMovement = false;
				spawnRand = Math.floor(Math.random()*4)+1;
				if(spawnRand == 1)
				{
					tpRectSprite(100, 100, 100, 100, 0, 0);
				}
				if(spawnRand == 2)
				{
					tpRectSprite(1700, 200, 100, 100, 0, 0);
				}
				if(spawnRand == 3)
				{
					tpRectSprite(0, 1900, 100, 100, 0, 0);
				}
				if(spawnRand == 4)
				{
					tpRectSprite(1800, 1800, 100, 100, 0, 0);
				}
			}
			for(i = 0; i <= playerhp.length; i++)
			{
				if(playerhp[i] == 6)
				{
					areaColor[0][i*2] = [255, 255, 255, 1];
				}
				if(playerhp[i] == 5)
				{
					areaColor[0][i*2] = [0, 0, 0, 1];
				}
				if(playerhp[i] == 4)
				{
					areaColor[0][i*2] = [0, 255, 0, 1];
				}
				else if(playerhp[i] == 3)
				{
					areaColor[0][i*2] = [0, 0, 255, 1];
				}
				else if(playerhp[i] == 2)
				{
					areaColor[0][i*2] = [255, 255, 0, 1];
				}
				else if(playerhp[i] == 1)
				{
					areaColor[0][i*2] = [255, 0, 255, 1];
				}
				else if(playerhp[i] == 0)
				{
					areaColor[0][i*2] = [255, 0, 0, 1];
				}
			}
		}
	}
}
function upgrades()
{
	if(Math.floor(Math.random()*600)+1 == 600)
	{
		upgradeCollected = false;
		areaColor[0][74] = [0, 200, 175, 1];
		tpRectSprite(Math.floor(Math.random()*1935)+1, Math.floor(Math.random()*1935)+1, 65, 65, 0, 74);
	}
	if(rectContact(0, 74, 0) && upgradeCollected == false)
	{
		invertedMovement = false;
		upgradeCollected = true;
		upgrade = Math.floor(Math.random()*5)+1;
		if(upgrade == 1)
		{
			if(speed == 16)
			{
				upgradeCollected = false;
			}
			areaColor[0][74] = [255, 255, 0, 1];
			speed = 22;
			fixPlayer(0)
		}
		if(upgrade == 2)
		{
			areaColor[0][74] = [200, 200, 200, 1];
			reload *= 2;
		}
		if(upgrade == 3)
		{
			areaColor[0][74] = [0, 255, 0, 1];
			xhttp.open("POST", "addLife.php", false);
			xhttp.send();
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) 
				{
				}
			}
		}
		if(upgrade == 4)
		{
			areaColor[0][74] = [110, 0, 0, 1];
			teleport = true;
		}
		if(upgrade == 5)
		{
			areaColor[0][74] = [0, 100, 0, 1];
			invertedMovement = true;
		}
	}
}
function resetMap()
{
	resetRectSprite(0, 50);
	resetRectSprite(0, 52);
	resetRectSprite(0, 54);
	resetRectSprite(0, 56);
	resetRectSprite(0, 58);
	resetRectSprite(0, 60);
	resetRectSprite(0, 62);
	resetRectSprite(0, 64);
	resetRectSprite(0, 66);
	resetRectSprite(0, 68);
	resetRectSprite(0, 70);
	resetRectSprite(0, 72);
	resetRectSprite(0, 74);
	resetRectSprite(0, 78);
	resetRectSprite(0, 80);
	resetRectSprite(0, 82);
	resetRectSprite(0, 84);
	resetRectSprite(0, 86);
	resetRectSprite(0, 88);
	resetRectSprite(0, 90);
	resetRectSprite(0, 92);
	dx[0][50] = 0;
	dx[0][51] = 0;
	dx[0][52] = 0;
	dx[0][53] = 0;
	dx[0][54] = 0;
	dx[0][55] = 0;
	dx[0][56] = 0;
	dx[0][57] = 0;
	dx[0][58] = 0;
	dx[0][59] = 0;
	dx[0][60] = 0;
	dx[0][61] = 0;
	dx[0][62] = 0;
	dx[0][63] = 0;
	dx[0][64] = 0;
	dx[0][65] = 0;
	dx[0][66] = 0;
	dx[0][67] = 0;
	dx[0][68] = 0;
	dx[0][69] = 0;
	dx[0][70] = 0;
	dx[0][71] = 0;
	dx[0][72] = 0;
	dx[0][73] = 0;
	dx[0][74] = 0;
	dx[0][78] = 0;
	dx[0][80] = 0;
	dx[0][81] = 0;
	dx[0][82] = 0;
	dx[0][83] = 0;
	dx[0][84] = 0;
	dx[0][85] = 0;
	dx[0][86] = 0;
	dx[0][87] = 0;
	dx[0][88] = 0;
	dx[0][89] = 0;
	dx[0][90] = 0;
	dx[0][91] = 0;
	dx[0][92] = 0;
	
	
	dy[0][50] = 0;
	dy[0][51] = 0;
	dy[0][52] = 0;
	dy[0][53] = 0;
	dy[0][54] = 0;
	dy[0][55] = 0;
	dy[0][56] = 0;
	dy[0][57] = 0;
	dy[0][58] = 0;
	dy[0][59] = 0;
	dy[0][60] = 0;
	dy[0][61] = 0;
	dy[0][62] = 0;
	dy[0][63] = 0;
	dy[0][64] = 0;
	dy[0][65] = 0;
	dy[0][66] = 0;
	dy[0][67] = 0;
	dy[0][68] = 0;
	dy[0][69] = 0;
	dy[0][70] = 0;
	dy[0][71] = 0;
	dy[0][72] = 0;
	dy[0][73] = 0;
	dy[0][74] = 0;
	dy[0][78] = 0;
	dy[0][80] = 0;
	dy[0][81] = 0;
	dy[0][82] = 0;
	dy[0][83] = 0;
	dy[0][84] = 0;
	dy[0][85] = 0;
	dy[0][86] = 0;
	dy[0][87] = 0;
	dy[0][88] = 0;
	dy[0][89] = 0;
	dy[0][90] = 0;
	dy[0][91] = 0;
	dy[0][92] = 0;
}
function sampleWorld1()
{
	if(globalPos[0])
	{
		if(shoot<100)
		{
			shoot += reload;
		}
		if(areas[0])
		{
			sampleArea1();
		}
		else if(areas[1])
		{
			sampleArea2();
		}
	}
}
var playerUpdate = setInterval(function(){updateServerPlayers(0)}, 100);
var fixLocalPlayer = setInterval(function(){fixPlayer(0)}, 1000);
setInterval(living, 500);
setInterval(resetMap, 2000);
function sampleArea1()
{
	if(teleport == true)
	{
		spriteDrawAreaColorR[0][0] = 150;
		spriteDrawAreaColorG[0][0] = 150;
		spriteDrawAreaColorB[0][0] = 150;
	}
	playSong("fate");
	modifiedControls();
	if(rectContact(0, 78, 0))
	{
		if(dy[0][0] < 0)
		{
			exception[0][0][1] = 78;
			exception[0][1][1] = 78;
			exception[0][0][2] = 79;
			exception[0][1][2] = 79;
			exception[0][78][1] = 0;
			exception[0][79][1] = 0;
			exception[0][78][2] = 1;
			exception[0][79][2] = 1;
		}
	}
	else{
		exception[0][0][1] = undefined;
		exception[0][1][1] = undefined;
		exception[0][0][2] = undefined;
		exception[0][1][2] = undefined;
		exception[0][78][1] = undefined;
		exception[0][79][1] = undefined;
		exception[0][78][2] = undefined;
		exception[0][79][2] = undefined;
	}
	updateServerPlayers(0);
	displayRectPlayers(0, [0, 255, 0, 1]);
	updateServerShots(0);
	displayShots(0);
	areaRect(0, 975, 400, 50, [125, 125, 0, 1], true, false, 50, 0);
	areaRect(975, 0, 50, 200, [125, 125, 0, 1], true, false, 52, 0);
	areaRect(600, 975, 840, 50, [125, 125, 0, 1], true, false, 54, 0);
	areaRect(975, 400, 50, 1340, [125, 125, 0, 1], true, false, 56, 0);
	areaRect(1630, 975, 370, 50, [125, 125, 0, 1], true, false, 58, 0);
	areaRect(975, 1930, 50, 70, [125, 125, 0, 1], true, false, 60, 0);
	areaRect(500, 600, 200, 50, [125, 125, 0, 1], true, false, 62, 0);
	areaRect(1350, 570, 75, 300, [125, 125, 0, 1], true, false, 64, 0);
	areaRect(375, 1035, 30, 200, [125, 125, 0, 1], true, false, 66, 0);
	areaRect(1155, 1685, 275, 50, [125, 125, 0, 1], true, false, 68, 0);
	areaRect(1385, 1185, 50, 490, [125, 125, 0, 1], true, false, 70, 0);
	areaRect(1185, 1135, 50, 400, [125, 125, 0, 1], true, false, 72, 0);
	areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 74, 0);
	upgrades();
	areaRect(0, 1600, 140, 50, [125, 125, 0, .75], true, false, 78, 0);
	areaRect(150, 1770, 50, 230, [125, 125, 0, 1], true, false, 80, 0);
	areaRect(150, 1600, 450, 50, [125, 125, 125, .5], true, false, 82, 0);
	areaRect(350, 1590, 50, 250, [125, 125, 125, .5], true, false, 84, 0);
	areaRect(550, 1800, 50, 250, [125, 125, 125, .5], true, false, 86, 0);
	areaRect(650, 660, 50, 150, [125, 125, 125, .5], true, false, 88, 0);
	areaRect(1590, 110, 290, 50, [125, 125, 0, 1], true, false, 90, 0);
	areaRect(1840, 110, 50, 400, [125, 125, 0, 1], true, false, 92, 0);
	areaRect(0, 0, 2000, 2000, [100, 0, 0, 1], false, false, 150, 0);
	drawArea(2000, 2000, 0);
	openWorldCamera(0);
	stopAreaUser(0);
	if(mouseOver(0, 0, canvas.width/20, canvas.height/20))
	{
		drawPassiveRect(0, 0, canvas.width/20, canvas.height/20, [200, 125, 125, .5]);
		if(isLeftMouseDown)
		{
			tpRectSprite(0, 0, 0, 0, 0, 0);
			clearInterval(playerUpdate);
			clearInterval(fixLocalPlayer);
			xhttp.open("POST", "removeUser.php", false);
			xhttp.send();
			xhttp.onreadystatechange = function(){
				if (xhttp.readyState == 4 && xhttp.status == 200) 
				{
				}
			}
			window.location = windowDirectory.replace("greatShot/", "");
		}
	}
	drawText(0,0,canvas.width/20,canvas.height/20, "exit", "../ludificioEngine/text/fonts/8-bit/black/");
}
function sampleArea2()
{

}