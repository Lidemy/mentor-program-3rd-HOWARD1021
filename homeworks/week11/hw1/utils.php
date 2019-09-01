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
?>

<!-- 
1.創造一個新的database 含有id (token)? (通行證id) 與 username
2.(帳號),亂數創建一個(通行證id)
並在資料庫下記下(通行證id)與會員帳號的關係,
3. 將(通行證id)設置道 cookie 上
4. 在發行request　時會將通行證id 帶上來
5.檢查通行證id 以及應對應到的username 如果有的話就代表是那個人.
 -->
 
 <!--
    原本在思考 
    check_login.php 時不理解 為什麼 要將 $_COOKIE 起來的是 $TOKEN 
    而非  $user 後來發現 因為我需要拿到 cookie 的值 $token 才能夠跑 
    function 聽起來好像是廢話,因為真的廢


 	$row = $result
 	$user = $row['username']


 -->


