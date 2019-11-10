function areaObjectAI()
{
	if(globalPos[0])
	{
		if(areas[0])
		{
			dx[0][2] = 0;
			dx[0][3] = 0;
			dy[0][2] = 0;
			dy[0][3] = 0;
			if(spriteAreaX1[0][0]+(spriteAreaX2[0][0]-spriteAreaX1[0][0]) > spriteAreaX1[0][2]+(spriteAreaX2[0][2]-spriteAreaX1[0][2]))
			{
				dx[0][2] += 0;
				dx[0][3] += 0;
			}
			else if(spriteAreaX1[0][0]+(spriteAreaX2[0][0]-spriteAreaX1[0][0]) < spriteAreaX1[0][2]+(spriteAreaX2[0][2]-spriteAreaX1[0][2]))
			{
				dx[0][2] -= 0;
				dx[0][3] -= 0;
			}
			if(spriteAreaY1[0][0]+(spriteAreaY3[0][0]-spriteAreaY1[0][0]) > spriteAreaY1[0][2]+(spriteAreaY3[0][2]-spriteAreaY1[0][2]))
			{
				dy[0][2] += 0;
				dy[0][3] += 0;
			}
			else if(spriteAreaY1[0][0]+(spriteAreaY3[0][0]-spriteAreaY1[0][0]) < spriteAreaY1[0][2]+(spriteAreaY3[0][2]-spriteAreaY1[0][2]))
			{
				dy[0][2] -= 0;
				dy[0][3] -= 0;
			}
			//areaProximityVolume("magnet", 2, 1000, .6, 0);
			if(rectContact(0, 2, 0))
			{
				//playerHealth -= .5;
			}
		}
		else if(areas[1])
		{
			
		}
	}
	else if(globalPos[1])
	{
		if(areas[2])
		{
			for(var i = 2; i <= 20; i += 2)
			{
				dx[2][i] = 0;
				dx[2][i+1] = 0;
				dy[2][i] = 0;
				dy[2][i+1] = 0;
				if(spriteAreaX1[2][0] > spriteAreaX1[2][i]-500 && spriteAreaX1[2][0] < spriteAreaX1[2][i]+500 && spriteAreaY1[2][0] > spriteAreaY1[2][i]-500 && spriteAreaY1[2][0] < spriteAreaY1[2][i]+500)
				{
					if(spriteAreaX1[2][0]+(spriteAreaX2[2][0]-spriteAreaX1[2][0]) > spriteAreaX1[2][i]+(spriteAreaX2[2][i]-spriteAreaX1[2][i]))
					{
						dx[2][i] += 0;
						dx[2][i+1] += 0;
					}
					else if(spriteAreaX1[2][0]+(spriteAreaX2[2][0]-spriteAreaX1[2][0]) < spriteAreaX1[2][i]+(spriteAreaX2[2][i]-spriteAreaX1[2][i]))
					{
						dx[2][i] -= 0;
						dx[2][i+1] -= 0;
					}
					if(spriteAreaY1[2][0]+(spriteAreaY3[2][0]-spriteAreaY1[2][0]) > spriteAreaY1[2][i]+(spriteAreaY3[2][i]-spriteAreaY1[2][i]))
					{
						dy[2][i] += 0;
						dy[2][i+1] += 0;
					}
					else if(spriteAreaY1[2][0]+(spriteAreaY3[2][0]-spriteAreaY1[2][0]) < spriteAreaY1[2][i]+(spriteAreaY3[2][i]-spriteAreaY1[2][i]))
					{
						dy[2][i] -= 0;
						dy[2][i+1] -= 0;
					}
					if(rectContact(0, i, 2))
					{
						playerHealth -= .5;
					}
				}		
				playSong("magnet6");
				areaProximityVolume("magnet6", 20, 500, .6, 2);				
			}
		}
		else if(areas[3])
		{
			
		}
	}
	if(globalPos[2])
	{
		if(areas[0])
		{
			dx[4][2] = 0;
			dx[4][3] = 0;
			dy[4][2] = 0;
			dy[4][3] = 0;
			if(spriteAreaX1[4][0]+(spriteAreaX2[4][0]-spriteAreaX1[4][0]) > spriteAreaX1[4][2]+(spriteAreaX2[4][2]-spriteAreaX1[4][2]))
			{
				dx[4][2] += 2;
				dx[4][3] += 2;
			}
			else if(spriteAreaX1[4][0]+(spriteAreaX2[4][0]-spriteAreaX1[4][0]) < spriteAreaX1[4][2]+(spriteAreaX2[4][2]-spriteAreaX1[4][2]))
			{
				dx[4][2] -= 2;
				dx[4][3] -= 2;
			}
			if(spriteAreaY1[4][0]+(spriteAreaY3[4][0]-spriteAreaY1[4][0]) > spriteAreaY1[4][2]+(spriteAreaY3[4][2]-spriteAreaY1[4][2]))
			{
				dy[4][2] += 2;
				dy[4][3] += 2;
			}
			else if(spriteAreaY1[4][0]+(spriteAreaY3[4][0]-spriteAreaY1[4][0]) < spriteAreaY1[4][2]+(spriteAreaY3[4][2]-spriteAreaY1[4][2]))
			{
				dy[4][2] -= 2;
				dy[4][3] -= 2;
			}
		}
		else if(areas[1])
		{
			
		}
	}
}