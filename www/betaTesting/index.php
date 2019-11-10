<html><!--beta testing-->
<head>
<script src="ludificioEngine/jquery-3.1.0"></script>
<link rel="stylesheet" type="text/css" href="ludificioEngine/noCursor.css"/>
<link rel="stylesheet" type="text/css" href="ludificioEngine/canvasStyle.css"/>
<script>
</script>
</head>
<body>
<canvas id="gameCanvas" width="900" height="600" ></canvas>
<script>
</script>
<script src="ludificioEngine/userInput.js"></script>
<script src="ludificioEngine/windowMaintain.js"></script>
<script src="ludificioEngine/draw2DShapes.js"></script>
<script src="ludificioEngine/Collision.js"></script>
<script src="ludificioEngine/draw3DShapes.js"></script>
<script src="ludificioEngine/audio.js"></script>
<script src="ludificioEngine/openWorld2D.js"></script>
<script src="ludificioEngine/drawPassiveObjects.js"></script>
<script>
var windowDirectory = window.location.href.replace('','');
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "../checkPlayer.php", true);
xhttp.send();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) 
	{
		if(xhttp.responseText == true)
		{
			window.setInterval(function(){
				context.clearRect(0, 0, canvas.width, canvas.height);
				drawPassiveRect(0, 0, canvas.width, canvas.height, [0, 175, 0, 1]);
				if(mouseOver(0, canvas.height/40, canvas.width/15, canvas.height/18))
				{
					drawPassiveRect(0, canvas.height/40, canvas.width/15, canvas.height/18, [175, 175, 0, 1]);
				}
				if(mouseOver(canvas.width/20, canvas.height/4, canvas.width/3, canvas.height/9))
				{
					drawPassiveRect(canvas.width/20, canvas.height/4, canvas.width/3, canvas.height/9, [125, 125, 125, 1]);
				}
				/*if(mouseOver(canvas.width/20, 2*canvas.height/5, canvas.width/3, canvas.height/9))
				{//dungeonCrawler
					drawPassiveRect(canvas.width/20, 2*canvas.height/5, canvas.width/3, canvas.height/9, [125, 125, 125, 1]);
				}*/
				/*if(mouseOver(canvas.width/20, 11*canvas.height/20, canvas.width/3, canvas.height/9))
				{//teamShot
					drawPassiveRect(canvas.width/20, 11*canvas.height/20, canvas.width/3, canvas.height/9, [125, 125, 125, 1]);
				}*/
				drawText(0, canvas.height/40, canvas.width/15, canvas.height/18, "Back", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/10, canvas.height/20, 4*canvas.width/5, canvas.height/9, "BetaTesting", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/20, 5*canvas.height/20, canvas.width/3, canvas.height/9, "ServerSide Test", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(2*canvas.width/5, 8*canvas.height/20, canvas.width/6, canvas.height/9, "RESTRICTED", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/20, 8*canvas.height/20, canvas.width/3, canvas.height/9, "Dungeon Crawler", "ludificioEngine/text/fonts/8-bit/black/")
				drawText(2*canvas.width/5, 11*canvas.height/20, canvas.width/6, canvas.height/9, "RESTRICTED", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/20, 11*canvas.height/20, canvas.width/3, canvas.height/9, "Team Shot", "ludificioEngine/text/fonts/8-bit/black/")
				if(onRectButton(0, canvas.height/40, canvas.width/15, canvas.height/18))
				{ 
					window.location = windowDirectory.replace("betaTesting/", "")+"home.php";
				}
				else if(onRectButton(canvas.width/20, canvas.height/4, canvas.width/3, canvas.height/9))
				{ 
					window.location = windowDirectory+"serverSideTest/";
				}
				/*else if(onRectButton(canvas.width/20, 2*canvas.height/5, canvas.width/3, canvas.height/9))
				{ 
					window.location = windowDirectory+"dungeonCrawler/";
				}*/
				/*else if(onRectButton(canvas.width/20, 11*canvas.height/20, canvas.width/3, canvas.height/9))
				{ 
					window.location = windowDirectory+"teamShot/";
				}*/
				drawPassiveRectTexture(mouseXPos, mouseYPos, 25, 25, "ludificioEngine/images/cursors/Cursor")
			}, 10)
		}
	}
};
</script>
</body>
</html>