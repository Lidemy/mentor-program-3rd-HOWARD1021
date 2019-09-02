<?php
include_once('check_login.php');
require_once('./conn.php');
include_once('./utils.php');
$id=$_GET['id'];
$sql = " DELETE FROM howard_comments   WHERE  id = '$id'";
$result=$conn->query($sql);
if($result){
 printmessage('刪除成功','./index.php');
}else{
  printmessage('刪除失敗','./index.php');
}

?>