<?php

$servername = "sql8.freesqldatabase.com";
$username = "sql8521406";
$password = "7IjeA7vPna";
$dbname = "sql8521406";
$conn = new mysqli($servername, $username, $password,$dbname);


   // Check connection
   if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
   }
   echo "Connected successfully";

  

?>