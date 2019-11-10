<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "teamShot";
	$x = $_REQUEST["x"];
	$y = $_REQUEST["y"];
	$area = $_REQUEST["area"];
	$x1 = 0;
	$y1 = 0;
	$x2 = 0;
	$y2 = 0;
	$x3 = 0;
	$y3 = 0;
	$localX1 = 0;
	$localY1 = 0;
	$localX2 = 0;
	$localY2 = 0;
	$localX3 = 0;
	$localY3 = 0;
	$localVar1 = 0;
	$localVar2 = 0;
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
	$sql = "select * from ".$area.";";
	$result = $conn->query($sql);
	if ($result->num_rows > 0)
	{
		while($row = $result->fetch_assoc())
		{
			if($u == $row["username"])
			{
				if($area !== "userinfo")
				{
					$localVar1 = $row["playerx1"]+($row["playerx2"]-$row["playerx1"])/2+$x*5;
					$localVar2 = $row["playery1"]+($row["playery3"]-$row["playery1"])/2+$y*5;
					$x1 = $localVar1-10;
					$y1 = $localVar2-10;
					$x2 = $localVar1+10;
					$y2 = $localVar2-10;
					$x3 = $localVar1-10;
					$y3 = $localVar2+10;
					$dx = $x;
					$dy = $y;
				}
			}
		}
	}
	$sql = "insert into ".$area."shots(x1,y1,x2,y2,x3,y3,dx,dy) values(".$x1.",".$y1.",".$x2.",".$y2.",".$x3.",".$y3.",".$dx.",".$dy.");";
	$conn->query($sql);
	$conn->close();
?>
