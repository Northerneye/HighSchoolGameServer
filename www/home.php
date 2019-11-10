<html>
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
<script src="ludificioEngine/download.js"></script>
<script>
createAudio("../ludificioEngine/audioFiles/8-Bit/pressStart.mp3", "start");
changeVolume("start", .8);
var windowDirectory = window.location.href.replace('/home.php','');
var credits = 0;
var xhttp = new XMLHttpRequest();
xhttp.open("POST", "getUsername.php", false);
xhttp.send();
var username = xhttp.responseText;
xhttp.open("POST", "getCredits.php", false);
xhttp.send();
var credits = xhttp.responseText;
xhttp.open("GET", "checkPlayer.php", true);
xhttp.send();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) 
	{
		if(xhttp.responseText == true)
		{
			window.setInterval(function()
			{
				if(charStr[jQuery.inArray("g", charStr)] == "g")
				{
					window.location = windowDirectory+"/memes.html";
				}
				if(charStr[jQuery.inArray("m", charStr)] == "m")
				{
					playSong("start");
				}
				if(charStr[jQuery.inArray("n", charStr)] == "n")
				{
					pauseSong("start");
					resetSong("start");
				}
				if(charStr[jQuery.inArray("i", charStr)] == "i")
				{
					downloadURI(windowDirectory+"/austinsArmies.exe", "austinsArmies.exe")
					charStr[jQuery.inArray("i", charStr)] == "";
				}
				if(charStr[jQuery.inArray("d", charStr)] == "d")
				{
					window.location = windowDirectory+"/userInput.html";
				}
				if(charStr[jQuery.inArray("t", charStr)] == "t")
				{
					window.location = windowDirectory+"/trickBlockMaze/trickBlockMaze.html";
				}
				context.clearRect(0, 0, canvas.width, canvas.height);
				drawPassiveRect(0, 0, canvas.width, canvas.height, [175, 175, 0, 1]);
				if(mouseOver(canvas.width/20, 2*canvas.height/7, canvas.width/3, canvas.height/9))
				{
					drawPassiveRect(canvas.width/20, 2*canvas.height/7, canvas.width/3, canvas.height/9, [50, 150, 255, 1]);
				}
				if(mouseOver(5*canvas.width/8, 2*canvas.height/7, canvas.width/3, canvas.height/9))
				{
					drawPassiveRect(5*canvas.width/8, 2*canvas.height/7, canvas.width/3, canvas.height/9, [150, 0, 0, 1]);
				}
				if(mouseOver(canvas.width/3, 2*canvas.height/3, canvas.width/3, canvas.height/9))
				{
					drawPassiveRect(canvas.width/3, 2*canvas.height/3, canvas.width/3, canvas.height/9, [0, 175, 0, 1]);
				}
				if(mouseOver(canvas.width/20, 8*canvas.height/9, canvas.width/10, canvas.height/18))
				{
					drawPassiveRect(canvas.width/20, 8*canvas.height/9, canvas.width/10, canvas.height/18, [140, 140, 0, 1]);
				}
				if(mouseOver(4*canvas.width/5, 8*canvas.height/9, canvas.width/7, canvas.height/20))
				{
					drawPassiveRect(4*canvas.width/5, 8*canvas.height/9, canvas.width/7, canvas.height/20, [200, 200, 200, 1]);
				}
				drawText(canvas.width/2-canvas.width/30*username.length/2, 5*canvas.height/6, canvas.width/30*username.length, canvas.height/18, username, "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/3, 9*canvas.height/10, canvas.width/6, canvas.height/18, "Credits ", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/2, 9*canvas.height/10, canvas.width/30*credits.length, canvas.height/18, credits, "ludificioEngine/text/fonts/8-bit/black/");
				drawText(0, canvas.height/30, canvas.width, canvas.height/9, "Welcome to the Arcade", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/20, 2*canvas.height/7, canvas.width/3, canvas.height/9, "Single Player", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(5*canvas.width/8, 2*canvas.height/7, canvas.width/3, canvas.height/9, "Multi Player", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/3, 2*canvas.height/3, canvas.width/3, canvas.height/9, "Beta Testing", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(4*canvas.width/5, 8*canvas.height/9, canvas.width/7, canvas.height/20, "Downloadables", "ludificioEngine/text/fonts/8-bit/black/");
				if(onRectButton(canvas.width/20, 2*canvas.height/7, canvas.width/3, canvas.height/9))
				{ 
					window.location = windowDirectory+"/singlePlayer/";
				}
				else if(onRectButton(4*canvas.width/7, 2*canvas.height/7, canvas.width/3, canvas.height/9))
				{ 
					window.location = windowDirectory+"/multiPlayer/";
				}
				else if(onRectButton(canvas.width/3, 2*canvas.height/3, canvas.width/3, canvas.height/9))
				{ 
					window.location = windowDirectory+"/betaTesting/";
				}
				else if(onRectButton(4*canvas.width/5, 8*canvas.height/9, canvas.width/7, canvas.height/20))
				{ 
					window.location = windowDirectory+"/downloadables/";
				}
				else if(onRectButton(canvas.width/2-100, canvas.height/2-100, 200, 200))
				{ 
					window.location = windowDirectory+"/piano.php";
				}
				drawText(canvas.width/20, 8*canvas.height/9, canvas.width/10, canvas.height/18, "logout", "ludificioEngine/text/fonts/8-bit/black/");
				if(onRectButton(canvas.width/20, 8*canvas.height/9, canvas.width/10, canvas.height/18))
				{ 
					xhttp.open("POST", "detachIP.php", false);
					xhttp.send();
					window.location = windowDirectory;
				}
				drawPassiveRectTexture(mouseXPos, mouseYPos, 25, 25, "ludificioEngine/images/cursors/Cursor")
			}, 10)
		}
		else
		{
			window.setInterval(function(){
				drawText(0, canvas.height/2-canvas.height/12, canvas.width, canvas.height/6, "log in before playing", "ludificioEngine/text/fonts/8-bit/black/");
			}, 50)
		}
	}
};
</script>
</body>
</html>