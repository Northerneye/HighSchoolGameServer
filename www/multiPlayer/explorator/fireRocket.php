<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "explorator";
	$rockets = 0;
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
				$rockets = $row["rockets"];
			}
		}
	}
	echo $rockets;
	if($rockets >= 1)
	{
		$newRockets = $rockets - 1;
		$sql = "update inventory set rockets = ".$newRockets." where username = '".$u."';";
		$conn->query($sql);
	}
	$conn->close();
?>
