function textureAnimation()
{
	if(true)
	{

	}
	if(globalPos[0])
	{
		if(areas[0])
		{
			
		}
		if(areas[1])
		{
			if(spriteTexture[1][0] = "spriteModels/playerModel2/frontFacing.png")
			{
				spriteTexture[1][0] = "spriteModels/playerModel1/frontFacing.png"
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[1][0] = "spriteModels/playerModel1/frontFacing.png";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[1][0] = "spriteModels/playerModel1/backFacing.png";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[1][0] = "spriteModels/playerModel1/rightFacing.png";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[1][0] = "spriteModels/playerModel1/leftFacing.png";
			}
			for(i = 2; i <= playerCount; i+=2)
			{
				if(dx[1][i] < 0)
				{
					spriteTexture[1][i] = "spriteModels/playerModel2/leftFacing.png";
				}
				else if(dx[1][i] > 0)
				{
					spriteTexture[1][i] = "spriteModels/playerModel2/rightFacing.png";
				}
				else if(dy[1][i] > 0)
				{
					spriteTexture[1][i] = "spriteModels/playerModel2/frontFacing.png";
				}
				else if(dy[1][i] < 0)
				{
					spriteTexture[1][i] = "spriteModels/playerModel2/backFacing.png";
				}
			}
		}
		else if(areas[2])
		{
			if(spriteTexture[2][180] = "spriteModels/playerModel2/frontFacing.png")
			{
				spriteTexture[2][180] = "spriteModels/playerModel1/frontFacing.png"
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[2][180] = "spriteModels/playerModel1/frontFacing.png";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[2][180] = "spriteModels/playerModel1/backFacing.png";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[2][180] = "spriteModels/playerModel1/rightFacing.png";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[2][180] = "spriteModels/playerModel1/leftFacing.png";
			}
			for(i = 182; i <= playerCount; i+=2)
			{
				if(dx[2][i] < 0)
				{
					spriteTexture[2][i] = "spriteModels/playerModel2/leftFacing.png";
				}
				else if(dx[2][i] > 0)
				{
					spriteTexture[2][i] = "spriteModels/playerModel2/rightFacing.png";
				}
				else if(dy[2][i] > 0)
				{
					spriteTexture[2][i] = "spriteModels/playerModel2/frontFacing.png";
				}
				else if(dy[2][i] < 0)
				{
					spriteTexture[2][i] = "spriteModels/playerModel2/backFacing.png";
				}
			}
		}
		else if(areas[3])
		{
			if(spriteTexture[3][0] = "spriteModels/playerModel2/frontFacing.png")
			{
				spriteTexture[3][0] = "spriteModels/playerModel1/frontFacing.png"
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[3][0] = "spriteModels/playerModel1/frontFacing.png";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[3][0] = "spriteModels/playerModel1/backFacing.png";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[3][0] = "spriteModels/playerModel1/rightFacing.png";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[3][0] = "spriteModels/playerModel1/leftFacing.png";
			}
			for(i = 2; i <= playerCount; i+=2)
			{
				if(dx[3][i] < 0)
				{
					spriteTexture[3][i] = "spriteModels/playerModel2/leftFacing.png";
				}
				else if(dx[3][i] > 0)
				{
					spriteTexture[3][i] = "spriteModels/playerModel2/rightFacing.png";
				}
				else if(dy[3][i] > 0)
				{
					spriteTexture[3][i] = "spriteModels/playerModel2/frontFacing.png";
				}
				else if(dy[3][i] < 0)
				{
					spriteTexture[3][i] = "spriteModels/playerModel2/backFacing.png";
				}
			}
		}
		else if(areas[4])
		{
			if(spriteTexture[4][0] = "spriteModels/playerModel2/frontFacing.png")
			{
				spriteTexture[4][0] = "spriteModels/playerModel1/frontFacing.png"
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[4][0] = "spriteModels/playerModel1/frontFacing.png";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[4][0] = "spriteModels/playerModel1/backFacing.png";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[4][0] = "spriteModels/playerModel1/rightFacing.png";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[4][0] = "spriteModels/playerModel1/leftFacing.png";
			}
			for(i = 2; i <= playerCount; i+=2)
			{
				if(dx[4][i] < 0)
				{
					spriteTexture[4][i] = "spriteModels/playerModel2/leftFacing.png";
				}
				else if(dx[4][i] > 0)
				{
					spriteTexture[4][i] = "spriteModels/playerModel2/rightFacing.png";
				}
				else if(dy[4][i] > 0)
				{
					spriteTexture[4][i] = "spriteModels/playerModel2/frontFacing.png";
				}
				else if(dy[4][i] < 0)
				{
					spriteTexture[4][i] = "spriteModels/playerModel2/backFacing.png";
				}
			}
		}
		else if(areas[5])
		{
			if(spriteTexture[5][0] = "spriteModels/playerModel2/frontFacing.png")
			{
				spriteTexture[5][0] = "spriteModels/playerModel1/frontFacing.png"
			}
			if(charStr[jQuery.inArray("s", charStr)] == "s")
			{
				spriteTexture[5][0] = "spriteModels/playerModel1/frontFacing.png";
			}
			else if(charStr[jQuery.inArray("w", charStr)] == "w")
			{
				spriteTexture[5][0] = "spriteModels/playerModel1/backFacing.png";
			}
			else if(charStr[jQuery.inArray("d", charStr)] == "d")
			{
				spriteTexture[5][0] = "spriteModels/playerModel1/rightFacing.png";
			}
			else if(charStr[jQuery.inArray("a", charStr)] == "a")
			{
				spriteTexture[5][0] = "spriteModels/playerModel1/leftFacing.png";
			}
			for(i = 2; i <= playerCount; i+=2)
			{
				if(dx[5][i] < 0)
				{
					spriteTexture[5][i] = "spriteModels/playerModel2/leftFacing.png";
				}
				else if(dx[5][i] > 0)
				{
					spriteTexture[5][i] = "spriteModels/playerModel2/rightFacing.png";
				}
				else if(dy[5][i] > 0)
				{
					spriteTexture[5][i] = "spriteModels/playerModel2/frontFacing.png";
				}
				else if(dy[5][i] < 0)
				{
					spriteTexture[5][i] = "spriteModels/playerModel2/backFacing.png";
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