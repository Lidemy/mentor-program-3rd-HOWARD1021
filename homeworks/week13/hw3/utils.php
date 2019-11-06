<?php
	include_once('./conn.php');	
?>
<?php

function printmessage($msg, $redirect) {
	echo '<script>';
	echo "alert('". htmlentities($msg, ENT_QUOTES) ."');";
	echo "window.location = '".$redirect."'";
	echo '</script>';	
}	

function getNickname($conn,$user){
	$sql = "SELECT * FROM howard_users WHERE username = ?";
	$stmt = $conn->prepare($sql);
	$stmt->bind_param("s", $user);
	if($stmt->execute()){
		$result = $stmt->get_result();
		$row = $result->fetch_assoc();
	return $row['username'];
	}else{
	return null;
  }
}

function setToken($conn,$username) {
  $token = uniqid();
/*. 每次登入都會重新給一個$token.*/
  $sql = "DELETE FROM howard_certificate WHERE username = '$username' ";
  $result = $conn->query($sql);

  $sql = "INSERT INTO howard_certificate(username,token) VALUES ('$username','$token')";
  $result = $conn->query($sql);	
  setcookie("token", $token, time()+3600*24);
}

function getuserFromtoken($conn,$token){
	if(isset($token) && !empty($token)) {
		$sql = " SELECT * FROM howard_certificate WHERE token = '$token'";
		$result = $conn->query($sql);
	if (!$result || $result->num_rows <= 0){
		return null;
	}
		$row = $result->fetch_assoc();
	    return $row['username'];	
	} else {
		return null;
	}
}

function getComments($conn,$id){
		$sql = "SELECT * FROM howard_comments WHERE id = '$id'";
		$result = $conn->query($sql);
		$row = $result->fetch_assoc();
		return $row['comment'];
	}
function escape($str) {
	return htmlspecialchars($str, ENT_QUOTES, 'utf-8');
}

?>


