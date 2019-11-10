<html><!--greatShot-->
<head>
<script src="../ludificioEngine/jquery-3.1.0"></script>
<!--<link rel="stylesheet" type="text/css" href="../ludificioEngine/noCursor.css"/><!---->
<link rel="stylesheet" type="text/css" href="../ludificioEngine/canvasStyle.css"/>
<script>
</script>
</head>
<body>
<canvas id="gameCanvas" width="900" height="600" ></canvas>
<script>
</script>
<script src="../ludificioEngine/userInput.js"></script>
<script src="../ludificioEngine/windowMaintain.js"></script>
<script src="../ludificioEngine/draw2DShapes.js"></script>
<script src="../ludificioEngine/Collision.js"></script>
<script src="../ludificioEngine/draw3DShapes.js"></script>
<script src="../ludificioEngine/audio.js"></script>
<script src="../ludificioEngine/openWorld2D.js"></script>
<script src="../ludificioEngine/drawPassiveObjects.js"></script>
<script src="areaBasedWorldSample2D.js"></script>
<script src="textureAnimationAreaBased.js"></script>
<script src="areaBasedObjectAI.js"></script>
<script>
var username = "";
xhttp.open("POST", "checkUserAccount.php", false);
xhttp.send();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) 
	{
	}
}
/*xhttp.open("POST", "startUserAccount.php", true);
xhttp.send();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) 
	{
	}
}*/
var rockets = 0;
areaId = 0;
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
xttp.open("POST", "playerVerts.php?area="+currentArea+"&x1="+areaSpriteX1[areaId][0]+"&y1="+areaSpriteY1[areaId][0]+"&x2="+areaSpriteX2[areaId][0]+"&y2="+areaSpriteY2[areaId][0]+"&x3="+areaSpriteX3[areaId][0]+"&y3="+areaSpriteY3[areaId][0]+"&dx="+dx[areaId][0]+"&dy="+dy[areaId][0]+"&_=" + Math.random(), false);
xttp.send();
xttp.onreadystatechange = function() {
	if (xttp.readyState == 4 && xttp.status == 200) 
	{	
		playerCount = 0;

		localString = xttp.responseText;
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
			if(playerCount == 0)
			{
				areaSpriteX1[areaId][playerCount] = localX1;
				areaSpriteY1[areaId][playerCount] = localY1;
				areaSpriteX2[areaId][playerCount] = localX2;
				areaSpriteY2[areaId][playerCount] = localY2;
				areaSpriteX3[areaId][playerCount] = localX3;
				areaSpriteY3[areaId][playerCount] = localY3;
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
var antimatter = 0;
localX1 = 0;
localY1 = 0;
localX2 = 0;
localY2 = 0;
localX3 = 0;
localY3 = 0;
localString = "";
localString2 = "";
localString3 = "";
xttp.open("GET", "getShots.php?area="+currentArea+"&_=" + Math.random(), false);
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
var fuel;
xhttp.open("POST", "getFuel.php", true);
xhttp.send();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200)
	{
		if(xhttp.responseText <= 300)
		{
			fuel = xhttp.responseText;
		}
	}
}
var teleport;
xttp.open("POST", "getTeleport.php", false);
xttp.send();
xttp.onreadystatechange = function() {
	if (xttp.readyState == 4 && xttp.status == 200) 
	{
		teleport = xttp.responseText;
	}
}
var credits;
var spaceSpeed;
var shipEfficiency;
var spaceEngine = "";
xhtp.open("GET", "driveType.php", true);
xhtp.send();
xhtp.onreadystatechange = function() {
	if (xhtp.readyState == 4 && xhtp.status == 200) 
	{
		if(xhtp.responseText <= 100)
		{
			if(xhtp.responseText == 1)
			{
				spaceEngine = "starter";
				spaceSpeed = 1;
				shipEfficiency = .12;
			}
			if(xhtp.responseText == 2)
			{
				spaceEngine = "raptor";
				spaceSpeed = 2;
				shipEfficiency = .06;
			}
		}
	}
}
var emSpaceSpeed;
var emShipEfficiency;
var emReload;
var emfuel = 0;
var emDrive = 0;
xxtp.open("POST", "emDriveType.php", true);
xxtp.send();
xxtp.onreadystatechange = function() {
	if (xxtp.readyState == 4 && xxtp.status == 200) 
	{
		if(xxtp.responseText <= 100)
		{
			if(xxtp.responseText == 0)
			{
				emDrive = 0;
				emSpaceSpeed = 0;
				emShipEfficiency = 100;
				emReload = 0;
			}
			if(xxtp.responseText == 1)
			{
				emDrive = 1;
				emSpaceSpeed = .1;
				emShipEfficiency = .5;
				emReload = .005;
			}
			if(xxtp.responseText == 2)
			{
				emDrive = 2;
				emSpaceSpeed = .2;
				emShipEfficiency = .3;
				emReload = .0075;
			}
			if(xxtp.responseText == 3)
			{
				emDrive = 3;
				emSpaceSpeed = .3;
				emShipEfficiency = .1;
				emReload = .01;
			}
		}
	}
}
xhtt.open("GET", "getRockets.php", true);
xhtt.send();
xhtt.onreadystatechange = function() {
	if (xhtt.readyState == 4 && xhtt.status == 200) 
	{
		rockets = xhtt.responseText;
	}
}
setInterval(function(){updatePlayersFuel()}, 2500);
var playerUpdate0 = setInterval(function(){updatePlayers(0)}, 80);
var fixLocalPlayer0 = setInterval(function(){fixPlayer(0)}, 100);
setInterval(function(){living(1)}, 500);
var windowDirectory = window.location.href.replace('','');
var tutorial = false;
if(areaSpriteX1[0][0] == 100 && areaSpriteY1[0][0] == 100)
{
	tutorial = true;
}
window.setInterval(function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	solarSystem1();
	cleanInput();
}, 30);

/**/
</script>
</body>
</html>