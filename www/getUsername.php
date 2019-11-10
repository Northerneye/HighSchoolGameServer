<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "userinfo";
	$u = "";
	$p = "";
	if(!isset($_COOKIE["username"])) {
		echo false;
	} 
	else {
		$u = $_COOKIE["username"];
	}
	if(!isset($_COOKIE["password"])) {
		echo false;
	} 
	else {
		$p = $_COOKIE["password"];
	}
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "select username,password from users";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc()) 
		{
			if($u == $row["username"] && $p == $row["password"])
			{
				echo $row["username"];
			}
		}
	}
	$conn->close();
?>