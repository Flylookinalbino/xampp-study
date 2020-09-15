<?php

echo 'POST: Title '.$_POST['title'];
echo 'POST: Body '.$_POST['body'];

// Connection
// $conn = mysqli_connect('localhost','FlyDB','fly2020SQL!','Fetch_API');

// if(isset($_POST['title']) && isset($_POST['body'])){
//     $title = mysqli_real_escape_string($conn,$_POST['title']);
//     $body = mysqli_real_escape_string($conn, $POST['body']);

//     echo 'Post: Your Title is '.$_POST['title'];
//     echo 'Post: Your Body is '.$_POST['body'];

    
    

//     // $query = "INSERT INTO users(name) VALUES('$name')";

//     // if(mysqli_query($conn, $query)){
//     //     echo ' User Added....';
//     // }else{
//     //     echo ' ERROR: '.mysqli_error($conn);
//     // }
// }

// mysqli_close($conn);