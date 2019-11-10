<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "serversidetest";
	$account = false;
	$u = "";
	if(!isset($_COOKIE["username"])) {
		$account = true;
	} 
	else {
		$u = $_COOKIE["username"];
	}
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "select * from userinfo;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc()) 
		{
			if($u == $row["username"])
			{
				$account = true;
			}
		}
	}
	if($account !== true)
	{
		$sql = "insert into userinfo(playerx1,playery1,playerx2,playery2,playerx3,playery3,dx,dy,username,areaid) values(300,300,400,300,300,400,0,0,'".$u."',0);";
		$conn->query($sql);
	}
	$conn->close();
?>
