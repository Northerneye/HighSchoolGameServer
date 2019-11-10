<?php
	$servername = "localhost";
	$username = "root";
	$password = "TysonShadow";
	$dbname = "explorator";
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
		$sql = "insert into userinfo(playerx1,playery1,playerx2,playery2,playerx3,playery3,dx,dy,username,areaid,playerhp) values(100,100,150,100,100,150,0,0,'".$u."',0,2);";
		$conn->query($sql);
	}
	$account = false;
	$sql = "select * from asteroid1;";
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
		$sql = "insert into asteroid1(playerx1,playery1,playerx2,playery2,playerx3,playery3,dx,dy,username,areaid,playerhp) values(0,0,0,0,0,0,0,0,'".$u."',0,4);";
		$conn->query($sql);
	}
	$account = false;
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
		$sql = "insert into inventory(username,fuel,metal,starterengine,raptorengine,emdrive,rockets,teleport,antimatter) values('".$u."',50,0,1,0,0,0,0,0);";
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
	$account = false;
	$sql = "select * from urbanPlanet;";
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
		$sql = "insert into urbanPlanet(playerx1,playery1,playerx2,playery2,playerx3,playery3,dx,dy,username,areaid,playerhp) values(0,0,0,0,0,0,0,0,'".$u."',0,4);";
		$conn->query($sql);
	}
	$conn->close();
?>
