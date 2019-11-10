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
	$sql = "update userinfo set playerhp = 2 where username = '".$u."';";
	$conn->query($sql);
	$conn->close();
?>
