
<?php
$servername = "sql8.freesqldatabase.com";
$username = "sql8521406";
$password = "7IjeA7vPna";
$dbname = "sql8521406";
$conn = new mysqli($servername, $username, $password,$dbname);

	
$result = mysqli_query($conn, "SELECT tags_eng FROM mainTable WHERE category='MainCourse' ");
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}

echo json_encode($data);
exit();


?>