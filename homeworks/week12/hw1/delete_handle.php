<?php
include_once('check_login.php');
require_once('./conn.php');
include_once('./utils.php');
$id=$_GET['id'];
$sql = " DELETE FROM howard_comments   WHERE  id = ? AND username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("is", $id, $user);
if($stmt->execute()){
 printmessage('刪除成功','./index.php');
}else{
  printmessage('刪除失敗','./index.php');

}

?>

<!--
$result=$conn->query($sql);
if($result){
-->