<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "explorator";
	$u = ""; 
	if(!isset($_COOKIE["username"])) {
	} 
	else {
		$u = $_COOKIE["username"];
	}
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "select * from inventory;";
	$result = $conn->query($sql);
	$sql = "update inventory set teleport = 1 where username = '".$u."';";
	$conn->query($sql);
	$conn->close();
?>
