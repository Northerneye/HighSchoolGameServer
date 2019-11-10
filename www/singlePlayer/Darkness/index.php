<html><!--magnetic-->
<head>
<script src="../ludificioEngine/jquery-3.1.0"></script>
<link rel="stylesheet" type="text/css" href="../ludificioEngine/noCursor.css"/>
<link rel="stylesheet" type="text/css" href="../ludificioEngine/canvasStyle.css"/>
<script>
</script>
</head>
<body>
<canvas id="gameCanvas" width="900" height="600"></canvas>
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
<script src="areaBasedWorld2D.js"></script>
<script src="textureAnimationAreaBased.js"></script>
<script src="areaBasedObjectAI.js"></script>
<script>
var gameOver = false;
var introduction = true;
var controls = false;
var survival = false;
var startSurvival = false;
var time = 0;
var time2 = 0;
var mouseCon = 0;
var windowDirectory = window.location.href.replace('','');
createAudio("../ludificioEngine/audioFiles/8-Bit/creepyBackground.mp3", "background");
changeVolume("background", .7);
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "../../checkPlayer.php", true);
xhttp.send();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) 
	{
		if(xhttp.responseText == true)
		{
			window.setInterval(function(){
				context.clearRect(0, 0, canvas.width, canvas.height);
				if (introduction == true)
				{
					mouseCon = 0;
					playSong("background");
					drawPassiveRect(0, 0, canvas.width, canvas.height, [0, 0, 0, 1]);
					if(mouseOver(canvas.width/2-50, canvas.height-150, 100, 50))
					{
						drawPassiveRectTexture(0, 0, canvas.width, canvas.height, "../ludificioEngine/images/cursors/flashlight");
						drawPassiveRect(0,0,canvas.width,canvas.height, [0, 0, 0, .5]);
					}
					else{
						mouseCon += 1;
					}
					if(mouseOver(3*canvas.width/7, canvas.height/2, canvas.width/7, canvas.height/10))
					{
						drawPassiveRectTexture(0, 0, canvas.width, canvas.height, "../ludificioEngine/images/cursors/flashlight")
						drawPassiveRect(0,0,canvas.width,canvas.height, [0, 0, 0, time/255]);
						time += 1;
						changeVolume("background", .7-.5*time/255);
					}
					else{
						time = 0;
						mouseCon += 1;
						changeVolume("background", .7);
					}
					if(mouseOver(canvas.width/2-canvas.width/16, canvas.height/2+175, canvas.width/8, 50))
					{
						drawPassiveRectTexture(0, 0, canvas.width, canvas.height, "../ludificioEngine/images/cursors/flashlight")
						drawPassiveRect(0,0,canvas.width,canvas.height, [255, 0, 0, .3]);
						drawPassiveRect(0,0,canvas.width,canvas.height, [0, 0, 0, .3+time2/200]);
						time2 += 1;
					}
					else{
						time2 = 0;
						mouseCon += 1;
					}
					if(mouseCon == 3)
					{
						drawPassiveRectTexture(mouseXPos-175, mouseYPos-175, 350, 350, "../ludificioEngine/images/cursors/flashlight")
					}
					drawText(canvas.width/4, canvas.height/20, canvas.width/2, canvas.height/3, "Darkness", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(3*canvas.width/7, canvas.height/2, canvas.width/7, canvas.height/10, "play", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/2-canvas.width/16, canvas.height/2+175, canvas.width/8, 50, "controls", "../ludificioEngine/text/fonts/8-bit/black/");
					drawPassiveRectTexture(canvas.width/2-50, canvas.height-150, 100, 50, "../ludificioEngine/images/textures/flashlight")
					if(20*Math.random() > 15 || time2 > 0)
					{
						drawPassiveRectTexture(0, 0, canvas.width, canvas.height, "monster")
					}
					if(time > 300)
					{
						pauseSong("background");
						resetSong("background");
						introduction = false;
						startSurvival = true;
					}
					if(time2 > 185)
					{
						//pauseSong("background");
						//resetSong("background");
						introduction = false;
						controls = true;
					}
				}
				if(controls == true)
				{
					mouseCon = 0;
					playSong("background");
					drawPassiveRect(0, 0, canvas.width, canvas.height, [0, 0, 0, 1]);
					if(mouseOver(canvas.width/2-50, canvas.height-200, 100, 50))
					{
						drawPassiveRectTexture(0, 0, canvas.width, canvas.height, "../ludificioEngine/images/cursors/flashlight");
					}
					else{
						mouseCon += 1;
					}
					if(mouseOver(canvas.width/20, canvas.height/20, canvas.width/10, canvas.height/9))
					{
						time += 1;
						drawPassiveRectTexture(2*canvas.width/20-175, canvas.height/20+canvas.height/18-175, 375, 375, "../ludificioEngine/images/cursors/flashlight")
						drawPassiveRect(0, 0, canvas.width, canvas.height, [0, 0, 0, time/255]);
						drawPassiveRect(0,0,canvas.width,canvas.height, [0, 0, 0, time/255]);
					}
					else{
						time = 0;
						mouseCon += 1;
					}
					if(mouseCon == 2)
					{
						drawPassiveRectTexture(mouseXPos-175, mouseYPos-175, 350, 350, "../ludificioEngine/images/cursors/flashlight")
					}
					drawText(canvas.width/20, canvas.height/20, canvas.width/10, canvas.height/9, "Back", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/4, canvas.height/20, canvas.width/2, canvas.height/5, "Controls", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/7, 6*canvas.height/20, canvas.width/4, canvas.height/10, "WASD to walk", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/7, 8*canvas.height/20, canvas.width/3, canvas.height/10, "q to toggle lantern", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/7, 10*canvas.height/20, canvas.width/2, canvas.height/10, "f to toggle flashlight", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/7, 12*canvas.height/20, canvas.width/2, canvas.height/10, "shift to sprint", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/6, 14*canvas.height/20, canvas.width/4, canvas.height/10, "e to interact", "../ludificioEngine/text/fonts/8-bit/black/");
					drawPassiveRectTexture(canvas.width/2-50, canvas.height-200, 100, 50, "../ludificioEngine/images/textures/flashlight")
					if(time > 200)
					{
						//pauseSong("background");
						//resetSong("background");
						introduction = true;
						controls = false;
						time = 0;
					}
				}
				if(startSurvival == true)
				{
					if(playerHealth > 0 )
					{
						survivalWorld();
					}
					else
					{
						pauseSong("sea");
						resetSong("treasure");
						playSong("wont");
						drawPassiveRect(0, 0, canvas.width, canvas.height, [50, 0, 0, 1]);
						drawText(canvas.width/2-300, canvas.height/2-50, 600, 100, "GAME OVER", "../ludificioEngine/text/fonts/8-bit/black/");
						if(isLeftMouseDown)
						{
							introduction = true;
							startSurvival = false;
							isLeftMouseDown = false;
						}
					}
				}
				cleanInput();
			}, 10);
		}
	}
};
/**/
</script>
</body>
</html>