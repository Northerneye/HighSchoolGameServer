var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
var gamecanvas;
window.onload = loadPage;
window.onresize = windowResize;
window.onclick = clicked;
window.onmouseup = mouseUp;
window.onkeypress = keyPress;
window.ondblclick = doubleClick;
window.onmousedown = mouseDown;
window.onmousemove = mousePos;
window.onwheel = scrolling;
window.onkeyup = keyUp;
window.onkeydown = keyDown;
window.oncontextmenu = function() {
	return false;
};
function downloadURI(uri, name) 
{
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}
function adjustCanvas()
{
	gamecanvas = document.getElementById("gameCanvas");
	gamecanvas.width = window.innerWidth;
	gamecanvas.height = window.innerHeight;
	
	document.documentElement.style.overflow = 'hidden'; //noscrollbars
	document.body.scroll = "no";//noscrollbars
}
function loadPage()
{
	adjustCanvas();
	if (fullscreen)
	{
		fullScreen();
	}
	if (adjustwindow)
	{
		adjustWin();
	}
}
function sleep(miliseconds) {
   var currentTime = new Date().getTime();
   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}
function fullScreen()
{
	document.body.requestFullScreen();
}
function adjustWin()
{
	//document.body.style.width = screen.availWidth;
	//document.body.style.height = screen.availHeight;
}
function closeWin()
{
	window.close("fs");
}
function openWin(directory)
{
	window.open(directory, "fs", "fullscreen=yes");
	window.close("fs");
}
function windowResize()
{
	adjustCanvas();
}