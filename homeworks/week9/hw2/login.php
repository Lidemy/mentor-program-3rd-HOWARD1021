<?php
	include_once('./check_login.php');
?>
<?php
require_once('./conn.php');
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>howrard week9留言板</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<?php include_once('templates/nav.php')?>
	<div class='container'>
		<H1>本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</H1>
		<h2>登入留言板</h2>
	<div class = 'form'>
	<form method = 'POST' action='./handle__login.php'>
	<div class='form__row'>帳號<input type="text" name='username'/></div>
	<div class='form__row'>密碼<input type="password" name='password'/></div>
	<input type="submit" value='登入'>	
	</form>
	</div>
	</div>

</body>
</html>
