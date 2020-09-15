<?php
// Grab The Form Data
$title = $_POST['title'];
$body = $_POST['body'];

echo $title;
echo "\n";
echo $body;
echo "\n";

// Commection to MySQL DB
$conn = mysqli_connect("localhost", "FlyDB", "fly2020SQL!", "Fetch_API");

if($conn){
    echo "Connected to DB";
}else{
    echo "Not Connected to DB";
}
echo "\n";
// // Query
// $query = ;

// echo $query;
echo "\n";
// Insert into Database table
$sql = mysqli_query($conn,"INSERT INTO post_data (title, body) VALUES ('$title','$body')");

// Return response log
if($sql){
    echo "Success";
}else{
    echo "Failed";
}

mysqli_close($conn);
