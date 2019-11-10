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
		
	}
}