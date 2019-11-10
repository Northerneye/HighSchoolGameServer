<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "greatshot";
	$side = $_REQUEST["s"];
	$x1 = 0;
	$y1 = 0;
	$x2 = 0;
	$y2 = 0;
	$x3 = 0;
	$y3 = 0;
	$dx = 0;
	$dy = 0;
	$u = "";
	if(!isset($_COOKIE["username"])) {
		echo false;
	}
	else {
		$u = $_COOKIE["username"];
	}
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "select * from userinfo;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0)
	{
		while($row = $result->fetch_assoc())
		{
			if($u == $row["username"])
			{
				$x1 = $row["playerx1"];
				$y1 = $row["playery1"];
				$x2 = $row["playerx2"]-50;
				$y2 = $row["playery2"];
				$x3 = $row["playerx3"];
				$y3 = $row["playery3"]-50;
				if($side == "up")
				{
					$x1 += 25;
					$y1 -= 75;
					$x2 += 25;
					$y2 -= 75;
					$x3 += 25;
					$y3 -= 75;
					$dx = 0;
					$dy = -10;
				}
				if($side == "down")
				{
					$x1 += 25;
					$y1 += 125;
					$x2 += 25;
					$y2 += 125;
					$x3 += 25;
					$y3 += 125;
					$dx = 0;
					$dy = 10;
				}
				if($side == "left")
				{
					$x1 -= 75;
					$y1 += 25;
					$x2 -= 75;
					$y2 += 25;
					$x3 -= 75;
					$y3 += 25;
					$dx = -10;
					$dy = 0;
				}
				if($side == "right")
				{
					$x1 += 125;
					$y1 += 25;
					$x2 += 125;
					$y2 += 25;
					$x3 += 125;
					$y3 += 25;
					$dx = 10;
					$dy = 0;
				}
			}
		}
	}
	$sql = "insert into shots(x1,y1,x2,y2,x3,y3,dx,dy) values(".$x1.",".$y1.",".$x2.",".$y2.",".$x3.",".$y3.",".$dx.",".$dy.");";
	$conn->query($sql);
	$conn->close();
?>
