<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "explorator";
	$u = ""; 
	if(!isset($_COOKIE["username"])) {
	} 
	else {
		$u = $_COOKIE["username"];
	}
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "select * from inventory;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc())
		{
			if($row["username"] == $u)
			{	
				$newAntimatter = $row["antimatter"]+1;
			}
		}
	}
	$sql = "update inventory set antimatter = ".$newAntimatter." where username = '".$u."';";
	$conn->query($sql);
	$conn->close();
?>
