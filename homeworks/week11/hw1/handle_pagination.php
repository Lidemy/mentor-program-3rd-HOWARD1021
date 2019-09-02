<?php
require_once('./conn.php');
$page_limit = 20;
$sql = "SELECT * FROM howard_comments ORDER BY create_at DESC";
$result = $conn->query($sql);
$data_num = $result->num_rows;

//總頁數(總留言/20)
$pages=ceil($data_num/$page_limit);
//
if(!isset($_GET['page'])) {
	$pageIndex = 1;
} else {
	$pageIndex = intval($_GET['page']);
}
//設定SELECT 中 LIMIT 的量.
$data_start = ($pageIndex - 1) * $page_limit;
$page_prev = $pageIndex - 1;
$page_next = $pageIndex + 1;
?>
<!--
select order by $page_start $page_limit
-->