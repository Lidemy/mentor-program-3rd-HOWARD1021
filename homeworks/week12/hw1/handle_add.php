<?php
require_once('./conn.php');
require_once('./utils.php');
require_once('./check_login.php');
$comment=$_POST['comment'];
$parent_id=$_POST['parent_id'];
if (empty($comment) && !isset($comment)) {
	die('檢查資料');
}
$sql = "INSERT INTO howard_comments(username, comment, parent_id) VALUES (?,?,?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $user, $comment, $parent_id);
if($stmt->execute()){
	header ('Location:./index.php');
} else {
	echo 'failed' . $conn->error;
}
?>