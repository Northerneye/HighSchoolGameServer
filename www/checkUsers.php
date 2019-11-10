<?php
	$u = $_REQUEST["u"];
	$p = $_REQUEST["p"];
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "userinfo";
	//$ipaddress = '';
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
	//$ipaddress = $_SERVER['REMOTE_ADDR'];
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
				setcookie("username", $u, time() + (86400 * 30), "/");
				setcookie("password", $p, time() + (86400 * 30), "/");
				echo true;
			}
		}
	}
	$conn->close();
?>