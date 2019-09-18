<?php
include_once('./conn.php');
include_once('./utils.php');

if (isset($_COOKIE['token']) && !empty($_COOKIE['token'])) {
		$token = $_COOKIE['token'];
	} else {
	  $token = null;
	}
$user = getuserFromtoken($conn,$token);
?>

<!--現在需要將 (check_login.php) 資料夾
$_COOKIE [] 改為 TOKEN 
在 (handle_login.php) 裡面再將 setcookie
改為setToken
-->