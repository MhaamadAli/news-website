<?php
include "./connection.php";


$query = $mysqli ->prepare('SELECT id,title,description,date FROM news');


$query ->execute();
$query ->store_result();

$query ->bind_result($id,$title, $description, $date);


$response = [];
while($query ->fetch()) {
    $news = [
        'id' => $id,
        'title' => $title,
        'description' => $description,
        'date' => $date,
    ];
    $response[] = $news;
}
echo json_encode($response);
