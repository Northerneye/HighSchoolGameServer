<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "teamShot";
	$u = "";
	if(!isset($_COOKIE["username"])) {
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
				echo $row["playerhp"]." ";
				if($row["playerhp"] <= 0)
				{
					$sql = "update userinfo set playerhp = 4 where username = '".$u."';";
					$conn->query($sql);
				}
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
				echo $row["playerhp"]." ";
			}
		}
	}
	$conn->close();
?>
