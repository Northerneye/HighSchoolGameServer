<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "explorator";
	$account = false;
	$user = $_REQUEST["user"];
	$table = $_REQUEST["table"];
	$u = "";
	if(!isset($_COOKIE["username"])) {
		$account = true;
	} 
	else {
		$u = $_COOKIE["username"];
	}
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "delete from ".$table." where username = '".$user."';";
	$conn->query($sql);
?>