<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "explorator";
	$drive = $_REQUEST["drive"];
	$credits = 0;
	$emdrive = 0;
	$raptor = 0;
	$go = false;
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
				$emdrive = $row["emdrive"];
				$raptor = $row["raptorengine"];
			}
		}
	}
	$conn->close();
	$dbname = "userinfo";
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sql = "select * from users;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc())
		{
			if($row["username"] == $u)
			{	
				$credits = $row["credits"];
			}
		}
	}
	if($drive == "emdrive1" && $emdrive <  1 && $credits >= 10)
	{
		$go = true;
		$newCredits = $credits - 10;
		$sql = "update users set credits = ".$newCredits." where username = '".$u."';";
		$conn->query($sql);
	}
	else if($drive == "emdrive2" && $emdrive < 2 && $credits >= 20)
	{
		$go = true;
		$newCredits = $credits - 20;
		$sql = "update users set credits = ".$newCredits." where username = '".$u."';";
		$conn->query($sql);
	}
	else if($drive == "emdrive3" && $emdrive < 3 && $credits >= 30)
	{
		$go = true;
		$newCredits = $credits - 30;
		$sql = "update users set credits = ".$newCredits." where username = '".$u."';";
		$conn->query($sql);
	}
	else if($drive == "raptor" && $raptor == 0 && $credits >= 20)
	{
		$go = true;
		$newCredits = $credits - 20;
		$sql = "update users set credits = ".$newCredits." where username = '".$u."';";
		$conn->query($sql);
	}
	echo $go;
	$conn->close();

	$dbname = "explorator";
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	if($drive == "emdrive1" && $go == true)
	{
		$sql = "update inventory set emdrive = 1 where username = '".$u."';";
		$conn->query($sql);
	}
	else if($drive == "emdrive2" && $go == true)
	{
		$sql = "update inventory set emdrive = 2 where username = '".$u."';";
		$conn->query($sql);
	}
	else if($drive == "emdrive3" && $go == true)
	{
		$sql = "update inventory set emdrive = 3 where username = '".$u."';";
		$conn->query($sql);
	}
	else if($drive == "raptor" && $go == true)
	{
		$sql = "update inventory set starterengine = 0 where username = '".$u."';";
		$conn->query($sql);
		$sql = "update inventory set raptorengine = 1 where username = '".$u."';";
		$conn->query($sql);
	}
	$conn->close();
?>
