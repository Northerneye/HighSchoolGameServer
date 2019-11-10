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
			else if(dy[0][8] > 0)
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
				spriteTexture[1][findUser(0)] = "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[1][findUser(0)] = "../ludificioEngine/images/playerModels/playerModel1/backFacing.png";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[1][findUser(0)] = "../ludificioEngine/images/playerModels/playerModel1/rightFacing.png";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[1][findUser(0)] = "../ludificioEngine/images/playerModels/playerModel1/leftFacing.png";
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