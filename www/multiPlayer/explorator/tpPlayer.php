<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "explorator";
	$nothing= $_REQUEST["_"];
	$localX = $_REQUEST["x1"];
	$localY = $_REQUEST["y1"];
	$localX2 = $_REQUEST["x2"];
	$localY2 = $_REQUEST["y2"];
	$localX3 = $_REQUEST["x3"];
	$localY3 = $_REQUEST["y3"];
	$u = "";
	if(!isset($_COOKIE["username"])) {
		echo false;
	} 
	else {
		$u = $_COOKIE["username"];
	}
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "update asteroid1 set playerx1 = 500;";
	$conn->query($sql);
	$conn->close();
?>