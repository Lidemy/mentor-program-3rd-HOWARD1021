<?php
include_once('check_login.php');
require_once('./conn.php');
include_once('./utils.php');
$id=$_POST['id'];
$comment=$_POST['comment'];
$sql = " UPDATE howard_comments  SET comment = ? WHERE  id = ? ";
$stmt = $conn->prepare($sql);
$stmt->bind_param("si",$comment ,$id );
if($stmt->execute()){
 printmessage('更新成功','./index.php');
}else{
  printmessage('更新失敗','./index.php');
}

?>