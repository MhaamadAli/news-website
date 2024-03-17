<?php

header("Access-Control-Allow-Origin: *");
$host = "localhost";
$user = "root";
$password = "";
$db_name = "newsdb";

$mysqli = mysqli_connect($host, $user, $password, $db_name);

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}
