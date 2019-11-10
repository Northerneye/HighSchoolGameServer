var scrollWheel = false;
var charStr = ["", "", "", ""];
var charCode = 0;
var isMouseDown = false;
var isMouseUp = true;
var isMouseClicked = false;
var isMousedblClicked = false;
var keyCharacter = "";
var mouseXPos = 0;
var mouseYPos = 0;
var charIndex = 0;
var charString = "";
function cleanInput()
{
	charCode = 0;
	scrollWheel = false;
}
function scrolling()
{
	scrollWheel = true;
	//WheelEvent.deltaX
	//WheelEvent.deltaY
}
function noScrolling()
{
	scrollWheel = false;
}
function mousePos(e)
{
	x = e.clientX;
	y = e.clientY;
	mouseXPos = x;
	mouseYPos = y;
}
function keyPress(evt)
{

}
function keyUp(e)
{
	charString = String.fromCharCode(e.which).toLowerCase();
	while (jQuery.inArray(charString, charStr) !== -1)
	{
		charStr[jQuery.inArray(charString, charStr)] = "";
	}
	charIndex--;
	charCode = 0;
}
function keyDown(evt)
{
	evt = evt || window.event;
	charCode = evt.keyCode || evt.which;
	charStr[charIndex] = String.fromCharCode(charCode).toLowerCase();
	if (charIndex < 3)
	{
		charIndex++;
	}
}
function resetInput()
{
	mouseXPos = 0;
	mouseYPos = 0;
	keyCharacter = "";
	isMouseIsUp = true;
	isMouseIsDown = false;
	isMouseClicked = false;
	isMousedblClicked = false;
}
function mouseDown()
{
	isMouseUp = false;
	isMouseDown = true;
}
function doubleClick()
{
	isMousedblClicked = true;
}
function mouseUp()
{
	isMousedblClicked = false;
	isMouseClicked = false;
	isMouseDown = false;
	isMouseUp = true;
}
function clicked()
{
	isMouseClicked = true;
}
