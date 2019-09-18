
<?php
	include_once('./conn.php');
	include_once('./check_login.php');
    include_once('./utils.php');
?>

<div class='sub_comments'>
<?php

$parent_id = $row['id'];
$sql_sub = "SELECT  c.comment, c.create_at , c.id, u.nickname ,u.username FROM howard_comments as c LEFT JOIN howard_users as u ON c.username = u.username WHERE c.parent_id = ? ORDER BY create_at ASC ";
    $stmt_sub = $conn->prepare($sql_sub);
    $stmt_sub->bind_param("i", $parent_id);
    $stmt_sub->execute();
    $result_sub = $stmt_sub->get_result();

if ($result_sub->num_rows > 0) {

	while ($row_sub = $result_sub->fetch_assoc()) {
    if ($row_sub['username'] === $row['username']) {
		  echo "<div class='sub-post active'>";
        } else {
            echo "<div class='sub-post'>";
        }  
		  echo "<div class='sub_comment__author'>" . escape($row_sub['nickname']) . ":  " . "</div>";
		  echo "<div class='sub_comment__comment'>" .
		  escape ( $row_sub['comment']). "</div>";
		  echo "<div class='sub_comment__time'>" .'發佈時間: '.escape($row_sub['create_at']) . "</div>";
		  echo "</div>";
		    if ($user ===  $row_sub['username']) {
		echo "<button class='update_style'><a href='./update_post.php?id= "  .$row_sub['id'] . "'> Edit </a></button>";
		echo "<button class='update_style'><a href='./delete_handle.php?id= ".$row_sub['id']."'> delete </a></button>";	
	 	}
    }
}
?>
	<form method = 'POST' action='./handle_add.php'　class='sub_comment_add'>
	<input type='hidden' value="<?php echo escape($row['id'])?>" name='parent_id'/>
	 <textarea class='textarea_set' name='comment'placeholder='Leave a message' style= 'width:300px;height:70px'></textarea>
	
	<?php
   if ($user) {
          echo "<input type='submit' value='Send' class='btn'  >";
      } else {
          echo "<button class='btn'><a href='login.php'>Sign In First</a></button>";
      }
	?>	
</form>
</div>
<!--
9/11
* problem1:解決了第一項留言與後面的所有留言格是不相同的問題
solution:確認 sub_comment.php 裡面的值是否有少打</div>


* problem2:後面子留言的對話框沒有出現,無法輸入子留言
也沒有顯現子留言,
推測 可能 子sql 有誤.
不過 index 的對話框中也沒有呈現出來,也有可能是沒有關起來
所以要來重新檢查 index.php
看資料庫發現 子留言沒有呈現出來,
solution : 
 include vs  include_once 因為我只讓系統顯現一次 所以當然沒有辦法有兩個留言區阿阿阿阿，，
input 裡面的 echo "<input type='submit' value='Send' class='btn'>";
value 寫成 send 小寫 造成資料沒有讀入 無法寫入資料庫


目前看來有成功寫入資料庫裏面了
不過一樣得問題
沒有辦法呈現子留言
我的子留言格式會取代原本的格式
他會抓取所有的留言而不是 與原本相同 id 的留言


-->