var scrollWheel = false;
var charStr = ["", "", "", ""];
var charCode = 0;
var shiftKey = false;
var controlKey = false;
var spacebarKey = false;
var isLeftMouseDown = false;
var isRightMouseDown = false;
var isMiddleMouseDown = false;
var isLeftMouseUp = true;
var isRightMouseUp = true;
var isMiddleMouseUp = true;
var isMouseClicked = false;
var isMousedblClicked = false;
var rightArrow = false;
var leftArrow = false;
var upArrow = false;
var downArrow = false;
var keyCharacter = "";
var mouseXPos = 0;
var mouseYPos = 0;
var charIndex = 0;
var charString = "";
function cleanInput()
{
	//scrollWheel = false;
}
Array.prototype.isNull = function (){
    return this.join().replace(/,/g,'').length === 0;
};
function scrolling()
{
	//scrollWheel = true;
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
	e = e || window.event;
	charCode = e.keyCode || e.which;
	if(charCode == 16)
	{
		shiftKey = false;
	}
	if(charCode == 17)
	{
		controlKey = false;
	}
	if(charCode == 32)
	{
		spacebarKey = false;
	}
	if(charCode == 37)
	{
		leftArrow = false;
	}
	if(charCode == 38)
	{
		upArrow = false;
	}
	if(charCode == 39)
	{
		rightArrow = false;
	}
	if(charCode == 40)
	{
		downArrow = false;
	}
	charString = String.fromCharCode(e.which).toLowerCase();
	while (jQuery.inArray(charString, charStr) !== -1)
	{
		charStr[jQuery.inArray(charString, charStr)] = "";
	}
	charStr.isNull();
	charCode = 0;
}
function keyDown(evt)
{
	evt = evt || window.event;
	charCode = evt.keyCode || evt.which;
	charStr[charIndex] = String.fromCharCode(charCode).toLowerCase();
	charIndex++;
	if(charCode == 16)
	{
		shiftKey = true;
	}
	if(charCode == 17)
	{
		controlKey = true;
	}
	if(charCode == 32)
	{
		spacebarKey = true;
	}
	if(charCode == 37)
	{
		leftArrow = true;
	}
	if(charCode == 38)
	{
		upArrow = true;
	}
	if(charCode == 39)
	{
		rightArrow = true;
	}
	if(charCode == 40)
	{
		downArrow = true;
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
function mouseDown(e)
{
	if(e.which == 1)
	{
		isLeftMouseUp = false;
		isLeftMouseDown = true;
	}
	if(e.which == 2)
	{
		isMiddleMouseUp = false;
		isMiddleMouseDown = true;
	}
	if(e.which == 3)
	{
		isRightMouseUp = false;
		isRightMouseDown = true;
	}
}
function doubleClick()
{
	isMousedblClicked = true;
}
function mouseUp(e)
{
	if(e.which == 1)
	{
		isMousedblClicked = false;
		isMouseClicked = false;
		isLeftMouseDown = false;
		isLeftMouseUp = true;
	}
	if(e.which == 2)
	{
		isMiddleMouseDown = false;
		isMiddleMouseUp = true;
	}
	if(e.which == 3)
	{
		isRightMouseDown = false;
		isRightMouseUp = true;
	}
}
function clicked()
{
	isMouseClicked = true;
}
