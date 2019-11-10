<?php
	$level = $_REQUEST["lvl"];
	$difficulty = $_REQUEST["dif"];
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "userinfo";
	$u = "";
	$p = "";
	if(!isset($_COOKIE["username"])) {
		echo false;
	} 
	else {
		$u = $_COOKIE["username"];
	}
	if(!isset($_COOKIE["password"])) {
		echo false;
	} 
	else {
		$p = $_COOKIE["password"];
	}
	if($level <= 2 && $difficulty<=4 || $level <= 2 && $difficulty==7)
	{
		$level -= 1;
		if($difficulty == 4)
		{
			$difficulty = 7;
		}
		if($difficulty == 7)
		{
			$difficulty = 10;
		}
		$conn = mysqli_connect($servername, $username, $password, $dbname);
		$sql = "select username,password,credits from users";
		$result = $conn->query($sql);
		if ($result->num_rows > 0) 
		{
			while($row = $result->fetch_assoc()) 
			{
				if($u == $row["username"] && $p == $row["password"])
				{
					$newCredits = $row["credits"] + $level+$difficulty;
					$sql = "update users set credits = '" . $newCredits . "' where username = '".$u."';";
					$conn->query($sql);
				}
			}
		}
		$conn->close();
	}
?>