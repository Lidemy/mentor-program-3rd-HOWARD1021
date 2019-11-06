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
   //將輸入的密碼轉換成亂碼
   $sql = "INSERT INTO howard_users(nickname, username, password) VALUES (?, ?, ?)";	 
   $stmt = $conn->prepare($sql);
   //先宣告一個 statement 把 query 準備好
   $stmt->bind_param("sss",$nickname, $username, $password);
   // bind parameter　加入參數 s 代表 string 
   if($stmt->execute()) {
   	 // setToken($conn,$username); 註冊成功後設置 token
      session_start();
      $_SESSION['username'] = $username;
      $_SESSION['nickname'] = $nickname;
      $user= $_SESSION['username'];
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