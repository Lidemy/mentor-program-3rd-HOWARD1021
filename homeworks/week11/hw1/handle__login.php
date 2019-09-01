<?php
require_once('./conn.php');
include_once('./utils.php');

if (isset($_POST['username']) &&
  isset($_POST['password']) &&
  !empty($_POST['username']) &&
  !empty($_POST['password']) 
) {
   $username=$_POST['username'];
   $password=$_POST['password'];

   $sql = "SELECT * FROM  howard_users WHERE username = '$username'";  
   $result = $conn->query($sql);
   if(!$result || $result->num_rows <= 0) {
  printmessage('帳密錯誤', './login.php') ;
  exit();     
   }
   $row = $result->fetch_assoc();
   $hash_password = $row['password'];
   if (password_verify($password, $hash_password)) {
    setToken($conn, $username);
    printmessage('登入成功', './index.php');
   } else {
    printmessage('帳號或密碼錯誤','./login.php');
 } 
} else {
  printmessage('請輸入帳號密碼','./login.php');
?>
<?php 
}
?>