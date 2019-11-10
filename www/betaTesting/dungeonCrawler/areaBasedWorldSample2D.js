var globalPos = [true];
var areas = [true];
var areaInit = [];
var mapping = false;
var localX1 = 0;
var localY1 = 0;
var localX2 = 0;
var localY2 = 0;
var localX3 = 0;
var localY3 = 0;
var localID = 0;
var localString = "";
var localString2 = "";
var localString3 = "";
var localCount = 0;
createAudio("../ludificioEngine/audioFiles/8-Bit/deepFourths.mp3", "fourths");
changeVolume("fourths", .50);
function modifiedControls()
{
	for (var i = 0; i <= maxSprites; i++)
	{
		if (spriteUser[areaId][i] == true)
		{
			if (charStr[jQuery.inArray("w", charStr)] == "w")
			{		
				dy[areaId][i] = -6;
			}
			if (charStr[jQuery.inArray("s", charStr)] == "s")
			{
				dy[areaId][i] = 6;
			}
			if (charStr[jQuery.inArray("a", charStr)] == "a")
			{
				dx[areaId][i] = -6;
			}
			if (charStr[jQuery.inArray("d", charStr)] == "d")
			{
				dx[areaId][i] = 6;
			}
			if (charStr[jQuery.inArray("l", charStr)] == "l")
			{
				dx[areaId][i] *= 2;
				dy[areaId][i] *= 2;
			}
		}
		areaCollided[areaId][i] = false;
	}
}
function sampleWorld1()
{
	if(globalPos[0])
	{
		if(areas[0])
		{
			sampleArea1();
		}
		else if(areas[1])
		{
			sampleArea2();
		}
	}
}
function updateServerPlayers(areaId)
{
	localX1 = 0;
	localY1 = 0;
	localX2 = 0;
	localY2 = 0;
	localX3 = 0;
	localY3 = 0;
	localString = "";
	localString2 = "";
	localString3 = "";
	playerCount = 0;
	xhttp.open("POST", "getPlayersVertecies.php?x1="+areaSpriteX1[areaId][0]+"&y1="+areaSpriteY1[areaId][0]+"&x2="+areaSpriteX2[areaId][0]+"&y2="+areaSpriteY2[areaId][0]+"&x3="+areaSpriteX3[areaId][0]+"&y3="+areaSpriteY3[areaId][0]+"&dx="+dx[areaId][0]+"&dy="+dy[areaId][0]+"&_=" + Math.random(), false);
	xhttp.send();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) 
		{	playerCount = 0;
			localString = xhttp.responseText;
			while(localString !== "")
			{
				for(i = 0; i <= 5; i++)
				{
					if(localString.charAt(0) == " ")
					{
						localString2 = localString;
						localString = "";
						for(j = 1; j <= localString2.length-1; j++)
						{
							localString += localString2.charAt(j);
						}
					}
					localString3 = "";
					while(true)
					{
						if(localString.charAt(0) == " " || localString.length == 0)
						{
							if(i==0)
							{
								localX1 = Number(localString3);
							}
							else if(i==1)
							{
								localY1 = Number(localString3);
							}
							else if(i==2)
							{
								localX2 = Number(localString3);
							}
							else if(i==3)
							{
								localY2 = Number(localString3);
							}
							else if(i==4)
							{
								localX3 = Number(localString3);
							}
							else if(i==5)
							{
								localY3 = Number(localString3);
							}
							break;
						}
						else
						{
							localString3 += localString.charAt(0);
							localString2 = localString;
							localString = "";
							for(j = 1; j <= localString2.length-1; j++)
							{
								localString += localString2.charAt(j);
							}
						}
					}
				}
				if(playerCount == 0 && playerInit[areaId] !== false)
				{
					areaSpriteX1[areaId][playerCount] = localX1;
					areaSpriteY1[areaId][playerCount] = localY1;
					areaSpriteX2[areaId][playerCount] = localX2;
					areaSpriteY2[areaId][playerCount] = localY2;
					areaSpriteX3[areaId][playerCount] = localX3;
					areaSpriteY3[areaId][playerCount] = localY3;
					playerInit[areaId] = false;
				}
				if(playerCount !== 0)
				{
					tpRectSprite(localX1, localY1, localX2-localX1, localY3-localY1, areaId, playerCount);
				}
				playerCount += 2;
			}
			playerCount -= 2;
		}
	};
}
setInterval(function(){updateServerPlayers(0)}, 30);
setInterval(function(){fixPlayer(0)}, 1000);
function sampleArea1()
{
	playSong("fourths");
	modifiedControls();
	displayRectPlayers(0, [0, 0, 255, 1]);
	areaRect(100, 100, 100, 100, [0, 255, 0, 1], true, false, 30, 0);
	areaRoom(0, 0, 1000, 1000, 50, ["right"], [100], [150], [0, 255, 255, 1], 32, 0);
	areaRoom(1000, 0, 1000, 1000, 50, ["left"], [100], [150], [0, 255, 255, 1], 48, 0);
	areaRect(0, 0, 1500, 1000, [100, 100, 100, 1], false, false, 50, 0);
	drawArea(3000, 3000, 0);
	openWorldCamera(0);
	stopAreaUser(0);
	if(mouseOver(0, 0, canvas.width/20, canvas.height/20))
	{
		drawPassiveRect(0, 0, canvas.width/20, canvas.height/20, [200, 125, 125, .5]);
		if(isLeftMouseDown)
		{
			xhttp.open("POST", "removeUser.php", false);
			xhttp.send();
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) 
				{
				}
			}
			window.location = windowDirectory.replace("dungeonCrawler/", "");
		}
	}
	drawText(0,0,canvas.width/20,canvas.height/20, "exit", "../ludificioEngine/text/fonts/8-bit/black/");
}
function sampleArea2()
{

}