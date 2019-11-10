var username = "";
function textureAnimation()
{
	if(username == "")
	{
		xttp.open("GET", "getUsername.php", false);
		xttp.send();
		xttp.onreadystatechange = function() {
			if (xttp.readyState == 4 && xttp.status == 200) 
			{
				if(username == "")
				{
					username = xttp.responseText;
				}
			}
		};
	}
	if(globalPos[0])
	{
		if(areas[0])
		{
			if(spriteTexture[0][0] == "spriteModels/playerModel2/frontFacing")
			{
				spriteTexture[0][0] = "spriteModels/playerModel1/frontFacing"
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[0][0] = "spriteModels/playerModel1/frontFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[0][0] = "spriteModels/playerModel1/backFacing";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[0][0] = "spriteModels/playerModel1/rightFacing";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[0][0] = "spriteModels/playerModel1/leftFacing";
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[0][0] = "spriteModels/playerModel1/frontRightFacing";
			}
			else if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[0][0] = "spriteModels/playerModel1/frontLeftFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[0][0] = "spriteModels/playerModel1/backLeftFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[0][0] = "spriteModels/playerModel1/backRightFacing";
			}
			if(username == "charlie")
			{
				if(spriteTexture[0][0] == "spriteModels/playerModel1/frontFacing")
				{
					spriteTexture[0][0] = "spriteModels/charlieModel/frontFacing"
				}
				if(charStr[jQuery.inArray("s", charStr)] == "s")
				{
					spriteTexture[0][0] = "spriteModels/charlieModel/frontFacing";
				}
				else if(charStr[jQuery.inArray("w", charStr)] == "w")
				{
					spriteTexture[0][0] = "spriteModels/charlieModel/backFacing";
				}
				else if(charStr[jQuery.inArray("d", charStr)] == "d")
				{
					spriteTexture[0][0] = "spriteModels/charlieModel/rightFacing";
				}
				else if(charStr[jQuery.inArray("a", charStr)] == "a")
				{
					spriteTexture[0][0] = "spriteModels/charlieModel/leftFacing";
				}
				if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("d", charStr)] == "d")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/frontRightFacing";
				}
				else if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("a", charStr)] == "a")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/frontLeftFacing";
				}
				else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("a", charStr)] == "a")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/backLeftFacing";
				}
				else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("d", charStr)] == "d")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/backRightFacing";
				}
			}
			if(username == "grady")
			{
				if(spriteTexture[0][0] == "spriteModels/playerModel1/frontFacing")
				{
					spriteTexture[0][0] = "spriteModels/gradyModel/frontFacing"
				}
				if(charStr[jQuery.inArray("s", charStr)] == "s")
				{
					spriteTexture[0][0] = "spriteModels/gradyModel/frontFacing";
				}
				else if(charStr[jQuery.inArray("w", charStr)] == "w")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/backFacing";
				}
				else if(charStr[jQuery.inArray("d", charStr)] == "d")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/rightFacing";
				}
				else if(charStr[jQuery.inArray("a", charStr)] == "a")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/leftFacing";
				}
				if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("d", charStr)] == "d")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/frontRightFacing";
				}
				else if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("a", charStr)] == "a")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/frontLeftFacing";
				}
				else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("a", charStr)] == "a")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/backLeftFacing";
				}
				else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("d", charStr)] == "d")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/backRightFacing";
				}
			}
			for(i = 2; i <= playerCount; i+=2)
			{
				if(dx[0][i] < 0)
				{
					spriteTexture[1][i] = "spriteModels/playerModel2/leftFacing";
				}
				else if(dx[0][i] > 0)
				{
					spriteTexture[1][i] = "spriteModels/playerModel2/rightFacing";
				}
				else if(dy[0][i] > 0)
				{
					spriteTexture[1][i] = "spriteModels/playerModel2/frontFacing";
				}
				else if(dy[0][i] < 0)
				{
					spriteTexture[0][i] = "spriteModels/playerModel2/backFacing";
				}
				if(dx[0][i] < 0 && dy[0][i] < 0)
				{
					spriteTexture[0][i] = "spriteModels/playerModel2/backLeftFacing";
				}
				if(dx[0][i] < 0 && dy[0][i] > 0)
				{
					spriteTexture[0][i] = "spriteModels/playerModel2/frontLeftFacing";
				}
				if(dx[0][i] > 0 && dy[0][i] > 0)
				{
					spriteTexture[0][i] = "spriteModels/playerModel2/frontRightFacing";
				}
				if(dx[0][i] > 0 && dy[0][i] < 0)
				{
					spriteTexture[0][i] = "spriteModels/playerModel2/backRightFacing";
				}
			}
		}
		if(areas[1])
		{
			if(spriteTexture[1][0] == "spriteModels/playerModel2/frontFacing")
			{
				spriteTexture[1][0] = "spriteModels/playerModel1/frontFacing"
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[1][0] = "spriteModels/playerModel1/frontFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[1][0] = "spriteModels/playerModel1/backFacing";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[1][0] = "spriteModels/playerModel1/rightFacing";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[1][0] = "spriteModels/playerModel1/leftFacing";
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[1][0] = "spriteModels/playerModel1/frontRightFacing";
			}
			else if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[1][0] = "spriteModels/playerModel1/frontLeftFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[1][0] = "spriteModels/playerModel1/backLeftFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[1][0] = "spriteModels/playerModel1/backRightFacing";
			}
			if(username == "charlie")
			{
				if(spriteTexture[1][0] == "spriteModels/playerModel1/frontFacing")
				{
					spriteTexture[1][0] = "spriteModels/charlieModel/frontFacing"
				}
				if(charStr[jQuery.inArray("s", charStr)] == "s")
				{
					spriteTexture[1][0] = "spriteModels/charlieModel/frontFacing";
				}
				else if(charStr[jQuery.inArray("w", charStr)] == "w")
				{
					spriteTexture[1][0] = "spriteModels/charlieModel/backFacing";
				}
				else if(charStr[jQuery.inArray("d", charStr)] == "d")
				{
					spriteTexture[1][0] = "spriteModels/charlieModel/rightFacing";
				}
				else if(charStr[jQuery.inArray("a", charStr)] == "a")
				{
					spriteTexture[1][0] = "spriteModels/charlieModel/leftFacing";
				}
				if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("d", charStr)] == "d")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/frontRightFacing";
				}
				else if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("a", charStr)] == "a")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/frontLeftFacing";
				}
				else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("a", charStr)] == "a")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/backLeftFacing";
				}
				else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("d", charStr)] == "d")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/backRightFacing";
				}
			}
			if(username == "grady")
			{
				if(spriteTexture[1][0] == "spriteModels/playerModel1/frontFacing")
				{
					spriteTexture[1][0] = "spriteModels/gradyModel/frontFacing"
				}
				if(charStr[jQuery.inArray("s", charStr)] == "s")
				{
					spriteTexture[1][0] = "spriteModels/gradyModel/frontFacing";
				}
				else if(charStr[jQuery.inArray("w", charStr)] == "w")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/backFacing";
				}
				else if(charStr[jQuery.inArray("d", charStr)] == "d")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/rightFacing";
				}
				else if(charStr[jQuery.inArray("a", charStr)] == "a")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/leftFacing";
				}
				if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("d", charStr)] == "d")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/frontRightFacing";
				}
				else if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("a", charStr)] == "a")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/frontLeftFacing";
				}
				else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("a", charStr)] == "a")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/backLeftFacing";
				}
				else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("d", charStr)] == "d")
				{
					//spriteTexture[0][0] = "spriteModels/charlieModel/backRightFacing";
				}
			}
			for(i = 2; i <= playerCount; i+=2)
			{
				if(dx[1][i] < 0)
				{
					spriteTexture[1][i] = "spriteModels/playerModel2/leftFacing";
				}
				else if(dx[1][i] > 0)
				{
					spriteTexture[1][i] = "spriteModels/playerModel2/rightFacing";
				}
				else if(dy[1][i] > 0)
				{
					spriteTexture[1][i] = "spriteModels/playerModel2/frontFacing";
				}
				else if(dy[1][i] < 0)
				{
					spriteTexture[1][i] = "spriteModels/playerModel2/backFacing";
				}
				if(dx[1][i] < 0 && dy[1][i] < 0)
				{
					spriteTexture[1][i] = "spriteModels/playerModel2/backLeftFacing";
				}
				if(dx[1][i] < 0 && dy[1][i] > 0)
				{
					spriteTexture[1][i] = "spriteModels/playerModel2/frontLeftFacing";
				}
				if(dx[1][i] > 0 && dy[1][i] > 0)
				{
					spriteTexture[1][i] = "spriteModels/playerModel2/frontRightFacing";
				}
				if(dx[1][i] > 0 && dy[1][i] < 0)
				{
					spriteTexture[1][i] = "spriteModels/playerModel2/backRightFacing";
				}
			}
		}
		else if(areas[2])
		{
			if(spriteTexture[2][0] = "spriteModels/playerModel2/frontFacing")
			{
				spriteTexture[2][0] = "spriteModels/playerModel1/frontFacing"
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[2][0] = "spriteModels/playerModel1/frontFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[2][0] = "spriteModels/playerModel1/backFacing";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[2][0] = "spriteModels/playerModel1/rightFacing";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[2][0] = "spriteModels/playerModel1/leftFacing";
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[2][0] = "spriteModels/playerModel1/frontRightFacing";
			}
			else if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[2][0] = "spriteModels/playerModel1/frontLeftFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[2][0] = "spriteModels/playerModel1/backLeftFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[2][0] = "spriteModels/playerModel1/backRightFacing";
			}
			for(i = 2; i <= playerCount; i+=2)
			{
				if(dx[2][i] < 0)
				{
					spriteTexture[2][i] = "spriteModels/playerModel2/leftFacing";
				}
				else if(dx[2][i] > 0)
				{
					spriteTexture[2][i] = "spriteModels/playerModel2/rightFacing";
				}
				else if(dy[2][i] > 0)
				{
					spriteTexture[2][i] = "spriteModels/playerModel2/frontFacing";
				}
				else if(dy[2][i] < 0)
				{
					spriteTexture[2][i] = "spriteModels/playerModel2/backFacing";
				}
			}
		}
		else if(areas[3])
		{
			if(spriteTexture[3][0] = "spriteModels/playerModel2/frontFacing")
			{
				spriteTexture[3][0] = "spriteModels/playerModel1/frontFacing"
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[3][0] = "spriteModels/playerModel1/frontFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[3][0] = "spriteModels/playerModel1/backFacing";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[3][0] = "spriteModels/playerModel1/rightFacing";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[3][0] = "spriteModels/playerModel1/leftFacing";
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[3][0] = "spriteModels/playerModel1/frontRightFacing";
			}
			else if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[3][0] = "spriteModels/playerModel1/frontLeftFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[3][0] = "spriteModels/playerModel1/backLeftFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[3][0] = "spriteModels/playerModel1/backRightFacing";
			}
			for(i = 2; i <= playerCount; i+=2)
			{
				if(dx[3][i] < 0)
				{
					spriteTexture[3][i] = "spriteModels/playerModel2/leftFacing";
				}
				else if(dx[3][i] > 0)
				{
					spriteTexture[3][i] = "spriteModels/playerModel2/rightFacing";
				}
				else if(dy[3][i] > 0)
				{
					spriteTexture[3][i] = "spriteModels/playerModel2/frontFacing";
				}
				else if(dy[3][i] < 0)
				{
					spriteTexture[3][i] = "spriteModels/playerModel2/backFacing";
				}
			}
		}
		else if(areas[4])
		{
			if(spriteTexture[4][0] = "spriteModels/playerModel2/frontFacing")
			{
				spriteTexture[4][0] = "spriteModels/playerModel1/frontFacing"
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[4][0] = "spriteModels/playerModel1/frontFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[4][0] = "spriteModels/playerModel1/backFacing";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[4][0] = "spriteModels/playerModel1/rightFacing";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[4][0] = "spriteModels/playerModel1/leftFacing";
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[4][0] = "spriteModels/playerModel1/frontRightFacing";
			}
			else if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[4][0] = "spriteModels/playerModel1/frontLeftFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[4][0] = "spriteModels/playerModel1/backLeftFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[4][0] = "spriteModels/playerModel1/backRightFacing";
			}
			for(i = 2; i <= playerCount; i+=2)
			{
				if(dx[4][i] < 0)
				{
					spriteTexture[4][i] = "spriteModels/playerModel2/leftFacing";
				}
				else if(dx[4][i] > 0)
				{
					spriteTexture[4][i] = "spriteModels/playerModel2/rightFacing";
				}
				else if(dy[4][i] > 0)
				{
					spriteTexture[4][i] = "spriteModels/playerModel2/frontFacing";
				}
				else if(dy[4][i] < 0)
				{
					spriteTexture[4][i] = "spriteModels/playerModel2/backFacing";
				}
			}
		}
		else if(areas[5])
		{
			if(spriteTexture[5][0] = "spriteModels/playerModel2/frontFacing")
			{
				spriteTexture[5][0] = "spriteModels/playerModel1/frontFacing"
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[5][0] = "spriteModels/playerModel1/frontFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[5][0] = "spriteModels/playerModel1/backFacing";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[5][0] = "spriteModels/playerModel1/rightFacing";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[5][0] = "spriteModels/playerModel1/leftFacing";
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[5][0] = "spriteModels/playerModel1/frontRightFacing";
			}
			else if(charStr[jQuery.inArray("s", charStr)] == "s" && charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[5][0] = "spriteModels/playerModel1/frontLeftFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[5][0] = "spriteModels/playerModel1/backLeftFacing";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w" && charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[5][0] = "spriteModels/playerModel1/backRightFacing";
			}
			for(i = 2; i <= playerCount; i+=2)
			{
				if(dx[5][i] < 0)
				{
					spriteTexture[5][i] = "spriteModels/playerModel2/leftFacing";
				}
				else if(dx[5][i] > 0)
				{
					spriteTexture[5][i] = "spriteModels/playerModel2/rightFacing";
				}
				else if(dy[5][i] > 0)
				{
					spriteTexture[5][i] = "spriteModels/playerModel2/frontFacing";
				}
				else if(dy[5][i] < 0)
				{
					spriteTexture[5][i] = "spriteModels/playerModel2/backFacing";
				}
			}
		}
	}
	else if(globalPos[1])
	{
		if(areas[0])
		{
			
		}
		else if(areas[1])
		{
			
		}
	}
}