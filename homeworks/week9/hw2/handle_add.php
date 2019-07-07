<?php
require_once('./conn.php');
$comment=$_POST['comment'];
$username=$_COOKIE['username'];

if (empty($comment)) {
	die('檢查資料');
}

$sql = "INSERT INTO howard_comments(username,comment) VALUES ('$username','$comment')";
$result = $conn->query($sql);
if($result) {
	header ('Location:./index.php');
} else {
	echo 'failed' . $conn->error;
}
?>