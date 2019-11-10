<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "userinfo";
	$u = ""; 
	if(!isset($_COOKIE["username"])) {
	} 
	else {
		$u = $_COOKIE["username"];
	}
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "select * from users;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc())
		{
			if($row["username"] == $u)
			{	
				echo $row["credits"];
			}
		}
	}
	$conn->close();
?>
