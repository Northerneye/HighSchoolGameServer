<?php
	if(!isset($_COOKIE["username"])) {
		echo false;
	} 
	else {
		echo $_COOKIE["username"];
	}
?>
