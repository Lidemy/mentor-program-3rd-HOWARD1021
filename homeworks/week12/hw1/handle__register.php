<?php       
require_once('./conn.php');
require_once('./utils.php');

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
   $password=password_hash($_POST['password'], PASSWORD_DEFAULT);
   $sql = "INSERT INTO howard_users(nickname, username, password) VALUES (?, ?, ?)";	 
   $stmt = $conn->prepare($sql);
   $stmt->bind_param("sss",$nickname, $username, $password);
   if($stmt->execute()) {
   	 setToken($conn,$username);
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