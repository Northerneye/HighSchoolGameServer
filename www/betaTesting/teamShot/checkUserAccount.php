<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "teamShot";
	$account = false;
	$u = "";
	if(!isset($_COOKIE["username"])) {
		$account = true;
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
				$account = true;
			}
		}
	}
	if($account !== true)
	{
		$sql = "insert into userinfo(playerx1,playery1,playerx2,playery2,playerx3,playery3,dx,dy,username,areaid,playerhp) values(100,100,175,100,100,175,0,0,'".$u."',0,4);";
		$conn->query($sql);
	}
	$account = false;
	$sql = "select * from snow;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc()) 
		{
			if($u == $row["username"])
			{
				$account = true;
			}
		}
	}
	if($account !== true)
	{
		$sql = "insert into snow(playerx1,playery1,playerx2,playery2,playerx3,playery3,dx,dy,username,areaid,playerhp) values(0,0,0,0,0,0,0,0,'".$u."',0,4);";
		$conn->query($sql);
	}
	/*$account = false;
	$sql = "select * from inventory;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc()) 
		{
			if($u == $row["username"])
			{
				$account = true;
			}
		}
	}
	if($account !== true)
	{
		$sql = "insert into inventory(username,fuel,metal,starterengine,raptorengine,emdrive,rockets) values('".$u."',50,0,1,0,0,0);";
		$conn->query($sql);
	}
	$account = false;
	$sql = "select * from planet1;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc()) 
		{
			if($u == "".$row["username"])
			{
				$account = true;
			}
		}
	}
	if($account !== true)
	{
		$sql = "insert into planet1(playerx1,playery1,playerx2,playery2,playerx3,playery3,dx,dy,username,areaid,playerhp) values(0,0,0,0,0,0,0,0,'".$u."',0,4);";
		$conn->query($sql);
	}
	$account = false;
	$sql = "select * from station1;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc()) 
		{
			if($u == $row["username"])
			{
				$account = true;
			}
		}
	}
	if($account !== true)
	{
		$sql = "insert into station1(playerx1,playery1,playerx2,playery2,playerx3,playery3,dx,dy,username,areaid,playerhp) values(0,0,0,0,0,0,0,0,'".$u."',0,4);";
		$conn->query($sql);
	}
	$account = false;
	$sql = "select * from magnetic;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc()) 
		{
			if($u == "".$row["username"])
			{
				$account = true;
			}
		}
	}
	if($account !== true)
	{
		$sql = "insert into magnetic(playerx1,playery1,playerx2,playery2,playerx3,playery3,dx,dy,username,areaid,playerhp) values(0,0,0,0,0,0,0,0,'".$u."',0,4);";
		$conn->query($sql);
	}
	/*$account = false;
	$sql = "select * from grady;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		while($row = $result->fetch_assoc()) 
		{
			if($u == "".$row["username"])
			{
				$account = true;
			}
		}
	}
	if($account !== true)
	{
		$sql = "insert into grady(playerx1,playery1,playerx2,playery2,playerx3,playery3,dx,dy,username,areaid,playerhp) values(0,0,0,0,0,0,0,0,'".$u."',0,4);";
		$conn->query($sql);
	}*/
	$conn->close();
?>
