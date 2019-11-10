function areaObjectAI()
{
	if(globalPos[0])
	{
		if(areas[0])
		{
			dx[0][8] = 0;
			dx[0][9] = 0;
			dy[0][8] = 0;
			dy[0][9] = 0;
			//if(dx[0][0]+spriteAreaX1[0][0] > spriteAreaX1[0][8]-300 && dx[0][0]+spriteAreaX1[0][0] < spriteAreaX1[0][8]+300 && dy[0][0]+spriteAreaY1[0][0] > spriteAreaY1[0][8]-300 && dy[0][0]+spriteAreaY1[0][0] < spriteAreaY1[0][8]+300)
			//{
				if(spriteAreaX1[0][0]+(spriteAreaX2[0][0]-spriteAreaX1[0][0]) > spriteAreaX1[0][8]+(spriteAreaX2[0][8]-spriteAreaX1[0][8]))
				{
					dx[0][8] += difficulty;
					dx[0][9] += difficulty;
				}
				else if(spriteAreaX1[0][0]+(spriteAreaX2[0][0]-spriteAreaX1[0][0]) < spriteAreaX1[0][8]+(spriteAreaX2[0][8]-spriteAreaX1[0][8]))
				{
					dx[0][8] -= difficulty;
					dx[0][9] -= difficulty;
				}
				if(spriteAreaY1[0][0]+(spriteAreaY3[0][0]-spriteAreaY1[0][0]) > spriteAreaY1[0][8]+(spriteAreaY3[0][8]-spriteAreaY1[0][8]))
				{
					dy[0][8] += difficulty;
					dy[0][9] += difficulty;
				}
				else if(spriteAreaY1[0][0]+(spriteAreaY3[0][0]-spriteAreaY1[0][0]) < spriteAreaY1[0][8]+(spriteAreaY3[0][8]-spriteAreaY1[0][8]))
				{
					dy[0][8] -= difficulty;
					dy[0][9] -= difficulty;
				}
			//}
			playSong("magnet");
			areaProximityVolume("magnet", 8, 1000, .6, 0);
			if(rectContact(0, 8, 0))
			{
				playerHealth -= .5;
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
			for(var i = 8; i <= 20; i += 2)
			{
				dx[2][i] = 0;
				dx[2][i+1] = 0;
				dy[2][i] = 0;
				dy[2][i+1] = 0;
				if(spriteAreaX1[2][0] > spriteAreaX1[2][i]-500 && spriteAreaX1[2][0] < spriteAreaX1[2][i]+500 && spriteAreaY1[2][0] > spriteAreaY1[2][i]-500 && spriteAreaY1[2][0] < spriteAreaY1[2][i]+500)
				{
					if(spriteAreaX1[2][0]+(spriteAreaX2[2][0]-spriteAreaX1[2][0]) > spriteAreaX1[2][i]+(spriteAreaX2[2][i]-spriteAreaX1[2][i]))
					{
						dx[2][i] += difficulty;
						dx[2][i+1] += difficulty;
					}
					else if(spriteAreaX1[2][0]+(spriteAreaX2[2][0]-spriteAreaX1[2][0]) < spriteAreaX1[2][i]+(spriteAreaX2[2][i]-spriteAreaX1[2][i]))
					{
						dx[2][i] -= difficulty;
						dx[2][i+1] -= difficulty;
					}
					if(spriteAreaY1[2][0]+(spriteAreaY3[2][0]-spriteAreaY1[2][0]) > spriteAreaY1[2][i]+(spriteAreaY3[2][i]-spriteAreaY1[2][i]))
					{
						dy[2][i] += difficulty;
						dy[2][i+1] += difficulty;
					}
					else if(spriteAreaY1[2][0]+(spriteAreaY3[2][0]-spriteAreaY1[2][0]) < spriteAreaY1[2][i]+(spriteAreaY3[2][i]-spriteAreaY1[2][i]))
					{
						dy[2][i] -= difficulty;
						dy[2][i+1] -= difficulty;
					}
					if(rectContact(0, i, 2))
					{
						playerHealth -= .5;
					}
				}
				playSong("magnet");
				areaProximityVolume("magnet", 8, 500, .6, 2);
				playSong("magnet1");
				areaProximityVolume("magnet1", 10, 500, .6, 2);
				playSong("magnet2");
				areaProximityVolume("magnet2", 12, 500, .6, 2);
				playSong("magnet3");
				areaProximityVolume("magnet3", 14, 500, .6, 2);
				playSong("magnet4");
				areaProximityVolume("magnet4", 16, 500, .6, 2);				
				playSong("magnet5");
				areaProximityVolume("magnet5", 18, 500, .6, 2);				
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
	if(globalPos[3])
	{
		if(areas[2])
		{
			dx[6][2] = 0;
			dx[6][3] = 0;
			dy[6][2] = 0;
			dy[6][3] = 0;
			if(spriteAreaX1[6][0]+(spriteAreaX2[6][0]-spriteAreaX1[6][0]) > spriteAreaX1[6][2]+(spriteAreaX2[6][2]-spriteAreaX1[6][2]))
			{
				dx[6][2] += 2;
				dx[6][3] += 2;
			}
			else if(spriteAreaX1[6][0]+(spriteAreaX2[6][0]-spriteAreaX1[6][0]) < spriteAreaX1[6][2]+(spriteAreaX2[6][2]-spriteAreaX1[6][2]))
			{
				dx[6][2] -= 2;
				dx[6][3] -= 2;
			}
			if(spriteAreaY1[6][0]+(spriteAreaY3[6][0]-spriteAreaY1[6][0]) > spriteAreaY1[6][2]+(spriteAreaY3[6][2]-spriteAreaY1[6][2]))
			{
				dy[6][2] += 2;
				dy[6][3] += 2;
			}
			else if(spriteAreaY1[6][0]+(spriteAreaY3[6][0]-spriteAreaY1[6][0]) < spriteAreaY1[6][2]+(spriteAreaY3[6][2]-spriteAreaY1[6][2]))
			{
				dy[6][2] -= 2;
				dy[6][3] -= 2;
			}
		}
		else if(areas[3])
		{
			
		}
	}
}