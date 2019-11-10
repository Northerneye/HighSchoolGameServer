var collided = [];
function rectCollision2D()
{
	/*for (var i = maxSprites; i >= 0; i--)
	{
		spriteX1[i] -= 1;
		if (spriteY1[sprite2dId] < spriteY4[i])
		{
			if(spriteY1[sprite2dId] >= spriteY1[i])
			{
				if(spriteX1[sprite2dId] <= spriteX4[i])
				{alert(1)
					if(spriteX1[sprite2dId] >= spriteX1[i])
					{
						alert(2)
					}
				}
			}
		}
		/*while(dx[sprite2dId]+spriteX1[sprite2dId] < spriteX2[i] && spriteY1[sprite2dId] < spriteY2[i] && spriteY2[sprite2dId] > spriteY1[i] && spriteX2[sprite2dId] > spriteX2[i] && spriteX1[sprite2dId] >= spriteX2[i])
		{
			if(Math.abs(dx[sprite2dId]) >= Math.abs(dx[i]))
			{
				dx[sprite2dId] += 1;
			}
			if(Math.abs(dx[sprite2dId]) <= Math.abs(dx[i]))
			{
				dx[i] -=  1;
			}
		}
		while(dy[sprite2dId] + spriteY1[sprite2dId] < spriteY2[i] && spriteX1[sprite2dId] < spriteX2[i] && spriteX2[sprite2dId] > spriteX1[i] && spriteY2[sprite2dId] > spriteY2[i] && spriteY1[sprite2dId] >= spriteY2[i])
		{
			if(Math.abs(dy[sprite2dId]) >= Math.abs(dy[i]))
			{
				dy[sprite2dId] += 1;
			}
			if(Math.abs(dy[sprite2dId]) <= Math.abs(dy[i]))
			{
				dy[i] -=  1;
			}
		}
		while(dy[sprite2dId] + spriteY2[sprite2dId] > spriteY1[i] && spriteX1[sprite2dId] < spriteX2[i] && spriteX2[sprite2dId] > spriteX1[i] && spriteY2[sprite2dId] <= spriteY2[i])
		{
			if(Math.abs(dy[sprite2dId]) >= Math.abs(dy[i]))
			{
				dy[sprite2dId] -= 1;
			}
			if(Math.abs(dy[sprite2dId]) <= Math.abs(dy[i]))
			{
				dy[i] +=  1;
			}
		}
		while(dx[sprite2dId] + spriteX2[sprite2dId] > spriteX1[i] && spriteY1[sprite2dId] < spriteY2[i] && spriteY2[sprite2dId] > spriteY1[i] && spriteX2[sprite2dId] <= spriteX2[i])
		{
			if(Math.abs(dx[sprite2dId]) >= Math.abs(dx[i]))
			{
				dx[sprite2dId] -= 1;
			}
			if(Math.abs(dx[sprite2dId]) <= Math.abs(dx[i]))
			{
				dx[i] +=  1;
			}
		}
	}*/
}
function wallCollision()
{
	for (var i = maxSprites; i >= 0; i--)
	{
		if(spriteUser[i] == true)
		{
			while(dx[i] + spriteX1[i] < 0)
			{
				dx[i] += 1;
			}	
			while(dx[i] + spriteX2[i] < 0)
			{
				dx[i] += 1;
			}
			while(dx[i] + spriteX3[i] < 0)
			{
				dy[i] += 1;
			}
			while(dy[i] + spriteY1[i] < 0)
			{
				dy[i] += 1;
			}
			while(dy[i] + spriteY2[i] < 0)
			{
				dy[i] += 1;
			}
			while(dy[i] + spriteY3[i] < 0)
			{
				dy[i] += 1;
			}
			while(dx[i] + spriteX1[i] > canvas.width)
			{
				dx[i] -= 1;
			}
			while(dx[i] + spriteX2[i] > canvas.width)
			{
				dx[i] -= 1;
			}
			while(dx[i] + spriteX3[i] > canvas.width)
			{
				dy[i] -= 1;
			}
			while(dy[i] + spriteY1[i] > canvas.height)
			{
				dy[i] -= 1;
			}
			while(dy[i] + spriteY2[i] > canvas.height)
			{
				dy[i] -= 1;
			}
			while(dy[i] + spriteY3[i] > canvas.height)
			{
				dy[i] -= 1;
			}
		}
	}
}
function triangleCollision2D()
{
	for (var i = maxSprites; i >= 0; i--)
	{
		if (i == sprite2dId)
		{
			i--;
		}
		for(var k = exception[sprite2dId].length; k >= 0; k--)
		{
			if(exception[sprite2dId][k] == i)
			{
				i--;
			}
		}
		if (i == sprite2dId)
		{
			i--;
		}
		if (spriteY3[i] > (spriteX3[i])*((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])) + (spriteY1[i] - ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(spriteX1[i])))
		{
			if (spriteY2[i] > (spriteX2[i])*((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])) + (spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(spriteX1[i]))) || (spriteX1[i]-spriteX3[i]) == 0 && spriteX2[i] > spriteX1[i])
			{
				if(spriteY1[i] < (spriteX1[i])*((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])) + (spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(spriteX2[i]))))
				{
					if(movable == false)
					{
						if (dy[sprite2dId]+spriteY1[sprite2dId] >= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[sprite2dId]+spriteX1[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[i]+spriteX1[i]))))
						{
							if(dy[sprite2dId]+spriteY1[sprite2dId] >= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX1[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[i]+spriteX1[i]))) || (spriteX1[i]-spriteX3[i]) == 0 && dx[sprite2dId] + spriteX1[sprite2dId] >= dx[i]+spriteX1[i])
							{
								if(dy[sprite2dId]+spriteY1[sprite2dId] <= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX1[sprite2dId]) + (dy[i]+spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[i]+spriteX2[i]))))
								{
									if(spriteY1[sprite2dId] <= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(spriteX1[sprite2dId]) + (spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(spriteX1[i]))) && (spriteY1[i]-spriteY2[i]) !== 0)
									{
										while(dy[sprite2dId]+spriteY1[sprite2dId] >= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[sprite2dId]+spriteX1[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[i]+spriteX1[i]))))
										{
											if(Math.abs(spriteY1[i]-spriteY2[i]) <= Math.abs(spriteX1[i]-spriteX2[i]))
											{
												if((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))||true)
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY1[i]-spriteY2[i]) >= Math.abs(spriteX1[i]-spriteX2[i]))
											{
												if((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if(spriteY1[sprite2dId] >= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(spriteX1[sprite2dId]) + (spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(spriteX1[i]))))
									{
										while(dy[sprite2dId]+spriteY1[sprite2dId] <= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX1[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[i]+spriteX1[i]))))
										{
											if(Math.abs(spriteY1[i]-spriteY3[i]) <= Math.abs(spriteX1[i]-spriteX3[i]))
											{
												if((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY1[i]-spriteY3[i]) >= Math.abs(spriteX1[i]-spriteX3[i]))
											{
												if((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if(spriteY1[sprite2dId] >= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(spriteX1[sprite2dId]) + (spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(spriteX2[i]))) && (spriteY2[i]-spriteY3[i]) !== 0)
									{
										while(dy[sprite2dId]+spriteY1[sprite2dId] <= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX1[sprite2dId]) + (dy[i]+spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[i]+spriteX2[i]))))
										{
											if(Math.abs(spriteY2[i]-spriteY3[i]) <= Math.abs(spriteX2[i]-spriteX3[i]))
											{
												if((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY2[i]-spriteY3[i]) >= Math.abs(spriteX2[i]-spriteX3[i]))
											{
												if((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if((spriteX1[i]-spriteX3[i]) == 0 && spriteX1[sprite2dId] <= spriteX1[i])
									{
										while(dx[sprite2dId] + spriteX1[sprite2dId] >= dx[i]+spriteX1[i])
										{
											if(Math.abs(dx[sprite2dId]) >= Math.abs(dx[i]))
											{
												dx[sprite2dId] -= 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dx[sprite2dId]) < Math.abs(dx[i])) // add <= to become moveable
											{
												dx[i] += 1;
												collided[i] = true;
											}
										}
									}
									if((spriteY1[i]-spriteY2[i]) == 0 && spriteY1[sprite2dId] <= spriteY1[i])
									{
										while(dy[sprite2dId] + spriteY1[sprite2dId] >= dy[i]+spriteY1[i])
										{
											if(Math.abs(dy[sprite2dId]) >= Math.abs(dy[i]))
											{
												dy[sprite2dId] -= 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dy[sprite2dId]) < Math.abs(dy[i])) // add <= to become moveable
											{
												dy[i] += 1;
												collided[i] = true;
											}
										}
									}
									if((spriteY2[i]-spriteY3[i]) == 0 && spriteY1[sprite2dId] <= spriteY2[i])
									{
										while(dy[sprite2dId] + spriteY1[sprite2dId] >= dy[i]+spriteY2[i])
										{
											if(Math.abs(dy[sprite2dId]) >= Math.abs(dy[i]))
											{
												dy[sprite2dId] -= 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dy[sprite2dId]) < Math.abs(dy[i])) // add <= to become moveable
											{
												dy[i] += 1;
												collided[i] = true;
											}
										}
									}
								}
							}
						}
						//spriteY2
						if (dy[sprite2dId]+spriteY2[sprite2dId] >= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[sprite2dId]+spriteX2[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[i]+spriteX1[i]))))
						{
							if(dy[sprite2dId]+spriteY2[sprite2dId] >= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX2[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[i]+spriteX1[i]))) || (spriteX1[i]-spriteX3[i]) == 0 && dx[sprite2dId] + spriteX2[sprite2dId] >= dx[i]+spriteX1[i])
							{
								if(dy[sprite2dId]+spriteY2[sprite2dId] <= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX2[sprite2dId]) + (dy[i]+spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[i]+spriteX2[i]))))
								{//alert(2)
									if(spriteY2[sprite2dId] <= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(spriteX2[sprite2dId]) + (spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(spriteX1[i]))) && (spriteY1[i]-spriteY2[i]) !== 0)
									{
										while(dy[sprite2dId]+spriteY2[sprite2dId] >= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[sprite2dId]+spriteX2[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[i]+spriteX1[i]))) && (spriteY1[i]-spriteY2[i]) !== 0)
										{
											if(Math.abs(spriteY1[i]-spriteY2[i]) <= Math.abs(spriteX1[i]-spriteX2[i]))
											{
												if((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))||true)
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY1[i]-spriteY2[i]) >= Math.abs(spriteX1[i]-spriteX2[i]))
											{
												if((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if(spriteY2[sprite2dId] >= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(spriteX2[sprite2dId]) + (spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(spriteX1[i]))))
									{
										while(dy[sprite2dId]+spriteY2[sprite2dId] <= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX2[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[i]+spriteX1[i]))))
										{
											if(Math.abs(spriteY1[i]-spriteY3[i]) <= Math.abs(spriteX1[i]-spriteX3[i]))
											{
												if((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY1[i]-spriteY3[i]) >= Math.abs(spriteX1[i]-spriteX3[i]))
											{
												if((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if(spriteY2[sprite2dId] >= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(spriteX2[sprite2dId]) + (spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(spriteX2[i]))) && (spriteY2[i]-spriteY3[i]) !== 0)
									{
										while(dy[sprite2dId]+spriteY2[sprite2dId] <= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX2[sprite2dId]) + (dy[i]+spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[i]+spriteX2[i]))))
										{
											if(Math.abs(spriteY2[i]-spriteY3[i]) <= Math.abs(spriteX2[i]-spriteX3[i]))
											{
												if((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dy[sprite2dId] += 1
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY2[i]-spriteY3[i]) >= Math.abs(spriteX2[i]-spriteX3[i]))
											{
												if((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if((spriteX1[i]-spriteX3[i]) == 0 && spriteX2[sprite2dId] <= spriteX1[i])
									{
										while(dx[sprite2dId] + spriteX2[sprite2dId] >= dx[i]+spriteX1[i])
										{
											if(Math.abs(dx[sprite2dId]) >= Math.abs(dx[i]))
											{
												dx[sprite2dId] -= 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dx[sprite2dId]) < Math.abs(dx[i])) // add <= to become moveable
											{
												dx[i] += 1;
												collided[i] = true;
											}
										}
									}
									if((spriteY1[i]-spriteY2[i]) == 0 && spriteY2[sprite2dId] <= spriteY1[i])
									{
										while(dy[sprite2dId] + spriteY2[sprite2dId] >= dy[i]+spriteY1[i])
										{
											if(Math.abs(dy[sprite2dId]) >= Math.abs(dy[i]))
											{
												dy[sprite2dId] -= 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dy[sprite2dId]) < Math.abs(dy[i])) // add <= to become moveable
											{
												dy[i] += 1;
												collided[i] = true;
											}
										}
									}
									if((spriteY2[i]-spriteY3[i]) == 0 && spriteY2[sprite2dId] <= spriteY2[i])
									{
										while(dy[sprite2dId] + spriteY2[sprite2dId] >= dy[i]+spriteY2[i])
										{
											if(Math.abs(dy[sprite2dId]) >= Math.abs(dy[i]))
											{
												dy[sprite2dId] -= 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dy[sprite2dId]) < Math.abs(dy[i])) // add <= to become moveable
											{
												dy[i] += 1;
												collided[i] = true;
											}
										}
									}
								}
							}
						}
						//spriteY3
						if (dy[sprite2dId]+spriteY3[sprite2dId] >= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[sprite2dId]+spriteX3[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[i]+spriteX1[i]))))
						{
							if(dy[sprite2dId]+spriteY3[sprite2dId] >= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX3[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[i]+spriteX1[i]))) || (spriteX1[i]-spriteX3[i]) == 0 && dx[sprite2dId] + spriteX3[sprite2dId] >= dx[i]+spriteX1[i])
							{
								if(dy[sprite2dId]+spriteY3[sprite2dId] <= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX3[sprite2dId]) + (dy[i]+spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[i]+spriteX2[i]))))
								{//alert(3)
									if(spriteY3[sprite2dId] <= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(spriteX3[sprite2dId]) + (spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(spriteX1[i]))) && (spriteY1[i]-spriteY2[i]) !== 0)
									{
										while(dy[sprite2dId]+spriteY3[sprite2dId] >= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[sprite2dId]+spriteX3[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[i]+spriteX1[i]))) && (spriteY1[i]-spriteY2[i]) !== 0)
										{
											if(Math.abs(spriteY1[i]-spriteY2[i]) <= Math.abs(spriteX1[i]-spriteX2[i]))
											{
												if((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))||true)
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY1[i]-spriteY2[i]) >= Math.abs(spriteX1[i]-spriteX2[i]))
											{
												if((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if(spriteY3[sprite2dId] >= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(spriteX3[sprite2dId]) + (spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(spriteX1[i]))))
									{
										while(dy[sprite2dId]+spriteY3[sprite2dId] <= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX3[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[i]+spriteX1[i]))))
										{
											if(Math.abs(spriteY1[i]-spriteY3[i]) <= Math.abs(spriteX1[i]-spriteX3[i]))
											{
												if((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY1[i]-spriteY3[i]) >= Math.abs(spriteX1[i]-spriteX3[i]))
											{
												if((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] += 1;
														collided[i] = true;
														
													}
												}
											}
										}
									}
									if(spriteY3[sprite2dId] >= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(spriteX3[sprite2dId]) + (spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(spriteX2[i]))) && (spriteY2[i]-spriteY3[i]) !== 0)
									{
										while(dy[sprite2dId]+spriteY3[sprite2dId] <= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX3[sprite2dId]) + (dy[i]+spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[i]+spriteX2[i]))))
										{
											if(Math.abs(spriteY2[i]-spriteY3[i]) <= Math.abs(spriteX2[i]-spriteX3[i]))
											{
												if((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY2[i]-spriteY3[i]) >= Math.abs(spriteX2[i]-spriteX3[i]))
											{
												if((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if((spriteX1[i]-spriteX3[i]) == 0 && spriteX3[sprite2dId] <= spriteX1[i])
									{
										while(dx[sprite2dId] + spriteX3[sprite2dId] >= dx[i]+spriteX1[i])
										{
											if(Math.abs(dx[sprite2dId]) >= Math.abs(dx[i]))
											{
												dx[sprite2dId] -= 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dx[sprite2dId]) < Math.abs(dx[i])) // add <= to become moveable
											{
												dx[i] += 1;
												collided[i] = true;
											}
										}
									}
									if((spriteY1[i]-spriteY2[i]) == 0 && spriteY3[sprite2dId] <= spriteY1[i])
									{
										while(dy[sprite2dId] + spriteY3[sprite2dId] >= dy[i]+spriteY1[i])
										{
											if(Math.abs(dy[sprite2dId]) >= Math.abs(dy[i]))
											{
												dy[sprite2dId] -= 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dy[sprite2dId]) < Math.abs(dy[i])) // add <= to become moveable
											{
												dy[i] += 1;
												collided[i] = true;
											}
										}
									}
									if((spriteY2[i]-spriteY3[i]) == 0 && spriteY3[sprite2dId] <= spriteY2[i])
									{
										while(dy[sprite2dId] + spriteY3[sprite2dId] >= dy[i]+spriteY2[i])
										{
											if(Math.abs(dy[sprite2dId]) >= Math.abs(dy[i]))
											{
												dy[sprite2dId] -= 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dy[sprite2dId]) < Math.abs(dy[i])) // add <= to become moveable
											{
												dy[i] += 1;
												collided[i] = true;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		if(spriteY1[i] < ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(spriteX1[i]) + (spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(spriteX2[i]))))
		{
			if(spriteY2[i] < ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(spriteY2[i]) + (spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(spriteX2[i]))) || (spriteX1[i]-spriteX3[i]) == 0 && spriteX2[i] < spriteX3[i])
			{
				if(spriteY3[i] < ((spriteY1[i]-spriteY2[i])/(spriteY1[i]-spriteY2[i]))*(spriteX3[i]) + (spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(spriteX1[i]))))
				{
					if(movable == false)
					{
						if (dy[sprite2dId]+spriteY1[sprite2dId] <= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX1[sprite2dId]) + (dy[i]+spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[i]+spriteX2[i]))))
						{
							if(dy[sprite2dId]+spriteY1[sprite2dId] <= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX1[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[i]+spriteX1[i]))) || (spriteX1[i]-spriteX3[i]) == 0 && dx[sprite2dId] + spriteX1[sprite2dId] <= dx[i]+spriteX1[i])
							{
								if(dy[sprite2dId]+spriteY1[sprite2dId] >= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[sprite2dId]+spriteX1[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[i]+spriteX1[i]))))
								{//alert(4)
									if(spriteY1[sprite2dId] >= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(spriteX1[sprite2dId]) + (spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(spriteX2[i]))) && (spriteY2[i]-spriteY3[i]) !== 0)
									{
										while(dy[sprite2dId]+spriteY1[sprite2dId] <= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX1[sprite2dId]) + (dy[i]+spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[i]+spriteX2[i]))))
										{
											if(Math.abs(spriteY2[i]-spriteY3[i]) <= Math.abs(spriteX2[i]-spriteX3[i]))
											{
												if((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY2[i]-spriteY3[i]) >= Math.abs(spriteX2[i]-spriteX3[i]))
											{
												if((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if(spriteY1[sprite2dId] >= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(spriteX1[sprite2dId]) + (spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(spriteX1[i]))))
									{
										while(dy[sprite2dId]+spriteY1[sprite2dId] <= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX1[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[i]+spriteX1[i]))) || (spriteX1[i]-spriteX3[i]) == 0 && dx[sprite2dId] + spriteX1[sprite2dId] < dx[i]+spriteX1[i])
										{
											if(Math.abs(spriteY1[i]-spriteY3[i]) <= Math.abs(spriteX1[i]-spriteX3[i]))
											{
												if((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
												if((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY1[i]-spriteY3[i]) >= Math.abs(spriteX1[i]-spriteX3[i]))
											{
												if((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
												if((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if(spriteY1[sprite2dId] <= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(spriteX1[sprite2dId]) + (spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(spriteX1[i]))) && (spriteY1[i]-spriteY2[i]) !== 0)
									{
										while(dy[sprite2dId]+spriteY1[sprite2dId] >= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[sprite2dId]+spriteX1[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[i]+spriteX1[i]))))
										{
											if(Math.abs(spriteY1[i]-spriteY2[i]) <= Math.abs(spriteX1[i]-spriteX2[i]))
											{
												if((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))) // add <= to become moveable
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
												if((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY1[i]-spriteY2[i]) >= Math.abs(spriteX1[i]-spriteX2[i]))
											{
												if((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))) // add <= to become moveable
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
												if((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))) // add <= to become moveable
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if(spriteX1[i]-spriteX3[i] == 0 && spriteX1[sprite2dId] >= spriteX1[i])
									{
										while(dx[sprite2dId]+spriteX1[sprite2dId] <= dx[i]+spriteX1[i])
										{
											if(Math.abs(dx[sprite2dId]) >= Math.abs(dx[i]))
											{
												dx[sprite2dId] += 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dx[sprite2dId]) < Math.abs(dx[i]))
											{
												dx[i] -= 1;
												collided[i] = true;	
											}
										}
									}
									if(spriteY2[i]-spriteY3[i] == 0 && spriteY1[sprite2dId] >= spriteY2[i])
									{
										while(dy[sprite2dId]+spriteY1[sprite2dId] <= dy[i]+spriteY2[i])
										{
											if(Math.abs(dy[sprite2dId]) >= Math.abs(dy[i]))
											{
												dy[sprite2dId] += 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dy[sprite2dId]) < Math.abs(dy[i]))
											{
												dy[i] -= 1;
												collided[i] = true;
											}
										}
									}
									if(spriteY1[i]-spriteY2[i] == 0 && spriteY1[sprite2dId] >= spriteY2[i])
									{
										while(dy[sprite2dId]+spriteY1[sprite2dId] <= dy[i]+spriteY2[i])
										{
											if(Math.abs(dy[sprite2dId]) >= Math.abs(dy[i]))
											{
												dy[sprite2dId] += 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dy[sprite2dId]) < Math.abs(dy[i]))
											{
												dy[i] -= 1;
												collided[i] = true;
											}
										}
									}
								}
							}
						}
						
						if (dy[sprite2dId]+spriteY2[sprite2dId] <= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX2[sprite2dId]) + (dy[i]+spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[i]+spriteX2[i]))))
						{
							if(dy[sprite2dId]+spriteY2[sprite2dId] <= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX2[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[i]+spriteX1[i]))) || (spriteX1[i]-spriteX3[i]) == 0 && dx[sprite2dId] + spriteX2[sprite2dId] <= dx[i]+spriteX1[i])
							{
								if(dy[sprite2dId]+spriteY2[sprite2dId] >= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[sprite2dId]+spriteX2[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[i]+spriteX1[i]))))
								{//alert(5)
									if(spriteY2[sprite2dId] >= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(spriteX2[sprite2dId]) + (spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(spriteX2[i]))) && (spriteY2[i]-spriteY3[i]) !== 0)
									{
										while(dy[sprite2dId]+spriteY2[sprite2dId] <= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX2[sprite2dId]) + (dy[i]+spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[i]+spriteX2[i]))))
										{
											if(Math.abs(spriteY2[i]-spriteY3[i]) <= Math.abs(spriteX2[i]-spriteX3[i]))
											{
												if((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY2[i]-spriteY3[i]) >= Math.abs(spriteX2[i]-spriteX3[i]))
											{
												if((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if(spriteY2[sprite2dId] >= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(spriteX2[sprite2dId]) + (spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(spriteX1[i]))))
									{
										while(dy[sprite2dId]+spriteY2[sprite2dId] <= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX2[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[i]+spriteX1[i]))) || (spriteX1[i]-spriteX3[i]) == 0 && dx[sprite2dId] + spriteX2[sprite2dId] < dx[i]+spriteX1[i])
										{
											if(Math.abs(spriteY1[i]-spriteY3[i]) <= Math.abs(spriteX1[i]-spriteX3[i]))
											{
												if((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
												if((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY1[i]-spriteY3[i]) >= Math.abs(spriteX1[i]-spriteX3[i]))
											{
												if((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
												if((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if(spriteY2[sprite2dId] <= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(spriteX2[sprite2dId]) + (spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(spriteX1[i]))) && (spriteY1[i]-spriteY2[i]) !== 0)
									{
										while(dy[sprite2dId]+spriteY2[sprite2dId] >= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[sprite2dId]+spriteX2[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[i]+spriteX1[i]))))
										{
											if(Math.abs(spriteY1[i]-spriteY2[i]) <= Math.abs(spriteX1[i]-spriteX2[i]))
											{
												if((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))) // add <= to become moveable
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
												if((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY1[i]-spriteY2[i]) >= Math.abs(spriteX1[i]-spriteX2[i]))
											{
												if((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))) // add <= to become moveable
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
												if((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))) // add <= to become moveable
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if(spriteX1[i]-spriteX3[i] == 0 && spriteX2[sprite2dId] >= spriteX1[i])
									{
										while(dx[sprite2dId]+spriteX2[sprite2dId] <= dx[i]+spriteX1[i])
										{
											if(Math.abs(dx[sprite2dId]) >= Math.abs(dx[i]))
											{
												dx[sprite2dId] += 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dx[sprite2dId]) < Math.abs(dx[i]))
											{
												dx[i] -= 1;
												collided[i] = true;
											}
										}
									}
									if(spriteY2[i]-spriteY3[i] == 0 && spriteY2[sprite2dId] >= spriteY2[i])
									{
										while(dy[sprite2dId]+spriteY2[sprite2dId] <= dy[i]+spriteY2[i])
										{
											if(Math.abs(dy[sprite2dId]) >= Math.abs(dy[i]))
											{
												dy[sprite2dId] += 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dy[sprite2dId]) < Math.abs(dy[i]))
											{
												dy[i] -= 1;
												collided[i] = true;
											}
										}
									}
									if(spriteY1[i]-spriteY2[i] == 0 && spriteY2[sprite2dId] >= spriteY2[i])
									{
										while(dy[sprite2dId]+spriteY2[sprite2dId] <= dy[i]+spriteY2[i])
										{
											if(Math.abs(dy[sprite2dId]) >= Math.abs(dy[i]))
											{
												dy[sprite2dId] += 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dy[sprite2dId]) < Math.abs(dy[i]))
											{
												dy[i] -= 1;
												collided[i] = true;
											}
										}
									}
								}
							}
						}
						if (dy[sprite2dId]+spriteY3[sprite2dId] <= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX3[sprite2dId]) + (dy[i]+spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[i]+spriteX2[i]))))
						{
							if(dy[sprite2dId]+spriteY3[sprite2dId] <= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX3[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[i]+spriteX1[i]))) || (spriteX1[i]-spriteX3[i]) == 0 && dx[sprite2dId] + spriteX3[sprite2dId] <= dx[i]+spriteX1[i])
							{
								if(dy[sprite2dId]+spriteY3[sprite2dId] >= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[sprite2dId]+spriteX3[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[i]+spriteX1[i]))))
								{//alert(6)
									if(spriteY3[sprite2dId] >= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(spriteX3[sprite2dId]) + (spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(spriteX2[i]))) && (spriteY2[i]-spriteY3[i]) !== 0)
									{
										while(dy[sprite2dId]+spriteY3[sprite2dId] <= ((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX3[sprite2dId]) + (dy[i]+spriteY2[i] - (((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]))*(dx[i]+spriteX2[i]))))
										{
											if(Math.abs(spriteY2[i]-spriteY3[i]) <= Math.abs(spriteX2[i]-spriteX3[i]))
											{
												if((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY2[i]-spriteY3[i]) >= Math.abs(spriteX2[i]-spriteX3[i]))
											{
												if((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
												if((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY2[i]-spriteY3[i])/(spriteX2[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX2[i]-spriteX3[i])/(spriteY2[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if(spriteY3[sprite2dId] >= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(spriteX3[sprite2dId]) + (spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(spriteX1[i]))))
									{
										while(dy[sprite2dId]+spriteY3[sprite2dId] <= ((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[sprite2dId]+spriteX3[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]))*(dx[i]+spriteX1[i]))) || (spriteX1[i]-spriteX3[i]) == 0 && dx[sprite2dId] + spriteX3[sprite2dId] < dx[i]+spriteX1[i])
										{
											if(Math.abs(spriteY1[i]-spriteY3[i]) <= Math.abs(spriteX1[i]-spriteX3[i]))
											{
												if((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
												if((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY1[i]-spriteY3[i]) >= Math.abs(spriteX1[i]-spriteX3[i]))
											{
												if((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
												if((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY3[i])/(spriteX1[i]-spriteX3[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX3[i])/(spriteY1[i]-spriteY3[i])))) // add <= to become moveable
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if(spriteY3[sprite2dId] <= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(spriteX3[sprite2dId]) + (spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(spriteX1[i]))) && (spriteY1[i]-spriteY2[i]) !== 0)
									{
										while(dy[sprite2dId]+spriteY3[sprite2dId] >= ((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[sprite2dId]+spriteX3[sprite2dId]) + (dy[i]+spriteY1[i] - (((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]))*(dx[i]+spriteX1[i]))))
										{
											if(Math.abs(spriteY1[i]-spriteY2[i]) <= Math.abs(spriteX1[i]-spriteX2[i]))
											{
												if((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dy[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))) // add <= to become moveable
													{
														dy[i] += 1;
														collided[i] = true;
													}
												}
												if((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dy[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))) // add <= to become moveable
													{
														dy[i] -= 1;
														collided[i] = true;
													}
												}
											}
											if(Math.abs(spriteY1[i]-spriteY2[i]) >= Math.abs(spriteX1[i]-spriteX2[i]))
											{
												if((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]) <= 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[sprite2dId] -= 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))) // add <= to become moveable
													{
														dx[i] += 1;
														collided[i] = true;
													}
												}
												if((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]) > 0)
												{
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) >= (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))))
													{
														dx[sprite2dId] += 1;
														collided[sprite2dId] = true;
													}
													if((Math.abs(dx[sprite2dId])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[sprite2dId])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i]))) < (Math.abs(dx[i])*Math.abs((spriteY1[i]-spriteY2[i])/(spriteX1[i]-spriteX2[i])))+(Math.abs(dy[i])*Math.abs((spriteX1[i]-spriteX2[i])/(spriteY1[i]-spriteY2[i])))) // add <= to become moveable
													{
														dx[i] -= 1;
														collided[i] = true;
													}
												}
											}
										}
									}
									if(spriteX1[i]-spriteX3[i] == 0 && spriteX3[sprite2dId] >= spriteX1[i])
									{
										while(dx[sprite2dId]+spriteX3[sprite2dId] <= dx[i]+spriteX1[i])
										{
											if(Math.abs(dx[sprite2dId]) >= Math.abs(dx[i]))
											{
												dx[sprite2dId] += 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dx[sprite2dId]) < Math.abs(dx[i]))
											{
												dx[i] -= 1;
												collided[i] = true;
											}
										}
									}
									if(spriteY2[i]-spriteY3[i] == 0 && spriteY3[sprite2dId] >= spriteY2[i])
									{
										while(dy[sprite2dId]+spriteY3[sprite2dId] <= dy[i]+spriteY2[i])
										{
											if(Math.abs(dy[sprite2dId]) >= Math.abs(dy[i]))
											{
												dy[sprite2dId] += 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dy[sprite2dId]) < Math.abs(dy[i]))
											{
												dy[i] -= 1;
												collided[i] = true;
											}
										}
									}
									if(spriteY1[i]-spriteY2[i] == 0 && spriteY3[sprite2dId] >= spriteY2[i])
									{
										while(dy[sprite2dId]+spriteY3[sprite2dId] <= dy[i]+spriteY2[i])
										{
											if(Math.abs(dy[sprite2dId]) >= Math.abs(dy[i]))
											{
												dy[sprite2dId] += 1;
												collided[sprite2dId] = true;
											}
											if(Math.abs(dy[sprite2dId]) < Math.abs(dy[i]))
											{
												dy[i] -= 1;
												collided[i] = true;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}