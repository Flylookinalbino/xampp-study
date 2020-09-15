<?php
$conn = mysqli_connect('localhost','FlyDB','fly2020SQL!','Fetch_API');
$query = 'SELECT * FROM post_data';
$sql = mysqli_query($conn, $query);
$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
mysqli_close($conn);
exit(json_encode($result));
