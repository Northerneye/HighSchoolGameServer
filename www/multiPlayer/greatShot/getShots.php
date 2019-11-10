<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "greatshot";
	$nothing = $_REQUEST["_"];
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "select * from shots;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc())
		{
			echo " ".$row["x1"]." ".$row["y1"]." ".$row["x2"]." ".$row["y2"]." ".$row["x3"]." ".$row["y3"];
		}
	}
	$conn->close();
?>
