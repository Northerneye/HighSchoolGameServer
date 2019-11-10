var portalCount = -100;
function textureAnimation()
{
	if(true)
	{

	}
	if(globalPos[0])
	{
		if(areas[0])
		{
			portalCount += 1;
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[0][findUser(0)] = "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[0][findUser(0)] = "../ludificioEngine/images/playerModels/playerModel1/backFacing.png";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[0][findUser(0)] = "../ludificioEngine/images/playerModels/playerModel1/rightFacing.png";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[0][findUser(0)] = "../ludificioEngine/images/playerModels/playerModel1/leftFacing.png";
			}
			if(dx[0][8] < 0)
			{
				spriteTexture[0][8] = "magnetLeft.png";
			}
			else if(dx[0][8] > 0)
			{
				spriteTexture[0][8] = "magnetRight.png";
			}
			else if(dy[0][8] > 0)
			{
				spriteTexture[0][8] = "magnetDown.png";
			}
			else if(dy[0][8] < 0)
			{
				spriteTexture[0][8] = "magnetUp.png";
			}
			if(portalCount <= 0)
			{
				spriteTexture[0][2] = "../ludificioEngine/images/16-bit/portal1.png";
			}
			else if(portalCount > 0)
			{
				spriteTexture[0][2] = "../ludificioEngine/images/16-bit/portal2.png";
				if(portalCount == 100)
				{
					portalCount = -100;
				}
			}
			/*if(dy[0][findUser(0)] > 0)
			{
				spriteTexture[0][findUser(0)] = "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png";
			}
			else if(dy[0][findUser(0)] < 0)
			{
				spriteTexture[0][findUser(0)] = "../ludificioEngine/images/playerModels/playerModel1/backFacing.png";
			}*/
		}
		else if(areas[1])
		{
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[1][findUser(1)] = "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[1][findUser(1)] = "../ludificioEngine/images/playerModels/playerModel1/backFacing.png";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[1][findUser(1)] = "../ludificioEngine/images/playerModels/playerModel1/rightFacing.png";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[1][findUser(1)] = "../ludificioEngine/images/playerModels/playerModel1/leftFacing.png";
			}
		}
	}
	else if(globalPos[1])
	{
		if(areas[2])
		{
			portalCount += 1;
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[2][findUser(2)] = "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[2][findUser(2)] = "../ludificioEngine/images/playerModels/playerModel1/backFacing.png";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[2][findUser(2)] = "../ludificioEngine/images/playerModels/playerModel1/rightFacing.png";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[2][findUser(2)] = "../ludificioEngine/images/playerModels/playerModel1/leftFacing.png";
			}
			for(var i = 8; i <= 20; i += 2)
			{
				if(dx[2][i] < 0)
				{
					spriteTexture[2][i] = "magnetLeft.png";
				}
				else if(dx[2][i] > 0)
				{
					spriteTexture[2][i] = "magnetRight.png";
				}
				else if(dy[2][i] > 0)
				{
					spriteTexture[2][i] = "magnetDown.png";
				}
				else if(dy[2][i] < 0)
				{
					spriteTexture[2][i] = "magnetUp.png";
				}
			}
			if(portalCount <= 0)
			{
				spriteTexture[2][2] = "../ludificioEngine/images/16-bit/portal1.png";
			}
			else if(portalCount > 0)
			{
				spriteTexture[2][2] = "../ludificioEngine/images/16-bit/portal2.png";
				if(portalCount == 100)
				{
					portalCount = -100;
				}
			}
		}
		else if(areas[3])
		{
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[3][findUser(3)] = "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[3][findUser(3)] = "../ludificioEngine/images/playerModels/playerModel1/backFacing.png";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[3][findUser(3)] = "../ludificioEngine/images/playerModels/playerModel1/rightFacing.png";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[3][findUser(3)] = "../ludificioEngine/images/playerModels/playerModel1/leftFacing.png";
			}
		}
	}
	if(globalPos[2])
	{
		if(areas[0])
		{
			portalCount += 1;
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[4][findUser(4)] = "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[4][findUser(4)] = "../ludificioEngine/images/playerModels/playerModel1/backFacing.png";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[4][findUser(4)] = "../ludificioEngine/images/playerModels/playerModel1/rightFacing.png";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[4][findUser(4)] = "../ludificioEngine/images/playerModels/playerModel1/leftFacing.png";
			}
			if(dx[4][2] < 0)
			{
				spriteTexture[4][2] = "magnetLeft.png";
			}
			else if(dx[4][2] > 0)
			{
				spriteTexture[4][2] = "magnetRight.png";
			}
			else if(dy[4][2] > 0)
			{
				spriteTexture[4][2] = "magnetDown.png";
			}
			else if(dy[4][2] < 0)
			{
				spriteTexture[4][2] = "magnetUp.png";
			}
			if(portalCount <= 0)
			{
				spriteTexture[4][26] = "../ludificioEngine/images/16-bit/portal1.png";
			}
			else if(portalCount > 0)
			{
				spriteTexture[4][26] = "../ludificioEngine/images/16-bit/portal2.png";
				if(portalCount == 100)
				{
					portalCount = -100;
				}
			}
			/*if(dy[0][findUser(0)] > 0)
			{
				spriteTexture[0][findUser(0)] = "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png";
			}
			else if(dy[0][findUser(0)] < 0)
			{
				spriteTexture[0][findUser(0)] = "../ludificioEngine/images/playerModels/playerModel1/backFacing.png";
			}*/
		}
		else if(areas[1])
		{
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[5][findUser(5)] = "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[5][findUser(5)] = "../ludificioEngine/images/playerModels/playerModel1/backFacing.png";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[5][findUser(5)] = "../ludificioEngine/images/playerModels/playerModel1/rightFacing.png";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[5][findUser(5)] = "../ludificioEngine/images/playerModels/playerModel1/leftFacing.png";
			}
		}
	}
	else if(globalPos[3])
	{
		if(areas[2])
		{
			portalCount += 1;
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[6][findUser(6)] = "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[6][findUser(6)] = "../ludificioEngine/images/playerModels/playerModel1/backFacing.png";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[6][findUser(6)] = "../ludificioEngine/images/playerModels/playerModel1/rightFacing.png";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[6][findUser(6)] = "../ludificioEngine/images/playerModels/playerModel1/leftFacing.png";
			}
			if(dx[6][2] < 0)
			{
				spriteTexture[6][2] = "magnetLeft.png";
			}
			else if(dx[6][2] > 0)
			{
				spriteTexture[6][2] = "magnetRight.png";
			}
			else if(dy[6][2] > 0)
			{
				spriteTexture[6][2] = "magnetDown.png";
			}
			else if(dy[6][2] < 0)
			{
				spriteTexture[6][2] = "magnetUp.png";
			}
			if(portalCount <= 0)
			{
				spriteTexture[6][4] = "../ludificioEngine/images/16-bit/portal1.png";
			}
			else if(portalCount > 0)
			{
				spriteTexture[6][4] = "../ludificioEngine/images/16-bit/portal2.png";
				if(portalCount == 100)
				{
					portalCount = -100;
				}
			}
		}
		else if(areas[3])
		{
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[7][findUser(7)] = "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[7][findUser(7)] = "../ludificioEngine/images/playerModels/playerModel1/backFacing.png";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[7][findUser(7)] = "../ludificioEngine/images/playerModels/playerModel1/rightFacing.png";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[7][findUser(7)] = "../ludificioEngine/images/playerModels/playerModel1/leftFacing.png";
			}
		}
	}
}