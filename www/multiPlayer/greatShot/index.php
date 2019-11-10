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
xhttp.open("POST", "checkUserAccount.php", false);
xhttp.send();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) 
	{
	}
}
xhttp.open("POST", "startUserAccount.php", false);
xhttp.send();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) 
	{
	}
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
var windowDirectory = window.location.href.replace('','');
window.setInterval(function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	sampleWorld1();
	cleanInput();
}, 10);
/**/
</script>
</body>
</html>