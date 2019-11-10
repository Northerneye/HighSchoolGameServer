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
	$sql = "update userinfo set playerx1 = 300 where username = '".$u."';";
	$conn->query($sql);
	$sql = "update userinfo set playery1 = 300 where username = '".$u."';";
	$conn->query($sql);
	$sql = "update userinfo set playerx2 = 400 where username = '".$u."';";
	$conn->query($sql);
	$sql = "update userinfo set playery2 = 300 where username = '".$u."';";
	$conn->query($sql);
	$sql = "update userinfo set playerx3 = 300 where username = '".$u."';";
	$conn->query($sql);
	$sql = "update userinfo set playery3 = 400 where username = '".$u."';";
	$conn->query($sql);
	$conn->close();
?>
