<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "teamShot";
	$newArea = $_REQUEST["area"];
	$u = "";
	if(!isset($_COOKIE["username"])) {
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
				$sql = "update userinfo set areaid = ".$newArea." where username = '".$u."';";
				$conn->query($sql);
			}
		}
	}
	$conn->close();
?>
