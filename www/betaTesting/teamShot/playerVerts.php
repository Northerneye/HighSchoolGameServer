<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "teamShot";
	$playerIn = false;
	$area = $_REQUEST["area"];
	$nothing = $_REQUEST["_"];
	$localX = $_REQUEST["x1"];
	$localY = $_REQUEST["y1"];
	$localX2 = $_REQUEST["x2"];
	$localY2 = $_REQUEST["y2"];
	$localX3 = $_REQUEST["x3"];
	$localY3 = $_REQUEST["y3"];
	$localDX = $_REQUEST["dx"];
	$localDY = $_REQUEST["dy"];
	$localArea = 0;
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
			if(!is_null($localX))
			{
				$sql = "update ".$area." set playerx1 = ".$localX." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update ".$area." set playery1 = ".$localY." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update ".$area." set playerx2 = ".$localX2." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update ".$area." set playery2 = ".$localY2." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update ".$area." set playerx3 = ".$localX3." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update ".$area." set playery3 = ".$localY3." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update ".$area." set dx = ".$localDX." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update ".$area." set dy = ".$localDY." where username = '".$u."';";
				$conn->query($sql);
			}
		}
	}
	$sql = "select * from ".$area.";";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc())
		{
			if($u == $row["username"])
			{
				$localArea = $row["areaid"];
				echo " ".$row["playerx1"]." ".$row["playery1"]." ".$row["playerx2"]." ".$row["playery2"]." ".$row["playerx3"]." ".$row["playery3"]." ".$row["dx"]." ".$row["dy"];
				$playerIn = true;
			}
		}
	}
	if($playerIn !== true)
	{
		echo "a";
	}
	$sql = "select * from ".$area.";";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc())
		{
			if($u !== $row["username"] && $row["areaid"] == $localArea)
			{
				echo " ".$row["playerx1"]." ".$row["playery1"]." ".$row["playerx2"]." ".$row["playery2"]." ".$row["playerx3"]." ".$row["playery3"]." ".$row["dx"]." ".$row["dy"];
			}
		}
	}
	$conn->close();
?>
