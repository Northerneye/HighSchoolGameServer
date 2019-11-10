<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "explorator";
	$rockets = 0;
	$metal = 0;
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
				$rockets = $row["rockets"];
			}
		}
	}
	if($metal >= 1)
	{
		$newRockets = $rockets + 1;
		$sql = "update inventory set rockets = ".$newRockets." where username = '".$u."';";
		$conn->query($sql);
		$newMetal = $metal-1;
		$sql = "update inventory set metal = ".$newMetal." where username = '".$u."';";
		$conn->query($sql);
	}
	$conn->close();
?>
