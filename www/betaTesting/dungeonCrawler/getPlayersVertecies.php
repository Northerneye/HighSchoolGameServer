<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "dungeoncrawler";
	$nothing = $_REQUEST["_"];
	$localX = $_REQUEST["x1"];
	$localY = $_REQUEST["y1"];
	$localX2 = $_REQUEST["x2"];
	$localY2 = $_REQUEST["y2"];
	$localX3 = $_REQUEST["x3"];
	$localY3 = $_REQUEST["y3"];
	$localDX = $_REQUEST["dx"];
	$localDY = $_REQUEST["dy"];
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
			if(!is_null($localX))
			{
				$sql = "update userinfo set playerx1 = ".$localX." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update userinfo set playery1 = ".$localY." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update userinfo set playerx2 = ".$localX2." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update userinfo set playery2 = ".$localY2." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update userinfo set playerx3 = ".$localX3." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update userinfo set playery3 = ".$localY3." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update userinfo set dx = ".$localDX." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update userinfo set dy = ".$localDY." where username = '".$u."';";
				$conn->query($sql);
			}
		}
	}
	$sql = "select * from userinfo;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc())
		{
			if($u == $row["username"])
			{
				echo " ".$row["playerx1"]." ".$row["playery1"]." ".$row["playerx2"]." ".$row["playery2"]." ".$row["playerx3"]." ".$row["playery3"];
			}
		}
	}
	$sql = "select * from userinfo;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc())
		{
			if($u !== $row["username"])
			{
				echo " ".$row["playerx1"]." ".$row["playery1"]." ".$row["playerx2"]." ".$row["playery2"]." ".$row["playerx3"]." ".$row["playery3"];
			}
		}
	}
	$conn->close();
?>
