<?php
// Create Connection
$conn = mysqli_connect('localhost','FlyDB','fly2020SQL!','ajaxtest');
// Query Database
$query = 'SELECT * FROM users';
// Get Result
$result = mysqli_query($conn, $query);
// Fetch Data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);
// output
echo json_encode($users);