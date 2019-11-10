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
var windowDirectory = window.location.href.replace('index.php','');
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "checkPlayer.php", true);
xhttp.send();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) 
	{
		if(xhttp.responseText == true)
		{
			window.setInterval(function()
			{
				context.clearRect(0, 0, canvas.width, canvas.height);
				drawPassiveRect(0, 0, canvas.width, canvas.height, [0, 0, 0, 1]);
				if(mouseOver(canvas.width/2-canvas.width/3, 15*canvas.height/20, 2*canvas.width/3, canvas.height/9))
				{
					
				}
				if(onRectButton(canvas.width/2-canvas.width/3, 15*canvas.height/20, 2*canvas.width/3, canvas.height/9))
				{
					
				}
				drawText(canvas.width/2-400, canvas.height/2-100, 800, 200, "Omnia", "ludificioEngine/text/fonts/8-bit/white/");
				drawPassiveRectTexture(mouseXPos, mouseYPos, canvas.width/30, canvas.height/30, "ludificioEngine/images/cursors/Cursor")
				if(isRightMouseDown)
				{
					drawPassiveRect(0, 0, canvas.width, canvas.height, [0, 0, 0, 1]);
					drawText(canvas.width/2-400, canvas.height/2-200, 800, 200, "the eggs continue", "ludificioEngine/text/fonts/8-bit/white/");
					drawText(canvas.width/2-400, canvas.height/2, 800, 200, "when you were logged out", "ludificioEngine/text/fonts/8-bit/white/");
				}
			}, 10)
		}
		else
		{
			window.setInterval(function(){
				context.clearRect(0, 0, canvas.width, canvas.height);
			}, 50)
		}
	}
};
</script>
</body>
</html>