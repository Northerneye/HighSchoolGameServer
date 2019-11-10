<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "explorator";
	$credits = 0;
	$metal = 0;
	$go = false;
	$u = ""; 
	if(!isset($_COOKIE["username"])) {
	} 
	else {
		$u = $_COOKIE["username"];
	}
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "select * from inventory;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc())
		{
			if($row["username"] == $u)
			{	
				$metal = $row["metal"];
			}
		}
	}
	$conn->close();
	$dbname = "userinfo";
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "select * from users;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc())
		{
			if($row["username"] == $u)
			{	
				$credits = $row["credits"];
			}
		}
	}
	if($metal > 0)
	{
		$go = true;
		$newCredits = $credits + 5;
		$sql = "update users set credits = ".$newCredits." where username = '".$u."';";
		$conn->query($sql);
	}
	$conn->close();
	$dbname = "explorator";
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	if($go == true)
	{
		$newMetal = $metal-1;
		$sql = "update inventory set metal = ".$newMetal." where username = '".$u."';";
		$conn->query($sql);
	}
	$conn->close();
?>
