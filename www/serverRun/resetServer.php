<?php
	$servername = "localhost";
	$username = "root";
	$password = "T";
	$dbname = "serversidetest";
	$ipaddress = '';
	if (getenv('HTTP_CLIENT_IP'))
	{$ipaddress = getenv('HTTP_CLIENT_IP');}
	else if(getenv('HTTP_X_FORWARDED_FOR'))
	{$ipaddress = getenv('HTTP_X_FORWARDED_FOR');}
	else if(getenv('HTTP_X_FORWARDED'))
	{$ipaddress = getenv('HTTP_X_FORWARDED');}
	else if(getenv('HTTP_FORWARDED_FOR'))
	{$ipaddress = getenv('HTTP_FORWARDED_FOR');}
	else if(getenv('HTTP_FORWARDED'))
	{$ipaddress = getenv('HTTP_FORWARDED');}
	else if(getenv('REMOTE_ADDR'))
	{$ipaddress = getenv('REMOTE_ADDR');}
	else
	{$ipaddress = 'UNKNOWN';}
	if($ipaddress == '::1')
	{
		$conn = mysqli_connect($servername, $username, $password, $dbname);
		if(!$conn)
		{
			die("Connection failed: " . mysqli_connect_error());
		}
		$sql = "select * from userinfo";
		$result = $conn->query($sql);
		if ($result->num_rows > 0)
		{
			while($row = $result->fetch_assoc())
			{
				for($i = 0; $i <= 0; $i++)
				{
					$sql = "update userinfo set playerx1 = 20";
					$conn->query($sql);
					$sql = "update userinfo set playery1 = 20";
					$conn->query($sql);
					$sql = "update userinfo set playerx2 = 120";
					$conn->query($sql);
					$sql = "update userinfo set playery2 = 20";
					$conn->query($sql);
					$sql = "update userinfo set playerx3 = 20";
					$conn->query($sql);
					$sql = "update userinfo set playery3 = 120";
					$conn->query($sql);
					$sql = "update userinfo set playerdx = 0";
					$conn->query($sql);
					$sql = "update userinfo set playerdy = 0";
					$conn->query($sql);
				}
			}
		}
		echo true;
		$conn->close();
	}
	else
	{
		echo false;
	}
?>