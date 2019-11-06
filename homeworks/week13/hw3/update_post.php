<?php
    include_once('./utils.php');
	include_once('./check_login.php');
    require_once('./conn.php');
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>howard week11留言板</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<?php include_once('templates/nav.php')?>
	<div class='container'>
	<?php
	if($user){
		echo '<h1> hello,' .$user . '</h1>';
	} else {
		echo 'Please login or register';
	}

	?>
		<H1 class='waring'>本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</H1>
		<h2>Update</h2>

	<form method = 'POST' action='./handle__update_post.php'>
		<div><textarea class='textarea_set' name = 'comment' style = "width:350px;height:100px ">
			<?php echo getComments($conn,$_GET['id']);?></textarea></div>
		<input type='hidden' value = '<?php echo $_GET['id']?>' name='id'>		
		<input type='submit' value = 'UPdate'>
	</form>
	<div><?php echo "<button class='update_style'><a href='./delete_handle.php?id= ".$_GET['id']."'> delete </a></button>";
	?></div>
</div>
</body>
</html>
