var proximity = 0;
var proximityToX = 0;
var proximityToY = 0;
var audio;
function createAudio(audioSource, audioID)
{
	audio = document.createElement("audio");
	audio.setAttribute("id", audioID)
	audio.src = audioSource;
	document.body.appendChild(audio);
}
function changeVolume(audioID, vol)
{
	document.getElementById(audioID).volume = vol;
}
function proximityVolume(audioID, proximityx, proximityy, fadeDistance, damp)
{
	proximityToX = Math.abs(xUser - proximityx);
	proximityToY = Math.abs(yUser - proximityy);
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