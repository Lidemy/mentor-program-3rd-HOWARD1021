## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫

* 原本看到兩個東西時 的想法是
 應該是給予亂碼的方式不同吧 ，
 看完文章發現 : 雜湊不等於加密
但是雜湊與加密是並行的，為了避免資料庫被駭客入侵後裡面的客戶資料被整碗拿去，因此需要將重要檔案存成雜湊值，這樣就算被駭客拿到手，資料也不是明碼.
用可否 逆回去來判定差異
 -  雜湊是單向的
  加密則是擁有一個金鑰,將要存取得資料存在一個盒子裡面,要有加密金鑰才能打開
* 雜湊（Hash）
    無論原文長短,經過雜湊演算法輸出的,都是固定長度
但由於輸入相同的內容會獲得相同的輸出結果，因此通常都是使用 brute force 暴力破解，把所有可能的輸入都試一遍，因此我們需要為雜湊值$ hash 加一個 salt (為隨機生成的干擾字符) 千萬不要自己打 salt
值 
`password_hash($_POST['password'], PASSWORD_DEFAULT)`
- $_POST['password'] // 導入輸入德 password 
- PASSWORD_DEFAULT 為預設的算法
### 問題? 儲存密碼時存成雜湊亂碼,應證時如何成功
 ans: 因為一樣的輸入，對應依樣的雜續演算法，會得到一樣的輸出
，系統比對的是我們在登入時輸入的密碼，轉成雜湊值，在與先前存在資料庫的註冊時輸入的密碼（已轉成雜湊值）做比對
------------參考文章----------
  https://blog.m157q.tw/posts/2017/12/25/differences-between-encryption-and-hashing/

## 請舉出三種不同的雜湊函數
### 雜湊函數
- SHA-1
 (secure Hash Algorithm 1)
 中文名:安全雜湊演算法
 可以生成主要為160位(20位元組)
 的雜湊值,雜湊值通常形成的形式為 
 40個16進位數，
 在2005年被密碼分析人員發現有幾項有效的攻擊方式，認為不夠安全，
- MD5
由美國密碼學家 (Ronald Linn Rivest)設計於1924年公開，用以取代MD4 這套演算法.
MD5 演算法可以產生出一個128位元(16位元組)的雜湊值，
不過在1996年被證實存在落點可以被破解,專家建議改用其他演算法，如　SHA-2
- RIPEMD
由 魯汶大學 Hans Dobbertin,Antoon
Bosselaers & Bart Prenee 組成的 COSIC 研究小組發布於1996年.RIPEMD 是以 MD4 為基礎原則設計的，而其表現與更有名的 SHA-1類似.

## 請去查什麼是 Session，以及 Session 跟 Cookie 的差別
* 突然驚覺自己好像有點似懂非懂，
於是乎打算重新運作一次 board 裡面，cookie 的給予與驗證
* 一開始在 handle_register.php設定一個
setcookie("username",$username,time()+3600*24);
* 然而在資訊安全的顧慮下
 ，原先我們是將cookie = username 但為了資訊安全，
我們將 username 改成其他的 token ，不然只需要將 cookie 改成那個人的 username ，就可以假扮成那個人了
* 我們先創立一個  
howard_certificate
 ，在其中的 table 欄位填入 username && token
* 這邊設定一個function　setToken($ conn,$ username)
  設定token =uniqid()[php內建函數]；
  跑sql 指令 ；
  1.刪除一項　username；
 /*. 每次登入都會重新給一個$token.*/；
 
2.新增一項 $ username ,$ token，最後再對cookie設定為token得直
  
```    funciton setToken($ conn,$ username) {
$ sql = "DELETE FROM howard_certificate WHERE username = '$username' ";
  $result = $ conn->query($sql);

  $ sql = "INSERT INTO howard_certificate(username,token) VALUES ('$ username','$ token')";
  $result = $ conn->query($sql);	
  setcookie("token", $token, time()+3600*24);
}
```

*  HTTP 就是用戶端(瀏覽器)與網頁主機(伺服器)的傳輸協定
 client-side -> server-side
- cookie
主要用在登入紀錄，購物車紀錄上，網站關閉後，再次打開購物車 && 登入紀錄都不會被洗掉 
運作方式:
 client-side (瀏覽器)會儲存在瀏覽器內的一塊小資料 當瀏覽器再一次 request 時會將 cookie 夾帶進去 送回去server-side (伺服器端)做認證 

- session
 有點類似會話，為有始有終的系列行為/消息，中文翻譯成會期　

 cookie & session 最主要得差異 則是session 處存在　server-side，而非client-side
運作方式:
為了客戶端的請求創建一個　session　標誌，就是　session id，保存在客戶端的 cookie 裡面，比如說在 express　中，是儲存在 connect.sid　這個字段，當請求到來時,伺服器會檢查 cookie 中保存的 session id　，並通過這個 session_id
與伺服器端的 session_data 來進行保存與修改，也就是說，當瀏覽一個頁面的時候，伺服器會產生一個 1024bit 的字串符，然後存在 cookie 中的 connect.sid 這個字段中，下一次訪問的時候，cookie 會帶有這一個字串符號，瀏覽器會知道你是之前訪問過的誰，接著再從伺服器中的存儲中，取出上次記錄在你身上的資料

* cookie 就像是通行證，資料存取在 client 端上
* session 就是 會員卡資料存取在 server 端上 



// 參考網站https://progressbar.tw/posts/92

##  `include`、`require`、`include_once`、`require_once` 的差別

* include include_once
 都是用來引入檔案，後者會避免重複引入，沒有引入檔案時會出現錯誤訊息，但程式不會停止
* require require_once 
 都是用來引入檔案，後者會避免重複引入，沒有引入檔案時會出現錯誤訊息，但程式會停止執行

