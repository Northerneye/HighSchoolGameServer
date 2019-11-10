<?php
	$u = $_REQUEST["u"];
	$p = $_REQUEST["p"];
	$c = $_REQUEST["c"];
	if($c == "123")
	{
		$checkUse = false;
		$servername = "localhost";
		$username = "root";
		$password = "TysonShadow";
		$dbname = "userinfo";
		$conn = mysqli_connect($servername, $username, $password, $dbname);
		$sql = "select username,password,credits from users";
		$result = $conn->query($sql);
		if ($result->num_rows > 0) 
		{
			while($row = $result->fetch_assoc()) 
			{
				if($u == $row["username"])
				{
					$checkUse = true;
				}
			}
		}
		if($checkUse == false)
		{
			$sql = "insert into users(username,password,credits) values('".$u."','".$p."',0)";
			$conn->query($sql);
			echo true;
		}
		$conn->close();
	}
?>