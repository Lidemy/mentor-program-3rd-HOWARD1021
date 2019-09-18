<div class='page'>
<?php
echo ($pageIndex > 1) ? "<a href='?page=$page_prev' class=page_item>prev</a>" : "" ;
for($i=1; $i <= $pages; $i++) {
    echo ($i === $pageIndex) ? "<a href='?page=$i' class=page_item_active>$i</a>" : "<a href='?page=$i' class=page_item>$i</a> " ;
}
echo ($pageIndex < $pages) ? "<a href='?page=$page_next' class=page_item>next</a>" : " "; 	
?>
</div>

















