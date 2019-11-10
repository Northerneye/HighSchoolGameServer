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
var boris = false;
var intro = true;
var windowDirectory = window.location.href.replace('','');
var topLeft = [[[]]];
var middleLeft = [[[]]];
var bottomLeft = [[[]]];
var topMiddle = [[[]]];
var middleMiddle = [[[]]];
var bottomMiddle = [[[]]];
var topRight = [[[]]];
var middleRight = [[[]]];
var bottomRight = [[[]]];
for(i = 0; i<2; i++)
{
	for(j = 0; j<2; j++)
	{
		topLeft.push([])
		topLeft[i][j] = 0;
	}
}
for(i = 0; i<2; i++)
{
	for(j = 0; j<2; j++)
	{
		middleLeft.push([])
		middleLeft[i][j] = 0;
	}
}
for(i = 0; i<2; i++)
{
	for(j = 0; j<2; j++)
	{
		bottomLeft.push([])
		bottomLeft[i][j] = 0;
	}
}
for(i = 0; i<2; i++)
{
	for(j = 0; j<2; j++)
	{
		topMiddle.push([])
		topMiddle[i][j] = 0;
	}
}
for(i = 0; i<2; i++)
{
	for(j = 0; j<2; j++)
	{
		middleMiddle.push([])
		middleMiddle[i][j] = 0;
	}
}
for(i = 0; i<2; i++)
{
	for(j = 0; j<2; j++)
	{
		bottomMiddle.push([])
		bottomMiddle[i][j] = 0;
	}
}
for(i = 0; i<2; i++)
{
	for(j = 0; j<2; j++)
	{
		topRight.push([])
		topRight[i][j] = 0;
	}
}
for(i = 0; i<2; i++)
{
	for(j = 0; j<2; j++)
	{
		middleRight.push([])
		middleRight[i][j] = 0;
	}
}
for(i = 0; i<2; i++)
{
	for(j = 0; j<2; j++)
	{
		bottomRight.push([])
		bottomRight[i][j] = 0;
	}
}
createAudio("borisTheSpider.mp3", "boris");
changeVolume("boris", .7);
var timer1 = 0;
var color1 = Math.floor(Math.random()*255);
var color2 = Math.floor(Math.random()*255);
var color3 = Math.floor(Math.random()*255);
var color11 = 210;
var color12 = 110;
var color13 = 0;
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "checkPlayer.php", true);
xhttp.send();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) 
	{
		if(xhttp.responseText == true)
		{
			window.setInterval(function(){
				context.clearRect(0, 0, canvas.width, canvas.height);
				if(intro)
				{
					drawPassiveRect(0, 0, canvas.width, canvas.height, [210, 110, 0, 1]);
					if(mouseOver(canvas.width/2-canvas.width/16, canvas.height/2, canvas.width/8, canvas.height/10))
					{
						drawPassiveRect(canvas.width/2-canvas.width/16, canvas.height/2, canvas.width/8, canvas.height/10, [200, 100, 0, 1]);
						if(isLeftMouseDown)
						{
							intro = false;
							boris = true;
						}
					}
					drawText(canvas.width/2-canvas.width/4, canvas.height/5, canvas.width/2, canvas.height/5, "The Gate Keepers", "../ludificioEngine/text/fonts/8-bit/black/");
					drawText(canvas.width/2-canvas.width/16, canvas.height/2, canvas.width/8, canvas.height/10, "Boris", "../ludificioEngine/text/fonts/8-bit/black/");
				}
				if(boris)
				{
					timer1 += 1;
					if(timer1 >= 1000)
					{
						color11 = color1;
						color12 = color2;
						color13 = color3;
						color1 = Math.floor(Math.random()*255);
						color2 = Math.floor(Math.random()*255);
						color3 = Math.floor(Math.random()*255);
						timer1 = 0;
					}
					playSong("boris");
					drawPassiveRect(0, 0, canvas.width, canvas.height, [color11, color12, color13, 1]);
					drawPassiveRect(0, 0, canvas.width, canvas.height, [color1, color2, color3, timer1/1000]);
					if(mouseOver(canvas.width/8, canvas.height/6+canvas.height/15, canvas.width/8, canvas.height/15))
					{
						if(topLeft[1][1] == 1 || topLeft[1][1] == 2)
						{
						}
						else{
							drawPassiveRect(canvas.width/8, canvas.height/6+canvas.height/15, canvas.width/8, canvas.height/15, [(color1+color11)/2, (color2+color12)/2, (color3+color13)/2, 1]);
							if(isLeftMouseDown)
							{
								topLeft[1][1] = 1;
							}
						}
					}
					
					drawText(canvas.width/2-canvas.width/12, canvas.height/40, canvas.width/6, canvas.height/10, "Boris", "../ludificioEngine/text/fonts/8-bit/black/");
					drawPassiveRectOutline(canvas.width/8, canvas.height/6, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(2*canvas.width/8, canvas.height/6, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(7*canvas.width/16, canvas.height/6, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(9*canvas.width/16, canvas.height/6, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(6*canvas.width/8, canvas.height/6, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(7*canvas.width/8, canvas.height/6, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/8, 3*canvas.height/7, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(2*canvas.width/8, 3*canvas.height/7, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(7*canvas.width/16, 3*canvas.height/7, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(9*canvas.width/16, 3*canvas.height/7, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(6*canvas.width/8, 3*canvas.height/7, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(7*canvas.width/8, 3*canvas.height/7, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/8, 7*canvas.height/10, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(2*canvas.width/8, 7*canvas.height/10, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(7*canvas.width/16, 7*canvas.height/10, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(9*canvas.width/16, 7*canvas.height/10, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(6*canvas.width/8, 7*canvas.height/10, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(7*canvas.width/8, 7*canvas.height/10, 0, canvas.height/5, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11, canvas.height/6+canvas.height/15, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11, canvas.height/6+canvas.height/7.5, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11+10*canvas.width/32, canvas.height/6+canvas.height/15, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11+10*canvas.width/32, canvas.height/6+canvas.height/7.5, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11+20*canvas.width/32, canvas.height/6+canvas.height/15, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11+20*canvas.width/32, canvas.height/6+canvas.height/7.5, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11, canvas.height/6+10*canvas.height/32, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11, canvas.height/6+13*canvas.height/32, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11+10*canvas.width/32, canvas.height/6+10*canvas.height/32, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11+10*canvas.width/32, canvas.height/6+13*canvas.height/32, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11+20*canvas.width/32, canvas.height/6+10*canvas.height/32, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11+20*canvas.width/32, canvas.height/6+13*canvas.height/32, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11, canvas.height/6+19*canvas.height/32, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11, canvas.height/6+22*canvas.height/32, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11+10*canvas.width/32, canvas.height/6+19*canvas.height/32, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11+10*canvas.width/32, canvas.height/6+22*canvas.height/32, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11+20*canvas.width/32, canvas.height/6+19*canvas.height/32, canvas.width/5, 0, [100, 100, 100, 1]);
					drawPassiveRectOutline(canvas.width/11+20*canvas.width/32, canvas.height/6+22*canvas.height/32, canvas.width/5, 0, [100, 100, 100, 1]);
					
					if(topLeft[1][1] == 1)
					{
						drawText(canvas.width/8, canvas.height/6+canvas.height/15, canvas.width/8, canvas.height/15, "X", "../ludificioEngine/text/fonts/8-bit/black/");
					}
					else if(topLeft[1][1] == 2)
					{
						drawText(canvas.width/8, canvas.height/6+canvas.height/15, canvas.width/8, canvas.height/15, "O", "../ludificioEngine/text/fonts/8-bit/black/");
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