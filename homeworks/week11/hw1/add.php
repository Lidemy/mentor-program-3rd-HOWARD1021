<?php
    include_once('./utils.php');
	include_once('./check_login.php');
?>
<?php
require_once('./conn.php');
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>howrard week11留言板</title>
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
		<H1>本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</H1>
		<h2>howrard week9留言板</h2>

	<form method = 'POST' action='./handle_add.php'>
	<div>內容:
		<textarea class='textarea_set' name='comment' style="width:400px;height:100px "></textarea>
	</div>
	<?php if($user) { ?>
		<input type="submit"/>
	<?php } else { ?>
	  <div>請先註冊或登入</div>
	<?php } ?> 
		
	</form>
	</div>
<?php
$sql="SELECT c.comment, c.create_at,c.id, u.nickname FROM howard_comments as c LEFT JOIN howard_users as u ON c.username = u.username ORDER BY create_at DESC LIMIT 0, 100 ";
$result = $conn->query($sql);
if ($result->num_rows > 0) {	
	while ($row= $result->fetch_assoc()) {
		echo "<div class=table>";
		echo "<div class='table__style'>" . "作者:  " . $row['nickname'] . "</div>";
		echo "<div class='table__style'>" . $row['comment'] . "</div>";
		echo "<div class='table__style'>" .'發佈時間: '.$row['create_at'] . "</div>";
		echo "</div>";
	}
}
?>
</body>
</html>
