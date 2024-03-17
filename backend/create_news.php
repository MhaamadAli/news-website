<?php 
include "./connection.php";

$title = $_POST['title'];
$description = $_POST['description'];
$date = $_POST['date'];

if (isset($_FILES['news_image']) && $_FILES['news_image']['error'] === UPLOAD_ERR_OK) {

    $target_dir = "../frontend/assets/";
    $target_file = $target_dir . uniqid() . '_' . basename($_FILES["news_image"]["name"]);

    if (move_uploaded_file($_FILES["news_image"]["tmp_name"], $target_file)) {
        $news_image = $target_file;
    }
}

$query = $mysqli ->prepare('INSERT INTO news(title, description, date, news_img) VALUES (?, ?, ?, ?)');
$query ->bind_param('ssss', $title, $description, $date, $news_image);

if($query->execute()) {
    $response['message'] = "news created";
} else {
    $response['message'] = "news not created";
}
echo json_encode($response);

$mysqli ->close();