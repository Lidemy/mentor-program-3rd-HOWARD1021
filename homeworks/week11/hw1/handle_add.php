<?php
require_once('./conn.php');
require_once('./utils.php');
require_once('./check_login.php');
$comment=$_POST['comment'];

if (empty($comment) && !isset($comment)) {
	die('檢查資料');
}

$sql = "INSERT INTO howard_comments(username,comment) VALUES ('$user','$comment')";
$result = $conn->query($sql);
if($result) {
	header ('Location:./index.php');
} else {
	echo 'failed' . $conn->error;
}
?>