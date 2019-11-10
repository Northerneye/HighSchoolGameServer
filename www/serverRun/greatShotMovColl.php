<html>
<body>
<?php
	set_time_limit (10000000);
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "greatshot";
	$shotX1 = 0;
	$shotY1 = 0;
	$shotX2 = 0;
	$shotY2 = 0;
	$shotX3 = 0;
	$shotY3 = 0;
	$dx = 0;
	$dy = 0;
	$i = 0;
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
			$i = 0;
			$sql = "select * from userinfo;";
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
			$sql = "select * from shots;";
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
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					if(($shotX1 > 0 && $shotY1 > 975 && $shotX1 < 400 && $shotY1 < 1025) || ($shotX2 > 0 && $shotY3 > 975 && $shotX2 < 400 && $shotY3 < 1025))
					{
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					if(($shotX1 > 975 && $shotY1 > 0 && $shotX1 < 1025 && $shotY1 < 200) || ($shotX2 > 975 && $shotY3 > 0 && $shotX2 < 1025 && $shotY3 < 200))
					{
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					if(($shotX1 > 600 && $shotY1 > 975 && $shotX1 < 1440 && $shotY1 < 1025) || ($shotX2 > 600 && $shotY3 > 975 && $shotX2 < 1440 && $shotY3 < 1025))
					{
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					if(($shotX1 > 975 && $shotY1 > 400 && $shotX1 < 1025 && $shotY1 < 1740) || ($shotX2 > 975 && $shotY3 > 400 && $shotX2 < 1025 && $shotY3 < 1740))
					{
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					if(($shotX1 > 1630 && $shotY1 > 975 && $shotX1 < 2000 && $shotY1 < 1025) || ($shotX2 > 1630 && $shotY3 > 975 && $shotX2 < 2000 && $shotY3 < 1025))
					{
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					if(($shotX1 > 975 && $shotY1 > 1930 && $shotX1 < 1025 && $shotY1 < 2000) || ($shotX2 > 975 && $shotY3 > 1930 && $shotX2 < 1025 && $shotY3 < 2000))
					{
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					if(($shotX1 > 500 && $shotY1 > 600 && $shotX1 < 700 && $shotY1 < 650) || ($shotX2 > 500 && $shotY3 > 600 && $shotX2 < 700 && $shotY3 < 650))
					{
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					if(($shotX1 > 1350 && $shotY1 > 570 && $shotX1 < 1425 && $shotY1 < 870) || ($shotX2 > 1350 && $shotY3 > 570 && $shotX2 < 1425 && $shotY3 < 870))
					{
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					if(($shotX1 > 375 && $shotY1 > 1035 && $shotX1 < 405 && $shotY1 < 1235) || ($shotX2 > 375 && $shotY3 > 1035 && $shotX2 < 405 && $shotY3 < 1235))
					{
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					if(($shotX1 > 1155 && $shotY1 > 1685 && $shotX1 < 1430 && $shotY1 < 1735) || ($shotX2 > 1155 && $shotY3 > 1685 && $shotX2 < 1430 && $shotY3 < 1735))
					{
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					if(($shotX1 > 1385 && $shotY1 > 1185 && $shotX1 < 1435 && $shotY1 < 1675) || ($shotX2 > 1385 && $shotY3 > 1185 && $shotX2 < 1435 && $shotY3 < 1675))
					{
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					if(($shotX1 > 1185 && $shotY1 > 1135 && $shotX1 < 1235 && $shotY1 < 1535) || ($shotX2 > 1185 && $shotY3 > 1135 && $shotX2 < 1235 && $shotY3 < 1535))
					{
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					if(($shotX1 > 0 && $shotY1 > 1600 && $shotX1 < 150 && $shotY1 < 1650) || ($shotX2 > 0 && $shotY3 > 1600 && $shotX2 < 150 && $shotY3 < 1650))
					{
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					if(($shotX1 > 150 && $shotY1 > 1770 && $shotX1 < 200 && $shotY1 < 2000) || ($shotX2 > 150 && $shotY3 > 1770 && $shotX2 < 200 && $shotY3 < 2000))
					{
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					if(($shotX1 > 1600 && $shotY1 > 110 && $shotX1 < 1890 && $shotY1 < 160) || ($shotX2 > 1600 && $shotY3 > 110 && $shotX2 < 1890 && $shotY3 < 160))
					{
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					if(($shotX1 > 1840 && $shotY1 > 110 && $shotX1 < 1890 && $shotY1 < 510) || ($shotX2 > 1840 && $shotY3 > 110 && $shotX2 < 1890 && $shotY3 < 510))
					{
						$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
						$conn->query($sql);
					}
					for($i = 0; $i <= sizeof($playerX1)-1; $i++)
					{
						if(($shotX1 > $playerX1[$i] && $shotY1 > $playerY1[$i] && $shotX1 < $playerX2[$i] && $shotY1 < $playerY3[$i]) || ($shotX2 > $playerX1[$i] && $shotY3 > $playerY1[$i] && $shotX2 < $playerX2[$i] && $shotY3 < $playerY3[$i]))
						{
							$sql = "delete from shots where x1 = ".$shotX1." and y1 = ".$shotY1.";";
							$conn->query($sql);
							$newhp = $playerHP[$i] - 1;
							$sql = "update userinfo set playerhp = ".$newhp." where playery1 = ".$playerY1[$i]." and playerx1 = ".$playerX1[$i].";";
							$conn->query($sql);
						}
					}
					$newX1 = $shotX1+$dx;
					$newY1 = $shotY1+$dy;
					$newX2 = $shotX2+$dx;
					$newY2 = $shotY2+$dy;
					$newX3 = $shotX3+$dx;
					$newY3 = $shotY3+$dy;
					$sql = "update shots set x1 = ".$newX1." where x1 = ".$shotX1." and y1 = ".$shotY1.";";
					$conn->query($sql);
					$sql = "update shots set y1 = ".$newY1." where x1 = ".$newX1." and y1 = ".$shotY1.";";
					$conn->query($sql);
					$sql = "update shots set x2 = ".$newX2." where x2 = ".$shotX2." and y2 = ".$shotY2.";";
					$conn->query($sql);
					$sql = "update shots set y2 = ".$newY2." where x2 = ".$newX2." and y2 = ".$shotY2.";";
					$conn->query($sql);
					$sql = "update shots set x3 = ".$newX3." where x3 = ".$shotX3." and y3 = ".$shotY3.";";
					$conn->query($sql);
					$sql = "update shots set y3 = ".$newY3." where x3 = ".$newX3." and y3 = ".$shotY3.";";
					$conn->query($sql);
				}
			}
			usleep(10000);
		}
		$conn->close();
	}
?>
</body>
</html>