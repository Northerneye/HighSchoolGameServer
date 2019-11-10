var globalPos = [false, true];
var areas = [false, false, true];
var areaInit = [];
var playerHealth = 100;
var stamina = 100;
var magic = 98;
var mapping = false;
var currentTime = 0;
var timer1 = 0;
var timer2 = 0;
createAudio("magneticFeild.mp3", "magnet");
createAudio("magneticFeild.mp3", "magnet1");
createAudio("magneticFeild.mp3", "magnet2");
createAudio("magneticFeild.mp3", "magnet3");
createAudio("magneticFeild.mp3", "magnet4");
createAudio("magneticFeild.mp3", "magnet5");
createAudio("magneticFeild.mp3", "magnet6");
createAudio("../ludificioEngine/audioFiles/8-Bit/cheatCodes.mp3", "codes");
createAudio("../ludificioEngine/audioFiles/8-Bit/predestinedFate.mp3", "force");
createAudio("../ludificioEngine/audioFiles/8-Bit/raveBeat.mp3", "rave");
createAudio("../ludificioEngine/audioFiles/8-Bit/shinySea.mp3", "sea");
changeVolume("rave", .25);
changeVolume("codes", .50);
changeVolume("force", .8);
changeVolume("sea", .55);
function modifiedAreaControls(areaId)
{
	for (var i = 0; i <= maxSprites; i++)
	{
		if (spriteUser[areaId][i] == true)
		{
			if (charStr[jQuery.inArray("w", charStr)] == "w")
			{		
				dy[areaId][i] -= 3;
			}
			if (charStr[jQuery.inArray("s", charStr)] == "s")
			{
				dy[areaId][i] += 3;
			}
			if (charStr[jQuery.inArray("a", charStr)] == "a")
			{
				dx[areaId][i] -= 3;
			}
			if (charStr[jQuery.inArray("d", charStr)] == "d")
			{
				dx[areaId][i] += 3;
			}
			if (isLeftMouseDown == true && magic >= 100 && areaId !== 4 && areaId !== 5 && areaId !== 7)
			{
				if(areaId == 6)
				{
					if((mouseXPos-spriteDrawAreaX1[areaId][findUser(areaId)]+areaSpriteX1[areaId][findUser(areaId)] > 0 && mouseXPos-spriteDrawAreaX1[areaId][findUser(areaId)]+areaSpriteX1[areaId][findUser(areaId)] < 200 && mouseYPos-spriteDrawAreaY1[areaId][findUser(areaId)]+areaSpriteY1[areaId][findUser(areaId)] > 275 && mouseYPos-spriteDrawAreaY1[areaId][findUser(areaId)]+areaSpriteY1[areaId][findUser(areaId)] < 475))
					{
						tpRectSprite(mouseXPos-spriteDrawAreaX1[areaId][findUser(areaId)]-50+areaSpriteX1[areaId][findUser(areaId)], mouseYPos-spriteDrawAreaY1[areaId][findUser(areaId)]-50+areaSpriteY1[areaId][findUser(areaId)], 100, 100, areaId, findUser(areaId));
						isLeftMouseDown = false;
						textClicked = true;
					}
				}
				else{
					tpRectSprite(mouseXPos-spriteDrawAreaX1[areaId][findUser(areaId)]-50+areaSpriteX1[areaId][findUser(areaId)], mouseYPos-spriteDrawAreaY1[areaId][findUser(areaId)]-50+areaSpriteY1[areaId][findUser(areaId)], 100, 100, areaId, findUser(areaId));
					magic = 0;
				}
			}
			/*if (charStr[jQuery.inArray("x", charStr)] == "x")
			{
				zoom(1.1, areaId);
				dx[areaId][i] = 0;
				dy[areaId][i] = 0;
			}
			if (charStr[jQuery.inArray("z", charStr)] == "z")
			{
				zoom(.9, areaId)
				dx[areaId][i] = 0;
				dy[areaId][i] = 0;
			}*/
			if (isRightMouseDown)
			{
				mapping = true;
			}
			if (shiftKey && stamina > 0)
			{
				dx[areaId][i] *= 2;
				dy[areaId][i] *= 2;
				stamina -= .6;
			}
		}
		areaCollided[areaId][i] = false;
	}
}
function fixPlayer(areaId)
{
	tpRectSprite(areaSpriteX1[areaId][0], areaSpriteY1[areaId][0], 100, 100, areaId, 0);
}
function survivalWorld()
{
	if (stamina < 100)
	{
		stamina += .3;
	}
	if (magic < 100)
	{
		magic += .2;
	}
	if(globalPos[0])
	{
		if(areas[0])
		{
			survivalArea1();
		}
		else if(areas[1])
		{
			survivalWin1();
		}
	}
	else if(globalPos[1])
	{
		if(areas[2])
		{
			survivalArea2();
		}
		else if(areas[3])
		{
			survivalWin2();
		}
	}
}
function survivalArea1()
{
	playSong("force");
	mapping = false;
	areaObjectAI();
	modifiedAreaControls(0);
	if(rectContact(0, 2, 0))
	{
		isRightMouseDown = false;
		timeSong("codes", 2.5);
		pauseSong("force");
		xhttp.open("GET", "award.php?lvl=1&dif="+difficulty, true);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) 
			{
			}
		};
		areas[0] = false;
		areas[1] = true;
	}
	areaTextureRect(5, 300, 100, 100, "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png", true, true, 0, 0);
	areaTextureRect(2800, 2800, 100, 100, "../ludificioEngine/images/16-bit/portal1.png", true, false, 2, 0);
	areaRect(300, 5, 50, 100, [255, 0, 0, 1], true, false, 4, 0);
	areaRect(5, 5, 100, 100, [10, 150, 150, 1], true, false, 6, 0);
	areaTextureRect(500, 500, 100, 100, "magnetUp.png", true, false, 8, 0);
	areaRect(800, 300, 100, 100, [255, 150, 150, 1], true, false, 10, 0);
	areaRect(600, 800, 100, 100, [10, 255, 150, 1], true, false, 12, 0);
	areaRect(3000, 2000, 100, 100, [10, 150, 255, 1], true, false, 14, 0);
	areaRect(2000, 1500, 100, 100, [100, 255, 200, 1], true, false, 16, 0);
	areaRoom(3000, 4000, 900, 900, 50, ["left","top","right"], [400,700,625], [400,150,125], [0, 0, 255, 1], 18, 0);
	areaRect(0, 0, 5000, 5000, [100, 200, 100, 1], false, false, 34, 0);
	drawArea(5000, 5000, 0);
	textureAnimation();
	openWorldCamera(0);
	stopAreaUser(0);
	drawPassiveRect(10, canvas.height-70, playerHealth*4, 30, [255, 0, 0, 1]);
	drawPassiveRectOutline(10, canvas.height-70, 400, 30, [0, 0, 0, 1]);
	drawPassiveRect(10, canvas.height-35, stamina*4, 30, [0, 255, 0, 1]);
	drawPassiveRectOutline(10, canvas.height-35, 400, 30, [0, 0, 0, 1]);
	drawPassiveRect(10, canvas.height-105, magic*4, 30, [0, 0, 255, 1]);
	drawPassiveRectOutline(10, canvas.height-105, 400, 30, [0, 0, 0, 1]);
	drawText(155, canvas.height-35, 100, 30, "stamina", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(155, canvas.height-70, 100, 30, "health", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(155, canvas.height-105, 100, 30, "teleport", "../ludificioEngine/text/fonts/8-bit/black/");
	if(mapping)
	{
		map(canvas.width-300, canvas.height-300, 300, 300, 0);
		drawPassiveRectOutline(canvas.width-300, canvas.height-300, 300, 300, [0, 0, 0, 1])
	}
}
var color1 = 0;
var color2 = 255;
var color3 = 150;
var color11 = 0;
var color12 = 255;
var color13 = 150;
function survivalWin1()
{
	spriteDrawAreaColorR[1][4] = Math.floor(255*Math.random());
	spriteDrawAreaColorG[1][4] = Math.floor(255*Math.random());
	spriteDrawAreaColorB[1][4] = Math.floor(255*Math.random());
	spriteDrawAreaColorR[1][5] = Math.floor(255*Math.random());
	spriteDrawAreaColorG[1][5] = Math.floor(255*Math.random());
	spriteDrawAreaColorB[1][5] = Math.floor(255*Math.random());
	playSong("codes");
	magic = 98;
	modifiedAreaControls(1);
	areaObjectAI();
	areaTextureRect(0, 0, 100, 100, "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png", true, true, 0, 1);
	areaRect(2100, 1400, 100, 100, [Math.floor(255*Math.random()), Math.floor(255*Math.random()), Math.floor(255*Math.random()), 1], false, false, 4, 1);
	areaRect(500, 1000, 100, 100, [0, 225, 150, 1], false, false, 6, 1);
	areaRect(1500, 600, 100, 100, [0, 225, 150, 1], false, false, 8, 1);
	areaRect(0, 0, 2200, 1500, [0, 255, 150, 1], false, false, 10, 1);
	drawArea(2200, 1500, 1);
	textureAnimation();
	openWorldCamera(1);
	stopAreaUser(1);
	drawPassiveRect(10, canvas.height-70, playerHealth*4, 30, [255, 0, 0, 1]);
	drawPassiveRectOutline(10, canvas.height-70, 400, 30, [0, 0, 0, 1]);
	drawPassiveRect(10, canvas.height-35, stamina*4, 30, [0, 255, 0, 1]);
	drawPassiveRectOutline(10, canvas.height-35, 400, 30, [0, 0, 0, 1]);
	drawPassiveRect(10, canvas.height-105, magic*4, 30, [0, 0, 255, 1]);
	drawPassiveRectOutline(10, canvas.height-105, 400, 30, [0, 0, 0, 1]);
	drawText(155, canvas.height-35, 100, 30, "stamina", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(155, canvas.height-70, 100, 30, "health", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(155, canvas.height-105, 100, 30, "teleport", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(canvas.width/2-75, canvas.height-110, 150, 75, "DOWNRIGHT", "../ludificioEngine/text/fonts/8-bit/black/");
	if(mouseOver(canvas.width/2-400, canvas.height/2+100, 800, 100))
	{
		drawPassiveRect(canvas.width/2-400, canvas.height/2+100, 800, 100, [200, 50, 0, 1]);
	}
	drawText(canvas.width/2-300, canvas.height/2-100, 600, 100, "YOU WIN", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(canvas.width/2-400, canvas.height/2+100, 800, 100, "Next Level", "../ludificioEngine/text/fonts/8-bit/black/");
	document.body.style.cursor = 'unset';
	if(isRightMouseDown)
	{
		document.body.style.cursor = 'none';
		drawText(mouseXPos-canvas.width/20, mouseYPos-canvas.height/60, canvas.width/10, canvas.height/30, "DOWNRIGHT", "../ludificioEngine/text/fonts/8-bit/white/");
	}
	if(onRectButton(canvas.width/2-400, canvas.height/2+100, 800, 100))
	{
		pauseSong("codes");
		areas[1] = false;
		areas[2] = true;
		globalPos[0] = false;
		globalPos[1] = true;
	}
	if(rectContact(0, 4, 1))
	{
		if(timer1 < 10)
		{	
			charStr[jQuery.inArray("d", charStr)] == "";
		}
		//pauseSong("codes");
		//resetSong("codes");
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
		drawText(canvas.width/2-canvas.width/16, canvas.height/2-canvas.height/5, canvas.width/8, canvas.height/10, "press D", "../ludificioEngine/text/fonts/8-bit/black/");
		drawText(canvas.width/2-canvas.width/6, canvas.height/2-canvas.height/10, canvas.width/3, canvas.height/10, "and look in the answer", "../ludificioEngine/text/fonts/8-bit/black/");
		drawText(canvas.width/2-canvas.width/12, canvas.height/2, canvas.width/6, canvas.height/10, "for a new answer", "../ludificioEngine/text/fonts/8-bit/black/");
		if(charStr[jQuery.inArray("d", charStr)] == "d")
		{
			drawText(canvas.width/2+canvas.width/12, canvas.height/2-canvas.height/5, canvas.width/6, canvas.height/10, "at home", "../ludificioEngine/text/fonts/8-bit/black/");
		}
		if(difficulty == 7)
		{
			drawPassiveRect(0, 0, canvas.width, canvas.height, [color11, color12, color13, 1]);
			drawPassiveRect(0, 0, canvas.width, canvas.height, [color1, color2, color3, timer1/200]);
			if(mouseOver(canvas.width/2-400, canvas.height/2+100, 800, 100))
			{
				drawPassiveRect(canvas.width/2-400, canvas.height/2+100, 800, 100, [200, 50, 0, 1]);
			}
			drawText(canvas.width/2-400, canvas.height/2+100, 800, 100, "Next Level", "../ludificioEngine/text/fonts/8-bit/white/");
			drawText(canvas.width/2-canvas.width/12, canvas.height/2-canvas.height/5, canvas.width/6, canvas.height/10, "nice job so far", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(canvas.width/2-canvas.width/16, canvas.height/2-canvas.height/5+canvas.height/9, canvas.width/8, canvas.height/10, "hug the top", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(canvas.width/2-canvas.width/8, canvas.height/2-canvas.height/5+2*canvas.height/9, canvas.width/4, canvas.height/10, "to get to the tunnel", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(canvas.width/2-canvas.width/6, canvas.height/2-canvas.height/5+3*canvas.height/9, canvas.width/3, canvas.height/10, "and set your sights to the sun", "../ludificioEngine/text/fonts/8-bit/black/");
		}
		if(difficulty !== 7)
		{
			if(mouseOver(canvas.width/2-400, canvas.height/2+100, 800, 100))
			{
				drawPassiveRect(canvas.width/2-400, canvas.height/2+100, 800, 100, [200, 50, 0, 1]);
			}
			drawText(canvas.width/2-400, canvas.height/2+100, 800, 100, "Next Level", "../ludificioEngine/text/fonts/8-bit/black/");
		}
	}
}
function survivalArea2()
{
	playSong("rave");
	mapping = false;
	modifiedAreaControls(2);
	areaObjectAI();
	if(rectContact(0, 2, 2))
	{
		pauseSong("rave");
		timeSong("sea", 1.5);
		tpRectSprite(5, 300, 100, 100, 2, findUser(2));
		xhttp.open("GET", "award.php?lvl=2&dif="+difficulty, true);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) 
			{
			}
		};
		areas[2] = false;
		areas[3] = true;
	}
	areaTextureRect(5, 300, 100, 100, "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png", true, true, 0, 2);
	areaTextureRect(2800, 1500, 100, 100, "../ludificioEngine/images/16-bit/portal1.png", true, false, 2, 2);
	areaRect(300, 5, 50, 100, [255, 0, 0, 1], true, false, 4, 2);
	areaRect(5, 5, 100, 100, [10, 150, 150, 1], true, false, 6, 2);
	areaTextureRect(1500, 500, 100, 100, "magnetUp.png", true, false, 8, 2);
	areaTextureRect(2000, 1000, 100, 100, "magnetUp.png", true, false, 10, 2);
	areaTextureRect(2000, 500, 100, 100, "magnetUp.png", true, false, 12, 2);
	areaTextureRect(1500, 1000, 100, 100, "magnetUp.png", true, false, 14, 2);
	areaTextureRect(2500, 2000, 100, 100, "magnetUp.png", true, false, 16, 2);
	areaTextureRect(2000, 2000, 100, 100, "magnetUp.png", true, false, 18, 2);
	areaTextureRect(2500, 1500, 100, 100, "magnetUp.png", true, false, 20, 2);
	areaRect(800, 300, 100, 100, [255, 150, 150, 1], true, false, 22, 2);
	areaRect(600, 800, 100, 100, [10, 255, 150, 1], true, false, 23, 2);
	areaRect(2000, 1500, 100, 100, [100, 255, 200, 1], true, false, 26, 2);
	areaRect(0, 0, 3000, 3000, [100, 200, 100, 1], false, false, 28, 2);
	drawArea(3000, 3000, 2);
	textureAnimation();
	openWorldCamera(2);
	stopAreaUser(2);
	drawPassiveRect(10, canvas.height-70, playerHealth*4, 30, [255, 0, 0, 1]);
	drawPassiveRectOutline(10, canvas.height-70, 400, 30, [0, 0, 0, 1]);
	drawPassiveRect(10, canvas.height-35, stamina*4, 30, [0, 255, 0, 1]);
	drawPassiveRectOutline(10, canvas.height-35, 400, 30, [0, 0, 0, 1]);
	drawPassiveRect(10, canvas.height-105, magic*4, 30, [0, 0, 255, 1]);
	drawPassiveRectOutline(10, canvas.height-105, 400, 30, [0, 0, 0, 1]);
	drawText(155, canvas.height-35, 100, 30, "stamina", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(155, canvas.height-70, 100, 30, "health", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(155, canvas.height-105, 100, 30, "teleport", "../ludificioEngine/text/fonts/8-bit/black/");
	if(mapping)
	{
		map(canvas.width-300, canvas.height-300, 300, 300, 2);
		drawPassiveRectOutline(canvas.width-300, canvas.height-300, 300, 300, [0, 0, 0, 1]);
	}
}
function survivalWin2()
{
	playSong("sea");
	modifiedAreaControls(3);
	areaObjectAI();
	areaTextureRect(0, 0, 100, 100, "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png", true, true, 0, 3);
	areaRect(500, 1000, 100, 100, [0, 225, 150, 1], false, false, 4, 3);
	areaRect(1500, 600, 100, 100, [0, 225, 150, 1], false, false, 6, 3);
	areaRect(0, 0, 2200, 1500, [0, 255, 150, 1], false, false, 8, 3);
	drawArea(2200, 1500, 3);
	textureAnimation();
	openWorldCamera(3);
	stopAreaUser(3);
	drawPassiveRect(10, canvas.height-70, playerHealth*4, 30, [255, 0, 0, 1]);
	drawPassiveRectOutline(10, canvas.height-70, 400, 30, [0, 0, 0, 1]);
	drawPassiveRect(10, canvas.height-35, stamina*4, 30, [0, 255, 0, 1]);
	drawPassiveRectOutline(10, canvas.height-35, 400, 30, [0, 0, 0, 1]);
	drawPassiveRect(10, canvas.height-105, magic*4, 30, [0, 0, 255, 1]);
	drawPassiveRectOutline(10, canvas.height-105, 400, 30, [0, 0, 0, 1]);
	drawText(155, canvas.height-35, 100, 30, "stamina", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(155, canvas.height-70, 100, 30, "health", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(155, canvas.height-105, 100, 30, "teleport", "../ludificioEngine/text/fonts/8-bit/black/");
	if(mouseOver(canvas.width/2-300, canvas.height/2-200, 600, 100))
	{
		drawPassiveRect(canvas.width/2-300, canvas.height/2-200, 600, 100, [200, 50, 0, 1]);
	}
	drawText(canvas.width/2-300, canvas.height/2, 600, 100, "YOU WIN", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(canvas.width/2-300, canvas.height/2-200, 600, 100, "Main Menu", "../ludificioEngine/text/fonts/8-bit/black/");
	if(onRectButton(canvas.width/2-300, canvas.height/2-200, 600, 100))
	{
		resetSong("treasure");
		resetSong("wont");
		lost = false;
		pauseSong("sea");
		areas[1] = true;
		areas[2] = false;
		globalPos[0] = true;
		globalPos[1] = false;
		introduction = true;
		startSurvival = false;
		survival = false;
		isLeftMouseDown = false;
	}
	if(difficulty == 7)
	{
		if(timer1 >= 0 && timer1 <= 20)
		{
			drawPassiveRectTexture(0, 0, canvas.width, canvas.height, "quantumTunnel1")
		}
		else if(timer1 >= 20 && timer1 <= 40)
		{
			drawPassiveRectTexture(0, 0, canvas.width, canvas.height, "quantumTunnel2")
		}
		else if(timer1 >= 40 && timer1 <= 60)
		{
			drawPassiveRectTexture(0, 0, canvas.width, canvas.height, "quantumTunnel3")
		}
		else if(timer1 >= 60 && timer1 <= 80)
		{
			drawPassiveRectTexture(0, 0, canvas.width, canvas.height, "quantumTunnel4")
		}
		if(timer1 >= 80)
		{
			timer1 = 0;
		}
		timer1++;
		xhttp.open("POST", "teleportNow.php", false);
		xhttp.send();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200)
			{
			}
		}
		if(timer1 > 0 && timer1 < 10 || timer1 > 20 && timer1 < 30 || timer1 > 40 && timer1 < 50 || timer1 > 60 && timer1 < 70)
		{
			drawText(canvas.width/2-400, canvas.height/2-150, 800, 150, "QUANTUM TUNNELER", "../ludificioEngine/text/fonts/8-bit/white/");
			drawText(canvas.width/2-200, canvas.height/2+50, 400, 150, "UNLOCKED", "../ludificioEngine/text/fonts/8-bit/white/");
		}
		else if(timer1 > 10 && timer1 < 20 || timer1 > 30 && timer1 < 40 || timer1 > 50 && timer1 < 60 || timer1 > 70 && timer1 < 80)
		{
			drawText(canvas.width/2-400, canvas.height/2-150, 800, 150, "QUANTUM TUNNELER", "../ludificioEngine/text/fonts/8-bit/black/");
			drawText(canvas.width/2-200, canvas.height/2+50, 400, 150, "UNLOCKED", "../ludificioEngine/text/fonts/8-bit/black/");
		}
		drawText(canvas.width/2-200, canvas.height/2+210, 400, 75, "press T", "../ludificioEngine/text/fonts/8-bit/black/");
		if(charStr[jQuery.inArray("t", charStr)] == "t")
		{
			drawPassiveRect(0, 0, canvas.width, canvas.height, [0, 255, 150, 1]);
			drawText(canvas.width/2-400, canvas.height/2-100, 800, 200, "NOT HERE", "../ludificioEngine/text/fonts/8-bit/black/");
		}
	}
} 
createAudio("../ludificioEngine/audioFiles/8-Bit/melancholicHill.mp3", "hill");
createAudio("../ludificioEngine/audioFiles/8-Bit/chodgeDarger.mp3", "chodge");
createAudio("../ludificioEngine/audioFiles/8-Bit/swankyParty.mp3", "swanky");
createAudio("../ludificioEngine/audioFiles/8-Bit/pressStart.mp3", "start");
changeVolume("hill", .6);
changeVolume("chodge", .4);
changeVolume("swanky", .45);
changeVolume("start", .8);
function puzzleWorld()
{
	if (stamina < 100)
	{
		stamina += 1;
	}
	if(stamina > 100)
	{
		stamina = 100;
	}
	if (magic < 100)
	{
		magic += .5;
	}
	if(globalPos[2])
	{
		if(areas[0])
		{
			puzzleArea1();
		}
		else if(areas[1])
		{
			puzzleWin1();
		}
	}
	else if(globalPos[3])
	{
		if(areas[2])
		{
			puzzleArea2();
		}
		else if(areas[3])
		{
			puzzleWin2();
		}
	}
}
function fixArea(areaId)
{
	if(areaId == 4)
	{
		for(i = 4; i <= 30; i += 2)
		{
			if(i == 26)
			{}
			else{
				resetRectSprite(4, i);
			}
		}
		for(i = 2; i <= 500; i++)
		{
			if(i == 2 || i == 3)
			{}
			else
			{
				dx[4][i] = 0;
				dy[4][i] = 0;
			}
		}
	}
	if(areaId == 6)
	{
		for(i = 6; i <= 30; i += 2)
		{
			resetRectSprite(6, i);
		}
		for(i = 2; i <= 500; i++)
		{
			if(i == 2 || i == 3)
			{}
			else
			{
				dx[6][i] = 0;
				dy[6][i] = 0;
			}
		}
	}
}
var textClicked = false;
function puzzleArea1()
{
	if(timer2 >= 50)
	{
		fixArea(4);
		fixPlayer(4);
		timer2 = 0;
	}
	else{
		timer2 += 1;
	}
	playSong("hill");
	mapping = false;
	areaObjectAI();
	modifiedAreaControls(4);
	if(rectContact(2, 26, 4))
	{
		textClicked = false;
		pauseSong("hill");
		areas[0] = false;
		areas[1] = true;
	}
	areaTextureRect(200, 200, 100, 100, "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png", true, true, 0, 4);
	areaTextureRect(500, 500, 100, 100, "magnetUp.png", true, false, 2, 4);
	areaRoom(250, 300, 1605, 1500, 100, [], [], [], [0, 255, 150, 1], 4, 4)
	areaRect(1300, 1000, 450, 95, [0, 255, 150, 1], true, false, 20, 4);
	areaRect(1000, 1300, 100, 450, [0, 255, 150, 1], true, false, 22, 4);
	areaRect(1400, 1100, 100, 175, [0, 255, 150, 1], true, false, 24, 4);
	areaTextureRect(1600, 1150, 100, 100, "../ludificioEngine/images/16-bit/portal1.png", true, false, 26, 4);
	areaRect(0, 0, 2000, 2000, [100, 100, 150, 1], false, false, 28, 4);
	drawArea(2000, 2000, 4);
	textureAnimation();
	openWorldCamera(4);
	stopAreaUser(4);
	drawPassiveRect(10, canvas.height-70, playerHealth*4, 30, [255, 0, 0, 1]);
	drawPassiveRectOutline(10, canvas.height-70, 400, 30, [0, 0, 0, 1]);
	drawPassiveRect(10, canvas.height-35, stamina*4, 30, [0, 255, 0, 1]);
	drawPassiveRectOutline(10, canvas.height-35, 400, 30, [0, 0, 0, 1]);
	drawText(155, canvas.height-35, 100, 30, "stamina", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(155, canvas.height-70, 100, 30, "health", "../ludificioEngine/text/fonts/8-bit/black/");
	if(textClicked == false)
	{
		drawText(canvas.width/2-400, canvas.height/2-75, 800, 150, "touch the magnet to the portal", "../ludificioEngine/text/fonts/8-bit/black/");
		drawText(canvas.width/2-100, canvas.height/2+75, 200, 50, "click to remove", "../ludificioEngine/text/fonts/8-bit/black/");
	}
	if(isLeftMouseDown == true)
	{
		textClicked = true;
	}
	if(mapping)
	{
		map(canvas.width-300, canvas.height-300, 300, 300, 4);
		drawPassiveRectOutline(canvas.width-300, canvas.height-300, 300, 300, [0, 0, 0, 1])
	}
}
function puzzleWin1()
{
	playSong("swanky");
	modifiedAreaControls(5);
	areaObjectAI();
	areaTextureRect(0, 0, 100, 100, "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png", true, true, 0, 5);
	areaRect(0, 0, 1500, 1000, [100, 100, 150, 1], false, false, 4, 5);
	drawArea(1500, 1000, 5);
	textureAnimation();
	openWorldCamera(5);
	stopAreaUser(5);
	drawPassiveRect(10, canvas.height-70, playerHealth*4, 30, [255, 0, 0, 1]);
	drawPassiveRectOutline(10, canvas.height-70, 400, 30, [0, 0, 0, 1]);
	drawPassiveRect(10, canvas.height-35, stamina*4, 30, [0, 255, 0, 1]);
	drawPassiveRectOutline(10, canvas.height-35, 400, 30, [0, 0, 0, 1]);
	drawText(155, canvas.height-35, 100, 30, "stamina", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(155, canvas.height-70, 100, 30, "health", "../ludificioEngine/text/fonts/8-bit/black/");
	if(mouseOver(canvas.width/2-400, canvas.height/2+100, 800, 100))
	{
		drawPassiveRect(canvas.width/2-400, canvas.height/2+100, 800, 100, [0, 150, 200, 1]);
	}
	drawText(canvas.width/2-300, canvas.height/2-100, 600, 100, "YOU WIN", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(canvas.width/2-400, canvas.height/2+100, 800, 100, "Next Level", "../ludificioEngine/text/fonts/8-bit/black/");
	if(onRectButton(canvas.width/2-400, canvas.height/2+100, 800, 100))
	{
		pauseSong("swanky");
		isLeftMouseDown = false;
		areas[1] = false;
		areas[2] = true;
		globalPos[2] = false;
		globalPos[3] = true;
	}
}
function puzzleArea2()
{
	if(timer2 >= 50)
	{
		fixArea(6);
		fixPlayer(6);
		timer2 = 0;
	}
	else{
		timer2 += 1;
	}
	magic = 100;
	playSong("chodge");
	mapping = false;
	modifiedAreaControls(6);
	areaObjectAI();
	if(rectContact(2, 4, 6))
	{
		pauseSong("chodge");
		areas[2] = false;
		areas[3] = true;
	}
	areaTextureRect(600, 100, 100, 100, "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png", true, true, 0, 6);
	areaTextureRect(600, 550, 100, 100, "magnetUp.png", true, false, 2, 6);
	areaTextureRect(115, 550, 100, 100, "../ludificioEngine/images/16-bit/portal1.png", true, false, 4, 6);
	areaRoom(200, 200, 750, 750, 50, ["left"], [350], [150], [0, 255, 150, 1], 6, 6)
	areaRect(5, 475, 190, 50, [0, 255, 150, 1], true, false, 22, 6);
	areaRect(5, 675, 190, 50, [0, 255, 150, 1], true, false, 24, 6);
	areaRect(0, 275, 200, 200, [0, 100, 200, 1], false, false, 26, 6);
	areaRect(0, 0, 1600, 1250, [100, 100, 150, 1], false, false, 100, 6);
	drawArea(1600, 1250, 6);
	textureAnimation();
	openWorldCamera(6);
	stopAreaUser(6);
	if(textClicked == false)
	{
		drawText(canvas.width/2-400, canvas.height/2-75, 800, 150, "you can teleport to the", "../ludificioEngine/text/fonts/8-bit/black/");
		drawText(canvas.width/2-250, canvas.height/2+75, 500, 150, "blue areas by clicking", "../ludificioEngine/text/fonts/8-bit/black/");
	}
	if(isLeftMouseDown == true)
	{
		textClicked = true;
	}
	drawPassiveRect(10, canvas.height-70, playerHealth*4, 30, [255, 0, 0, 1]);
	drawPassiveRectOutline(10, canvas.height-70, 400, 30, [0, 0, 0, 1]);
	drawPassiveRect(10, canvas.height-35, stamina*4, 30, [0, 255, 0, 1]);
	drawPassiveRectOutline(10, canvas.height-35, 400, 30, [0, 0, 0, 1]);
	drawText(155, canvas.height-35, 100, 30, "stamina", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(155, canvas.height-70, 100, 30, "health", "../ludificioEngine/text/fonts/8-bit/black/");
	if(mapping)
	{
		map(canvas.width-300, canvas.height-300, 300, 400, 6);
		drawPassiveRectOutline(canvas.width-300, canvas.height-300, 300, 400, [0, 0, 0, 1]);
	}
}
function puzzleWin2()
{
	playSong("start");
	modifiedAreaControls(7);
	areaObjectAI();
	areaTextureRect(0, 0, 100, 100, "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png", true, true, 0, 7);
	areaRect(0, 0, 1500, 1000, [100, 100, 150, 1], false, false, 4, 7);
	drawArea(1500, 1000, 7);
	textureAnimation();
	openWorldCamera(7);
	stopAreaUser(7);
	drawPassiveRect(10, canvas.height-70, playerHealth*4, 30, [255, 0, 0, 1]);
	drawPassiveRectOutline(10, canvas.height-70, 400, 30, [0, 0, 0, 1]);
	drawPassiveRect(10, canvas.height-35, stamina*4, 30, [0, 255, 0, 1]);
	drawPassiveRectOutline(10, canvas.height-35, 400, 30, [0, 0, 0, 1]);
	if(mouseOver(canvas.width/2-300, canvas.height/2-200, 600, 100))
	{
		drawPassiveRect(canvas.width/2-300, canvas.height/2-200, 600, 100, [125, 125, 0, 1]);
	}
	drawText(155, canvas.height-35, 100, 30, "stamina", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(155, canvas.height-70, 100, 30, "health", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(canvas.width/2-300, canvas.height/2, 600, 100, "YOU WIN", "../ludificioEngine/text/fonts/8-bit/black/");
	drawText(canvas.width/2-300, canvas.height/2-200, 600, 100, "Main Menu", "../ludificioEngine/text/fonts/8-bit/black/");
	if(onRectButton(canvas.width/2-300, canvas.height/2-200, 600, 100))
	{
		pauseSong("start");
		lost = false;
		resetSong("treasure");
		resetSong("wont");
		areas[1] = true;
		areas[2] = false;
		globalPos[0] = true;
		globalPos[1] = false;
		introduction = true;
		startPuzzle = false;
		survival = false;
		isLeftMouseDown = false;
	}
}