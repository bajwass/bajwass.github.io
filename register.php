<?php

$host = "localhost";
$database = "lab9";
$user = "webuser";
$password = "P@ssw0rd";

$connection = mysqli_connect($host, $user, $password, $database);
$error = mysqli_connect_error();
if($error != null){
    $output = "<p>Unable to connect to database!</p>";
    exit($output);
}else{
    if(isset($_POST['firstname'],$_POST['lastname'],$_POST['username'],$_POST['email'],$_POST['password'] )){
        $firstname = $_POST["firstname"];
        $lastname = $_POST["lastname"];
        $username = $_POST["username"];
        $email = $_POST["email"];
        $password = $_POST["password"];

        $sqluser = "SELECT * FROM users WHERE (username='$username' OR email='$email');";

        $results_su = mysqli_query($connection, $sqluser);
        $row = mysqli_fetch_assoc($results_su);

        if($row>0){
            echo "<p>User already exists with this name and/or email</p>";
            echo "<a href=lab9-1.html>Return to user entry</a>";
        }else{
            $sql = "INSERT INTO users (firstName,lastName,username, email, password) 
            VALUES ('$firstname','$lastname','$username', '$email', '$password')";
            $results = mysqli_query($connection, $sql);
            echo "<p>An account for the user has been created</p>";
        }


    }
    
    mysqli_close($connection);
    
}
    




?>