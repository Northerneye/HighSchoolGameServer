<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "teamShot";
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
			if($row["username"] == $u)
			{	
				if(false)//sometimes breaks
				{
					$sql = "update userinfo set playerx1 = 100 where username = '".$u."';";
					$conn->query($sql);
					$sql = "update userinfo set playery1 = 100 where username = '".$u."';";
					$conn->query($sql);
				}
				$x1 = $row["playerx1"];
				$y1 = $row["playery1"];
				$newX2 = $x1+50;
				$newY3 = $y1+50;
				$sql = "update userinfo set playerx2 = ".$newX2." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update userinfo set playery2 = ".$y1." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update userinfo set playerx3 = ".$x1." where username = '".$u."';";
				$conn->query($sql);
				$sql = "update userinfo set playery3 = ".$newY3." where username = '".$u."';";
				$conn->query($sql);
			}
		}
	}
	$conn->close();
?>
