<?php
// CREATE CONNECTION
$conn = mysqli_connect('localhost','FlyDB', 'fly2020SQL!','acme');

$sql_query = "SELECT * FROM posts";

// FETCH DATA
$sql = mysqli_query($conn, $sql_query);

// STORE DATA IN result VARIABLE
$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

mysqli_close($conn);

exit(json_encode($result));
