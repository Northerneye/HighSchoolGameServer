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
var windowDirectory = window.location.href.replace('/createAccount.php','');
var stri = "";
var userna = "";
var passwa = "";
var disppass = "";
var disppassa = "";
var letter = "";
var code = "";
var num = 0;
var usernameClick = false;
var passwordClick = false;
var codeClick = false;
var tried = false;
document.onkeydown = function(evt)
{
	tried = false;
	evt = evt || window.event;
	charCode = evt.keyCode || evt.which;
	if(charCode !== 8 && charCode !== 32)
	{
		stri = String.fromCharCode(charCode).toLowerCase();
	}
}
window.setInterval(function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	if (usernameClick == true)
	{	
		if (charCode == 8)
		{
			userna = "";
		}
		userna += stri;
		stri = "";
	}
	else if (codeClick == true)
	{
		if (charCode == 8)
		{
			code = "";
		}
		code += stri;
		stri = "";
	}
	else if (passwordClick == true)
	{
		for(var i = 0; i < stri.length; i++)
		{
			num = Math.floor((Math.random() * 27)+1);
			if(num == 1)
			{
				letter = "a";
			}
			if(num == 2)
			{
				letter = "b";
			}
			if(num == 3)
			{
				letter = "c";
			}
			if(num == 4)
			{
				letter = "d";
			}
			if(num == 5)
			{
				letter = "e";
			}
			if(num == 6)
			{
				letter = "f";
			}
			if(num == 7)
			{
				letter = "g";
			}
			if(num == 8)
			{
				letter = "h";
			}
			if(num == 9)
			{
				letter = "i";
			}
			if(num == 10)
			{
				letter = "j";
			}
			if(num == 11)
			{
				letter = "k";
			}
			if(num == 12)
			{
				letter = "l";
			}
			if(num == 13)
			{
				letter = "m";
			}
			if(num == 14)
			{
				letter = "n";
			}
			if(num == 15)
			{
				letter = "o";
			}
			if(num == 16)
			{
				letter = "p";
			}
			if(num == 17)
			{
				letter = "q";
			}
			if(num == 18)
			{
				letter = "r";
			}
			if(num == 19)
			{
				letter = "a";
			}
			if(num == 20)
			{
				letter = "s";
			}
			if(num == 21)
			{
				letter = "t";
			}
			if(num == 22)
			{
				letter = "u";
			}
			if(num == 23)
			{
				letter = "v";
			}
			if(num == 24)
			{
				letter = "w";
			}
			if(num == 25)
			{
				letter = "x";
			}
			if(num == 26)
			{
				letter = "y";
			}
			if(num == 27)
			{
				letter = "z";
			}
			disppassa += letter;
		}
		passwa += stri;
		stri = "";
	}
	if(isLeftMouseDown == true)
	{
		usernameClick = false;
		passwordClick = false;
		codeClick = false;
	}
	if (charCode == 8)
	{
		passwa = "";
		disppass = "";
		disppassa = "";
	}
	disppass = disppassa;
	if (charCode == 32)
	{
		disppass = passwa;
	}
	drawPassiveRect(0, 0, canvas.width, canvas.height, [175, 100, 0, 1]);
	if(mouseOver(canvas.width/9, canvas.height/16, canvas.width/5, canvas.height/9))
	{
		if(isLeftMouseDown == true)
		{
			usernameClick = true;
			passwordClick = false;
			codeClick = false;
		}
		drawPassiveRect(canvas.width/9, canvas.height/16, canvas.width/5, canvas.height/9, [55, 150, 200, 1]);
	}
	if(usernameClick == true)
	{
		drawPassiveRect(canvas.width/9, canvas.height/16, canvas.width/5, canvas.height/9, [100, 100, 100, 1]);
	}
	if(mouseOver(canvas.width/9, canvas.height/4, canvas.width/5, canvas.height/9))
	{
		if(isLeftMouseDown == true)
		{
			usernameClick = false;
			passwordClick = true;
			codeClick = false;
		}
		drawPassiveRect(canvas.width/9, canvas.height/4, canvas.width/5, canvas.height/9, [55, 150, 200, 1]);
	}
	if(passwordClick == true)
	{
		drawPassiveRect(canvas.width/9, canvas.height/4, canvas.width/5, canvas.height/9, [100, 100, 100, 1]);
	}
	if(mouseOver(canvas.width/9, 3*canvas.height/7, canvas.width/6, canvas.height/13.5))
	{
		if(isLeftMouseDown == true)
		{
			usernameClick = false;
			passwordClick = false;
			codeClick = true;
		}
		drawPassiveRect(canvas.width/9, 3*canvas.height/7, canvas.width/6, canvas.height/13.5, [55, 150, 200, 1]);
	}
	if(codeClick == true)
	{
		drawPassiveRect(canvas.width/9, 3*canvas.height/7, canvas.width/6, canvas.height/13.5, [100, 100, 100, 1]);
	}
	if(mouseOver(canvas.width/2-canvas.width/3/2, 2*canvas.height/3, canvas.width/3, canvas.height/9))
	{
		drawPassiveRect(canvas.width/2-canvas.width/3/2, 2*canvas.height/3, canvas.width/3, canvas.height/9, [55, 150, 200, 1]);
	}
	if(mouseOver(0, canvas.height/40, canvas.width/15, canvas.height/18))
	{
		drawPassiveRect(0, canvas.height/40, canvas.width/15, canvas.height/18, [175, 50, 50, 1]);
	}
	drawText(canvas.width/9, canvas.height/16, canvas.width/5, canvas.height/9, "Username:", "ludificioEngine/text/fonts/8-bit/black/");
	drawText(canvas.width/9+canvas.width/5, canvas.height/16, canvas.width/20*userna.length, canvas.height/9, userna, "ludificioEngine/text/fonts/8-bit/black/");
	drawText(canvas.width/9, canvas.height/4, canvas.width/5, canvas.height/9, "Password:", "ludificioEngine/text/fonts/8-bit/black/");
	drawText(canvas.width/9+canvas.width/5, canvas.height/4, canvas.width/20*passwa.length, canvas.height/9, disppass, "ludificioEngine/text/fonts/8-bit/black/");
	drawText(canvas.width/2-canvas.width/3/2, 2*canvas.height/3, canvas.width/3, canvas.height/9, "Create Account", "ludificioEngine/text/fonts/8-bit/black/");
	drawText(canvas.width/9, 3*canvas.height/7, canvas.width/6, canvas.height/13.5, "Code:", "ludificioEngine/text/fonts/8-bit/black/");
	drawText(canvas.width/9+canvas.width/6, 3*canvas.height/7, canvas.width/20*code.length, canvas.height/13.5, code, "ludificioEngine/text/fonts/8-bit/black/");
	drawText(0, canvas.height/40, canvas.width/15, canvas.height/18, "Back", "ludificioEngine/text/fonts/8-bit/black/");
	if(onRectButton(0, canvas.height/40, canvas.width/15, canvas.height/18))
	{ 
		window.location = windowDirectory;
	}
	if(onRectButton(canvas.width/2-canvas.width/3/2, 2*canvas.height/3, canvas.width/3, canvas.height/9) || charCode == 13)
	{ 
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) 
			{
				if(xhttp.responseText == true)
				{
					alert("account created")
					window.location = windowDirectory;
					isLeftMouseDown = false;
				}
				else if(tried == false)
				{
					alert("username has already been taken or code is invalid");
					tried = true;
				}
			}
		};
		xhttp.open("GET", "accountCreation.php?u="+userna+"&p="+passwa+"&c="+code, true);
		xhttp.send();
	}
	drawPassiveRectTexture(mouseXPos, mouseYPos, 25, 25, "ludificioEngine/images/cursors/Cursor")
	stri = "";
}, 10)
</script>
</body>
</html>