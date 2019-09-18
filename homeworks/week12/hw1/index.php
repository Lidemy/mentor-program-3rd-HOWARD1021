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
	<title>howard week12留言板</title>
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
		<H1 class='warning'>本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</H1>
		<h2>howard week12留言板</h2>
<!-- 
-->
	<form method = 'POST' action='./handle_add.php'>
		<input type='hidden' value='0' name='parent_id'/>
<!-- 創造子留言 要將 id 與 parent_id 做分開 只要是 parent_id = 0 , 就是主留言
-->
	<div>內容:
		<textarea class='textarea_set' name='comment' style="width:350px;height:100px "></textarea>
	</div>
	<?php if($user) { ?>
		<input type="submit"/>
	<?php } else { ?>
	  <div>請先註冊或登入</div>
	<?php } ?> 
		
	</form>
	</div>
<?php  
include_once('./handle_pagination.php');
include_once('./pagination.php');
?>

<?php session_start ( ) ;
 
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
		echo "<button class='update_style'><a href='./update_post.php?id= " . $row['id'] . "'> Edit </a></button>";
		echo "<button class='update_style'><a href='./delete_handle.php?id= ".$row['id']."'> delete </a></button>";	
		}

	?>

	<?php include('./sub_comment.php'); ?>
	
	<?php
	    echo "</div>";
     }
   }
?>
</body>
</html>

<!--
目前9/9號
繼續實作 留言板
進度

* 成功將 $row['id']
傳送到 index.php 裡面

* 子留言卡關中
不知道甚麼原因
系統說沒有命名 parent_id
而且子留言的留言板可以輸入
猜測是 後者 是用 echo 去呼叫 parent_id 所以在ｆｏｒｍ 表單裡面找不到

問題!ｅｓｃａｐｅ　與　ｐｒｅｐａｒｅ
9/10
預期今日寫完 
xss  sql injection  子留言系統 參考 同學 cindylu
使用方法為 將子留言系統分開 php 資料夾存放
遇到的問題
1. css 崩潰
原本預期要讓
原本的留言下方顯現出子留言結果顯現出來的只有原本的留言
而且格式還跑掉


9/11
1.實在是卡了太久了,就因為 css 與　html 打算借用同學的寫法來處理
新增了 post　POSTS
目前還是沒有成功導入 子留言
然後出現新的BUG 沒有辦法成功刪除

-->