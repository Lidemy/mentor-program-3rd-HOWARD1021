<nav class='nav'>
		<ul class='nav_list nav_left'>
		<li class='nav_item'>
			<a href="./index.php">主頁</a>
		</li>	
		</ul>
		<ul class='nav_list nav_right'>
		<li class='nav_item'>
			<a href="./register.php">註冊</a>
		</li>	
		<li class='nav_item'>
			<?php if ($user) { ?>
			<a href="./logout.php">登出</a>
			<?php } else { ?> 
			<a href="./login.php">登入</a>	<?php } ?>	
		</li>
		</ul>		
</nav>