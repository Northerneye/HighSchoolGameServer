<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "explorator";
	$account = false;
	$newUser = $_REQUEST["user"];
	$table = $_REQUEST["table"];
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$account = false;
	$sql = "select * from ".$table.";";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc()) 
		{
			if($newUser == "".$row["username"])
			{
				$account = true;
				echo false;
			}
		}
	}
	if($account !== true)
	{
		$sql = "insert into ".$table."(playerx1,playery1,playerx2,playery2,playerx3,playery3,dx,dy,username,areaid,playerhp) values(0,0,0,0,0,0,0,0,'".$newUser."',0,4);";
		$conn->query($sql);
		echo true;
	}
?>