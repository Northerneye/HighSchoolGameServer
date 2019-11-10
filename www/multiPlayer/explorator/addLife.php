<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "explorator";
	$u = "";
	$random = rand(1,4);
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
				$newLife = $row["playerhp"] + 1;
				$sql = "update userinfo set playerhp = ". $newLife ." where username = '".$u."';";
				$conn->query($sql);
			}
		}
	}
	$conn->close();
?>
