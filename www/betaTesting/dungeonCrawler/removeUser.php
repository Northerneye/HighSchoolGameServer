<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "dungeoncrawler";
	$u = "";
	if(!isset($_COOKIE["username"])) {
	} 
	else {
		$u = $_COOKIE["username"];
	}
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "update userinfo set playerx1 = NULL where username = '".$u."';";
	$conn->query($sql);
	$sql = "update userinfo set playery1 = NULL where username = '".$u."';";
	$conn->query($sql);
	$sql = "update userinfo set playerx2 = NULL where username = '".$u."';";
	$conn->query($sql);
	$sql = "update userinfo set playery2 = NULL where username = '".$u."';";
	$conn->query($sql);
	$sql = "update userinfo set playerx3 = NULL where username = '".$u."';";
	$conn->query($sql);
	$sql = "update userinfo set playery3 = NULL where username = '".$u."';";
	$conn->query($sql);
	$conn->close();
?>
