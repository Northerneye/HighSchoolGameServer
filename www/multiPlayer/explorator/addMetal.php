<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "explorator";
	$metal = $_REQUEST["metal"];
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
				$newMetal = $metal+$row["metal"];
			}
		}
	}
	$sql = "update inventory set metal = ".$newMetal." where username = '".$u."';";
	$conn->query($sql);
	$conn->close();
?>
