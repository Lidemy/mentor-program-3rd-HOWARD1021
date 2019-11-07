	<?php
    include_once('./utils.php');
	include_once('./check_login.php');
?>
<?php
require_once('./conn.php');
?>

<!DOCTYPE html>
<html>
<head>	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>	
	<meta charset="utf-8">
	<title>howard week13 留言板</title>
	<link rel="stylesheet" type="text/css" href="style.css">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
  </script>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <script src="js/all.js"></script>
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
		<H1 class='warning'>本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</H1>
		<h2>howard week13留言板</h2>

	<form method = 'POST' action='./handle_add.php' name="comments">
		<input type='hidden' value='0' name='parent_id'/>
<!-- 區別子留言主留言 要將 id 與 parent_id 做分開 只要是 parent_id = 0 , 就是主留言-->
	<div>內容:
		<textarea class='textarea_set' name='comment' id='sub_post'style="width:350px;height:100px "></textarea>
	</div>
	<?php if($user) { ?>
		<button type="submit" class="btn btn-primary btn-add">送出</button>
	<?php } else { ?>
	  <div>請先註冊或登入</div>
	<?php } ?> 
		
	</form>
	</div>
<?php  
include_once('./handle_pagination.php');
include_once('./pagination.php');
?>

<?php 
 // session_start ( ) ; 造成錯誤 不了解原因
 if ( isset ( $_SESSION [ ' views ' ] ) ) { $_SESSION [ ' views ' ] = $_SESSION [ ' views ' ] + 1 ;
 } else { $_SESSION [ ' views ' ] = 1 ;
 } echo " 瀏覽量：" . $_SESSION [    
 ' views ' ] ;
 ?>	


<div class='table'>
<?php
$sql="SELECT c.id, c.comment, c.create_at , c.id, u.nickname ,u.username FROM howard_comments as c LEFT JOIN howard_users as u ON c.username = u.username WHERE c.parent_id = 0
    ORDER BY create_at DESC LIMIT ?,? ";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ii",$data_start, $page_limit);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {	
	while ($row= $result->fetch_assoc()) {
		echo "<div class = 'post'>";
		echo "<div class='table__style'>" . escape($row['nickname']) . ":  " . "</div>";
		echo "<div class='table__style'>" . escape($row['comment']) . "</div>";
		echo "<div class='table__style'>" . '發佈時間: '.$row['create_at'] . "</div>";
		

    if ($user ===  $row['username']) {
		echo "<button class='btn message__delete btn-danger' data-id='" . $row['id'] ."'>delete</button>";

		echo "<button class='btn btn-light'><a href='./update_post.php?id= " . $row['id'] . "'> Edit </a></button>";	
		}

	?>

	<?php include('./sub_comment.php'); ?>
	
	<?php
	    echo "</div>";
     }
   }
?>
　<script language="JAVASCRIPT" src = " ./all.js" ></script>
</body>
</html>

