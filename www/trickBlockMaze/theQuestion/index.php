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
<script>
var timer1 = 0;
var color1 = 175;
var color2 = 175;
var color3 = 0;
var color11 = 175;
var color12 = 175;
var color13 = 0;
var userna = "";
var stri = "";
var answering = false;
var windowDirectory = window.location.href.replace('index.php','');
createAudio("ludificioEngine/audioFiles/8-Bit/s3rl.mp3", "serl");
createAudio("ludificioEngine/audioFiles/8-Bit/cheatCodes.mp3", "aha");
changeVolume("serl", .20)
changeVolume("aha", .20)
var xhttp = new XMLHttpRequest();
document.onkeydown = function(evt)
{
	evt = evt || window.event;
	charCode = evt.keyCode || evt.which;
	if(charCode !== 8 && charCode !== 32)
	{
		stri = String.fromCharCode(charCode).toLowerCase();
	}
}
xhttp.open("GET", "checkPlayer.php", true);
xhttp.send();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) 
	{
		if(xhttp.responseText == true)
		{
			window.setInterval(function()
			{
				playSong("serl");
				context.clearRect(0, 0, canvas.width, canvas.height);
				drawPassiveRect(0, 0, canvas.width, canvas.height, [color11, color12, color13, 1]);
				drawPassiveRect(0, 0, canvas.width, canvas.height, [color1, color2, color3, timer1/200]);
				timer1 += 1;
				if(timer1 >= 200)
				{
					color11 = color1;
					color12 = color2;
					color13 = color3;
					color1 = Math.floor(Math.random()*255);
					color2 = Math.floor(Math.random()*255);
					color3 = Math.floor(Math.random()*255);
					timer1 = 0;
				}
				if(mouseOver(canvas.width/2-canvas.width/3, 15*canvas.height/20, 2*canvas.width/3, canvas.height/9))
				{
					drawPassiveRect(canvas.width/2-canvas.width/3, 15*canvas.height/20, 2*canvas.width/3, canvas.height/9, [150, 150, 150, 1]);
				}
				if(isLeftMouseDown)
				{
					userna = "";
					answering = false;
				}
				if(onRectButton(canvas.width/2-canvas.width/3, 15*canvas.height/20, 2*canvas.width/3, canvas.height/9))
				{
					answering = true;
				}
				if(answering)
				{
					if(charCode == 13 && userna == "code")
					{
						window.location = windowDirectory+"omnia/";
					}
					drawPassiveRect(canvas.width/2-canvas.width/3, 15*canvas.height/20, 2*canvas.width/3, canvas.height/9, [255, 255, 255, 1]);
					drawText(canvas.width/2-canvas.width/40*userna.length, 15*canvas.height/20, canvas.width/20*userna.length, canvas.height/9, userna, "ludificioEngine/text/fonts/8-bit/black/");
					if (charCode == 8)
					{
						userna = "";
					}
					userna += stri;
					stri = "";
				}
				drawText(canvas.width/2-canvas.width/8, canvas.height/40, canvas.width/4, canvas.height/16, "please reset zoom to default", "ludificioEngine/text/fonts/8-bit/white/");
				drawText(canvas.width/2-canvas.width/3, canvas.height/10, 2*canvas.width/3, canvas.height/9, "The Riddle", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/2-2*canvas.width/7, 6*canvas.height/20, 4*canvas.width/7, canvas.height/12, "I make up everything that you see", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/2-2*canvas.width/8, 8*canvas.height/20, 4*canvas.width/8, canvas.height/12, "yet none of that is made by me", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/2-2*canvas.width/7, 10*canvas.height/20, 4*canvas.width/7, canvas.height/12, "although  the answer will be shown", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/2-2*canvas.width/8, 12*canvas.height/20, 4*canvas.width/8, canvas.height/12, "to all those who are unknown", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/2-400, canvas.height-220, 800, 90, "PS you can always ask for help", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/2-250, canvas.height-110, 500, 90, "pressing right mouse", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/2+420, canvas.height-150, 150, 50, "almost always", "ludificioEngine/text/fonts/8-bit/black/");
				drawPassiveRectOutline(canvas.width/2-canvas.width/7, canvas.height/40+canvas.height/100, 2*canvas.width/7, canvas.height/16, [100, 100, 100, 1]);
				drawPassiveRectOutline(canvas.width/2-canvas.width/3, 15*canvas.height/20, 2*canvas.width/3, canvas.height/9, [0, 0, 0, 1]);
				drawPassiveRectTexture(mouseXPos, mouseYPos, canvas.width/30, canvas.height/30, "ludificioEngine/images/cursors/Cursor")
				if(isRightMouseDown)
				{
					context.clearRect(0, 0, canvas.width, canvas.height);
					drawText(0, canvas.height/2-canvas.height/12, canvas.width, canvas.height/6, "log OUT before playing", "ludificioEngine/text/fonts/8-bit/black/");
					drawText(0, canvas.height/2-canvas.height/12, canvas.width, canvas.height/6, "log OUT before playing", "ludificioEngine/text/fonts/8-bit/black/");
					drawText(0, canvas.height/2-canvas.height/12, canvas.width, canvas.height/6, "log OUT before playing", "ludificioEngine/text/fonts/8-bit/black/");
					drawText(0, canvas.height/2-canvas.height/12, canvas.width, canvas.height/6, "log OUT before playing", "ludificioEngine/text/fonts/8-bit/black/");
					drawText(0, canvas.height/2-canvas.height/12, canvas.width, canvas.height/6, "log OUT before playing", "ludificioEngine/text/fonts/8-bit/black/");
					drawText(0, canvas.height/2-canvas.height/12, canvas.width, canvas.height/6, "log OUT before playing", "ludificioEngine/text/fonts/8-bit/black/");
					drawText(0, canvas.height/2-canvas.height/12, canvas.width, canvas.height/6, "log OUT before playing", "ludificioEngine/text/fonts/8-bit/black/");
					drawText(0, canvas.height/2-canvas.height/12, canvas.width, canvas.height/6, "log OUT before playing", "ludificioEngine/text/fonts/8-bit/black/");
					drawText(0, canvas.height/2-canvas.height/12, canvas.width, canvas.height/6, "log OUT before playing", "ludificioEngine/text/fonts/8-bit/black/");
					drawText(0, canvas.height/2-canvas.height/12, canvas.width, canvas.height/6, "log OUT before playing", "ludificioEngine/text/fonts/8-bit/black/");
					drawText(0, canvas.height/2-canvas.height/12, canvas.width, canvas.height/6, "log OUT before playing", "ludificioEngine/text/fonts/8-bit/black/");
					drawText(0, canvas.height/2-canvas.height/12, canvas.width, canvas.height/6, "log OUT before playing", "ludificioEngine/text/fonts/8-bit/black/");
					drawText(0, canvas.height/2-canvas.height/12, canvas.width, canvas.height/6, "log OUT before playing", "ludificioEngine/text/fonts/8-bit/black/");
					drawText(0, canvas.height/2-canvas.height/12, canvas.width, canvas.height/6, "log OUT before playing", "ludificioEngine/text/fonts/8-bit/black/");
					drawText(0, canvas.height/2-canvas.height/12, canvas.width, canvas.height/6, "log OUT before playing", "ludificioEngine/text/fonts/8-bit/black/");
				}
			}, 10)
		}
		else
		{
			playSong("aha");
			window.setInterval(function(){
				context.clearRect(0, 0, canvas.width, canvas.height);
				drawPassiveRect(0, 0, canvas.width, canvas.height, [color11, color12, color13, 1]);
				drawPassiveRect(0, 0, canvas.width, canvas.height, [color1, color2, color3, timer1/100]);
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
				drawText(canvas.width/4, canvas.height/10, canvas.width/2, canvas.height/9, "CODE", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/2-2*canvas.width/8, 6*canvas.height/20, 4*canvas.width/8, canvas.height/12, "code makes up everything seen", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/2-2*canvas.width/8, 8*canvas.height/20, 4*canvas.width/8, canvas.height/12, "yet coders create the scene", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/2-2*canvas.width/8, 10*canvas.height/20, 4*canvas.width/8, canvas.height/12, "now the answer has be shown", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width/2-2*canvas.width/7, 12*canvas.height/20, 4*canvas.width/7, canvas.height/12, "to you because you are not known", "ludificioEngine/text/fonts/8-bit/black/");
				drawText(canvas.width-500, canvas.height-100, 400, 50, "ask for a hint and you may be suprised", "ludificioEngine/text/fonts/8-bit/black/");
				if(onRectButton(canvas.width/2-50, canvas.height/5+40, 100, 100))
				{
					drawPassiveRect(0, 0, canvas.width, canvas.height, [color11, color12, color13, 1]);
					drawPassiveRect(0, 0, canvas.width, canvas.height, [color1, color2, color3, timer1/100]);
					drawPassiveRectTexture(canvas.width/2-400, canvas.height/2-400, 800, 800, "magnetRight.png");
				}
				if(isRightMouseDown)
				{
					drawText(mouseXPos-canvas.width/10, mouseYPos-canvas.height/20, canvas.width/5, canvas.height/10, "THE MUSIC IS THE KEY", "ludificioEngine/text/fonts/8-bit/white/");
					drawPassiveRect(canvas.width/2-50, canvas.height/5+40, 100, 100, [color11-10, color12-10, color13-10, 1]);
				}
				else{
					drawText(mouseXPos-canvas.width/60, mouseYPos-canvas.height/60, canvas.width/30, canvas.height/30, "code", "ludificioEngine/text/fonts/8-bit/black/");
				}
				if(mouseOver(canvas.width/2-50, canvas.height/5+40, 100, 100) && isRightMouseDown)
				{
					drawPassiveRect(canvas.width/2-50, canvas.height/5+40, 100, 100, [color1-10, color2-10, color3-10, 1]);
				}
			}, 50)
		}
	}
};
</script>
</body>
</html>