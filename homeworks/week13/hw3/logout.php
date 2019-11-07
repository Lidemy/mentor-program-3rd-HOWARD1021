<?php
session_start();
session_unset();
session_destroy();
// setcookie("token",'', time() + 3600*24);
header('Location:./index.php');
?>
