<?php
require_once('./conn.php');
function printmessage($msg, $redirect) {
	echo '<script>';
	echo "alert('". htmlentities($msg, ENT_QUOTES) ."');";
	echo "window.location = '".$redirect."'";
	echo '</script>';	
}
$is_error =false;
if (isset($_POST['nickname']) &&
	isset($_POST['username']) &&
	isset($_POST['password']) &&
	!empty($_POST['nickname']) &&
	!empty($_POST['username']) &&
	!empty($_POST['password']) 
) {
   $nickname=$_POST['nickname'];
   $username=$_POST['username'];
   $password=$_POST['password'];

   $sql = "INSERT INTO howard_users(nickname, username, password) VALUES ('$nickname', '$username', '$password')";	 
   if($conn->query($sql)) {
   	setcookie("username", $username, time() + 3600*24);
   	printmessage('註冊成功', './index.php');
   } else {
   printmessage($conn->error, './register.php') ;
   }
 
} else {
	printmessage('請輸入帳號密碼','./register.php')
?>

<?php	
}


?>