<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "explorator";
	$currentArea = $_REQUEST["area"];
	$nextArea = $_REQUEST["nextArea"];
	$u = ""; 
	$hp = "";
	if(!isset($_COOKIE["username"])) {
	} 
	else {
		$u = $_COOKIE["username"];
	}
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "select * from ".$currentArea.";";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc()) 
		{
			if($row["username"] == $u)
			{
				$hp = $row["playerhp"];
			}
		}
	}
	$sql = "update ".$nextArea." set playerhp = ".$hp." where username = '".$u."';";
	$conn->query($sql);
	$conn->close();
?>
