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
var altKey = false;
var ctrlKey = false;
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
	if(charCode == 17)
	{
		ctrlKey = false;
	}
	if(charCode == 18)
	{
		altKey = false;
	}
	charString = String.fromCharCode(e.which).toLowerCase();
	if(charCode == 48)
	{
		while (jQuery.inArray("0", charStr) !== -1)
		{
			charStr[jQuery.inArray("0", charStr)] = "";
		}
	}
	else if(charCode == 49)
	{
		while (jQuery.inArray("1", charStr) !== -1)
		{
			charStr[jQuery.inArray("1", charStr)] = "";
		}
	}
	else if(charCode == 50)
	{
		while (jQuery.inArray("2", charStr) !== -1)
		{
			charStr[jQuery.inArray("2", charStr)] = "";
		}
	}
	else if(charCode == 51)
	{
		while (jQuery.inArray("3", charStr) !== -1)
		{
			charStr[jQuery.inArray("3", charStr)] = "";
		}
	}
	else if(charCode == 52)
	{
		while (jQuery.inArray("4", charStr) !== -1)
		{
			charStr[jQuery.inArray("4", charStr)] = "";
		}
	}
	else if(charCode == 53)
	{
		while (jQuery.inArray("5", charStr) !== -1)
		{
			charStr[jQuery.inArray("5", charStr)] = "";
		}
	}
	else if(charCode == 54)
	{
		while (jQuery.inArray("6", charStr) !== -1)
		{
			charStr[jQuery.inArray("6", charStr)] = "";
		}
	}
	else if(charCode == 55)
	{
		while (jQuery.inArray("7", charStr) !== -1)
		{
			charStr[jQuery.inArray("7", charStr)] = "";
		}
	}
	else if(charCode == 56)
	{
		while (jQuery.inArray("8", charStr) !== -1)
		{
			charStr[jQuery.inArray("8", charStr)] = "";
		}
	}
	else if(charCode == 57)
	{
		while (jQuery.inArray("9", charStr) !== -1)
		{
			charStr[jQuery.inArray("9", charStr)] = "";
		}
	}
	else if(charCode == 219)
	{
		while (jQuery.inArray("{", charStr) !== -1)
		{
			charStr[jQuery.inArray("{", charStr)] = "";
		}
	}
	else if(charCode == 221)
	{
		while (jQuery.inArray("}", charStr) !== -1)
		{
			charStr[jQuery.inArray("}", charStr)] = "";
		}
	}
	else if(charCode == 186)
	{
		while (jQuery.inArray(";", charStr) !== -1)
		{
			charStr[jQuery.inArray(";", charStr)] = "";
		}
	}
	else if(charCode == 222)
	{
		while (jQuery.inArray("'", charStr) !== -1)
		{
			charStr[jQuery.inArray("'", charStr)] = "";
		}
	}
	else if(charCode == 188)
	{
		while (jQuery.inArray(",", charStr) !== -1)
		{
			charStr[jQuery.inArray(",", charStr)] = "";
		}
	}
	else if(charCode == 192)
	{
		while (jQuery.inArray("`", charStr) !== -1)
		{
			charStr[jQuery.inArray("`", charStr)] = "";
		}
	}
	else if(charCode == 189)
	{
		while (jQuery.inArray("-", charStr) !== -1)
		{
			charStr[jQuery.inArray("-", charStr)] = "";
		}
	}
	else if(charCode == 187)
	{
		while (jQuery.inArray("+", charStr) !== -1)
		{
			charStr[jQuery.inArray("+", charStr)] = "";
		}
	}
	else{
		while (jQuery.inArray(charString, charStr) !== -1)
		{
			charStr[jQuery.inArray(charString, charStr)] = "";
		}
	}
	charStr.isNull();
	charCode = 0;
}
function keyDown(evt)
{
	evt = evt || window.event;
	charCode = evt.keyCode || evt.which;
	if(charCode == 48)
	{
		charStr[charIndex] = "0";
	}
	else if(charCode == 49)
	{
		charStr[charIndex] = "1";
	}
	else if(charCode == 50)
	{
		charStr[charIndex] = "2";
	}
	else if(charCode == 51)
	{
		charStr[charIndex] = "3";
	}
	else if(charCode == 52)
	{
		charStr[charIndex] = "4";
	}
	else if(charCode == 53)
	{
		charStr[charIndex] = "5";
	}
	else if(charCode == 54)
	{
		charStr[charIndex] = "6";
	}
	else if(charCode == 55)
	{
		charStr[charIndex] = "7";
	}
	else if(charCode == 56)
	{
		charStr[charIndex] = "8";
	}
	else if(charCode == 57)
	{
		charStr[charIndex] = "9";
	}
	else if(charCode == 219)
	{
		charStr[charIndex] = "{";
	}
	else if(charCode == 221)
	{
		charStr[charIndex] = "}";
	}
	else if(charCode == 186)
	{
		charStr[charIndex] = ";";
	}
	else if(charCode == 222)
	{
		charStr[charIndex] = "'";
	}
	else if(charCode == 188)
	{
		charStr[charIndex] = ",";
	}
	else if(charCode == 192)
	{
		charStr[charIndex] = "`";
	}
	else if(charCode == 189)
	{
		charStr[charIndex] = "-";
	}
	else if(charCode == 187)
	{
		charStr[charIndex] = "+";
	}
	else{
		charStr[charIndex] = String.fromCharCode(charCode).toLowerCase();
	}
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
	if(charCode == 17)
	{
		ctrlKey = true;
	}
	if(charCode == 18)
	{
		altKey = true;
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
