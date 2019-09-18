## 請說明 SQL Injection 的攻擊原理以及防範方法
sql injection
Sql 語法中,出現的漏洞,攻擊者可以利用此漏洞,像是特殊字元,改變語法邏輯,來執行他們想要的指令來獲取資料庫的資料,像是 會員的帳號密碼
舉凡但不限於:
1. 在會員登入時網站要驗證是否 帳號密碼正確 要寫這樣的 sql　語法
select * from members where account='$name' and password='$password'

這時我們給他　一個帳號　
' or 1=1 --
密碼任意值
->
select * from members where account='' or 1=1 --' and password=''

因為  -- 會變成註解 
前面的1=1 又一定會程式,就會造成判斷式一定成立,駭客就能成功登入



為了防止 sql injection 我們要做的是,
我們要過濾字串,並檢查變數型態 [ 數字, 字串, 字元]
這邊給他一個　 prepare 公式 

$sql="SELECT c.id, c.comment, c.create_at , c.id, u.nickname ,u.username FROM howard_comments as c LEFT JOIN howard_users as u ON c.username = u.username WHERE c.parent_id = 0
    ORDER BY create_at DESC LIMIT ?,? ";
$stmt = $conn->prepare($sql);
<!-- 要注意 ii 意思是 數字 有兩個參數 所以要有兩個-->
$stmt->bind_param("ii",$data_start, $page_limit);
// ?? 我們使用 ?? 來讓資料做二次檢核,就不會輕易被傳入 sql injection
$stmt->execute();
$result = $stmt->get_result();

我們來比對 week11 的 sql

$sql="SELECT c.comment, c.create_at , c.id, u.nickname ,u.username FROM howard_comments as c LEFT JOIN howard_users as u ON c.username = u.username ORDER BY create_at DESC LIMIT $data_start, $page_limit";
$result = $conn->query($sql);



## 請說明 XSS 的攻擊原理以及防範方法

XSS  (Cross-Site Scripting)跨網站腳本


由於 語法的關係當我們再輸入留言版的留言內容時
如果輸入的是  <h1>qq</h1> 
: 他顯現的結果會是 
QQ 就變成大寫了
也就是說 HTML 的規範也會被帶進去
就此特性,我們可以在別人的網站上 寫我們要的 CODE 有沒有很興奮!!!
馬上來攻擊 防守一番

1.儲存式攻擊
儲存在 database, 
我們可以來寫一個 <script>alert 1</script>,
來造成我們的網站變成,只會顯示1的,彈出式視窗
處理方式 :escape 可以將輸入的資料,改為純文字

function escape($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'utf-8');
}

2.引導式(反射型)攻擊
:  我們在 網址中 傳入一個 ?message 
="傳入成功"

讓我們再傳入新的留言的時候 會跑出上面這串 "傳入成功"
 這邊就有一個攻擊的方式,我們可以在 message = <script>alert 1</script>
不過　chrome　很兇　他會擋住這相關的攻擊
## 請說明 CSRF 的攻擊原理以及防範方法

CSRF 跨網站請求偽造
Cross Site Request Forgery 
與 XSS 不同 XSS 是網站中被寫入 其他程式碼,CSRF 則是利用存在電腦中的 cookie ，在使用者不知道的前提下進行身分認證,發出 request

預防方法
server 端
1.確認發出得 request 是從正確的官網網站出來
  * 可以檢查 request 的header 欄位中叫 referer 代表此 request 的網域 domain 檢查是否合法
  這邊有三項事情要注意
* 第一 有些瀏覽器不會附帶 referer  功能 
* 第二 有些使用著會關閉自動帶 referer  功能
* 第三 判定是不是合法domain 必須保證沒有　ｂｕｇ 
2.加上圖形驗證碼,簡訊驗證碼等等
來確定是否是真的本人
3.加上　CSRF token 
我們要確保有些資訊只有使用者才會知道
＊ 我們可以在 form  裡面 設定 session 資訊 按下 submit 後 server 會比對表單中的 session 是不是 server 裡面有的， 而且一段時間 session　就應該要更改
*  Double Submit Cookie
我們一樣讓 server  設定 一個 隨機 token 
並且放在 form 上面 但是不用把值 寫在
session 上 而是 在 client 上面寫一個  csrftoken的　cookie 
質也是相同的 token ,我們在 按下 submit 時,
我們就比對 cookie 的 csrftoken 與 form 裡面的 csrftoken 是否相同,因為同源政策,攻擊者不能夠在他的domain設定 cookie
因此攻擊者 發出的 request　cookie　 裡面就沒有含有　csfrtoken 就會被擋住了 




















