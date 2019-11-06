<?php
include_once('check_login.php');
require_once('./conn.php');
include_once('./utils.php');


$id=$_POST['id'];
$sql = " DELETE FROM howard_comments   WHERE  id = ? AND username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("is", $id, $user);
if($stmt->execute()){
echo json_encode(array('result' => 'delete success',
'message' => 'delete success'));
}else{
echo json_encode(array('result' => 'delete failed',
'message' => 'delete failed'));
}

?>

