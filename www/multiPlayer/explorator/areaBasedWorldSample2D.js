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
var timer2 = 0;
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
var invertedMovement = false;
var currentArea = "";
var teleporting = false;
var teleportPower = 0;
var mapping = false;
var rocketSide = "";
var trading = [];
var timer1 = 0;
createAudio("../ludificioEngine/audioFiles/8-Bit/predestinedFate.mp3", "fate");
changeVolume("fate", .60);
playerColorR = [];
playerColorG = [];
playerColorB = [];
var areaOK = false;
var engineUsed = 0;
var fuelColor = [];
var emrspeed = 0;
var metal = 0;
var clicked = false;
var myString = "";
var myString2 = "";
var myString3 = "";
var mySArray = [];
function displayModTexturePlayers(areaId, textureId)
{
	if(playersInit[areaId] !== true || true)
	{
		if(areaSpriteX1[areaId][0] !== undefined)
		{
			if(areaId !== 2)
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
			else if(areaId == 2)
			{
				for(i = 180; i <= playerCount; i += 2)
				{
					if(i==180)
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
					currentArea = "asteroid1";
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
				if(areaId == 6)
				{
					currentArea = "urbanPlanet";
				}
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
				if(isMiddleMouseDown && areaId == 2)
				{
					mapping = true;
				}
				if(charCode == 37 && shoot >= 100)
				{
					xhttp.open("GET", "playerShot.php?s="+"left&area="+currentArea, false);
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
					xhttp.open("GET", "playerShot.php?s="+"up&area="+currentArea, false);
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
					xhttp.open("GET", "playerShot.php?s="+"right&area="+currentArea, false);
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
					xhttp.open("GET", "playerShot.php?s="+"down&area="+currentArea, false);
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
					xhttp.open("POST", "playerShot.php?s="+"right&area="+currentArea, false);
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
					xhttp.open("POST", "playerShot.php?s="+"down&area="+currentArea, false);
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
					xhttp.open("POST", "playerShot.php?s="+"left&area="+currentArea, false);
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
					xhttp.open("POST", "playerShot.php?s="+"up&area="+currentArea, false);
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
			else if(areaId == 0)
			{
				currentArea = "userinfo";
				if(emfuel<100)
				{
					emfuel += emReload;
				}
				if(emfuel>100)
				{
					emfuel = 100;
				}
				if(charStr[jQuery.inArray("t", charStr)] == "t" && teleport)
				{
					if(teleporting == false)
					{
						teleporting = true;
					}
					else if(teleporting == true)
					{
						teleporting = false;
					}
					charStr[jQuery.inArray("t", charStr)] = "";
				}
				if(rightArrow)
				{
					rightArrow = false;
					xhtp.open("POST", "fireRocket.php", true);
					xhtp.send();
					xhtp.onreadystatechange = function() {
						if (xhtp.readyState == 4 && xhtp.status == 200) 
						{
							rockets = xhtp.responseText;
							if(xhtp.responseText > 0)
							{
								xhttp.open("POST", "playerShot.php?s="+"right&area="+currentArea, false);
								xhttp.send();
								xhttp.onreadystatechange = function() {
									if (xhttp.readyState == 4 && xhttp.status == 200) 
									{
									}
								}
							}
							while (jQuery.inArray("k", charStr) !== -1)
							{
								charStr[jQuery.inArray("k", charStr)] = "";
							}
						}
					}
					shoot = 0;
					charCode = 0;
				}
				if(downArrow)
				{
					downArrow = false;
					xhtp.open("POST", "fireRocket.php", true);
					xhtp.send();
					xhtp.onreadystatechange = function() {
						if (xhtp.readyState == 4 && xhtp.status == 200) 
						{
							rockets = xhtp.responseText;
							if(xhtp.responseText > 0)
							{
								xhttp.open("POST", "playerShot.php?s="+"down&area="+currentArea, false);
								xhttp.send();
								xhttp.onreadystatechange = function() {
									if (xhttp.readyState == 4 && xhttp.status == 200) 
									{
									}
								}
							}
							while (jQuery.inArray("j", charStr) !== -1)
							{
								charStr[jQuery.inArray("j", charStr)] = "";
							}
						}
					}
					shoot = 0;
					charCode = 0;
				}
				if(leftArrow)
				{
					leftArrow = false;
					xhtp.open("POST", "fireRocket.php", true);
					xhtp.send();
					xhtp.onreadystatechange = function() {
						if (xhtp.readyState == 4 && xhtp.status == 200) 
						{
							rockets = xhtp.responseText;
							if(xhtp.responseText > 0)
							{
								xhttp.open("POST", "playerShot.php?s="+"left&area="+currentArea, false);
								xhttp.send();
								xhttp.onreadystatechange = function() {
									if (xhttp.readyState == 4 && xhttp.status == 200) 
									{
									}
								}
							}
							while (jQuery.inArray("h", charStr) !== -1)
							{
								charStr[jQuery.inArray("h", charStr)] = "";
							}
						}
					}
					shoot = 0;
					charCode = 0;
				}
				if(upArrow)
				{
					upArrow = false;
					xhtp.open("POST", "fireRocket.php", true);
					xhtp.send();
					xhtp.onreadystatechange = function() {
						if (xhtp.readyState == 4 && xhtp.status == 200) 
						{
							rockets = xhtp.responseText;
							if(xhtp.responseText > 0)
							{
								xhttp.open("POST", "playerShot.php?s="+"up&area="+currentArea, false);
								xhttp.send();
								xhttp.onreadystatechange = function() {
									if (xhttp.readyState == 4 && xhttp.status == 200) 
									{
									}
								}
							}
							while (jQuery.inArray("u", charStr) !== -1)
							{
								charStr[jQuery.inArray("u", charStr)] = "";
							}
						}
					}
					shoot = 0;
					charCode = 0;
				}
				if(engineUsed == 0)
				{
					fuelColor = [100, 0, 0, 1];
					if (charStr[jQuery.inArray("w", charStr)] == "w" && fuel > 0)
					{		
						if(charStr[jQuery.inArray("l", charStr)] == "l")
						{
							rocketSide = "lbottom";
							dy[areaId][i] += -(spaceSpeed*2);
							fuel -= shipEfficiency*2;
						}
						else{
							rocketSide = "bottom";
							dy[areaId][i] += -spaceSpeed;
							fuel -= shipEfficiency;
						}
					}
					if (charStr[jQuery.inArray("s", charStr)] == "s" && fuel > 0)
					{
						if(charStr[jQuery.inArray("l", charStr)] == "l")
						{
							rocketSide = "ltop";
							dy[areaId][i] += spaceSpeed*2;
							fuel -= shipEfficiency*2;
						}
						else{
							rocketSide = "top";
							dy[areaId][i] += spaceSpeed;
							fuel -= shipEfficiency;
						}
					}
					if (charStr[jQuery.inArray("a", charStr)] == "a" && fuel > 0)
					{
						if(charStr[jQuery.inArray("l", charStr)] == "l")
						{
							rocketSide = "lright";
							dx[areaId][i] += -(spaceSpeed*2);
							fuel -= shipEfficiency*2;
						}
						else{
							rocketSide = "right";
							dx[areaId][i] += -spaceSpeed;
							fuel -= shipEfficiency;
						}
					}
					if (charStr[jQuery.inArray("d", charStr)] == "d" && fuel > 0)
					{
						if(charStr[jQuery.inArray("l", charStr)] == "l")
						{
							rocketSide = "lleft";
							dx[areaId][i] += spaceSpeed*2;
							fuel -= shipEfficiency*2;
						}
						else{
							rocketSide = "left";
							dx[areaId][i] += spaceSpeed;
							fuel -= shipEfficiency;
						}
					}
					if (charStr[jQuery.inArray("e", charStr)] == "e" && emDrive !== 0)
					{
						engineUsed = 1;
						while (jQuery.inArray("e", charStr) !== -1)
						{
							charStr[jQuery.inArray("e", charStr)] = "";
						}
					}
					if (charStr[jQuery.inArray("f", charStr)] == "f")
					{	
						takeoff = false;
					}
					else{
						takeoff = true;
					}
					if (charStr[jQuery.inArray("m", charStr)] == "m")
					{	
						mapping = true;
					}	
					/*if (charStr[jQuery.inArray("b", charStr)] == "b")
					{	
						zoom(1.1, 0);
					}	
					if (charStr[jQuery.inArray("v", charStr)] == "v")
					{	
						zoom(.9, 0);
					}*/	
					if(charCode == 32)
					{
						dx[areaId][i]=Math.floor(dx[areaId][i]/1.05);
						dy[areaId][i]=Math.floor(dy[areaId][i]/1.05);
						fuel -= shipEfficiency/2;
					}
				}
				else if(engineUsed == 1)
				{
					fuelColor = [100, 100, 0, 1];
					if(emrspeed >= 1)
					{
						if (charStr[jQuery.inArray("w", charStr)] == "w" && emfuel > 0)
						{		
							rocketSide = "bottom";
							dy[areaId][i] += -1;
							emfuel -= emShipEfficiency;
							emrspeed = 0;
						}
						if (charStr[jQuery.inArray("s", charStr)] == "s" && emfuel > 0)
						{
							rocketSide = "top";
							dy[areaId][i] += 1;
							emfuel -= emShipEfficiency;
							emrspeed = 0;
						}
						if (charStr[jQuery.inArray("a", charStr)] == "a" && emfuel > 0)
						{
							rocketSide = "right";
							dx[areaId][i] += -1;
							emfuel -= emShipEfficiency;
							emrspeed = 0;
						}
						if (charStr[jQuery.inArray("d", charStr)] == "d" && emfuel > 0)
						{
							rocketSide = "left";
							dx[areaId][i] += 1;
							emfuel -= emShipEfficiency;
							emrspeed = 0;
						}
					}
					if (charStr[jQuery.inArray("s", charStr)] == "s" && emfuel > 0)
					{
						rocketSide = "top";
					}
					if (charStr[jQuery.inArray("w", charStr)] == "w" && emfuel > 0)
					{		
						rocketSide = "bottom";
					}
					if (charStr[jQuery.inArray("a", charStr)] == "a" && emfuel > 0)
					{
						rocketSide = "right";
					}
					if (charStr[jQuery.inArray("d", charStr)] == "d" && emfuel > 0)
					{
						rocketSide = "left";
					}
					emrspeed += emSpaceSpeed;
					if (charStr[jQuery.inArray("e", charStr)] == "e" && fuel > 0)
					{
						engineUsed = 0;
						while (jQuery.inArray("e", charStr) !== -1)
						{
							charStr[jQuery.inArray("e", charStr)] = "";
						}
					}
					if (charStr[jQuery.inArray("f", charStr)] == "f")
					{	
						takeoff = false;
					}
					else{
						takeoff = true;
					}
					if (charStr[jQuery.inArray("m", charStr)] == "m")
					{	
						mapping = true;
					}	
					/*if (charStr[jQuery.inArray("b", charStr)] == "b")
					{	
						zoom(1.1, 0);
					}	
					if (charStr[jQuery.inArray("v", charStr)] == "v")
					{	
						zoom(.9, 0);
					}*/	
					if(charCode == 32)
					{
						dx[areaId][i]=Math.floor(dx[areaId][i]/1.05);
						dy[areaId][i]=Math.floor(dy[areaId][i]/1.05);
						emfuel -= emShipEfficiency/2;
					}
				}
			}
		}
		areaCollided[areaId][i] = false;
	}
}
function displayShots(areaId)
{
	if(areaSpriteX1[areaId][94] !== undefined && areaId !== 0 && areaId !== 2)
	{
		for(var i = 94; i <= shotCount; i += 2)
		{
			areaRect(areaSpriteX1[areaId][i], areaSpriteY1[areaId][i], areaSpriteX2[areaId][i]-areaSpriteX1[areaId][i], areaSpriteY3[areaId][i]-areaSpriteY1[areaId][i], [200, 200, 200, 1], true, false, i, areaId);
		}
	}
	if(areaSpriteX1[areaId][400] !== undefined && areaId == 0 && areaId !== 2)
	{
		for(var i = 400; i <= shotCount; i += 2)
		{
			areaRect(areaSpriteX1[areaId][i], areaSpriteY1[areaId][i], areaSpriteX2[areaId][i]-areaSpriteX1[areaId][i], areaSpriteY3[areaId][i]-areaSpriteY1[areaId][i], [200, 200, 200, 1], true, false, i, areaId);
		}
	}
	if(areaSpriteX1[areaId][94] !== undefined && areaId !== 0 && areaId == 2)
	{
		for(var i = 94; i <= shotCount; i += 2)
		{
			areaRect(areaSpriteX1[areaId][i], areaSpriteY1[areaId][i], areaSpriteX2[areaId][i]-areaSpriteX1[areaId][i], areaSpriteY3[areaId][i]-areaSpriteY1[areaId][i], [200, 200, 200, 1], true, false, i, areaId);
		}
	}
}
function updateShots(areaId)
{
	if(areaId !== 0)
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
		shotCount = 94;
		xttp.open("GET", "getShots.php?area="+currentArea+"&_=" + Math.random(), true);
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
				if(shotCount >= 94)
				{
					shotCount -= 2;
				}
			}
		};
	}
	else if(areaId == 0)
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
		xttp.open("POST", "getShots.php?area="+currentArea+"&_=" + Math.random(), false);
		xttp.send();
		xttp.onreadystatechange = function() {
			if (xttp.readyState == 4 && xttp.status == 200) 
			{
				for(m = 400; m <= 468; m += 2)
				{
					tpRectSprite(0, 0, 0, 0, areaId, m);
				}
				shotCount = 400;
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
				if(shotCount > 400)
				{
					shotCount -= 2;
				}
			}
		};
	}
}
function updatePlayers(areaId)
{
	if(areaId == 0 || areaId == 1 || areaId == 3)
	{
		areaOK = true;
	}
	else{
		areaOK = true;
	}
	localX1 = 0;
	localY1 = 0;
	localX2 = 0;
	localY2 = 0;
	localX3 = 0;
	localY3 = 0;
	localString = "";
	localString2 = "";
	localString3 = "";
	if(areaId !== 2)
	{	
		playerCount = 0;
	}
	else if(areaId == 2)
	{
		playerCount = 180;
	}
	if(areaId !== 2)
	{
		xhttp.open("POST", "playerVerts.php?area="+currentArea+"&x1="+areaSpriteX1[areaId][0]+"&y1="+areaSpriteY1[areaId][0]+"&x2="+areaSpriteX2[areaId][0]+"&y2="+areaSpriteY2[areaId][0]+"&x3="+areaSpriteX3[areaId][0]+"&y3="+areaSpriteY3[areaId][0]+"&dx="+dx[areaId][0]+"&dy="+dy[areaId][0]+"&_=" + Math.random(), areaOK);
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
		};
	}
	else if(areaId == 2)
	{
		xhttp.open("POST", "playerVerts.php?area="+currentArea+"&x1="+areaSpriteX1[areaId][180]+"&y1="+areaSpriteY1[areaId][180]+"&x2="+areaSpriteX2[areaId][180]+"&y2="+areaSpriteY2[areaId][180]+"&x3="+areaSpriteX3[areaId][180]+"&y3="+areaSpriteY3[areaId][180]+"&dx="+dx[areaId][180]+"&dy="+dy[areaId][180]+"&_=" + Math.random(), true);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) 
			{
				playerCount = 180;
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
					if(playerCount == 180 && playerInit[areaId] !== false)
					{
						areaSpriteX1[areaId][playerCount] = localX1;
						areaSpriteY1[areaId][playerCount] = localY1;
						areaSpriteX2[areaId][playerCount] = localX2;
						areaSpriteY2[areaId][playerCount] = localY2;
						areaSpriteX3[areaId][playerCount] = localX3;
						areaSpriteY3[areaId][playerCount] = localY3;
						playerInit[areaId] = false;
					}
					if(playerCount !== 180)
					{
						tpRectSprite(localX1, localY1, localX2-localX1, localY3-localY1, areaId, playerCount);
						dx[areaId][playerCount] = localDX;
						dy[areaId][playerCount] = localDY;
					}
					playerCount += 2;
				}
				playerCount -= 2;
			}
		};
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
				xhttp.open("POST", "resetHp.php", false);
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
				tpRectSprite(100, 100, 50, 50, 0, 0);
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
function resources(areaId)
{
	if(areaId == 1)
	{
		if(Math.floor(Math.random()*300)+1 == 300)
		{
			resourceCollected[0] = false;
			areaColor[areaId][74] = [0, 200, 175, 1];
			tpRectSprite(Math.floor(Math.random()*1935)+1, Math.floor(Math.random()*1935)+1, 65, 65, areaId, 74);
		}
		if(Math.floor(Math.random()*400)+1 == 1)
		{
			resourceCollected[1] = false;
			areaColor[areaId][72] = [0, 200, 175, 1];
			tpRectSprite(Math.floor(Math.random()*1935)+1, Math.floor(Math.random()*1935)+1, 65, 65, areaId, 72);
		}
		if(rectContact(findUser(areaId), 74, areaId) && resourceCollected[0] == false)
		{
			resourceCollected[0] = true;
			upgrade = Math.floor(Math.random()*1)+1;
			if(upgrade == 1)
			{
				if(fuel<300)
				{
					fuel += 20;
				}
				if(fuel>300)
				{
					fuel = 300;
				}
				if(fuel<0)
				{
					fuel = 0;
				}
				areaColor[areaId][74] = [50, 0, 0, 1];
			}
		}
		if(rectContact(findUser(areaId), 72, areaId) && resourceCollected[1] == false)
		{
			resourceCollected[1] = true;
			upgrade = Math.floor(Math.random()*2)+1;
			if(upgrade == 1)
			{
				if(fuel<300)
				{
					fuel += 20;
				}
				if(fuel>300)
				{
					fuel = 300;
				}
				if(fuel<0)
				{
					fuel = 0;
				}
				areaColor[areaId][72] = [50, 0, 0, 1];
			}
			if(upgrade == 2)
			{
				xhttp.open("POST", "addMetal.php?metal=1", false);
				xhttp.send();
				xhttp.onreadystatechange = function() {
					if (xhttp.readyState == 4 && xhttp.status == 200)
					{
					}
				}
				areaColor[areaId][72] = [100, 100, 100, 1];
			}
		}
	}
	else if(areaId == 2)
	{
		if(Math.floor(Math.random()*400)+1 == 1)
		{
			resourceCollected[1] = false;
			areaColor[areaId][72] = [0, 200, 175, 1];
			tpRectSprite(Math.floor(Math.random()*1935)+1, Math.floor(Math.random()*1935)+1, 65, 65, areaId, 72);
		}
		if(Math.floor(Math.random()*320)+1 == 225)
		{
			resourceCollected[0] = false;
			areaColor[areaId][74] = [0, 200, 175, 1];
			tpRectSprite(Math.floor(Math.random()*9950)+1, Math.floor(Math.random()*9950)+1, 65, 65, areaId, 74);
		}
		if(Math.floor(Math.random()*300)+1 == 250)
		{
			resourceCollected[2] = false;
			areaColor[areaId][76] = [0, 200, 175, 1];
			tpRectSprite(Math.floor(Math.random()*9950)+1, Math.floor(Math.random()*9950)+1, 65, 65, areaId, 76);
		}
		if(Math.floor(Math.random()*400)+1 == 10)
		{
			resourceCollected[3] = false;
			areaColor[areaId][78] = [0, 200, 175, 1];
			tpRectSprite(Math.floor(Math.random()*1935)+1, Math.floor(Math.random()*1935)+1, 65, 65, areaId, 78);
		}
		if(Math.floor(Math.random()*300)+1 == 300)
		{
			resourceCollected[4] = false;
			areaColor[areaId][80] = [0, 200, 175, 1];
			tpRectSprite(Math.floor(Math.random()*9950)+1, Math.floor(Math.random()*9950)+1, 65, 65, areaId, 80);
		}
		if(Math.floor(Math.random()*450)+1 == 20)
		{
			resourceCollected[5] = false;
			areaColor[areaId][82] = [0, 200, 175, 1];
			tpRectSprite(Math.floor(Math.random()*1935)+1, Math.floor(Math.random()*1935)+1, 65, 65, areaId, 82);
		}
		if(Math.floor(Math.random()*325)+1 == 325)
		{
			resourceCollected[6] = false;
			areaColor[areaId][84] = [0, 200, 175, 1];
			tpRectSprite(Math.floor(Math.random()*9950)+1, Math.floor(Math.random()*9950)+1, 65, 65, areaId, 84);
		}
		if(Math.floor(Math.random()*400)+1 == 30)
		{
			resourceCollected[7] = false;
			areaColor[areaId][86] = [0, 200, 175, 1];
			tpRectSprite(Math.floor(Math.random()*1935)+1, Math.floor(Math.random()*1935)+1, 65, 65, areaId, 86);
		}
		if(Math.floor(Math.random()*350)+1 == 350)
		{
			resourceCollected[8] = false;
			areaColor[areaId][88] = [0, 200, 175, 1];
			tpRectSprite(Math.floor(Math.random()*9950)+1, Math.floor(Math.random()*9950)+1, 65, 65, areaId, 88);
		}
		if(rectContact(findUser(areaId), 74, areaId) && resourceCollected[0] == false)
		{
			resourceCollected[0] = true;
			upgrade = Math.floor(Math.random()*1)+1;
			if(upgrade == 1)
			{
				if(fuel<300)
				{
					fuel += 20;
				}
				if(fuel>300)
				{
					fuel = 300;
				}
				if(fuel<0)
				{
					fuel = 0;
				}
				areaColor[areaId][74] = [50, 0, 0, 1];
			}
		}
		if(rectContact(findUser(areaId), 72, areaId) && resourceCollected[1] == false)
		{
			resourceCollected[1] = true;
			upgrade = Math.floor(Math.random()*2)+1;
			if(upgrade == 1)
			{
				if(fuel<300)
				{
					fuel += 20;
				}
				if(fuel>300)
				{
					fuel = 300;
				}
				if(fuel<0)
				{
					fuel = 0;
				}
				areaColor[areaId][72] = [50, 0, 0, 1];
			}
			if(upgrade == 2)
			{
				xhttp.open("POST", "addMetal.php?metal=1", false);
				xhttp.send();
				xhttp.onreadystatechange = function() {
					if (xhttp.readyState == 4 && xhttp.status == 200)
					{
					}
				}
				areaColor[areaId][72] = [100, 100, 100, 1];
			}
		}
		
		if(rectContact(findUser(areaId), 76, areaId) && resourceCollected[2] == false)
		{
			resourceCollected[2] = true;
			upgrade = Math.floor(Math.random()*1)+1;
			if(upgrade == 1)
			{
				if(fuel<300)
				{
					fuel += 20;
				}
				if(fuel>300)
				{
					fuel = 300;
				}
				if(fuel<0)
				{
					fuel = 0;
				}
				areaColor[areaId][76] = [50, 0, 0, 1];
			}
		}
		if(rectContact(findUser(areaId), 78, areaId) && resourceCollected[3] == false)
		{
			resourceCollected[3] = true;
			upgrade = Math.floor(Math.random()*2)+1;
			if(upgrade == 1)
			{
				if(fuel<300)
				{
					fuel += 20;
				}
				if(fuel>300)
				{
					fuel = 300;
				}
				if(fuel<0)
				{
					fuel = 0;
				}
				areaColor[areaId][78] = [50, 0, 0, 1];
			}
			if(upgrade == 2)
			{
				xhttp.open("POST", "addMetal.php?metal=1", false);
				xhttp.send();
				xhttp.onreadystatechange = function() {
					if (xhttp.readyState == 4 && xhttp.status == 200)
					{
					}
				}
				areaColor[areaId][78] = [100, 100, 100, 1];
			}
		}
		
		if(rectContact(findUser(areaId), 80, areaId) && resourceCollected[4] == false)
		{
			resourceCollected[4] = true;
			upgrade = Math.floor(Math.random()*1)+1;
			if(upgrade == 1)
			{
				if(fuel<300)
				{
					fuel += 20;
				}
				if(fuel>300)
				{
					fuel = 300;
				}
				if(fuel<0)
				{
					fuel = 0;
				}
				areaColor[areaId][80] = [50, 0, 0, 1];
			}
		}
		if(rectContact(findUser(areaId), 82, areaId) && resourceCollected[5] == false)
		{
			resourceCollected[5] = true;
			upgrade = Math.floor(Math.random()*2)+1;
			if(upgrade == 1)
			{
				if(fuel<300)
				{
					fuel += 20;
				}
				if(fuel>300)
				{
					fuel = 300;
				}
				if(fuel<0)
				{
					fuel = 0;
				}
				areaColor[areaId][82] = [50, 0, 0, 1];
			}
			if(upgrade == 2)
			{
				xhttp.open("POST", "addMetal.php?metal=1", false);
				xhttp.send();
				xhttp.onreadystatechange = function() {
					if (xhttp.readyState == 4 && xhttp.status == 200)
					{
					}
				}
				areaColor[areaId][82] = [100, 100, 100, 1];
			}
		}
		if(rectContact(findUser(areaId), 84, areaId) && resourceCollected[6] == false)
		{
			resourceCollected[6] = true;
			upgrade = Math.floor(Math.random()*1)+1;
			if(upgrade == 1)
			{
				if(fuel<300)
				{
					fuel += 20;
				}
				if(fuel>300)
				{
					fuel = 300;
				}
				if(fuel<0)
				{
					fuel = 0;
				}
				areaColor[areaId][84] = [50, 0, 0, 1];
			}
		}
		if(rectContact(findUser(areaId), 86, areaId) && resourceCollected[7] == false)
		{
			resourceCollected[7] = true;
			upgrade = Math.floor(Math.random()*2)+1;
			if(upgrade == 1)
			{
				fuel = 300;
				areaColor[areaId][86] = [255, 0, 0, 1];
			}
			if(upgrade == 2)
			{
				xhttp.open("POST", "addMetal.php?metal=1", false);
				xhttp.send();
				xhttp.onreadystatechange = function() {
					if (xhttp.readyState == 4 && xhttp.status == 200)
					{
					}
				}
				areaColor[areaId][86] = [100, 100, 100, 1];
			}
		}
		if(rectContact(findUser(areaId), 88, areaId) && resourceCollected[8] == false)
		{
			resourceCollected[8] = true;
			upgrade = Math.floor(Math.random()*2)+1;
			if(upgrade == 1)
			{
				if(fuel<300)
				{
					fuel += 20;
				}
				if(fuel>300)
				{
					fuel = 300;
				}
				if(fuel<0)
				{
					fuel = 0;
				}
				areaColor[areaId][88] = [50, 0, 0, 1];
			}
			if(upgrade == 2)
			{
				xhttp.open("POST", "addMetal.php?metal=1", false);
				xhttp.send();
				xhttp.onreadystatechange = function() {
					if (xhttp.readyState == 4 && xhttp.status == 200)
					{
					}
				}
				areaColor[areaId][88] = [100, 100, 100, 1];
			}
		}
	}
}
function updatePlayersFuel()
{
	xhttp.open("POST", "updateFuel.php?fuel="+Math.floor(fuel), true);
	xhttp.send();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200)
		{
		}
	}
}
function area1Reset()
{
	for(i = 52; i <= 500; i += 2)
	{
		if(i >= 470 && i <= 496)
		{}
		else{
			resetRectSprite(0, i);
		}
	}
	for(i = 52; i <= 500; i++)
	{
		dx[0][i] = 0;
		dy[0][i] = 0;
	}
}
function area4Reset()
{
	for(i = 50; i <= 500; i += 2)
	{
		resetRectSprite(0, i);
	}
	for(i = 50; i <= 500; i++)
	{
		dx[0][i] = 0;
		dy[0][i] = 0;
	}
}
function solarSystem1()
{
	if(globalPos[0])
	{
		if(areas[0])
		{
			if(teleport && teleportPower < 100)
			{
				teleportPower += .1;
			}
			finalFrontier();
		}
		else if(areas[1])
		{
			if(shoot<100)
			{
				shoot += reload;
			}
			asteroid1();
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
		else if(areas[6])
		{
			urbanPlanet();
		}
		else if(areas[7])
		{
			cameron();
		}
	}
}
rectExceptions(56, 58, 0);
rectExceptions(56, 60, 0);
rectExceptions(58, 60, 0);
var takeoff = false;
var playerUpdate1;
var fixLocalPlayer1;
var playerUpdate2;
var fixLocalPlayer2;
var playerUpdate3;
var fixLocalPlayer3;
var playerUpdate4;
var fixLocalPlayer4;
var playerUpdate5;
var fixLocalPlayer5;
function finalFrontier()
{
	area1Reset();
	modifiedControls(0);
	if((rectContact(0, 150, 0) || rectContact(0, 152, 0) || rectContact(0, 154, 0)) && takeoff == false)
	{
		clearInterval(playerUpdate0);
		clearInterval(fixLocalPlayer0);
		areas[0] = false;
		areas[1] = true;
	}
	else if((rectContact(0, 156, 0) || rectContact(0, 158, 0) || rectContact(0, 160, 0)) && takeoff == false)
	{
		clearInterval(playerUpdate0);
		clearInterval(fixLocalPlayer0);
		areas[0] = false;
		areas[2] = true;
	}
	else if(rectContact(0, 148, 0) && takeoff == false)
	{
		clearInterval(playerUpdate0);
		clearInterval(fixLocalPlayer0);
		areas[0] = false;
		areas[3] = true;
	}
	else if((rectContact(0, 174, 0) || rectContact(0, 176, 0) || rectContact(0, 178, 0)) && takeoff == false)
	{
		clearInterval(playerUpdate0);
		clearInterval(fixLocalPlayer0);
		areas[0] = false;
		areas[5] = true;
	}
	else if(areaSpriteX1[0][0] > 70000 && areaSpriteX1[0][0] < 80000 && areaSpriteY1[0][0] > 70000 && areaSpriteY1[0][0] < 80000)
	{
		clearInterval(playerUpdate0);
		clearInterval(fixLocalPlayer0);
		areas[0] = false;
		areas[7] = true;
		tpRectSprite(500, 100, 50, 50, 0, 0);
		drawArea(150000, 150000, 0);
		tpRectSprite(500, 100, 50, 50, 0, 0);
		drawArea(150000, 150000, 0);
		tpRectSprite(500, 100, 50, 50, 0, 0);
		drawArea(150000, 150000, 0);
	}
	else if((rectContact(0, 168, 0) || rectContact(0, 170, 0) || rectContact(0, 172, 0)) && takeoff == false)
	{
		xttp.open("GET", "getUsername.php", false);
		xttp.send();
		xttp.onreadystatechange = function() {
			if (xttp.readyState == 4 && xttp.status == 200) 
			{
				if(username == "")
				{
					username = xttp.responseText;
				}
			}
		}
		if(username !== "")
		{
			clearInterval(playerUpdate0);
			clearInterval(fixLocalPlayer0);
			areas[0] = false;
			areas[4] = true;
		}
	}
	else if(spriteProximity(0, 182, 0) < 3000 && takeoff == false)
	{
		clearInterval(playerUpdate0);
		clearInterval(fixLocalPlayer0);
		areas[0] = false;
		areas[6] = true;
	}
	else{
		areaObjectAI();
		followTexture(1500, 1500, "spriteModels/spaceBack", 470, 0)
		displayRectPlayers(0, [100, 100, 100, 1]);
		textureAnimation();
		updateShots(0);
		displayShots(0);
		areaRect(12000, 22000, 5000, 4000, [0, 0, 100, 1], false, false, 52, 0);
		areaRect(14000, 20000, 3000, 4000, [0, 50, 0, 1], false, false, 50, 0);
		areaRect(10000, 25000, 1000, 1000, [255, 0, 0, 1], false, false, 54, 0);
		areaRect(20000, 10000, 400, 100, [80, 80, 80, 1], true, false, 56, 0);
		areaRect(20150, 10000, 255, 305, [100, 100, 100, 1], true, false, 58, 0);
		areaRect(20000, 10200, 400, 100, [80, 80, 80, 1], true, false, 60, 0);
		areaRect(55000, 55000, 40000, 40000, [255, 255, 0, .25], false, false, 62, 0);
		areaRect(20000, 10100, 200, 100, [40, 40, 40, 1], false, false, 148, 0);
		areaRect(500, 600, 400, 400, [100, 100, 0, 1], false, false, 150, 0);
		areaRect(550, 550, 300, 500, [100, 100, 0, 1], false, false, 152, 0);
		areaRect(450, 650, 500, 300, [100, 100, 0, 1], false, false, 154, 0);
		areaRect(10000, 20000, 7000, 7000, [0, 100, 0, 1], false, false, 156, 0);
		areaRect(9000, 21000, 9000, 5000, [0, 100, 0, 1], false, false, 158, 0);
		areaRect(11000, 19000, 5000, 9000, [0, 100, 0, 1], false, false, 160, 0);
		areaRect(65000, 65000, 20000, 20000, [255, 255, 0, 1], false, false, 162, 0);
		areaRect(60000, 70000, 30000, 10000, [255, 255, 0, 1], false, false, 164, 0);
		areaRect(70000, 60000, 10000, 30000, [255, 255, 0, 1], false, false, 166, 0);
		areaRect(30000, 50000, 600, 600, [0, 200, 0, 1], false, false, 168, 0);
		areaRect(29900, 50100, 800, 400, [150, 150, 0, 1], false, false, 170, 0);
		areaRect(30100, 49900, 400, 800, [150, 150, 0, 1], false, false, 172, 0);
		areaRect(40000, 10000, 3000, 3000, [100, 200, 100, 1], false, false, 174, 0);
		areaRect(39500, 10500, 4000, 2000, [100, 255, 100, 1], false, false, 176, 0);
		areaRect(40500, 9500, 2000, 4000, [100, 255, 100, 1], false, false, 178, 0);
		areaTextureRect(95000, 10000, 35000, 35000, "spriteModels/nebula", false, false, 180, 0);
		areaTextureRect(80000, 120000, 6000, 6000, "spriteModels/urbanPlanet", false, false, 182, 0);
		areaRect(0, 0, 150000, 150000, [0, 0, 0, 1], false, false, 498, 0);
		drawArea(150000, 150000, 0);
		openWorldCamera(0);
		if(engineUsed == 0)
		{
			drawPassiveRect(10, canvas.height-35, fuel*4/3, 30, fuelColor);
		}
		else if(engineUsed == 1)
		{
			drawPassiveRect(10, canvas.height-35, emfuel*4, 30, fuelColor);
		}
		drawPassiveRectOutline(10, canvas.height-35, 400, 30, [75, 75, 75, 1]);
		drawText(130, canvas.height-70, 150, 30, "rockets "+rockets, "../ludificioEngine/text/fonts/8-bit/white/");
		drawText(155, canvas.height-35, 100, 30, "fuel", "../ludificioEngine/text/fonts/8-bit/white/");
		drawText(canvas.width-250, canvas.height-100, 200, 50, "solar pos", "../ludificioEngine/text/fonts/8-bit/white/");
		drawText(canvas.width-300, canvas.height-35, 20, 30, "X", "../ludificioEngine/text/fonts/8-bit/white/");
		drawText(canvas.width-275, canvas.height-35, 100, 30, ""+Math.floor(areaSpriteX1[0][0]/100), "../ludificioEngine/text/fonts/8-bit/white/");
		drawText(canvas.width-150, canvas.height-35, 20, 30, "Y", "../ludificioEngine/text/fonts/8-bit/white/");
		drawText(canvas.width-125, canvas.height-35, 100, 30, ""+Math.floor(areaSpriteY1[0][0]/100), "../ludificioEngine/text/fonts/8-bit/white/");
		if(mouseOver(0, 0, canvas.width/20, canvas.height/20))
		{
			drawPassiveRect(0, 0, canvas.width/20, canvas.height/20, [200, 125, 125, .5]);
			if(isLeftMouseDown)
			{
				window.location = windowDirectory.replace("explorator/", "");
			}
		}
		if(engineUsed == 0)
		{
			if(rocketSide == "right")
			{
				drawPassiveRect(spriteDrawAreaX2[0][0]+3, spriteDrawAreaY1[0][0]+15, 30, 20, [150, 0, 0, 1]);
				rocketSide = "";
			}
			if(rocketSide == "left")
			{
				drawPassiveRect(spriteDrawAreaX1[0][0]-33, spriteDrawAreaY1[0][0]+15, 30, 20, [150, 0, 0, 1]);
				rocketSide = "";
			}
			if(rocketSide == "top")
			{
				drawPassiveRect(spriteDrawAreaX1[0][0]+15, spriteDrawAreaY1[0][0]-33, 20, 30, [150, 0, 0, 1]);
				rocketSide = "";
			}
			if(rocketSide == "bottom")
			{
				drawPassiveRect(spriteDrawAreaX1[0][0]+15, spriteDrawAreaY3[0][0]+3, 20, 30, [150, 0, 0, 1]);
				rocketSide = "";
			}
		}
		else if(engineUsed == 1)
		{
			if(rocketSide == "right")
			{
				drawPassiveRect(spriteDrawAreaX2[0][0]+3, spriteDrawAreaY1[0][0]+15, 30, 20, [50, 50, 0, .5]);
				rocketSide = "";
			}
			if(rocketSide == "left")
			{
				drawPassiveRect(spriteDrawAreaX1[0][0]-33, spriteDrawAreaY1[0][0]+15, 30, 20, [50, 50, 0, .5]);
				rocketSide = "";
			}
			if(rocketSide == "top")
			{
				drawPassiveRect(spriteDrawAreaX1[0][0]+15, spriteDrawAreaY1[0][0]-33, 20, 30, [50, 50, 0, .5]);
				rocketSide = "";
			}
			if(rocketSide == "bottom")
			{
				drawPassiveRect(spriteDrawAreaX1[0][0]+15, spriteDrawAreaY3[0][0]+3, 20, 30, [50, 50, 0, .5]);
				rocketSide = "";
			}
		}
		if(rocketSide == "lright")
		{
			drawPassiveRect(spriteDrawAreaX2[0][0]+3, spriteDrawAreaY1[0][0]+12, 40, 26, [150, 0, 0, 1]);
			rocketSide = "";
		}
		if(rocketSide == "lleft")
		{
			drawPassiveRect(spriteDrawAreaX1[0][0]-43, spriteDrawAreaY1[0][0]+12, 40, 26, [150, 0, 0, 1]);
			rocketSide = "";
		}
		if(rocketSide == "ltop")
		{
			drawPassiveRect(spriteDrawAreaX1[0][0]+12, spriteDrawAreaY1[0][0]-43, 26, 40, [150, 0, 0, 1]);
			rocketSide = "";
		}
		if(rocketSide == "lbottom")
		{
			drawPassiveRect(spriteDrawAreaX1[0][0]+12, spriteDrawAreaY3[0][0]+3, 26, 40, [150, 0, 0, 1]);
			rocketSide = "";
		}
		if(mapping)
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
		}
		if(tutorial)
		{
			if(shiftKey)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "okay geez i'll stop", "../ludificioEngine/text/fonts/8-bit/white/");
				timer2 = 2700;
			}
			if(timer2 > 100 && timer2 < 300)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "fly onto that asteroid", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-200, canvas.height/4+35, 400, 50, "and press f to land", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-75, canvas.height/4+90, 150, 25, "shift to skip", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			if(timer2 > 600 && timer2 < 800)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "touch the blue boxes", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-200, canvas.height/4+35, 400, 50, "to get resources", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			if(timer2 > 950 && timer2 < 1150)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "if the boxes turn brown", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-200, canvas.height/4+35, 400, 50, "they contain fuel", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			if(timer2 > 1250 && timer2 < 1450)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "if the boxes turn gray", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-200, canvas.height/4+35, 400, 50, "they contain metal", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			if(timer2 > 1600 && timer2 < 1800)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "press uhjk to shoot", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-200, canvas.height/4+35, 400, 50, "", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			if(timer2 > 2000 && timer2 < 2200)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "touch your spaceship", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-200, canvas.height/4+35, 400, 50, "to leave", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			if(timer2 > 2500 && timer2 < 2700)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "press M to open the map", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-200, canvas.height/4+35, 400, 50, "", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			if(timer2 > 2800 && timer2 < 2900)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "end of tutorial", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-200, canvas.height/4+35, 400, 50, "", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			if(timer2 > 2900)
			{
				tutorial = false;
			}
			timer2 += 1;
		}
		document.body.style.cursor = 'unset';
		if(teleporting)
		{
			xxtp.open("GET", "getAntimatter.php", true);
			xxtp.send();
			xxtp.onreadystatechange = function() {
				if(xxtp.readyState == 4 && xxtp.status == 200) 
				{
					if(xxtp.responseText < 10000)
					{
						antimatter = xxtp.responseText;
					}
				}
			}
			document.body.style.cursor = 'none';
			map(0, 0, canvas.width, canvas.height, 0);
			drawText(canvas.width-250, canvas.height-100, 200, 50, "solar pos", "../ludificioEngine/text/fonts/8-bit/white/");
			drawText(canvas.width-300, canvas.height-35, 20, 30, "X", "../ludificioEngine/text/fonts/8-bit/white/");
			drawText(canvas.width-275, canvas.height-35, 100, 30, ""+Math.floor((mouseXPos/canvas.width)*1500), "../ludificioEngine/text/fonts/8-bit/white/");
			drawText(canvas.width-150, canvas.height-35, 20, 30, "Y", "../ludificioEngine/text/fonts/8-bit/white/");
			drawText(canvas.width-125, canvas.height-35, 100, 30, ""+Math.floor((mouseYPos/canvas.height)*1500), "../ludificioEngine/text/fonts/8-bit/white/");
			drawPassiveRectOutline(10, canvas.height-35, 400, 30, [75, 75, 75, 1]);
			drawPassiveRect(10, canvas.height-35, teleportPower*4, 30, [0, 0, 200, 1]);
			if(teleportPower<100)
			{
				drawText(420, canvas.height-40, 250, 30, "right mouse to charge", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			drawText(105, canvas.height-35, 200, 30, "quantum tunneler", "../ludificioEngine/text/fonts/8-bit/white/");
			drawText(105, canvas.height-70, 200, 30, "antimatter "+antimatter, "../ludificioEngine/text/fonts/8-bit/white/");
			if(timer1 >= 0 && timer1 <= 20)
			{
				drawPassiveRectTexture(mouseXPos-10, mouseYPos-10, 20, 20, "spriteModels/quantumTunnel1")
			}
			else if(timer1 >= 20 && timer1 <= 40)
			{
				drawPassiveRectTexture(mouseXPos-10, mouseYPos-10, 20, 20, "spriteModels/quantumTunnel2")
			}
			else if(timer1 >= 40 && timer1 <= 60)
			{
				drawPassiveRectTexture(mouseXPos-10, mouseYPos-10, 20, 20, "spriteModels/quantumTunnel3")
			}
			else if(timer1 >= 60 && timer1 <= 80)
			{
				drawPassiveRectTexture(mouseXPos-10, mouseYPos-10, 20, 20, "spriteModels/quantumTunnel4")
			}
			if(timer1 >= 80)
			{
				timer1 = 0;
			}
			timer1++;
			if(isRightMouseDown && teleportPower < 100)
			{
				teleportPower+=.4
			}
			if(teleportPower >= 100 && antimatter > 0)
			{
				if(timer1 > 0 && timer1 < 10 || timer1 > 20 && timer1 < 30 || timer1 > 40 && timer1 < 50 || timer1 > 60 && timer1 < 70)
				{
					drawText(canvas.width/2-150, canvas.height/2-50, 300, 100, "CHARGED", "../ludificioEngine/text/fonts/8-bit/white/");
				}
				else if(timer1 > 10 && timer1 < 20 || timer1 > 30 && timer1 < 40 || timer1 > 50 && timer1 < 60 || timer1 > 70 && timer1 < 80)
				{
					drawText(canvas.width/2-150, canvas.height/2-50, 300, 100, "CHARGED", "../ludificioEngine/text/fonts/8-bit/black/");
				}
				if(isLeftMouseDown)
				{
					xtpp.open("GET", "removeAntimatter.php", true);
					xtpp.send();
					xtpp.onreadystatechange = function() {
						if (xtpp.readyState == 4 && xtpp.status == 200) 
						{
						}
					}
					antimatter -= 1;
					tpRectSprite(Math.floor((mouseXPos/canvas.width)*150000), Math.floor((mouseYPos/canvas.height)*150000), 50, 50, 0, 0);
					teleportPower = 0;
					teleporting = false;
				}
			}
		}
	}
	if(areas[1])
	{
		xhttp.open("POST", "updateHealth.php?area="+currentArea+"&nextArea="+"asteroid1", false);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200)
			{
			}
		}
		currentArea = "asteroid1";
		playerUpdate1 = setInterval(function(){updatePlayers(1)}, 80);
		fixLocalPlayer1 = setInterval(function(){fixPlayer(1)}, 1000);	
		tpRectSprite(500, 100, 100, 100, 1, 0);
		drawArea(2000, 2000, 1);
	}
	else if(areas[2])
	{
		xhttp.open("POST", "updateHealth.php?area="+currentArea+"&nextArea="+"planet1", false);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200)
			{
			}
		}
		currentArea = "planet1";
		playerUpdate2 = setInterval(function(){updatePlayers(2)}, 80);
		fixLocalPlayer2 = setInterval(function(){fixPlayer(2)}, 1000);	
		tpRectSprite(500, 100, 100, 100, 2, 180);
		drawArea(2000, 2000, 2);
	}
	else if(areas[3])
	{
		xhttp.open("POST", "updateHealth.php?area="+currentArea+"&nextArea="+"station1", false);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200)
			{
			}
		}
		currentArea = "station1";
		playerUpdate3 = setInterval(function(){updatePlayers(3)}, 80);
		fixLocalPlayer3 = setInterval(function(){fixPlayer(3)}, 1000);	
		tpRectSprite(500, 400, 100, 100, 3, 0);
		drawArea(1750, 1000, 3);
	}
	else if(areas[4])
	{
		xhttp.open("POST", "updateHealth.php?area="+currentArea+"&nextArea="+"grady", false);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200)
			{
			}
		}
		currentArea = "grady";
		playerUpdate4 = setInterval(function(){updatePlayers(4)}, 80);
		fixLocalPlayer4 = setInterval(function(){fixPlayer(4)}, 1000);	
		tpRectSprite(300, 1300, 100, 100, 4, 0);
		drawArea(3000, 2000, 4);
	}
	else if(areas[5])
	{
		xhttp.open("POST", "updateHealth.php?area="+currentArea+"&nextArea="+"magnetic", false);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200)
			{
			}
		}
		currentArea = "magnetic";
		playerUpdate5 = setInterval(function(){updatePlayers(5)}, 80);
		fixLocalPlayer5 = setInterval(function(){fixPlayer(5)}, 1000);	
		tpRectSprite(300, 1300, 100, 100, 5, 0);
		drawArea(2000, 2000, 5);
	}
	else if(areas[6])
	{
		xhttp.open("POST", "updateHealth.php?area="+currentArea+"&nextArea="+"urbanPlanet", false);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200)
			{
			}
		}
		currentArea = "urbanPlanet";
		playerUpdate6 = setInterval(function(){updatePlayers(6)}, 80);
		fixLocalPlayer6 = setInterval(function(){fixPlayer(6)}, 1000);	
		tpRectSprite(300, 1300, 100, 100, 6, 0);
		drawArea(2000, 2000, 6);
	}
	drawText(0,0,canvas.width/20,canvas.height/20, "exit", "../ludificioEngine/text/fonts/8-bit/black/");
}
function asteroid1()
{
	stopAreaUser(1);
	modifiedControls(1);
	if(rectContact(0, 50, 1))
	{
		clearInterval(playerUpdate1);
		clearInterval(fixLocalPlayer1);
		areas[1] = false;
		areas[0] = true;
		playerUpdate0 = setInterval(function(){updatePlayers(0)}, 80);
		fixLocalPlayer0 = setInterval(function(){fixPlayer(0)}, 1000);
	}
	else{
		displayModTexturePlayers(1, "spriteModels/playerModel2/frontFacing");
		textureAnimation();
		updateShots(1);
		displayShots(1);
		areaRect(5, 5, 400, 400, [100, 100, 100, 1], true, false, 50, 1);
		areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 72, 1);
		areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 74, 1);
		resources(1);
		areaRect(300, 600, 200, 200, [85, 85, 0, 1], false, false, 78, 1);
		areaRect(800, 300, 300, 300, [80, 80, 0, 1], false, false, 80, 1);
		areaRect(700, 1600, 200, 200, [80, 80, 0, 1], false, false, 82, 1);
		areaRect(400, 1200, 200, 200, [90, 90, 0, 1], false, false, 84, 1);
		areaRect(1500, 200, 200, 200, [90, 90, 0, 1], false, false, 86, 1);
		areaRect(1600, 1600, 200, 200, [90, 90, 0, 1], false, false, 88, 1);
		areaRect(1000, 1100, 300, 300, [85, 85, 0, 1], false, false, 92, 1);
		areaRect(0, 0, 2000, 2000, [100, 100, 0, 1], false, false, 150, 1);
		drawArea(2000, 2000, 1);
		openWorldCamera(1);
		if(tutorial)
		{
			if(shiftKey)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "okay geez i'll stop", "../ludificioEngine/text/fonts/8-bit/white/");
				timer2 = 2700;
			}
			if(timer2 > 100 && timer2 < 300)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "fly onto that asteroid", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-200, canvas.height/4+35, 400, 50, "and press f to land", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-75, canvas.height/4+90, 150, 25, "shift to skip", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			if(timer2 > 600 && timer2 < 800)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "touch the blue boxes", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-200, canvas.height/4+35, 400, 50, "to get resources", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			if(timer2 > 950 && timer2 < 1150)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "if the boxes turn brown", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-200, canvas.height/4+35, 400, 50, "they contain fuel", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			if(timer2 > 1250 && timer2 < 1450)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "if the boxes turn gray", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-200, canvas.height/4+35, 400, 50, "they contain metal", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			if(timer2 > 1600 && timer2 < 1800)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "press uhjk to shoot", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-200, canvas.height/4+35, 400, 50, "", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			if(timer2 > 2000 && timer2 < 2200)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "touch your spaceship", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-200, canvas.height/4+35, 400, 50, "to leave", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			if(timer2 > 2500 && timer2 < 2700)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "press M to open the map", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-200, canvas.height/4+35, 400, 50, "", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			if(timer2 > 2800 && timer2 < 2900)
			{
				drawText(canvas.width/2-250, canvas.height/4-25, 500, 50, "end of tutorial", "../ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-200, canvas.height/4+35, 400, 50, "", "../ludificioEngine/text/fonts/8-bit/white/");
			}
			if(timer2 > 2900)
			{
				tutorial = false;
			}
			timer2 += 1;
		}
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
		xhttp.open("POST", "removeUser.php?area=asteroid1", false);
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
function planet1()
{
	playSong("fate");
	stopAreaUser(2);
	modifiedControls(2);
	if(rectContact(findUser(2), 50, 2))
	{
		clearInterval(playerUpdate2);
		clearInterval(fixLocalPlayer2);
		playerUpdate0 = setInterval(function(){updatePlayers(0)}, 80);
		fixLocalPlayer0 = setInterval(function(){fixPlayer(0)}, 1000);
		areas[2] = false;
		areas[0] = true;
		pauseSong("fate");
	}
	else{
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
		xhttp.open("POST", "removeUser.php?area=planet1", false);
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
		area4Reset();
		displayModTexturePlayers(3, "spriteModels/playerModel2/frontFacing");
		textureAnimation();
		areaRect(5, 300, 400, 400, [100, 100, 100, 1], true, false, 50, 3);
		areaRect(1455, 355, 300, 50, [50, 50, 0, 1], true, false, 52, 3);
		areaRect(1450, 0, 50, 400, [50, 50, 0, 1], true, false, 54, 3);
		areaTextureRect(1550, 217, 150, 150, "spriteModels/stationDude", false, false, 56, 3);
		areaRect(0, 0, 800, 1100, [30, 30, 30, 1], false, false, 58, 3);
		areaTextureRect(1565, 50, 100, 100, "spriteModels/chests/greenChest", false, false, 60, 3);
		areaTextureRect(1635, 0, 100, 100, "spriteModels/chests/redChest", false, false, 62, 3);
		areaTextureRect(1515, 0, 100, 100, "spriteModels/chests/blueChest", false, false, 64, 3);
		areaRect(1155, 355, 290, 50, [50, 50, 0, 1], true, false, 66, 3);
		areaRect(1150, 0, 50, 400, [50, 50, 0, 1], true, false, 68, 3);
		areaTextureRect(1250, 217, 150, 150, "spriteModels/stationWalrus", false, false, 70, 3);
		areaRect(0, 0, 1750, 1100, [70, 70, 70, 1], false, false, 150, 3);
		drawArea(1750, 1100, 3);
		openWorldCamera(3);
		if(mouseOver(spriteDrawAreaX1[3][56],spriteDrawAreaY1[3][56],spriteDrawAreaX2[3][56]-spriteDrawAreaX1[3][56],spriteDrawAreaY3[3][56]-spriteDrawAreaY1[3][56]))
		{
			drawText(spriteDrawAreaX1[3][56]+20,spriteDrawAreaY1[3][56]+20,spriteDrawAreaX2[3][56]-spriteDrawAreaX1[3][56]-40,spriteDrawAreaY3[3][56]-spriteDrawAreaY1[3][56]-40, "trade", "../ludificioEngine/text/fonts/8-bit/black/");
			drawPassiveRect(spriteDrawAreaX1[3][56]+20,spriteDrawAreaY1[3][56]+40,spriteDrawAreaX2[3][56]-spriteDrawAreaX1[3][56]-40,spriteDrawAreaY3[3][56]-spriteDrawAreaY1[3][56]-60,[100,100,100,.5]);
			if(isLeftMouseDown)
			{
				xtpp.open("GET", "getMetal.php", true);
				xtpp.send();
				xtpp.onreadystatechange = function() {
					if (xtpp.readyState == 4 && xtpp.status == 200) 
					{
						metal = xtpp.responseText;
					}
				}
				xttp.open("GET", "getUsername.php", true);
				xttp.send();
				xttp.onreadystatechange = function() {
					if (xttp.readyState == 4 && xttp.status == 200) 
					{
						if(username == "")
						{
							username = xttp.responseText;
						}
					}
				}
				xhtp.open("GET", "getCredits.php", true);
				xhtp.send();
				xhtp.onreadystatechange = function() {
					if (xhtp.readyState == 4 && xhtp.status == 200) 
					{
						credits = xhtp.responseText;
					}
				}
				trading[0] = true;
				trading[1] = false;
			}
		}
		if(mouseOver(spriteDrawAreaX1[3][70],spriteDrawAreaY1[3][70],spriteDrawAreaX2[3][70]-spriteDrawAreaX1[3][70],spriteDrawAreaY3[3][70]-spriteDrawAreaY1[3][70]))
		{
			drawText(spriteDrawAreaX1[3][70]+20,spriteDrawAreaY1[3][70]+20,spriteDrawAreaX2[3][70]-spriteDrawAreaX1[3][70]-40,spriteDrawAreaY3[3][70]-spriteDrawAreaY1[3][70]-40, "trade", "../ludificioEngine/text/fonts/8-bit/black/");
			drawPassiveRect(spriteDrawAreaX1[3][70]+20,spriteDrawAreaY1[3][70]+40,spriteDrawAreaX2[3][70]-spriteDrawAreaX1[3][70]-40,spriteDrawAreaY3[3][70]-spriteDrawAreaY1[3][70]-60,[100,100,100,.5]);
			if(isLeftMouseDown)
			{
				xtpp.open("GET", "getMetal.php", true);
				xtpp.send();
				xtpp.onreadystatechange = function() {
					if (xtpp.readyState == 4 && xtpp.status == 200) 
					{
						metal = xtpp.responseText;
					}
				}
				xttp.open("GET", "getUsername.php", true);
				xttp.send();
				xttp.onreadystatechange = function() {
					if (xttp.readyState == 4 && xttp.status == 200) 
					{
						if(username == "")
						{
							username = xttp.responseText;
						}
					}
				}
				xhtp.open("GET", "getCredits.php", true);
				xhtp.send();
				xhtp.onreadystatechange = function() {
					if (xhtp.readyState == 4 && xhtp.status == 200) 
					{
						credits = xhtp.responseText;
					}
				}
				trading[1] = true;
				trading[0] = false;
			}
		}
		if(trading[0])
		{
			drawPassiveRect(0,0,canvas.width/3,canvas.height,[100,100,100,1]);
			drawPassiveRect(10,canvas.height/10,canvas.width/3-20,2*canvas.height/5,[0,0,100,1]);
			drawPassiveRect(10,11*canvas.height/20,canvas.width/3-20,2*canvas.height/5,[100,0,0,1]);
			if(mouseOver(10,-10,canvas.width/10,canvas.height/10))
			{
				drawPassiveRect(10,-10,canvas.width/10,canvas.height/10,[70,70,70,1]);
				if(isLeftMouseDown)
				{
					trading[0] = false;
				}
			}
			if(mouseOver(10+canvas.width/30,25*canvas.height/40,canvas.width/8,canvas.height/20))
			{
				if(emDrive >= 1)
				{
					drawPassiveRect(10+canvas.width/30,25*canvas.height/40,canvas.width/8,canvas.height/20,[70,0,0,1]);
				}
				else{
					drawPassiveRect(10+canvas.width/30,25*canvas.height/40,canvas.width/8,canvas.height/20,[0,0,100,1]);
					if(isLeftMouseDown)
					{
						if(credits >= 10)
						{
							xhtp.open("GET", "driveShop.php?drive=emdrive1", false);
							xhtp.send();
							xhtp.onreadystatechange = function() {
								if (xhtp.readyState == 4 && xhtp.status == 200) 
								{
									if(xhtp.responseText !== false)
									{
										emDrive = 1;
										emSpaceSpeed = .1;
										emShipEfficiency = .5;
										emReload = .005;
									}
								}
							}
							isLeftMouseDown = false;
						}
					}
				}
			}
			if(mouseOver(10+canvas.width/30,27*canvas.height/40,canvas.width/8,canvas.height/20))
			{
				if(emDrive >= 2)
				{
					drawPassiveRect(10+canvas.width/30,27*canvas.height/40,canvas.width/8,canvas.height/20,[70,0,0,1]);
				}
				else{
					drawPassiveRect(10+canvas.width/30,27*canvas.height/40,canvas.width/8,canvas.height/20,[0,0,100,1]);
					if(isLeftMouseDown)
					{
						if(credits >= 20)
						{
							xhtp.open("POST", "driveShop.php?drive=emdrive2", false);
							xhtp.send();
							xhtp.onreadystatechange = function() {
								if (xhtp.readyState == 4 && xhtp.status == 200) 
								{
									if(xhtp.responseText !== false)
									{
										emDrive = 2;
										emSpaceSpeed = .1;
										emShipEfficiency = .3;
										emReload = .0075;
									}
								}
							}
							isLeftMouseDown = false;
						}
					}
				}
			}
			if(mouseOver(10+canvas.width/30,29*canvas.height/40,canvas.width/8,canvas.height/20))
			{
				if(emDrive >= 3)
				{
					drawPassiveRect(10+canvas.width/30,29*canvas.height/40,canvas.width/8,canvas.height/20,[70,0,0,1]);
				}
				else{
					drawPassiveRect(10+canvas.width/30,29*canvas.height/40,canvas.width/8,canvas.height/20,[0,0,100,1]);
					if(isLeftMouseDown)
					{
						if(credits >= 30)
						{
							xhtp.open("POST", "driveShop.php?drive=emdrive3", false);
							xhtp.send();
							xhtp.onreadystatechange = function() {
								if (xhtp.readyState == 4 && xhtp.status == 200) 
								{
									if(xhtp.responseText !== false)
									{
										emDrive = 3;
										emSpaceSpeed = .2;
										emShipEfficiency = .1;
										emReload = .01;
									}
								}
							}
							isLeftMouseDown = false;
						}
					}	
				}
			}
			if(mouseOver(10+canvas.width/30,31*canvas.height/40,canvas.width/8,canvas.height/20))
			{
				if(spaceEngine == "raptor")
				{
					drawPassiveRect(10+canvas.width/30,31*canvas.height/40,canvas.width/8,canvas.height/20,[70,0,0,1]);
				}
				else{
					drawPassiveRect(10+canvas.width/30,31*canvas.height/40,canvas.width/8,canvas.height/20,[0,0,100,1]);
					if(isLeftMouseDown)
					{
						if(credits >= 20)
						{
							xhtp.open("POST", "driveShop.php?drive=raptor", false);
							xhtp.send();
							xhtp.onreadystatechange = function() {
								if (xhtp.readyState == 4 && xhtp.status == 200) 
								{
									if(xhtp.responseText !== false)
									{
										spaceEngine = "raptor";
										spaceSpeed = 2;
										shipEfficiency = .06;
									}
								}
							}
							isLeftMouseDown = false;
						}
					}
				}
			}
			if(mouseOver(10+canvas.width/30,7*canvas.height/40,canvas.width/8,canvas.height/20))
			{
				if(metal <= 0)
				{
					drawPassiveRect(10+canvas.width/30,7*canvas.height/40,canvas.width/8,canvas.height/20,[0,0,70,1]);
				}
				else{
					drawPassiveRect(10+canvas.width/30,7*canvas.height/40,canvas.width/8,canvas.height/20,[0,70,30,1]);
					if(isLeftMouseDown)
					{
						xhtp.open("POST", "sellMetal.php", false);
						xhtp.send();
						xhtp.onreadystatechange = function() {
							if (xhtp.readyState == 4 && xhtp.status == 200) 
							{
							}
						}
						xtpp.open("GET", "getMetal.php", true);
						xtpp.send();
						xtpp.onreadystatechange = function() {
							if (xtpp.readyState == 4 && xtpp.status == 200) 
							{
								metal = xtpp.responseText;
							}
						}
						xttp.open("GET", "getCredits.php", true);
						xttp.send();
						xttp.onreadystatechange = function() {
							if (xttp.readyState == 4 && xttp.status == 200) 
							{
								credits = xttp.responseText;
							}
						}
						isLeftMouseDown = false;
					}	
				}
			}
			drawText(10+canvas.width/30,11*canvas.height/20,canvas.width/4,3*canvas.height/40, "burg", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(10+canvas.width/30,canvas.height/10,canvas.width/4,3*canvas.height/40, username, "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(10,-10,canvas.width/10,canvas.height/10, "exit", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(10+canvas.width/5,-10,canvas.width/10,canvas.height/10, credits+"c", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(10+canvas.width/30,25*canvas.height/40,canvas.width/8,canvas.height/20, "emDrive-1", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(30+canvas.width/30+canvas.width/8,25*canvas.height/40,canvas.width/16,canvas.height/20, "10c", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(10+canvas.width/30,27*canvas.height/40,canvas.width/8,canvas.height/20, "emDrive-2", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(30+canvas.width/30+canvas.width/8,27*canvas.height/40,canvas.width/16,canvas.height/20, "20c", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(10+canvas.width/30,29*canvas.height/40,canvas.width/8,canvas.height/20, "emDrive-3", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(30+canvas.width/30+canvas.width/8,29*canvas.height/40,canvas.width/16,canvas.height/20, "30c", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(10+canvas.width/30,31*canvas.height/40,canvas.width/8,canvas.height/20, "raptorDrive", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(30+canvas.width/30+canvas.width/8,31*canvas.height/40,canvas.width/16,canvas.height/20, "20c", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(10+canvas.width/30,7*canvas.height/40,canvas.width/8,canvas.height/20, "metal", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(30+canvas.width/30+canvas.width/8,7*canvas.height/40,canvas.width/12,canvas.height/20, ""+metal, "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(40+canvas.width/30+canvas.width/8+canvas.width/12,7*canvas.height/40,canvas.width/16,canvas.height/20, "5c", "../ludificioEngine/text/fonts/8-bit/black/");
		}
		if(trading[1])
		{
			drawPassiveRect(0,0,canvas.width/3,canvas.height,[100,100,100,1]);
			if(mouseOver(10,-10,canvas.width/10,canvas.height/10))
			{
				drawPassiveRect(10,-10,canvas.width/10,canvas.height/10,[70,70,70,1]);
				if(isLeftMouseDown)
				{
					trading[1] = false;
				}
			}
			drawPassiveRect(10,canvas.height/10,canvas.width/3-20,2*canvas.height/5,[0,0,100,1]);
			drawPassiveRect(10,11*canvas.height/20,canvas.width/3-20,2*canvas.height/5,[100,0,0,1]);
			if(mouseOver(10+canvas.width/30,25*canvas.height/40,canvas.width/8,canvas.height/20))
			{
				if(fuel >= 300)
				{
					drawPassiveRect(10+canvas.width/30,25*canvas.height/40,canvas.width/8,canvas.height/20,[70,0,0,1]);
				}
				else{
					drawPassiveRect(10+canvas.width/30,25*canvas.height/40,canvas.width/8,canvas.height/20,[0,0,100,1]);
				}
				if(isLeftMouseDown)
				{
					fuel = 300;
				}
			}
			if(mouseOver(10+canvas.width/30,7*canvas.height/40,canvas.width/8,canvas.height/20))
			{
				if(metal <= 0)
				{
					drawPassiveRect(10+canvas.width/30,7*canvas.height/40,canvas.width/8,canvas.height/20,[0,0,70,1]);
				}
				else{
					drawPassiveRect(10+canvas.width/30,7*canvas.height/40,canvas.width/8,canvas.height/20,[0,70,30,1]);
					if(isLeftMouseDown)
					{
						xhtp.open("POST", "sellMetal.php", false);
						xhtp.send();
						xhtp.onreadystatechange = function() {
							if (xhtp.readyState == 4 && xhtp.status == 200) 
							{
							}
						}
						xtpp.open("GET", "getMetal.php", true);
						xtpp.send();
						xtpp.onreadystatechange = function() {
							if (xtpp.readyState == 4 && xtpp.status == 200) 
							{
								metal = xtpp.responseText;
							}
						}
						xttp.open("GET", "getCredits.php", true);
						xttp.send();
						xttp.onreadystatechange = function() {
							if (xttp.readyState == 4 && xttp.status == 200) 
							{
								credits = xttp.responseText;
							}
						}
						isLeftMouseDown = false;
					}	
				}
			}
			if(mouseOver(10+canvas.width/30,27*canvas.height/40,canvas.width/8,canvas.height/20))
			{
				if(metal < 1)
				{
					drawPassiveRect(10+canvas.width/30,27*canvas.height/40,canvas.width/8,canvas.height/20,[70,0,0,1]);
				}
				else{
					drawPassiveRect(10+canvas.width/30,27*canvas.height/40,canvas.width/8,canvas.height/20,[0,0,100,1]);
					if(isLeftMouseDown)
					{
						xhtp.open("POST", "getRocket.php", false);
						xhtp.send();
						xhtp.onreadystatechange = function() {
							if (xhtp.readyState == 4 && xhtp.status == 200) 
							{
							}
						}
						xtpp.open("GET", "getMetal.php", true);
						xtpp.send();
						xtpp.onreadystatechange = function() {
							if (xtpp.readyState == 4 && xtpp.status == 200) 
							{
								metal = xtpp.responseText;
							}
						}
						isLeftMouseDown = false;
					}	
				}
			}
			if(mouseOver(10+canvas.width/30,29*canvas.height/40,canvas.width/8,canvas.height/20))
			{
				if(credits < 10)
				{
					drawPassiveRect(10+canvas.width/30,29*canvas.height/40,canvas.width/8,canvas.height/20,[70,0,0,1]);
				}
				else{
					drawPassiveRect(10+canvas.width/30,29*canvas.height/40,canvas.width/8,canvas.height/20,[0,0,100,1]);
					if(isLeftMouseDown)
					{
						xtpp.open("GET", "addAntimatter.php", true);
						xtpp.send();
						xtpp.onreadystatechange = function() {
							if (xtpp.readyState == 4 && xtpp.status == 200) 
							{
							}
						}
						antimatter += 1;
						credits -= 10;
						isLeftMouseDown = false;
					}	
				}
			}
			drawText(10+canvas.width/30,25*canvas.height/40,canvas.width/8,canvas.height/20, "refuel", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(30+canvas.width/30+canvas.width/8,25*canvas.height/40,canvas.width/16,canvas.height/20, "free", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(10+canvas.width/30,27*canvas.height/40,canvas.width/8,canvas.height/20, "rocket", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(30+canvas.width/30+canvas.width/8,27*canvas.height/40,canvas.width/16,canvas.height/20, "1 metal", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(10+canvas.width/30,29*canvas.height/40,canvas.width/8,canvas.height/20, "antimatter", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(30+canvas.width/30+canvas.width/8,29*canvas.height/40,canvas.width/16,canvas.height/20, "10c", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(10+canvas.width/5,-10,canvas.width/10,canvas.height/10, credits+"c", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(10+canvas.width/30,11*canvas.height/20,canvas.width/4,3*canvas.height/40, "chew", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(10+canvas.width/30,canvas.height/10,canvas.width/4,3*canvas.height/40, username, "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(10,-10,canvas.width/10,canvas.height/10, "exit", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(10+canvas.width/30,7*canvas.height/40,canvas.width/8,canvas.height/20, "metal", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(30+canvas.width/30+canvas.width/8,7*canvas.height/40,canvas.width/12,canvas.height/20, ""+metal, "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(40+canvas.width/30+canvas.width/8+canvas.width/12,7*canvas.height/40,canvas.width/16,canvas.height/20, "5c", "../ludificioEngine/text/fonts/8-bit/black/");
		}
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
		areaRoom(900, 500, 1000, 700, 50, ["bottom", "left"], [300,200], [150,150], [50, 50, 0, 1], 100, 4);
		areaRoom(1500, 700, 150, 300,20, [], [], [], [100, 100, 0, 1], 126, 4);
		areaRect(1520, 720, 15, 15, [25, 25, 25, 1], false, false, 482, 4);
		areaRect(1615, 720, 15, 15, [25, 25, 25, 1], false, false, 484, 4);
		areaRect(1520, 965, 15, 15, [25, 25, 25, 1], false, false, 486, 4);
		areaRect(1615, 965, 15, 15, [25, 25, 25, 1], false, false, 488, 4);
		areaRect(1530, 750, 10, 150, [75, 75, 0, 1], false, false, 490, 4);
		areaRect(1300, 555, 150, 25, [25, 25, 25, 1], true, false, 492, 4);
		areaRect(1500, 700, 150, 300, [0, 255, 0, 1], false, false, 494, 4);
		areaRect(900, 500, 1000, 700, [0, 150, 75, 1], false, false, 496, 4);
		areaRect(0, 0, 3000, 2000, [0, 100, 0, 1], false, false, 498, 4);
		drawArea(3000, 2000, 4);
		openWorldCamera(4);
		if(username == "grady")
		{
			if(isRightMouseDown)
			{
				charString = [];
				myString = "";
				myString2 = "";
				myString3 = "";
				isRightMouseDown = false;
				if(clicked !== true)
				{
					clicked = true;
				}
				else if(clicked == true)
				{
					clicked = false;
				}
			}
			if(clicked)
			{
				drawPassiveRect(10+canvas.width/30,25*canvas.height/40,canvas.width/8,canvas.height/20,[100,100,100,1]);
				if(charCode == 8)
				{
					myString3 = "";
					charCode = 0;
				}
				if(charString.length >= 1)
				{
					myString3 += charString[0];
				}
				mySArray = charString;
				for(j = 1; j <= myString2.length-1; j++)
				{
					charString += mySArray.charAt(j);
				}
				charString = [];
				drawText(10+canvas.width/30,25*canvas.height/40,canvas.width/8,canvas.height/20, myString3, "../ludificioEngine/text/fonts/8-bit/black/");
				if(isLeftMouseDown)
				{
					xttp.open("POST", "addToTable.php?user="+myString3+"&table=grady", false);
					xttp.send();
					xttp.onreadystatechange = function() {
						if (xhttp.readyState == 4 && xhttp.status == 200)
						{
						}
					}
					alert(myString3+" has been added");
					myString3 = "";
				}
				if(isMiddleMouseDown)
				{
					xttp.open("POST", "deleteFromTable.php?user="+myString3+"&table=grady", false);
					xttp.send();
					xttp.onreadystatechange = function() {
						if (xhttp.readyState == 4 && xhttp.status == 200)
						{
						}
					}
					alert(myString3+" has been removed");
					myString3 = "";
				}
			}
		}
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
function urbanPlanet()
{
	stopAreaUser(6);
	modifiedControls(6);
	if(rectContact(0, 50, 6))
	{
		clearInterval(playerUpdate1);
		clearInterval(fixLocalPlayer1);
		areas[6] = false;
		areas[0] = true;
		playerUpdate0 = setInterval(function(){updatePlayers(0)}, 80);
		fixLocalPlayer0 = setInterval(function(){fixPlayer(0)}, 1000);
	}
	else{
		displayModTexturePlayers(6, "spriteModels/playerModel2/frontFacing");
		textureAnimation();
		updateShots(6);
		displayShots(6);
		areaRect(5, 5, 400, 400, [100, 100, 100, 1], true, false, 50, 6);
		areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 72, 6);
		areaRect(-100, -100, 0, 0, [0, 200, 175, 1], false, false, 74, 6);
		resources(6);
		areaRect(300, 600, 200, 200, [85, 85, 0, 1], false, false, 78, 6);
		areaRect(800, 300, 300, 300, [80, 80, 0, 1], false, false, 80, 6);
		areaRect(700, 1600, 200, 200, [80, 80, 0, 1], false, false, 82, 6);
		areaRect(400, 1200, 200, 200, [90, 90, 0, 1], false, false, 84, 6);
		areaRect(1500, 200, 200, 200, [90, 90, 0, 1], false, false, 86, 6);
		areaRect(1600, 1600, 200, 200, [90, 90, 0, 1], false, false, 88, 6);
		areaRect(1000, 1100, 300, 300, [85, 85, 0, 1], false, false, 92, 6);
		areaRect(0, 0, 2000, 2000, [100, 100, 0, 1], false, false, 150, 6);
		drawArea(2000, 2000, 6);
		openWorldCamera(6);
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
		xhttp.open("POST", "removeUser.php?area=urbanPlanet", false);
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
var color1 = 0;
var color2 = 0;
var color3 = 0;
var colorl1 = 0;
var colorl2 = 0;
var colorl3 = 0;
var four = false;
var two = false;
function cameron()
{
	document.body.style.cursor = 'unset';
	if(charCode == 52)
	{
		four = true;
	}
	if(charCode == 50 && four)
	{
		two = true;
	}
	stopAreaUser(7);
	modifiedControls(7);
	if(four && two)
	{
		drawPassiveRect(0, 0, canvas.width, canvas.height, [255, 255, 0, 1]);
		window.location = window.location.href.replace('/multiPlayer/explorator/','')+"/GateKeepers.php";
		window.location = "24.147.91.48/theGateKeepers.php"
	}
	else{
		timer1 += 1;
		if(timer1 >= 100)
		{
			color11 = color1;
			color12 = color2;
			color13 = color3;
			color1 = Math.floor(Math.random()*255);
			color2 = Math.floor(Math.random()*255);
			color3 = Math.floor(Math.random()*255);
			timer1 = 0;
		}
		drawPassiveRect(0, 0, canvas.width, canvas.height, [255, 255, 0, 1]);
		if(mouseOver(0, 0, canvas.width/20, canvas.height/20))
		{
			drawPassiveRect(0, 0, canvas.width/20, canvas.height/20, [125, 125, 125, .8]);
			if(isLeftMouseDown)
			{
				isLeftMouseDown = false;
				areas[0] = true;
				areas[7] = false;
				tpRectSprite(500, 100, 50, 50, 0, 0);
				drawArea(150000, 150000, 0);
				playerUpdate0 = setInterval(function(){updatePlayers(0)}, 80);
				fixLocalPlayer0 = setInterval(function(){fixPlayer(0)}, 1000);
			}
		}
		drawPassiveRect(canvas.width/2-250, canvas.height/2-250, 500, 500, [color11, color12, color13, 1]);
		drawPassiveRect(canvas.width/2-250, canvas.height/2-250, 500, 500, [color1, color2, color3, timer1/100]);
		areaTextureRect(600, 600, 100, 100, "spriteModels/stationWalrus", true, true, 0, 7);
		//areaRect(200, 300, 100, 100, [100, 100, 100, 1], true, false, 50, 7);
		drawArea(canvas.width, canvas.height, 7);
		openWorldCamera(7);
		if(four)
		{
			drawText(canvas.width/2-canvas.width/6,canvas.height/2-canvas.height/20, canvas.width/3, canvas.height/10, "face the gate keeper", "../ludificioEngine/text/fonts/8-bit/white/");
		}
		if(isRightMouseDown)
		{
			document.body.style.cursor = 'none';
			drawText(mouseXPos-canvas.width/10,mouseYPos-canvas.height/20,canvas.width/5,canvas.height/10, "what is the answer", "../ludificioEngine/text/fonts/8-bit/black/");
		}
		drawText(0,0,canvas.width/20,canvas.height/20, "leave", "../ludificioEngine/text/fonts/8-bit/black/");
	}
	if(areas[0])
	{
		dx[0][0] = 0;
		dy[0][0] = 0;
	}
}