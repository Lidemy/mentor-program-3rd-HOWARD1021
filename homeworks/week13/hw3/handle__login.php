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

  $stmt = $conn->prepare("SELECT * FROM howard_users   WHERE username=?");
  $stmt->bind_param("s", $username);
  $stmt->execute();
  $result = $stmt->get_result(); 
  if(!$result || $result->num_rows <= 0) {
  printmessage('帳密錯誤', './login.php') ;
  exit();     
   }
   $row = $result->fetch_assoc();
   $hash_password = $row['password']; 
    // 判斷 我們輸入得密碼 是否與之前存入的相同
   if (password_verify($password, $hash_password)) {
    // setToken($conn, $username);原本自己寫 TOKEN 我們要改用內建的 SESSION
    session_start();
    $_SESSION['username'] = $row['username'];
    /*太少打字了 在寫作作業時出現一個小錯誤, username 打錯
      導致 $_SESSION['username']抓不到值  check_login.php 裡面判斷式失敗      
    */ 
    $_SESSION['nickname'] = $row['nickname'];
    $user = $_SESSION['username']; 
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

<!--
   $sql = "SELECT * FROM  howard_users WHERE username = '$username'";  
   $result = $conn->query($sql);
   if(!$result || $result->num_rows <= 0) {
  printmessage('帳密錯誤', './login.php') ;
  exit();     
   }
$row = $result->fetch_assoc();
   $hash_password = $row['password']; 
   -->