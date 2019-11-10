var gravityCounter = [];
gravityCounter[0] = 10;
function areaObjectAI()
{
	if(globalPos[0])
	{
		if(areas[0])
		{
			if(areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 > areaSpriteX1[0][150]+(areaSpriteX2[0][150]-areaSpriteX1[0][150])/2-600 && areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 < areaSpriteX1[0][150]+(areaSpriteX2[0][150]-areaSpriteX1[0][150])/2+600 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 > areaSpriteY1[0][150]+(areaSpriteY3[0][150]-areaSpriteY1[0][150])/2-600 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 < areaSpriteY1[0][150]+(areaSpriteY3[0][150]-areaSpriteY1[0][150])/2+600)
			{
				if(gravityCounter[0] == 10)
				{
					if(areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 > areaSpriteX1[0][150]+(areaSpriteX2[0][150]-areaSpriteX1[0][150])/2-600 && areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 < areaSpriteX1[0][150]+(areaSpriteX2[0][150]-areaSpriteX1[0][150])/2-200)
					{
						dx[0][0] += 1;
						dx[0][1] += 1;
					}
					if(areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 < areaSpriteX1[0][150]+(areaSpriteX2[0][150]-areaSpriteX1[0][150])/2+600 && areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 > areaSpriteX1[0][150]+(areaSpriteX2[0][150]-areaSpriteX1[0][150])/2+200)
					{
						dx[0][0] -= 1;
						dx[0][1] -= 1;
					}
					if(areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 > areaSpriteY1[0][150]+(areaSpriteY3[0][150]-areaSpriteY1[0][150])/2-600 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 < areaSpriteY1[0][150]+(areaSpriteY3[0][150]-areaSpriteY1[0][150])/2-200)
					{
						dy[0][0] += 1;
						dy[0][1] += 1;
					}
					if(areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 < areaSpriteY1[0][150]+(areaSpriteY3[0][150]-areaSpriteY1[0][150])/2+600 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 > areaSpriteY1[0][150]+(areaSpriteY3[0][150]-areaSpriteY1[0][150])/2+200)
					{
						dy[0][0] -= 1;
						dy[0][1] -= 1;
					}
					if(areaSpriteX1[0][0]>areaSpriteX1[0][150] && areaSpriteX1[0][0]<areaSpriteX2[0][150] && areaSpriteY1[0][0]>areaSpriteY1[0][150] && areaSpriteY1[0][0]<areaSpriteY3[0][150])
					{
						stopAreaUser(0);
						modifiedControls(0);
						dx[0][0] *= 20;
						dx[0][1] *= 20;
						dy[0][0] *= 20;
						dy[0][1] *= 20;
					}
				}
				gravityCounter[0]-=1;
				if(gravityCounter[0] == 0)
				{
					gravityCounter[0] = 10;
				}
			}
			if(areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 > areaSpriteX1[0][156]+(areaSpriteX2[0][156]-areaSpriteX1[0][156])/2-10000 && areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 < areaSpriteX1[0][156]+(areaSpriteX2[0][156]-areaSpriteX1[0][156])/2+10000 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 > areaSpriteY1[0][156]+(areaSpriteY3[0][156]-areaSpriteY1[0][156])/2-10000 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 < areaSpriteY1[0][156]+(areaSpriteY3[0][156]-areaSpriteY1[0][156])/2+10000)
			{
				if(areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 > areaSpriteX1[0][156]+(areaSpriteX2[0][156]-areaSpriteX1[0][156])/2-10000 && areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 < areaSpriteX1[0][156]+(areaSpriteX2[0][156]-areaSpriteX1[0][156])/2-200)
				{
					dx[0][0] += 1;
					dx[0][1] += 1;
				}
				if(areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 < areaSpriteX1[0][156]+(areaSpriteX2[0][156]-areaSpriteX1[0][156])/2+10000 && areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 > areaSpriteX1[0][156]+(areaSpriteX2[0][156]-areaSpriteX1[0][156])/2+200)
				{
					dx[0][0] -= 1;
					dx[0][1] -= 1;
				}
				if(areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 > areaSpriteY1[0][156]+(areaSpriteY3[0][156]-areaSpriteY1[0][156])/2-10000 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 < areaSpriteY1[0][156]+(areaSpriteY3[0][156]-areaSpriteY1[0][156])/2-200)
				{
					dy[0][0] += 1;
					dy[0][1] += 1;
				}
				if(areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 < areaSpriteY1[0][156]+(areaSpriteY3[0][156]-areaSpriteY1[0][156])/2+10000 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 > areaSpriteY1[0][156]+(areaSpriteY3[0][156]-areaSpriteY1[0][156])/2+200)
				{
					dy[0][0] -= 1;
					dy[0][1] -= 1;
				}
				if(areaSpriteX1[0][0]>areaSpriteX1[0][156] && areaSpriteX1[0][0]<areaSpriteX2[0][156] && areaSpriteY1[0][0]>areaSpriteY1[0][156] && areaSpriteY1[0][0]<areaSpriteY3[0][156])
				{
					stopAreaUser(0);
					modifiedControls(0);
					dx[0][0] *= 20;
					dx[0][1] *= 20;
					dy[0][0] *= 20;
					dy[0][1] *= 20;
				}
			}
			if(areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 > areaSpriteX1[0][162]+(areaSpriteX2[0][162]-areaSpriteX1[0][162])/2-20000 && areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 < areaSpriteX1[0][162]+(areaSpriteX2[0][162]-areaSpriteX1[0][162])/2+20000 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 > areaSpriteY1[0][162]+(areaSpriteY3[0][162]-areaSpriteY1[0][162])/2-20000 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 < areaSpriteY1[0][162]+(areaSpriteY3[0][162]-areaSpriteY1[0][162])/2+20000)
			{
				if(areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 > areaSpriteX1[0][162]+(areaSpriteX2[0][162]-areaSpriteX1[0][162])/2-20000 && areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 < areaSpriteX1[0][162]+(areaSpriteX2[0][162]-areaSpriteX1[0][162])/2)
				{
					dx[0][0] += 1;
					dx[0][1] += 1;
				}
				if(areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 < areaSpriteX1[0][162]+(areaSpriteX2[0][162]-areaSpriteX1[0][162])/2+20000 && areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 > areaSpriteX1[0][162]+(areaSpriteX2[0][162]-areaSpriteX1[0][162])/2)
				{
					dx[0][0] -= 1;
					dx[0][1] -= 1;
				}
				if(areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 > areaSpriteY1[0][162]+(areaSpriteY3[0][162]-areaSpriteY1[0][162])/2-20000 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 < areaSpriteY1[0][162]+(areaSpriteY3[0][162]-areaSpriteY1[0][162])/2)
				{
					dy[0][0] += 1;
					dy[0][1] += 1;
				}
				if(areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 < areaSpriteY1[0][162]+(areaSpriteY3[0][162]-areaSpriteY1[0][162])/2+20000 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 > areaSpriteY1[0][162]+(areaSpriteY3[0][162]-areaSpriteY1[0][162])/2)
				{
					dy[0][0] -= 1;
					dy[0][1] -= 1;
				}
				if(areaSpriteX1[0][0]>areaSpriteX1[0][162] && areaSpriteX1[0][0]<areaSpriteX2[0][162] && areaSpriteY1[0][0]>areaSpriteY1[0][162] && areaSpriteY1[0][0]<areaSpriteY3[0][162])
				{
					fuel = 50;
					tpRectSprite(500, 100, 50, 50, 0, 0);
					drawArea(150000, 150000, 0);
					dx[0][0] = 0;
					dx[0][1] = 0;
					dy[0][0] = 0;
					dy[0][1] = 0;
				}
			}
			if(areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 > areaSpriteX1[0][168]+(areaSpriteX2[0][168]-areaSpriteX1[0][168])/2-1000 && areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 < areaSpriteX1[0][168]+(areaSpriteX2[0][168]-areaSpriteX1[0][168])/2+1000 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 > areaSpriteY1[0][168]+(areaSpriteY3[0][168]-areaSpriteY1[0][168])/2-1000 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 < areaSpriteY1[0][168]+(areaSpriteY3[0][168]-areaSpriteY1[0][168])/2+1000)
			{
				if(areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 > areaSpriteX1[0][168]+(areaSpriteX2[0][168]-areaSpriteX1[0][168])/2-1000 && areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 < areaSpriteX1[0][168]+(areaSpriteX2[0][168]-areaSpriteX1[0][168])/2)
				{
					dx[0][0] += 1;
					dx[0][1] += 1;
				}
				if(areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 < areaSpriteX1[0][168]+(areaSpriteX2[0][168]-areaSpriteX1[0][168])/2+1000 && areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 > areaSpriteX1[0][168]+(areaSpriteX2[0][168]-areaSpriteX1[0][168])/2)
				{
					dx[0][0] -= 1;
					dx[0][1] -= 1;
				}
				if(areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 > areaSpriteY1[0][168]+(areaSpriteY3[0][168]-areaSpriteY1[0][168])/2-1000 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 < areaSpriteY1[0][168]+(areaSpriteY3[0][168]-areaSpriteY1[0][168])/2)
				{
					dy[0][0] += 1;
					dy[0][1] += 1;
				}
				if(areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 < areaSpriteY1[0][168]+(areaSpriteY3[0][168]-areaSpriteY1[0][168])/2+1000 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 > areaSpriteY1[0][168]+(areaSpriteY3[0][168]-areaSpriteY1[0][168])/2)
				{
					dy[0][0] -= 1;
					dy[0][1] -= 1;
				}
				if(areaSpriteX1[0][0]>areaSpriteX1[0][168] && areaSpriteX1[0][0]<areaSpriteX2[0][168] && areaSpriteY1[0][0]>areaSpriteY1[0][168] && areaSpriteY1[0][0]<areaSpriteY3[0][168])
				{
					stopAreaUser(0);
					modifiedControls(0);
					dx[0][0] *= 20;
					dx[0][1] *= 20;
					dy[0][0] *= 20;
					dy[0][1] *= 20;
				}
			}
			
			
			if(areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 > areaSpriteX1[0][174]+(areaSpriteX2[0][174]-areaSpriteX1[0][174])/2-2500 && areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 < areaSpriteX1[0][174]+(areaSpriteX2[0][174]-areaSpriteX1[0][174])/2+2500 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 > areaSpriteY1[0][174]+(areaSpriteY3[0][174]-areaSpriteY1[0][174])/2-2500 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 < areaSpriteY1[0][174]+(areaSpriteY3[0][174]-areaSpriteY1[0][174])/2+2500)
			{
				if(areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 > areaSpriteX1[0][174]+(areaSpriteX2[0][174]-areaSpriteX1[0][174])/2-2500 && areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 < areaSpriteX1[0][174]+(areaSpriteX2[0][174]-areaSpriteX1[0][174])/2)
				{
					dx[0][0] += 1;
					dx[0][1] += 1;
				}
				if(areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 < areaSpriteX1[0][174]+(areaSpriteX2[0][174]-areaSpriteX1[0][174])/2+2500 && areaSpriteX1[0][0]+(areaSpriteX2[0][0]-areaSpriteX1[0][0])/2 > areaSpriteX1[0][174]+(areaSpriteX2[0][174]-areaSpriteX1[0][174])/2)
				{
					dx[0][0] -= 1;
					dx[0][1] -= 1;
				}
				if(areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 > areaSpriteY1[0][174]+(areaSpriteY3[0][174]-areaSpriteY1[0][174])/2-2500 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 < areaSpriteY1[0][174]+(areaSpriteY3[0][174]-areaSpriteY1[0][174])/2)
				{
					dy[0][0] += 1;
					dy[0][1] += 1;
				}
				if(areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 < areaSpriteY1[0][174]+(areaSpriteY3[0][174]-areaSpriteY1[0][174])/2+2500 && areaSpriteY1[0][0]+(areaSpriteY3[0][0]-areaSpriteY1[0][0])/2 > areaSpriteY1[0][174]+(areaSpriteY3[0][174]-areaSpriteY1[0][174])/2)
				{
					dy[0][0] -= 1;
					dy[0][1] -= 1;
				}
				if(areaSpriteX1[0][0]>areaSpriteX1[0][174] && areaSpriteX1[0][0]<areaSpriteX2[0][174] && areaSpriteY1[0][0]>areaSpriteY1[0][174] && areaSpriteY1[0][0]<areaSpriteY3[0][174])
				{
					stopAreaUser(0);
					modifiedControls(0);
					dx[0][0] *= 20;
					dx[0][1] *= 20;
					dy[0][0] *= 20;
					dy[0][1] *= 20;
				}
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