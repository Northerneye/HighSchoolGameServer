<html>
<head>
<script src="../ludificioEngine/jquery-3.1.0"></script>
<!--<link rel="stylesheet" type="text/css" href="../ludificioEngine/noCursor.css"/><!---->
<link rel="stylesheet" type="text/css" href="../ludificioEngine/canvasStyle.css"/>
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
<script>
var teamShotColor = [255, 0, 0, 1];
var greatShotColor = [255, 0, 0, 1];
var exploratorColor = [255, 0, 0, 1];
function Controls()
{
	if (charStr[jQuery.inArray("m", charStr)] == "m")
	{		
		if(greatShot == true)
		{
			greatShot = false;
		}
		else if(greatShot == false)
		{
			greatShot = true;
		}
	}
	if (charStr[jQuery.inArray("e", charStr)] == "e")
	{		
		if(explorator == true)
		{
			explorator = false;
		}
		else if(explorator == false)
		{
			explorator = true;
		}
	}
	if (charStr[jQuery.inArray("t", charStr)] == "t")
	{		
		if(teamShot == true)
		{
			teamShot = false;
		}
		else if(teamShot == false)
		{
			teamShot = true;
		}
	}
	if (charStr[jQuery.inArray("r", charStr)] == "r")
	{		
		//reset = true;				//***************
	}
}
var xhttp = new XMLHttpRequest();
var teamShot = false;
var greatShot = false;
var explorator = false;
var reset = false;
window.setInterval(function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	if(greatShot)
	{
		q=(document.location.href);
		void(open('greatShotMovColl.php?url='+escape(q),'_self','resizable,location,menubar,toolbar,scrollbars,status'));
		greatShot = false;
		greatShotColor = [0, 0, 255, 1];
		drawPassiveRect(300, 100, 100, 100, greatShotColor);
		greatShotColor = [0, 200, 0, 1];
	}
	else
	{
		drawPassiveRect(300, 100, 100, 100, greatShotColor);
	}
	if(teamShot)
	{
		q=(document.location.href);
		void(open('teamShotMovColl.php?url='+escape(q),'_self','resizable,location,menubar,toolbar,scrollbars,status'));
		teamShot = false;
		teamShotColor = [0, 0, 255, 1];
		drawPassiveRect(700, 100, 100, 100, teamShotColor);
		teamShotColor = [0, 200, 0, 1];
	}
	else
	{
		drawPassiveRect(700, 100, 100, 100, teamShotColor);
	}
	if(explorator)
	{
		q=(document.location.href);
		void(open('exploratorShotsMovColl.php?url='+escape(q),'_self','resizable,location,menubar,toolbar,scrollbars,status'));
		explorator = false;
		exploratorColor = [0, 0, 255, 1];
		drawPassiveRect(500, 100, 100, 100, exploratorColor);
		exploratorColor = [0, 200, 0, 1];
	}
	else
	{
		drawPassiveRect(500, 100, 100, 100, exploratorColor);
	}
	if(reset)
	{
		xhttp.open("GET", "resetServer.php", true);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) 
			{
				if(xhttp.responseText == true)
				{
					drawPassiveRect(100, 100, 100, 100, [0, 0, 255, 1]);
					reset = false;
				}
				else
				{
					drawPassiveRect(100, 100, 100, 100, [255, 0, 0, 1])
				}
			}
		};
	}
	else
	{
		drawPassiveRect(100, 100, 100, 100, [150, 0, 175, 1]);
	}
	drawText(700, 100, 100, 100, "teamShot", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(300, 100, 100, 100, "GreatShot", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(500, 100, 100, 100, "Explorator", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(100, 100, 100, 100, "reset", "../ludificioEngine/text/fonts/8-bit/black/");
	Controls();
	charStr = [];
}, 10)
</script>
</body>
</html>