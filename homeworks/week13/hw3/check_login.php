
<?php
include_once('./conn.php');
include_once('./utils.php');
session_start();
if (isset($_SESSION['username']) && !empty($_SESSION['username'])){
		$user = $_SESSION['username'];
	} else {
 	  $user = null;
	}
 $nickname = getNickname($conn, $user);
// 使用內建 session
// if (isset($_COOKIE['token']) && !empty($_COOKIE['token'])) {
// 		$token = $_COOKIE['token'];
// 	} else {
//  	  $token = null;
// 	}
// $user = getuserFromtoken($conn,$token);
?>

