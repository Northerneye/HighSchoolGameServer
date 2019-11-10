<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "explorator";
	$area = $_REQUEST["area"];
	$u = "";
	if(!isset($_COOKIE["username"])) {
	} 
	else {
		$u = $_COOKIE["username"];
	}
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "update ".$area." set playerx1 = NULL where username = '".$u."';";
	$conn->query($sql);
	$sql = "update ".$area." set playery1 = NULL where username = '".$u."';";
	$conn->query($sql);
	$sql = "update ".$area." set playerx2 = NULL where username = '".$u."';";
	$conn->query($sql);
	$sql = "update ".$area." set playery2 = NULL where username = '".$u."';";
	$conn->query($sql);
	$sql = "update ".$area." set playerx3 = NULL where username = '".$u."';";
	$conn->query($sql);
	$sql = "update ".$area." set playery3 = NULL where username = '".$u."';";
	$conn->query($sql);
	$conn->close();
?>
