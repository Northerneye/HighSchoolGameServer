<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "greatshot";
	$u = "";
	$random = rand(1,4);
	if(!isset($_COOKIE["username"])) {
	} 
	else {
		$u = $_COOKIE["username"];
	}
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	if($random == 1)
	{
		$sql = "update userinfo set playerx1 = 100 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playery1 = 100 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playerx2 = 200 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playery2 = 100 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playerx3 = 100 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playery3 = 200 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playerhp = 4 where username = '".$u."';";
		$conn->query($sql);
		$conn->close();
	}
	else if($random == 2)
	{
		$sql = "update userinfo set playerx1 = 1700 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playery1 = 200 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playerx2 = 1800 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playery2 = 200 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playerx3 = 1700 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playery3 = 300 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playerhp = 4 where username = '".$u."';";
		$conn->query($sql);
		$conn->close();
	}
	else if($random == 3)
	{
		$sql = "update userinfo set playerx1 = 0 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playery1 = 1900 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playerx2 = 100 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playery2 = 1900 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playerx3 = 0 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playery3 = 2000 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playerhp = 4 where username = '".$u."';";
		$conn->query($sql);
		$conn->close();
	}
	else if($random == 4)
	{
		$sql = "update userinfo set playerx1 = 1800 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playery1 = 1800 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playerx2 = 1900 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playery2 = 1800 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playerx3 = 1800 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playery3 = 1900 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update userinfo set playerhp = 4 where username = '".$u."';";
		$conn->query($sql);
		$conn->close();
	}
?>
