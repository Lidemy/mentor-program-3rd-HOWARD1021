## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼


### 大小區別
* VARCHAR
在 SQL 裡面 VARCHAR 中滿足最大行的限制為 25535(16K)字節
在mysql中使用 uft-8（mysql中的 utf-8 和我們正常的編碼utf-8不同）字符集一個字符占用三個字節，
使用utf-8字符編碼集varchar最大長度是(65535-2)/3=21844個字符（超過255個字符會有2字節的額外占用空間開銷，所以減2,如果是255以下,則減1）
* TEXT 最大限制是 16K  
采用 utf-8 字符集,(262144-2)/3=87381 個字符。
### 額外占用空間開銷說明
* 
varchar 小於255byte 1byte overhead
varchar 大於255byte 2byte overhead
text 0-65535 byte 2 byte overhead
從處理形態上來講varchar 大於768字節後，實質上存儲和text差別不是太大了.基本認為是一樣的

### 差別 
* TEXT　字段，MySQL 不允許有默認值, VARCHAR 允許有默認值,對索引長度沒限制


參考資料 https://www.itread01.com/content/1527508876.html
## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又會以什麼形式帶去 Server？
* Cookie 是甚麼? 在這邊不再是餅乾,而是伺服器放在瀏覽器的一份資料,讓瀏覽器可以藉由這份資料採取認證,
* 當server 端 回傳資訊給 client 端時,server 端會傳  Set-Cookie 的 HTTP Response  給瀏覽器
　php 使用方法
 setcookie ( " member_id "(目錄名稱) , " 001 " (cookie資料名稱), time () + 3600 * 24 (存取時間) );
* cookie 預設在每次網站 request 時都會夾帶到 server 裡面去 而 server 回傳 response 時也會把 cookie 下載到瀏覽器上面
所以當client 前往某一個網站,瀏覽器會檢查 它含有的 cookie 有沒有被那個網頁存取,如果有的話就會在 HTTP Request Header 上面這欄加入cookie,一同傳給伺服器 


## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
* 如果不小心被駭客,駭進去資料庫,或許能夠在對資料庫做二次加密
* 忘記帳號密碼 沒有辦法利用信箱做重新認證的動作,
* 在內部再新增一個新的社團認證
* 沒有辦法刪除留言
* 











