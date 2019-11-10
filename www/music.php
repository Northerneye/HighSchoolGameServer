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
var color1 = 0;
var color2 = 100;
var color3 = 100;
var color11 = 0;
var color12 = 175;
var color13 = 175;
var blue = 0;
var red = 0;
var green = 0;
var userna = "";
var stri = "";
var paused = false;
var answering = false;
var windowDirectory = window.location.href.replace('music.php','');
createAudio("ludificioEngine/audioFiles/8-Bit/prelude.mp3", "prelude");
createAudio("ludificioEngine/audioFiles/8-Bit/windfall.mp3", "windfall");
createAudio("ludificioEngine/audioFiles/8-Bit/unity.mp3", "unity");
createAudio("ludificioEngine/audioFiles/8-Bit/timeLapse.mp3", "timeLapse");
createAudio("ludificioEngine/audioFiles/8-Bit/dancingNaked.mp3", "dancing");
createAudio("ludificioEngine/audioFiles/8-Bit/firstCrush.mp3", "first");
createAudio("ludificioEngine/audioFiles/8-Bit/depthAdventure.mp3", "depthAdventure");
createAudio("ludificioEngine/audioFiles/8-Bit/downForce.mp3", "downForce");
createAudio("ludificioEngine/audioFiles/8-Bit/flight.mp3", "flight");
createAudio("ludificioEngine/audioFiles/8-Bit/jackpot.mp3", "jackpot");
createAudio("ludificioEngine/audioFiles/8-Bit/jiggy.mp3", "jiggy");
createAudio("ludificioEngine/audioFiles/8-Bit/predestinedFate.mp3", "predestinedFate");
createAudio("ludificioEngine/audioFiles/8-Bit/pressStart.mp3", "pressStart");
createAudio("ludificioEngine/audioFiles/8-Bit/rainbowEyes.mp3", "rainbowEyes");
createAudio("ludificioEngine/audioFiles/8-Bit/raveBeat.mp3", "raveBeat");
createAudio("ludificioEngine/audioFiles/8-Bit/shinySea.mp3", "shinySea");
createAudio("ludificioEngine/audioFiles/8-Bit/wontStop.mp3", "wontStop");
createAudio("ludificioEngine/audioFiles/8-Bit/keygen/aaocgAwsome.mp3", "aaocgAwsome");
createAudio("ludificioEngine/audioFiles/8-Bit/keygen/dynamite.mp3", "dynamite");
createAudio("ludificioEngine/audioFiles/cool/restart.mp3", "restart");
createAudio("ludificioEngine/audioFiles/misc/AllTheWay.mp3", "allTheWay");
createAudio("ludificioEngine/audioFiles/piano/littleNumbers.mp3", "littleNumbers");
createAudio("ludificioEngine/audioFiles/piano/whereIsMyMind.mp3", "whereIsMyMind");
createAudio("ludificioEngine/audioFiles/piano/time.mp3", "time");
createAudio("ludificioEngine/audioFiles/piano/riverSide.mp3", "riverSide");
createAudio("ludificioEngine/audioFiles/piano/stayInTheDark.mp3", "stayInTheDark");
createAudio("ludificioEngine/audioFiles/misc/lights.mp3", "lights");
createAudio("ludificioEngine/audioFiles/misc/stolenDance.mp3", "stolenDance");
createAudio("ludificioEngine/audioFiles/misc/riptide.mp3", "riptide");
createAudio("ludificioEngine/audioFiles/misc/trees.mp3", "trees");
createAudio("ludificioEngine/audioFiles/misc/carTorchDeath.mp3", "carTorchDeath");
createAudio("ludificioEngine/audioFiles/misc/airCatcher.mp3", "airCatcher");
createAudio("ludificioEngine/audioFiles/misc/risingSun.mp3", "risingSun");
createAudio("ludificioEngine/audioFiles/misc/sevenNation.mp3", "sevenNation");
changeVolume("prelude", 1);
changeVolume("windfall", 1);
changeVolume("unity", .50);
changeVolume("timeLapse", 1);
changeVolume("dancing", 1);
changeVolume("first", 1);
changeVolume("depthAdventure", 1);
changeVolume("downForce", 1);
changeVolume("flight", 1);
changeVolume("jackpot", 1);
changeVolume("jiggy", 1);
changeVolume("predestinedFate", 1);
changeVolume("pressStart", 1);
changeVolume("rainbowEyes", 1);
changeVolume("raveBeat", 1);
changeVolume("shinySea", 1);
changeVolume("wontStop", 1);
changeVolume("aaocgAwsome", 1);
changeVolume("dynamite", 1);
changeVolume("restart", 1);
changeVolume("allTheWay", 1);
changeVolume("littleNumbers", 1);
changeVolume("whereIsMyMind", 1);
changeVolume("time", 1);
changeVolume("riverSide", 1);
changeVolume("stayInTheDark", 1);
changeVolume("lights", 1);
changeVolume("stolenDance", 1);
changeVolume("riptide", 1);
changeVolume("trees", 1);
changeVolume("carTorchDeath", 1);
changeVolume("airCatcher", 1);
changeVolume("risingSun", 1);
changeVolume("sevenNation", 1);
songTimer=120;
song = "";
piano = 0;
norm = 4;
playlist = "norm";
var xhttp = new XMLHttpRequest();
document.onkeydown = function(evt)
{
	stri = "";
	evt = evt || window.event;
	charCode = evt.keyCode || evt.which;
	if(charCode !== 8 && charCode !== 32)
	{
		stri = String.fromCharCode(charCode).toLowerCase();
	}
	if(playlist !== "piano")
	{
		if(stri == "p")
		{
			piano = 1;
		}
		else if(stri == "i" && piano == 1)
		{
			piano = 2;
		}
		else if(stri == "a" && piano == 2)
		{
			piano = 3;
		}
		else if(stri == "n" && piano == 3)
		{
			piano = 4;
		}
		else if(stri == "o" && piano == 4)
		{
			piano = 5;
			norm = 0;
			playlist="piano";
		}
		else if(piano !== 5)
		{
			piano = 0;
		}
	}
	if(playlist !== "norm")
	{
		if(stri == "n")
		{
			norm = 1;
		}
		else if(stri == "o" && norm == 1)
		{
			norm = 2;
		}
		else if(stri == "r" && norm == 2)
		{
			norm = 3;
		}
		else if(stri == "m" && norm == 3)
		{
			norm = 4;
			piano = 0;
			playlist = "norm";
		}
		else if(norm !== 4)
		{
			norm = 0;
		}
	}
	pauseSong("prelude");
	pauseSong("windfall");
	pauseSong("unity");
	pauseSong("timeLapse");
	pauseSong("dancing");
	pauseSong("first");
	pauseSong("depthAdventure");
	pauseSong("downForce");
	pauseSong("flight");
	pauseSong("jackpot");
	pauseSong("jiggy");
	pauseSong("predestinedFate");
	pauseSong("pressStart");
	pauseSong("rainbowEyes");
	pauseSong("raveBeat");
	pauseSong("shinySea");
	pauseSong("wontStop");
	pauseSong("aaocgAwsome");
	pauseSong("dynamite");
	pauseSong("restart");
	pauseSong("allTheWay");
	pauseSong("littleNumbers");
	pauseSong("whereIsMyMind");
	pauseSong("time");
	pauseSong("riverSide");
	pauseSong("stayInTheDark");
	pauseSong("lights");
	pauseSong("stolenDance");
	pauseSong("riptide");
	pauseSong("trees");
	pauseSong("carTorchDeath");
	pauseSong("airCatcher");
	pauseSong("risingSun");
	pauseSong("sevenNation");
	if(charCode == 32)
	{
		if(paused == false)
		{
			paused = true;
		}
		else{
			paused = false;
			if(song == "prelude")
			{
				playSong("prelude");
			}
			if(song == "windfall")
			{
				playSong("windfall");
			}
			if(song == "unity")
			{
				playSong("unity");
			}
			if(song == "time lapse")
			{
				playSong("timeLapse");
			}
			if(song == "dancing")
			{
				playSong("dancing");
			}
			if(song == "first")
			{
				playSong("first");
			}
			if(song == "depth adventure")
			{
				playSong("depthAdventure");
			}
			if(song == "down force")
			{
				playSong("downForce");
			}
			if(song == "flight")
			{
				playSong("flight");
			}
			if(song == "jackpot")
			{
				playSong("jackpot");
			}
			if(song == "jiggy")
			{
				playSong("jiggy");
			}
			if(song == "predestined fate")
			{
				playSong("predestinedFate");
			}
			if(song == "press start")
			{
				playSong("pressStart");
			}
			if(song == "rainbow eyes")
			{
				playSong("rainbowEyes");
			}
			if(song == "rave beat")
			{
				playSong("raveBeat");
			}
			if(song == "shiny sea")
			{
				playSong("shinySea");
			}
			if(song == "wont stop")
			{
				playSong("wontStop");
			}
			if(song == "aaocg")
			{
				playSong("aaocgAwsome");
			}
			if(song == "dynamite")
			{
				playSong("dynamite");
			}
			if(song == "restart")
			{
				playSong("restart");
			}
			if(song == "all the way")
			{
				playSong("allTheWay");
			}
			if(song == "little numbers")
			{
				playSong("littleNumbers");
			}
			if(song == "where is my mind")
			{
				playSong("whereIsMyMind");
			}
			if(song == "time")
			{
				playSong("time");
			}
			if(song == "river side")
			{
				playSong("riverSide");
			}
			if(song == "stay in the dark")
			{
				playSong("stayInTheDark");
			}
			if(song == "lights")
			{
				playSong("lights");
			}
			if(song == "stolen dance")
			{
				playSong("stolenDance");
			}
			if(song == "riptide")
			{
				playSong("riptide");
			}
			if(song == "trees")
			{
				playSong("trees");
			}
			if(song == "a car a torch")
			{
				playSong("carTorchDeath");
			}
			if(song == "air catcher")
			{
				playSong("airCatcher");
			}
			if(song == "rising sun")
			{
				playSong("risingSun");
			}
			if(song == "seven nation army")
			{
				playSong("sevenNation");
			}
		}
	}
	else{
		resetSong("prelude");
		resetSong("windfall");
		resetSong("unity");
		resetSong("timeLapse");
		resetSong("dancing");
		resetSong("first");
		resetSong("depthAdventure");
		resetSong("downForce");
		resetSong("flight");
		resetSong("jackpot");
		resetSong("jiggy");
		resetSong("predestinedFate");
		resetSong("pressStart");
		resetSong("rainbowEyes");
		resetSong("raveBeat");
		resetSong("shinySea");
		resetSong("wontStop");
		resetSong("aaocgAwsome");
		resetSong("dynamite");
		resetSong("restart");
		resetSong("allTheWay");
		resetSong("littleNumbers");
		resetSong("whereIsMyMind");
		resetSong("time");
		resetSong("riverSide");
		resetSong("stayInTheDark");
		resetSong("lights");
		resetSong("stolenDance");
		resetSong("riptide");
		resetSong("trees");
		resetSong("carTorchDeath");
		resetSong("airCatcher");
		resetSong("risingSun");
		resetSong("sevenNation");
	}
}
window.setInterval(function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawPassiveRect(0, 0, canvas.width, canvas.height, [color11, color12, color13, 1]);
	drawPassiveRect(0, 0, canvas.width, canvas.height, [color1, color2, color3, timer1/songTimer]);
	timer1 += 1;
	if(playlist == "norm")
	{
		if(charStr[jQuery.inArray("p", charStr)] == "p")
		{
			playSong("prelude");
			songTimer=50;
			song = "prelude"
			red=10;
			green=10;
			blue=10;
		}
		if(charStr[jQuery.inArray("w", charStr)] == "w")
		{
			playSong("windfall");
			songTimer=50;
			song = "windfall";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("u", charStr)] == "u")
		{
			playSong("unity");
			songTimer=30;
			song = "unity";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("t", charStr)] == "t")
		{
			playSong("timeLapse");
			songTimer=20;
			song = "time lapse";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("d", charStr)] == "d")
		{
			playSong("dancing");
			songTimer=30;
			song = "dancing";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("f", charStr)] == "f")
		{
			playSong("first");
			songTimer=45;
			song = "first";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("a", charStr)] == "a")
		{
			playSong("depthAdventure");
			songTimer=45;
			song = "depth adventure";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("o", charStr)] == "o")
		{
			playSong("downForce");
			songTimer=25;
			song = "down force";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("l", charStr)] == "l")
		{
			playSong("flight");
			songTimer=35;
			song = "flight";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("j", charStr)] == "j")
		{
			playSong("jackpot");
			songTimer=30;
			song = "jackpot";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("1", charStr)] == "1")
		{
			playSong("predestinedFate");
			songTimer=50;
			song = "predestined fate";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("s", charStr)] == "s")
		{
			playSong("pressStart");
			songTimer=60;
			song = "press start";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("2", charStr)] == "2")
		{
			playSong("rainbowEyes");
			songTimer=30;
			song = "rainbow eyes";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("r", charStr)] == "r")
		{
			playSong("raveBeat");
			songTimer=35;
			song = "rave beat";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("3", charStr)] == "3")
		{
			playSong("shinySea");
			songTimer=32;
			song = "shiny sea";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("y", charStr)] == "y")
		{
			playSong("wontStop");
			songTimer=40;
			song = "wont stop";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("g", charStr)] == "g")
		{
			playSong("aaocgAwsome");
			songTimer=29;
			song = "aaocg";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("4", charStr)] == "4")
		{
			playSong("dynamite");
			songTimer=28;
			song = "dynamite";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("q", charStr)] == "q")
		{
			playSong("restart");
			songTimer=30;
			song = "restart";
			red=0;
			green=0;
			blue=0;
		}
		if(shiftKey)
		{
			playSong("jiggy");
			songTimer=15;
			song = "jiggy";
			red=0;
			green=0;
			blue=0;
		}
		if(charCode == 46)
		{
			playSong("risingSun");
			songTimer=35;
			song = "rising sun";
			red=30;
			green=-10;
			blue=-20;
		}
		if(charCode == 18)
		{
			playSong("risingSun");
			songTimer=35;
			song = "rising sun";
			red=30;
			green=-10;
			blue=-20;
		}
		if(charCode == 37)
		{
			playSong("sevenNation");
			songTimer=28;
			song = "sevenNation";
			red=30;
			green=-10;
			blue=-20;
		}
	}
	else if(playlist == "piano")
	{
		if(charStr[jQuery.inArray("l", charStr)] == "l")
		{
			playSong("littleNumbers");
			songTimer=32;
			song = "little numbers";
			red=-30;
			green=-10;
			blue=0;
		}
		if(charCode == 46)
		{
			playSong("allTheWay");
			songTimer=28;
			song = "all the way";
			red=-10;
			green=30;
			blue=0;
		}
		if(charStr[jQuery.inArray("w", charStr)] == "w")
		{
			playSong("whereIsMyMind");
			songTimer=35;
			song = "where is my mind";
			red=0;
			green=0;
			blue=0;
		}
		if(charStr[jQuery.inArray("m", charStr)] == "m")
		{
			playSong("time");
			songTimer=70;
			song = "time";
			red=0;
			green=0;
			blue=20;
		}
		if(charStr[jQuery.inArray("v", charStr)] == "v")
		{
			playSong("riverSide");
			songTimer=22;
			song = "river side";
			red=-20;
			green=0;
			blue=5;
		}
		if(charStr[jQuery.inArray("s", charStr)] == "s")
		{
			playSong("stayInTheDark");
			songTimer=30;
			song = "stay in the dark";
			red=-20;
			green=-20;
			blue=-20;
		}
		if(charStr[jQuery.inArray("i", charStr)] == "i")
		{
			playSong("lights");
			songTimer=30;
			song = "lights";
			red=30;
			green=30;
			blue=30;
		}
		if(charStr[jQuery.inArray("d", charStr)] == "d")
		{
			playSong("stolenDance");
			songTimer=26;
			song = "stolen dance";
			red=20;
			green=20;
			blue=20;
		}
		if(charStr[jQuery.inArray("r", charStr)] == "r")
		{
			playSong("riptide");
			songTimer=32;
			song = "riptide";
			red=-20;
			green=30;
			blue=40;
		}
		if(charStr[jQuery.inArray("t", charStr)] == "t")
		{
			playSong("trees");
			songTimer=38;
			song = "trees";
			red=-20;
			green=10;
			blue=-10;
		}
		if(charStr[jQuery.inArray("c", charStr)] == "c")
		{
			playSong("carTorchDeath");
			songTimer=37;
			song = "a car a torch";
			red=-20;
			green=-20;
			blue=-40;
		}
		if(charStr[jQuery.inArray("a", charStr)] == "a")
		{
			playSong("airCatcher");
			songTimer=42;
			song = "air catcher";
			red=30;
			green=30;
			blue=30;
		}
		if(shiftKey)
		{
			playSong("jiggy");
			songTimer=15;
			song = "jiggy";
			red=0;
			green=0;
			blue=0;
		}
	}
	if(timer1 >= songTimer)
	{
		color11 = color1;
		color12 = color2;
		color13 = color3;
		color1 = Math.floor(Math.random()*255);
		color2 = Math.floor(Math.random()*255);
		color3 = Math.floor(Math.random()*255);
		timer1 = 0;
		color1 += red;
		color2 += green;
		color3 += blue;
		if(color1 == 0)
		{
			color1 = 5
		}
		if(color2 == 0)
		{
			color2 = 5
		}
		if(color3 == 0)
		{
			color3 = 5
		}
	}
	drawText(canvas.width/4, canvas.height/10, canvas.width/2, canvas.height/9, "Music", "ludificioEngine/text/fonts/8-bit/black/");
	drawText(canvas.width/2-canvas.width/8, canvas.height/4, canvas.width/4, canvas.height/10, playlist, "ludificioEngine/text/fonts/8-bit/black/");
	drawText(canvas.width/2-song.length/2*50, canvas.height/2-60, song.length*50, 120, song, "ludificioEngine/text/fonts/8-bit/black/");
	if(onRectButton(canvas.width/2-50, canvas.height/5+50, 100, 100))
	{
		
	}
	drawPassiveRectTexture(mouseXPos, mouseYPos, 25, 25, "ludificioEngine/images/cursors/Cursor")
}, 50)
</script>
</body>
</html>