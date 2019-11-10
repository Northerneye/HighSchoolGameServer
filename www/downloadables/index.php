<html><!--single player-->
<head>
<script src="../ludificioEngine/jquery-3.1.0"></script>
<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>-->
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
<script src="ludificioEngine/download.js"></script>
<script>
function Download(url) {
    document.getElementById('my_iframe').src = url;
};
var windowDirectory = window.location.href.replace('','');
var xhttp = new XMLHttpRequest();
var herodotus = false;
xhttp.open("GET", "../checkPlayer.php", true);
xhttp.send();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) 
	{
		if(xhttp.responseText == true)
		{
			window.setInterval(function(){
				context.clearRect(0, 0, canvas.width, canvas.height);
				drawPassiveRect(0, 0, canvas.width, canvas.height, [200, 200, 200, 1]);
				if(mouseOver(canvas.width/15, canvas.height/5, canvas.width/3, canvas.height/9))
				{
					drawPassiveRect(canvas.width/15, canvas.height/5, canvas.width/3, canvas.height/9, [200, 100, 150, 1]);
				}
				if(mouseOver(canvas.width/15, 7*canvas.height/20, canvas.width/3, canvas.height/9))
				{
					drawPassiveRect(canvas.width/15, 7*canvas.height/20, canvas.width/3, canvas.height/9, [100, 100, 150, 1]);
				}
				if(mouseOver(0, canvas.height/40, canvas.width/15, canvas.height/18))
				{
					drawPassiveRect(0, canvas.height/40, canvas.width/15, canvas.height/18, [175, 175, 0, 1]);
				}
				if(mouseOver(canvas.width/15, 10*canvas.height/20, canvas.width/3, canvas.height/9))
				{
					drawPassiveRect(canvas.width/15, 10*canvas.height/20, canvas.width/3, canvas.height/9, [175, 175, 0, 1]);
				}
				drawText(canvas.width/10, canvas.height/30, 4*canvas.width/5, canvas.height/9, "Downloadables", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/15, canvas.height/5, canvas.width/2, canvas.height/9, "austinsArmies", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/15, 7*canvas.height/20, canvas.width/3, canvas.height/9, "Realm Hero", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/15, 10*canvas.height/20, canvas.width/3, canvas.height/9, "Herodotus", "ludificioEngine/text/fonts/8-bit/black/");
				//drawText(canvas.width/15, 10*canvas.height/20, canvas.width/3, canvas.height/9, "Daedalus", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/3, 10*canvas.height/11, canvas.width/3, canvas.height/18, "close and reopen your browser to download again", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(0, canvas.height/40, canvas.width/15, canvas.height/18, "Back", "ludificioEngine/text/fonts/8-bit/black/");
				if(onRectButton(0, canvas.height/40, canvas.width/15, canvas.height/18))
				{ 
					window.location = windowDirectory.replace("downloadables/", "")+"home.php";
				}
				if(onRectButton(canvas.width/15, canvas.height/5, canvas.width/3, canvas.height/9))
				{
					//downloadURI(windowDirectory+"/austinsArmies.exe", "austinsArmies.exe")
					window.location = windowDirectory+"/austinsArmies.exe"
				}
				if(onRectButton(canvas.width/15, 7*canvas.height/20, canvas.width/3, canvas.height/9))
				{
					//downloadURI(windowDirectory+"/realmHero.exe", "realmHero.exe")
					window.location = windowDirectory+"/realmHero.exe"
				}
				if(onRectButton(canvas.width/15, 10*canvas.height/20, canvas.width/3, canvas.height/9) && herodotus == false)
				{
					downloadURI(windowDirectory+"/herodotus.zip", "herodotus.zip")
					herodotus = true
				}
				drawPassiveRectTexture(mouseXPos, mouseYPos, 25, 25, "ludificioEngine/images/cursors/Cursor")
			}, 10)
		}
	}
};
</script>
</body>
</html>