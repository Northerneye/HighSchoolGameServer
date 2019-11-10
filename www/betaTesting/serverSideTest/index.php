<html><!--server side test-->
<head>
<script src="../ludificioEngine/jquery-3.1.0"></script>
<!--<link rel="stylesheet" type="text/css" href="../ludificioEngine/noCursor.css"/><!---->
<link rel="stylesheet" type="text/css" href="../ludificioEngine/canvasStyle.css"/>
<script>
</script>
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
<script src="areaBasedWorldSample2D.js"></script>
<script src="textureAnimationAreaBased.js"></script>
<script src="areaBasedObjectAI.js"></script>
<script>
xhttp.open("POST", "checkUserAccount.php", false);
xhttp.send();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) 
	{
	}
}
xhttp.open("POST", "startUserAccount.php", false);
xhttp.send();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) 
	{
	}
}
var windowDirectory = window.location.href.replace('','');
window.setInterval(function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	sampleWorld1();
	cleanInput();
}, 10);
/**/
</script>
</body>
</html>