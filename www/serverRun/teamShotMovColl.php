<html>
<body>
<?php
	set_time_limit (10000000);
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "teamshot";
	$shotX1 = 0;
	$shotY1 = 0;
	$shotX2 = 0;
	$shotY2 = 0;
	$shotX3 = 0;
	$shotY3 = 0;
	$dx = 0;
	$dy = 0;
	$i = 0;
	$counter = 0;
	$playerX1 = array();
	$playerY1 = array();
	$playerX2 = array();
	$playerY2 = array();
	$playerX3 = array();
	$playerY3 = array();
	$playerHP = array();
	$ipaddress = $_SERVER['REMOTE_ADDR'];
	if($ipaddress == '::1')
	{
		$conn = mysqli_connect($servername, $username, $password, $dbname);
		while(true)
		{
			if($counter > 400)
			{
				$counter = 0;
			}
			$i = 0;
			$sql = "select * from snow;";
			$result = $conn->query($sql);
			if ($result->num_rows > 0)
			{
				while($row = $result->fetch_assoc())
				{
					$playerX1[$i] = $row["playerx1"];
					$playerY1[$i] = $row["playery1"];
					$playerX2[$i] = $row["playerx2"];
					$playerY2[$i] = $row["playery2"];
					$playerX3[$i] = $row["playerx3"];
					$playerY3[$i] = $row["playery3"];
					$playerHP[$i] = $row["playerhp"];
					$i++;
				}
			}
			$sql = "select * from snowshots;";
			$result = $conn->query($sql);
			if ($result->num_rows > 0)
			{
				while($row = $result->fetch_assoc())
				{
					$shotX1 = $row["x1"];
					$shotY1 = $row["y1"];
					$shotX2 = $row["x2"];
					$shotY2 = $row["y2"];
					$shotX3 = $row["x3"];
					$shotY3 = $row["y3"];
					$dx = $row["dx"];
					$dy = $row["dy"];
					if($shotX1 < 0 || $shotY1 < 0 || $shotX2 > 5000 || $shotY3 > 5000)
					{
						$sql = "delete from snowshots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					for($i = 0; $i <= sizeof($playerX1)-1; $i++)
					{
						if(($shotX1 > $playerX1[$i] && $shotY1 > $playerY1[$i] && $shotX1 < $playerX2[$i] && $shotY1 < $playerY3[$i]) || ($shotX2 > $playerX1[$i] && $shotY3 > $playerY1[$i] && $shotX2 < $playerX2[$i] && $shotY3 < $playerY3[$i]))
						{
							$sql = "delete from snowshots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
							$conn->query($sql);
							$newhp = $playerHP[$i] - 1;
							$sql = "update snow set playerhp = ".$newhp." where playery1 = ".$playerY1[$i]." and playerx1 = ".$playerX1[$i].";";
							$conn->query($sql);
						}
					}
					$newX1 = $shotX1+$dx;
					$newY1 = $shotY1+$dy;
					$newX2 = $shotX2+$dx;
					$newY2 = $shotY2+$dy;
					$newX3 = $shotX3+$dx;
					$newY3 = $shotY3+$dy;
					$sql = "update snowshots set x1 = ".$newX1." where x1 = ".$shotX1." and y1 = ".$shotY1.";";
					$conn->query($sql);
					$sql = "update snowshots set y1 = ".$newY1." where x1 = ".$newX1." and y1 = ".$shotY1.";";
					$conn->query($sql);
					$sql = "update snowshots set x2 = ".$newX2." where x2 = ".$shotX2." and y2 = ".$shotY2.";";
					$conn->query($sql);
					$sql = "update snowshots set y2 = ".$newY2." where x2 = ".$newX2." and y2 = ".$shotY2.";";
					$conn->query($sql);
					$sql = "update snowshots set x3 = ".$newX3." where x3 = ".$shotX3." and y3 = ".$shotY3.";";
					$conn->query($sql);
					$sql = "update snowshots set y3 = ".$newY3." where x3 = ".$newX3." and y3 = ".$shotY3.";";
					$conn->query($sql);
				}
			}



			/*$i = 0;
			$sql = "select * from planet1;";
			$result = $conn->query($sql);
			if ($result->num_rows > 0)
			{
				while($row = $result->fetch_assoc())
				{
					$playerX1[$i] = $row["playerx1"];
					$playerY1[$i] = $row["playery1"];
					$playerX2[$i] = $row["playerx2"];
					$playerY2[$i] = $row["playery2"];
					$playerX3[$i] = $row["playerx3"];
					$playerY3[$i] = $row["playery3"];
					$playerHP[$i] = $row["playerhp"];
					$i++;
				}
			}
			$sql = "select * from planet1shots;";
			$result = $conn->query($sql);
			if ($result->num_rows > 0)
			{
				while($row = $result->fetch_assoc())
				{
					$shotX1 = $row["x1"];
					$shotY1 = $row["y1"];
					$shotX2 = $row["x2"];
					$shotY2 = $row["y2"];
					$shotX3 = $row["x3"];
					$shotY3 = $row["y3"];
					$dx = $row["dx"];
					$dy = $row["dy"];
					if($shotX1 < 0 || $shotY1 < 0 || $shotX2 > 2000 || $shotY3 > 2000)
					{
						$sql = "delete from planet1shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					for($i = 0; $i <= sizeof($playerX1)-1; $i++)
					{
						if(($shotX1 > $playerX1[$i] && $shotY1 > $playerY1[$i] && $shotX1 < $playerX2[$i] && $shotY1 < $playerY3[$i]) || ($shotX2 > $playerX1[$i] && $shotY3 > $playerY1[$i] && $shotX2 < $playerX2[$i] && $shotY3 < $playerY3[$i]))
						{
							$sql = "delete from planet1shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
							$conn->query($sql);
							$newhp = $playerHP[$i] - 1;
							$sql = "update planet1 set playerhp = ".$newhp." where playery1 = ".$playerY1[$i]." and playerx1 = ".$playerX1[$i].";";
							$conn->query($sql);
						}
					}
					$newX1 = $shotX1+$dx;
					$newY1 = $shotY1+$dy;
					$newX2 = $shotX2+$dx;
					$newY2 = $shotY2+$dy;
					$newX3 = $shotX3+$dx;
					$newY3 = $shotY3+$dy;
					$sql = "update planet1shots set x1 = ".$newX1." where x1 = ".$shotX1." and y1 = ".$shotY1.";";
					$conn->query($sql);
					$sql = "update planet1shots set y1 = ".$newY1." where x1 = ".$newX1." and y1 = ".$shotY1.";";
					$conn->query($sql);
					$sql = "update planet1shots set x2 = ".$newX2." where x2 = ".$shotX2." and y2 = ".$shotY2.";";
					$conn->query($sql);
					$sql = "update planet1shots set y2 = ".$newY2." where x2 = ".$newX2." and y2 = ".$shotY2.";";
					$conn->query($sql);
					$sql = "update planet1shots set x3 = ".$newX3." where x3 = ".$shotX3." and y3 = ".$shotY3.";";
					$conn->query($sql);
					$sql = "update planet1shots set y3 = ".$newY3." where x3 = ".$newX3." and y3 = ".$shotY3.";";
					$conn->query($sql);
				}
			}*/
			$counter += 1;
			usleep(10000);
		}
		$conn->close();
	}
?>
</body>
</html>