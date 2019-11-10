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
var userna = "";
var stri = "";
var playing = true;
var windowDirectory = window.location.href.replace('music.php','');
createAudio("ludificioEngine/audioFiles/piano/a.mp3", "a");
createAudio("ludificioEngine/audioFiles/piano/b.mp3", "b");
createAudio("ludificioEngine/audioFiles/piano/c.mp3", "c");
createAudio("ludificioEngine/audioFiles/piano/d.mp3", "d");
createAudio("ludificioEngine/audioFiles/piano/e.mp3", "e");
createAudio("ludificioEngine/audioFiles/piano/f.mp3", "f");
createAudio("ludificioEngine/audioFiles/piano/g.mp3", "g");
createAudio("ludificioEngine/audioFiles/piano/aS.mp3", "aS");
createAudio("ludificioEngine/audioFiles/piano/cS.mp3", "cS");
createAudio("ludificioEngine/audioFiles/piano/dS.mp3", "dS");
createAudio("ludificioEngine/audioFiles/piano/fS.mp3", "fS");
createAudio("ludificioEngine/audioFiles/piano/gS.mp3", "gS");
createAudio("ludificioEngine/audioFiles/8-Bit/jiggy.mp3", "jiggy");
createAudio("ludificioEngine/audioFiles/piano/littleNumbers.mp3", "littleNumbers");
createAudio("ludificioEngine/audioFiles/piano/whereIsMyMind.mp3", "whereIsMyMind");
createAudio("ludificioEngine/audioFiles/piano/stayInThedark.mp3", "stayInTheDark");
createAudio("ludificioEngine/audioFiles/piano/time.mp3", "time");
changeVolume("a", 1);
changeVolume("b", 1);
changeVolume("c", 1);
changeVolume("d", 1);
changeVolume("e", 1);
changeVolume("f", 1);
changeVolume("g", 1);
changeVolume("aS", 1);
changeVolume("cS", 1);
changeVolume("dS", 1);
changeVolume("fS", 1);
changeVolume("gS", 1);
changeVolume("littleNumbers", .70);
changeVolume("whereIsMyMind", .70);
changeVolume("time", 1);
changeVolume("stayInTheDark", .70);
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
	if(playing)
	{
		if(stri == "a")
		{
			document.getElementById("a").currentTime = 0;
			playSong("a");
		}
		if(stri == "s")
		{
			document.getElementById("b").currentTime = 0;
			playSong("b");
		}
		if(stri == "d")
		{
			document.getElementById("c").currentTime = 0;
			playSong("c");
		}
		if(stri == "f")
		{
			document.getElementById("d").currentTime = 0;
			playSong("d");
		}
		if(stri == "g")
		{
			document.getElementById("e").currentTime = 0;
			playSong("e");
		}
		if(stri == "h")
		{
			document.getElementById("f").currentTime = 0;
			playSong("f");
		}
		if(stri == "j")
		{
			document.getElementById("g").currentTime = 0;
			playSong("g");
		}
		if(stri == "w")
		{
			document.getElementById("aS").currentTime = 0;
			playSong("aS");
		}
		if(stri == "r")
		{
			document.getElementById("bS").currentTime = 0;
			playSong("cS");
		}
		if(stri == "t")
		{
			document.getElementById("dS").currentTime = 0;
			playSong("dS");
		}
		if(stri == "u")
		{
			document.getElementById("fS").currentTime = 0;
			playSong("fS");
		}
		if(stri == "i")
		{
			document.getElementById("gS").currentTime = 0;
			playSong("gS");
		}
	}
}
window.setInterval(function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawPassiveRectTexture(0, 0, canvas.width, canvas.height, "pianoKeys")
	if(shiftKey)
	{
		playSong("jiggy");
	}
	if(charCode == 46)
	{
		playSong("littleNumbers");
	}
	if(charCode == 32)
	{
		playSong("whereIsMyMind");
	}
	if(charCode == 37)
	{
		playSong("time");
	}
	if(charCode == 36)
	{
		playSong("stayInTheDark");
	}
	if(charCode == 220)
	{
		if(playing)
		{
			playing = false;
		}
		else if(playing == false)
		{
			playing = true;
		}
	}
	if(charCode == 8)
	{
		pauseSong("jiggy");
		pauseSong("littleNumbers");
		pauseSong("whereIsMyMind");
		pauseSong("time");
		pauseSong("stayInTheDark");
		resetSong("jiggy");
		resetSong("littleNumbers");
		resetSong("whereIsMyMind");
		resetSong("time");
		resetSong("stayInTheDark");
	}
	//drawText(canvas.width/4, 8*canvas.height/10, canvas.width/2, canvas.height/9, "piano", "ludificioEngine/text/fonts/8-bit/black/");
	drawPassiveRectTexture(mouseXPos, mouseYPos, 25, 25, "ludificioEngine/images/cursors/Cursor")
}, 50)
</script>
</body>
</html>