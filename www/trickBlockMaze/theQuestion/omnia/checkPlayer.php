<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "userinfo";
	$u = "";
	$p = "";
	/*if (getenv('HTTP_CLIENT_IP'))
	{$ipaddress = getenv('HTTP_CLIENT_IP');}
	else if(getenv('HTTP_X_FORWARDED_FOR'))
	{$ipaddress = getenv('HTTP_X_FORWARDED_FOR');}
	else if(getenv('HTTP_X_FORWARDED'))
	{$ipaddress = getenv('HTTP_X_FORWARDED');}
	else if(getenv('HTTP_FORWARDED_FOR'))
	{$ipaddress = getenv('HTTP_FORWARDED_FOR');}
	else if(getenv('HTTP_FORWARDED'))
	{$ipaddress = getenv('HTTP_FORWARDED');}
	if(getenv('REMOTE_ADDR'))
	{$ipaddress = getenv('REMOTE_ADDR');}
	else
	{$ipaddress = 'UNKNOWN';}*/
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
	//echo "username: " . $result->fetch_assoc()["username"]. " - password: " . $result->fetch_assoc()["password"];
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc()) 
		{
			if($u == $row["username"] && $p == $row["password"])
			{
				echo true;
			}
		}
	}

	$conn->close();
?>