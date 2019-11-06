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


//ajax 
$sql = "SELECT  c.comment, c.create_at , c.id, u.nickname ,u.username FROM howard_comments as c LEFT JOIN howard_users as u ON c.username = u.username  ORDER BY create_at desc limit 1";
$result = $conn->query($sql);
if($result->num_rows > 0){
	$row2 = $result->fetch_assoc();
	$create_at = $row2['create_at'];
	$nickname = $row2['nickname'];
	$id = $row2['id'];
}
$arr = array('result' => 'success',
	'name' =>$nickname,
	 'create_at'=>$create_at, 
	'id'=>$id);
echo json_encode($arr);

// 	header ('Location:./index.php'); ajax 不適合用redirect
// } else {
// 	echo 'failed' . $conn->error;
} else{
	echo json_encode(array(
		'result'=> 'failure',
		'message'=>'新增失敗'
	));
}

?>