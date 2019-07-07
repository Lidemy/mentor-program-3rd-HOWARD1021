<?php
require_once('./conn.php');
function printmessage($msg, $redirect) {
	echo '<script>';
	echo "alert('". htmlentities($msg, ENT_QUOTES) ."');";
	echo "window.location = '".$redirect."'";
	echo '</script>';	
}

if (isset($_POST['username']) &&
	isset($_POST['password']) &&
	!empty($_POST['username']) &&
	!empty($_POST['password']) 
) {
   $username=$_POST['username'];
   $password=$_POST['password'];

   $sql = "SELECT * FROM  howard_users where username = '$username' and password = '$password'";	 
   $result = $conn->query($sql);
   if(!$result) {
	printmessage($conn->error, './login.php') ;
	exit();   	
   }

   if ($result->num_rows > 0) {
   	setcookie("username", $username, time() + 3600*24);
   	printmessage('登入成功', './index.php');
   } else {printmessage('帳號或密碼錯誤','./login.php');
 } 
} else {
	printmessage('請輸入帳號密碼','./login.php');
?>
<?php	
}
?>