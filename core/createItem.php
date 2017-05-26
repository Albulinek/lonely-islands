<?php
if (isset($_REQUEST['submit'])) {
    include_once "db.php";
    $filename = filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING);
    if ((($_FILES["imgfile"]["type"] == "image/gif") || ($_FILES["imgfile"]["type"] == "image/jpeg") || ($_FILES["imgfile"]["type"] == "image/png") || ($_FILES["imgfile"]["type"] == "image/pjpeg")) && ($_FILES["imgfile"]["size"] < 200000)) {
        if (file_exists($_FILES["imgfile"]["name"])) {
            echo "File name exists.";
        } else {
            move_uploaded_file($_FILES["imgfile"]["tmp_name"], "../img/$filename");
            //edit this
            echo "Upload Successful . <a href='../img/$filename'>Click here</a> to view the uploaded image";
            $itemName = filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING);;
            $picturePath = 'img/'.$filename;
            $sql = "INSERT INTO items " .
                    "(name,picture) " . "VALUES " .
                    "('$itemName','$picturePath')";
            if ($conn->query($sql) == TRUE) {
                echo('Sucess  ');
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }
    } else {
        echo "invalid file.";
    }
} else {
    ?>
    <form method="post" enctype="multipart/form-data">
        File location:<input type="file" name="imgfile"><br>
        Item name:<input type="text" name="name">
		Item description:<input type="text" name="description">
        <input type="submit" name="submit" value="upload">
    </form>
    <?php
}