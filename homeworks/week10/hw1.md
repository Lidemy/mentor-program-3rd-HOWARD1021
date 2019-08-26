## 六到十週心得與解題心得

* 睽違了兩個月 才又來交作業,老師可能都不記得我了QQ(我誰
最近被進度延宕得感受瀰漫全身,想給自己加油打氣一下,
想起了當替代役時,測驗 3000 的時候,因為消防役,分數基本上就是看體能,所以跑步成績占比很重,當時印象很深刻的是,起跑的一開始,全部人都奮力起跑,畫面有點像是賽馬場的馬兒,背負著觀眾的期待,奮力起跑XD,一開始為了跟上大家的速度,我跑的超級快,呼吸都亂掉了, 開跑一圈就喘得,不要不要得,但我做了一個決定,決定不跟其他人的速度,調整呼吸,照自己的步伐,一開始跟別人的距離漸漸被拉開,但跑了幾圈後,我找回了自己的步伐,最後  第一名 
當然還是與我無緣,第一名 跑12分10秒 真得很強, 不過最後還是拿到了不錯的成績,也選到了自己想去的大隊,
雖然寫程式不是體育競賽,但還是期許自己能夠保持順暢的呼吸,莫忘初衷,跑完整個課程!
### 複習 第六周  
開始學習 html css js 一開始 想說這一周應該跟其他州比起來簡單很多嘞吧結果沒想到 細項的一些東西 還是忘記 雖然稍微複習一下 都馬上回憶起來像是 display:inline-block; 可設定區塊寬度與高度沒有設定的話不會是形成區塊按鍵,會變整行都是HELLO WORLD 
	*  設定畫面最大值
@media screen and (max-width: 768px){    .row {        flex-wrap:wrap ;    }    .col{    margin-left:0px;    margin-top:20px;}}
	* max-，表示這個數字以下（包含）的都適用。
	* min-，表示這個數字以上（包含）的都適用。

* 還玩了 Flexbox Zombies 

### 複習　第七周
* 在前幾周學到了 HTML CSS 這周要開始使用 JavaScript　 要讓網頁動起來了
這周講到了重要得 DOM 的事件傳遞機制:捕獲與冒泡記住口訣: 先捕獲 再冒泡剛, 開始接處到這周時 完全有點恍惚的感覺,剛學習到 CSS 與　HTML 就都是全新的概念了,雖然不難但是還是會對於新的東西感動恐懼 
* DOM 事件在傳播時, 有分為三個階段,1.capture phase 2.Target phase 3.Bubbling phase 假設點了一個 td 會先從 window 開始然後往下捕獲, 到達 td 為 Target phase 在開始往上傳遞回 window ( Bubbling phase)// list 的冒泡 $list.addEventListener('click', (e) => {  console.log('list bubbling', e.eventPhase);}, false)addEventListerner 這個值的其實有第三個變數 就是 true 為捕獲,false 或沒有傳就代表把這個listener　加到冒泡階段先捕獲在冒泡的小陷阱,如果我們跑程式時這樣寫// list_item_link 的冒泡 $list_item_link.addEventListener('click', (e) => {console.log('list_item_link bubbling', e.eventPhase);}, false)// list_item_link 的捕獲$list_item_link.addEventListener('click', (e) => {console.log('list_item_link capturing', e.eventPhase);}, true)如果先執行冒泡　在執行捕獲的話，輸出的值就會為　冒泡再捕獲list_item_link bubbling2list_item_link capturing2為什麼會這樣子呢　不是說好先捕獲在冒泡的嗎，原因就在 來到 list_item_link: 為事件傳遞到點擊的真正目標,也就是e.target 無論你使用的 addEventListener 的第三個參數是 true || false 這邊的e.eventPhase 都會變成 AT_TARGET自然就沒有什麼 捕獲或冒泡之分了 ,而是根據你的 addEventLisetner 的順序來決定先添加的先執行 後天家的後執行所以事件傳遞的順序記住兩個重點
	1. 先捕獲 在冒泡
	2. 當事件傳遞到 target 時 不分冒泡或捕獲

* 要如何取消事件傳遞呢一條事件鍊這麼長,要怎麼取消呢 可以使用 stopPropagation 不過要注意的是 他是不會傳遞到下一個節點如果在同一個節點內有不同的 listener 還是會進行執行* 如果想讓其他同一層級的 listener  也不要執行的話,可以使用 e.stopImmediatePropagation()
	* 取消預設行為 e.preventDefault()

這邊有個有趣的概念,我們在 # list 的捕獲是件裡面寫了 e.preventDefault()而效果會在之後傳遞的事件一直延續因此等事件傳遞到 # list_item_link 的時候 一樣點超連結沒有反應那要如何實際應用呢事件代理 (Delegation)假設一個 ul 底下有1000個li 如果幫每一個 li 都加上 eventListener 就建立了1000個function  但我們剛剛知道 點及li 的事件都會回傳到 ul 身上 ,所以我們只需要幫 ul 掛上一個 eventListener,這樣的好處是 當我們新增或刪除一個 li 我們不需要去改變他身上的 listener 因為我們的 listener 是放在 ul 身上這樣的父節點處理子節點的行為我們稱為事件代理文章內還提供了兩種方法:1.window.addEventListener('click',(e)=>{e.preventDefault();e.stopPropagation();},true);這樣的程式碼執行後,就可以把頁面上所有的元素停用,點了也沒有反應,超連結沒有反應,<form> 按了 submit 也沒有反應,而且因為阻止了事件冒泡,所以其他的 onClick 事件也都不會執行2.window.addEventListener('click',(e)=>{console.log(e.target);}, true)在 window上面使用捕獲，就能夠保證一定是第一個被執行的事件，就可以在這個 function 裡面偵測每一個元素的點擊,可以傳回去做數據統計及分析

### 複習第八周
主要要回想起之前學到的 api 的部分 一開始當然還是要練習 css html 的切版動作啦
不過這次有 api 要寫
要記住 api 中的 獲得資料,修改資料庫資料的方法
作業123 都要求說要我們串 api
所以在這周當中我們會複習如何串 api 然後 將學到如何
跨網域的限制 

在 hw2 中我們要設計一個留言板,
所以 我們要注意的是 
1. 如何使用 ajax 讓網頁不需要重新整理也可以獲得新的資料
使用 request.onload 
以及在 給予一個 addEventListener()
要記得給 e.preventDefault()才不會在送出表單時,直接跳轉頁面
2. 以及 注意 要給  encodeURICompent

? 有些小疑問觀察同學作業時發現 
 為什麼 我寫的作業中 沒有用到

request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
request.setRequestHeader('Client-ID', '0f8fmwvjvfouvzw0flwgyu3or1zgek');





 ### 複習第九周 
進入後端的世界 如何設計一個 留言板的 database 設計留言板得過程有點像是,在打造一個小小的世界,  不過這個世界非常簡單,只需要幾個項目  , 在 database 裡面顯現出個 外貌是 nickname 的世界沒有地心引力,沒有空氣 , 但有時間得世界  而裡面 的NBA  我是說 DNA 就是  id   username nickname password而外部環境的顯現 , 就像是 說出來的話 則是用 comment 表示  , id 則是發生的位址  username 身份證字號   create_at 為說出來的時間綜合以上所知,我們可以得知我們要設定的 database  包含 了 howrad_username & howard_commenthowrad_username1.id2.nickname3.username4.passwordhoward_comment1.id2.comment3.username4.create_at接下來 我們來處理第 二 三 題了! 第二到三題 我們要將資料導入到 資料庫裏面 而非第八周的導入到一個寫好的 api 裡面, 這個資料庫是我們要自己用 php 自己寫的要利用 POST GET 表單的方式 把我們要的資料存入 指定的 資料庫裏面要會寫 SQL 的指令這邊要記得What is CRUD:  create read update delete製造簡易留言板 及 會員系統首先我們 建立一個 <form method = 'POST' action='./handle_add.php'>    <div>內容:        <textarea class='textarea_set' name='comment' style="width:400px;height:100px "></textarea>    </div><div> 裡面用 textarea 寫我們要的留言用action把我們寫的內容導入handle_add.php了  在 handle_add.php 裡面呢 我們要來檢查是否真的有傳入 留言 利用$_POST['comment']$comment=$_POST['comment'];if (empty($comment) && !isset($comment)) {    die('檢查資料');}使用 sql  INSERT INTO　howard_comments$sql = "INSERT INTO howard_comments(username,comment) VALUES ('$user','$comment')";確認有無成功如果成功就轉入到首頁 index.php$result = $conn->query($sql);if($result) {    header ('Location:./index.php');} else {    echo 'failed' . $conn->error;}?>index.php 留言板顯現出來的的寫法 這邊要注意  sql　我們要把　兩個 database 串在一起 要使用 LEFT JOIN howard_uesrs  ON c.username =u.username<?php$sql = "SELECT c.comment, c.create_at , c.id, u.nickname ,u.username FROM howard_comments as c LEFT JOIN howard_users as u ON c.username = u.username ORDER BY create_at DESC LIMIT $data_start, $page_limit";$result = $conn->query($sql);if ($result->num_rows > 0) {        while ($row= $result->fetch_assoc()) {        echo "<div class=table>";        echo "<div class='table__style'>" . "作者:  " . $row['nickname'] . "</div>";        echo "<div class='table__style'>" . $row['comment'] . "</div>";        echo "<div class='table__style'>" .'發佈時間: '.$row['create_at'] . "</div>";         if ($user ===  $row['username']) {        echo "<button class='update_style'><a href='./update_post.php?id= " . $row['id'] . "'> Edit </a></button>";        echo "<button class='update_style'><a href='./delete_handle.php?id= ".$row['id']."'> delete </a></button>";            }        echo "</div>";    }}?>接著我們來寫 register.php 以及 login.php基本上與傳遞 comment  是一樣得只是我們要記得使用 name  ='nickname' name = 'password'去帶入我們要傳遞的質然後在 handle_register.php 裡面再把 檔案 INSERT INTO 進去 在註冊存取的時候要記得的一件事情要記得將我們註冊用的 密碼 存成  hash $password=password_hash($_POST['password'], PASSWORD_DEFAULT);順利註冊完成後, 來體驗登入功能依樣先確認 有沒有正確的提供 帳號 && 密碼有了之後我們來寫 sql 找 有沒有相對應得帳號 如果有,我們進入下一步我們把 所有的result 值 印出來$row  = $result->fetch_assoc();設定 $hash_password = $row['password'];然後認證這個 輸入得值跟 原本存入得雜湊值是否相同, password_verify($password, $hash_password)接著再設定 setToken 然後 就登入成功 拉! 












