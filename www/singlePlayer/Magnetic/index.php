<html><!--magnetic-->
<head>
<script src="../ludificioEngine/jquery-3.1.0"></script>
<!--<link rel="stylesheet" type="text/css" href="../ludificioEngine/noCursor.css"/><!---->
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
<script src="areaBasedWorldSample2D.js"></script>
<script src="textureAnimationAreaBased.js"></script>
<script src="areaBasedObjectAI.js"></script>
<script>
var gameOver = false;
var difficulty = 0;
var introduction = true;
var controls = false;
var survival = false;
var startSurvival = false;
var startPuzzle = false;
var puzzle = false;
var lost = false;
var windowDirectory = window.location.href.replace('','');
createAudio("../ludificioEngine/audioFiles/8-Bit/hiddenTreasure.mp3", "treasure");
createAudio("../ludificioEngine/audioFiles/8-Bit/wontStop.mp3", "wont");
changeVolume("wont", .7);
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
					if(lost)
					{
						playSong("wont");
					}
					else
					{
						playSong("treasure");
					}
					playerHealth = 100;
					stamina = 100;
					magic = 98;
					resetRectSprite(0, 8);
					resetRectSprite(2, 8);
					resetRectSprite(2, 10);
					resetRectSprite(2, 12);
					resetRectSprite(2, 14);
					resetRectSprite(2, 16);
					resetRectSprite(2, 18);
					resetRectSprite(2, 20);
					drawPassiveRect(0, 0, canvas.width, canvas.height, [150, 150, 0, 1]);
					if(mouseOver(canvas.width/20, canvas.height/40, canvas.width/15, canvas.height/20))
					{
						drawPassiveRect(canvas.width/20, canvas.height/40, canvas.width/15, canvas.height/20, [50, 150, 255, 1]);
					}
					if(mouseOver(canvas.width/2-100, canvas.height/2+275, 200, 50))
					{
						drawPassiveRect(canvas.width/2-100, canvas.height/2+275, 200, 50, [100, 100, 255, 1]);
					}
					if(mouseOver(canvas.width/2-150, canvas.height/2-125, 300, 100))
					{
						drawPassiveRect(canvas.width/2-150, canvas.height/2-125, 300, 100, [255, 0, 0, 1]);
					}
					if(mouseOver(canvas.width/2-150, canvas.height/2, 300, 100))
					{
						drawPassiveRect(canvas.width/2-150, canvas.height/2, 300, 100, [0, 125, 255, 1]);
					}
					drawText(canvas.width/2-100, canvas.height/2+275, 200, 50, "controls", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/2-150, canvas.height/2-125, 300, 100, "survival", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/2-150, canvas.height/2, 300, 100, "puzzle", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/20, canvas.height/40, canvas.width/15, canvas.height/20, "Back", "../ludificioEngine/text/fonts/8-bit/black/");
					if(onRectButton(canvas.width/20, canvas.height/40, canvas.width/15, canvas.height/20))
					{
						window.location = windowDirectory.replace("Magnetic/","");
					}
					if(onRectButton(canvas.width/2-100, canvas.height/2+275, 200, 50))
					{
						introduction = false;
						controls = true;
						isLeftMouseDown = false;
					}
					if(onRectButton(canvas.width/2-150, canvas.height/2-125, 300, 100))
					{
						introduction = false;
						survival = true;
						isLeftMouseDown = false;
					}
					if(onRectButton(canvas.width/2-150, canvas.height/2, 300, 100))
					{
						introduction = false;
						puzzle = true;
						isLeftMouseDown = false;
					}
					drawPassiveRectTexture(canvas.width/2-350, canvas.height/2-300, 700, 125, "magnetic.png");
				}
				if (survival == true)
				{
					if(lost)
					{
						playSong("wont");
					}
					else
					{
						playSong("treasure");
					}
					resetSong("rave");
					resetSong("force");
					resetSong("codes");
					resetSong("sea");
					context.clearRect(0, 0, canvas.width, canvas.height);
					tpRectSprite(5, 300, 100, 100, 0, findUser(0));
					tpRectSprite(5, 300, 100, 100, 2, findUser(2));
					playerHealth = 100;
					stamina = 100;
					magic = 98;
					globalPos[0] = true;
					globalPos[1] = false;
					globalPos[2] = false;
					globalPos[3] = false;
					areas[0] = true;
					areas[1] = false;
					areas[2] = false;
					areas[3] = false;
					drawPassiveRect(0, 0, canvas.width, canvas.height, [150, 150, 0, 1]);
					if(isRightMouseDown)
					{
						drawPassiveRect(0, 0, canvas.width, canvas.height, [50, 150, 255, 1]);
						drawPassiveRect(canvas.width-40, canvas.height-40, 40, 40, [255, 0, 0, 1]);
						drawPassiveRect(canvas.width/2-200, canvas.height/2-200, 400, 100, [255, 0, 0, 1]);
					}
					if(mouseOver(canvas.width/20, canvas.height/40, canvas.width/15, canvas.height/20))
					{
						drawPassiveRect(canvas.width/20, canvas.height/40, canvas.width/15, canvas.height/20, [50, 150, 255, 1]);
					}
					if(mouseOver(canvas.width/2-50, canvas.height/2-50, 100, 50))
					{
						drawPassiveRect(canvas.width/2-50, canvas.height/2-50, 100, 50, [75, 75, 255, 1]);
					}
					if(mouseOver(canvas.width/2-50, canvas.height/2+50, 100, 50))
					{
						drawPassiveRect(canvas.width/2-50, canvas.height/2+50, 100, 50, [150, 100, 100, 1]);
					}
					if(mouseOver(canvas.width/2-50, canvas.height/2+150, 100, 50))
					{
						drawPassiveRect(canvas.width/2-50, canvas.height/2+150, 100, 50, [175, 0, 175, 1]);
					}
					if(mouseOver(canvas.width/2-200, canvas.height/2-200, 400, 100))
					{
						drawPassiveRect(canvas.width/2-200, canvas.height/2-200, 400, 100, [150, 150, 55, 1]);
					}
					drawText(canvas.width/2-300, canvas.height-175, 600, 50, "get to the portal in the center to win", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/20, canvas.height/40, canvas.width/15, canvas.height/20, "Back", "../ludificioEngine/text/fonts/8-bit/black/");
					if(onRectButton(canvas.width/20, canvas.height/40, canvas.width/15, canvas.height/20))
					{
						survival = false;
						introduction = true;
						isLeftMouseDown = false;
					}
					drawPassiveRectTexture(canvas.width/2-200, canvas.height/2-200, 400, 100, "magnetic.png")
					drawPassiveRectTexture(canvas.width/2-50, canvas.height/2-50, 100, 50, "../ludificioEngine/images/16-bit/16-BitEasyButton.png")
					drawPassiveRectTexture(canvas.width/2-50, canvas.height/2+50, 100, 50, "../ludificioEngine/images/16-bit/16-BitMediumButton.png")
					drawPassiveRectTexture(canvas.width/2-50, canvas.height/2+150, 100, 50, "../ludificioEngine/images/16-bit/16-BitHardButton.png")
					if(onRectButton(canvas.width/2-200, canvas.height/2-200, 400, 100))
					{
						resetSong("wont");
						pauseSong("treasure");
						pauseSong("wont");
						difficulty = 4;
						survival = false;
						startSurvival = true;
						isLeftMouseDown = false;
					}
					if(onRectButton(canvas.width/2-50, canvas.height/2-50, 100, 50))
					{
						resetSong("wont");
						pauseSong("treasure");
						pauseSong("wont");
						difficulty = 1;
						survival = false;
						startSurvival = true;
						isLeftMouseDown = false;
					}
					if(onRectButton(canvas.width/2-50, canvas.height/2+50, 100, 50))
					{
						resetSong("wont");
						pauseSong("treasure");
						pauseSong("wont");
						difficulty = 2;
						survival = false;
						startSurvival = true;
						isLeftMouseDown = false;
					}
					if(onRectButton(canvas.width/2-50, canvas.height/2+150, 100, 50))
					{
						resetSong("wont");
						pauseSong("treasure");
						pauseSong("wont");
						difficulty = 3;
						survival = false;
						startSurvival = true;
						isLeftMouseDown = false;
					}
					if(mouseOver(canvas.width-40, canvas.height-40, 40, 40))
					{
						context.clearRect(0, 0, canvas.width, canvas.height);
						drawPassiveRect(0, 0, canvas.width, canvas.height, [150, 0, 55, 1]);
						drawText(canvas.width/2-400, canvas.height/2-100, 800, 200, "Maddness Mode", "../ludificioEngine/text/fonts/8-bit/black/");
						if(isLeftMouseDown)
						{	resetSong("wont");
							pauseSong("treasure");
							pauseSong("wont");
							difficulty = 7;
							survival = false;
							startSurvival = true;
							isLeftMouseDown = false;
						}
					}
				}
				if(puzzle == true)
				{
					if(lost)
					{
						playSong("wont");
					}
					else
					{
						playSong("treasure");
					}
					context.clearRect(0, 0, canvas.width, canvas.height);
					playerHealth = 100;
					stamina = 100;
					magic = 98;
					globalPos[0] = false;
					globalPos[1] = false;
					globalPos[2] = true;
					globalPos[3] = false;
					areas[0] = true;
					areas[1] = false;
					areas[2] = false;
					areas[3] = false;
					drawPassiveRect(0, 0, canvas.width, canvas.height, [150, 150, 0, 1]);
					if(mouseOver(canvas.width/20, canvas.height/40, canvas.width/15, canvas.height/20))
					{
						drawPassiveRect(canvas.width/20, canvas.height/40, canvas.width/15, canvas.height/20, [100, 100, 0, 1]);
					}
					if(mouseOver(canvas.width/2-canvas.width/8, canvas.height/4, canvas.width/4, canvas.height/9))
					{
						drawPassiveRect(canvas.width/2-canvas.width/8, canvas.height/4, canvas.width/4, canvas.height/9, [0, 200, 0, 1]);
					}
					drawText(canvas.width/2-canvas.width/8, canvas.height/4, canvas.width/4, canvas.height/9, "begin", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/2-canvas.width/4, canvas.height/2, canvas.width/2, canvas.height/9, "beta testing", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/20, canvas.height/40, canvas.width/15, canvas.height/20, "Back", "../ludificioEngine/text/fonts/8-bit/black/");
					if(onRectButton(canvas.width/20, canvas.height/40, canvas.width/15, canvas.height/20))
					{
						puzzle = false;
						introduction = true;
						isLeftMouseDown = false;
					}
					if(onRectButton(canvas.width/2-canvas.width/8, canvas.height/4, canvas.width/4, canvas.height/9))
					{
						resetSong("wont");
						pauseSong("treasure");
						pauseSong("wont");
						startPuzzle = true;
						puzzle = false;
						isLeftMouseDown = false;
					}
				}
				if(controls == true)
				{
					context.clearRect(0, 0, canvas.width, canvas.height);
					drawPassiveRect(0, 0, canvas.width, canvas.height, [150, 150, 0, 1]);
					if(mouseOver(canvas.width/20, canvas.height/40, canvas.width/15, canvas.height/20))
					{
						drawPassiveRect(canvas.width/20, canvas.height/40, canvas.width/15, canvas.height/20, [100, 100, 0, 1]);
					}
					drawText(canvas.width/2-300, canvas.height/20, 600, 100, "CONTROLS", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/20, canvas.height/5, 600, 50, "WASD to move", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/20, canvas.height/5+100, 600, 50, "shift to sprint", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/20, canvas.height/5+200, 600, 50, "left mouse to teleport", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/20, canvas.height/5+300, 600, 50, "right mouse for a map", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/20, canvas.height/40, canvas.width/15, canvas.height/20, "Back", "../ludificioEngine/text/fonts/8-bit/black/");
					if(onRectButton(canvas.width/20, canvas.height/40, canvas.width/15, canvas.height/20))
					{
						controls = false;
						introduction = true;
						isLeftMouseDown = false;
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
						pauseSong("force");
						pauseSong("codes");
						pauseSong("rave");
						pauseSong("sea");
						resetSong("treasure");
						playSong("wont");
						drawPassiveRect(0, 0, canvas.width, canvas.height, [50, 0, 0, 1]);
						drawText(canvas.width/2-300, canvas.height/2-50, 600, 100, "GAME OVER", "../ludificioEngine/text/fonts/8-bit/black/");
						if(isLeftMouseDown)
						{
							lost = true;
							introduction = true;
							startSurvival = false;
							isLeftMouseDown = false;
						}
					}
				}
				if(startPuzzle == true)
				{
					if(playerHealth > 0 )
					{
						puzzleWorld();
					}
					else
					{
						resetSong("treasure");
						resetSong("wont");
						playSong("wont");
						drawPassiveRect(0, 0, canvas.width, canvas.height, [50, 0, 0, 1]);
						drawText(canvas.width/2-300, canvas.height/2-50, 600, 100, "GAME OVER", "../ludificioEngine/text/fonts/8-bit/black/");
						if(isLeftMouseDown)
						{
							lost = true;
							introduction = true;
							startPuzzle = false;
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