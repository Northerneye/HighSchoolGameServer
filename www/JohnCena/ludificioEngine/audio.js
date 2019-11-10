var proximity = 0;
var proximityToX = 0;
var proximityToY = 0;
var audio;
var time = 0;
function createAudio(audioSource, audioID)
{
	audio = document.createElement("audio");
	audio.setAttribute("id", audioID);
	audio.src = audioSource;
	document.body.appendChild(audio);
}
function changeVolume(audioID, vol)
{
	document.getElementById(audioID).volume = vol;
}
function proximityVolume(audioID, proximityx, proximityy, fadeDistance, damp)
{
	for (var i = maxSprites; i >= 0; i--)
	{
		if(spriteUser[i] == true)
		{
			proximityToX = Math.abs(spriteX1[i] - proximityx);
			proximityToY = Math.abs(spriteY1[i] - proximityy);
			if (Math.pow(proximityToX, 2) + Math.pow(proximityToY, 2) < Math.pow(fadeDistance, 2))
			{
				proximity = (Math.pow(proximityToX, 2) + Math.pow(proximityToY, 2))/Math.pow(fadeDistance, 2);
			}
			else
			{
				proximity = 1;
			}	
			document.getElementById(audioID).volume = damp*(1-proximity);
		}
	}
}
function spriteProximityVolume(audioID, spriteId, fadeDistance, damp)
{
	for (var i = maxSprites; i >= 0; i--)
	{
		if(spriteUser[i] == true)
		{
			proximityToX = Math.abs(spriteX1[i] - spriteDrawX1[spriteId]);
			proximityToY = Math.abs(spriteY1[i] - spriteDrawY1[spriteId]);
			if (Math.pow(proximityToX, 2) + Math.pow(proximityToY, 2) < Math.pow(fadeDistance, 2))
			{
				proximity = (Math.pow(proximityToX, 2) + Math.pow(proximityToY, 2))/Math.pow(fadeDistance, 2);
			}
			else
			{
				proximity = 1;
			}	
			document.getElementById(audioID).volume = damp*(1-proximity);
		}
	}
}
function areaProximityVolume(audioID, spriteId, fadeDistance, damp, areaId)
{
	for (var i = maxSprites; i >= 0; i--)
	{
		if(spriteUser[areaId][i] == true)
		{
			proximityToX = Math.abs(areaSpriteX1[areaId][i] - areaSpriteX1[areaId][spriteId]);
			proximityToY = Math.abs(areaSpriteY1[areaId][i] - areaSpriteY1[areaId][spriteId]);
			if (Math.pow(proximityToX, 2) + Math.pow(proximityToY, 2) < Math.pow(fadeDistance, 2))
			{
				proximity = (Math.pow(proximityToX, 2) + Math.pow(proximityToY, 2))/Math.pow(fadeDistance, 2);
			}
			else
			{
				proximity = 1;
			}	
			document.getElementById(audioID).volume = damp*(1-proximity);
		}
	}
}
function muteSong(audioID)
{
	document.getElementById(audioID).muted = true;
}
function unmuteSong(audioID)
{
	document.getElementById(audioID).muted = false;
}
function pauseSong(audioID)
{
	document.getElementById(audioID).pause();
}
function playSong(audioID)
{
	document.getElementById(audioID).play();
}
//document.getElementById("AUDIO").ended; //returns boolean
//document.getElementById("AUDIO").currentSrc; //returns boolean
function getTrackSource(audioID)
{
	return document.getElementById(audioID).src;
}
function resetSong(audioID)
{
	document.getElementById(audioID).currentTime = 0;
}
function timeSong(audioID, time)
{
	document.getElementById(audioID).currentTime = time;
}
function getTimeSong(audioID)
{
	return document.getElementById(audioID).currentTime;
}