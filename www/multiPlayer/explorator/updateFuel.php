<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "explorator";
	$fuel = $_REQUEST["fuel"];
	$u = ""; 
	if(!isset($_COOKIE["username"])) {
	} 
	else {
		$u = $_COOKIE["username"];
	}
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "update inventory set fuel = ".$fuel." where username = '".$u."';";
	$conn->query($sql);
	$conn->close();
?>
