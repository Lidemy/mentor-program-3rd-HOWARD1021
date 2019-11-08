## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？

* DNS 為 Domain name system  為主要網域名稱的系統  就是將網域名稱轉換為 ip 位址 像http://howardweeee.com/ 的ip位址 為 13.59.38.177  我們一般不會去記這樣的數字 而 DNS 則可以幫助我們記住我們需要的網站 ip位址  幫助我們前往
當我們在使用 google 的 DNS 時 GOOGLE 都會有所紀錄 可以幫助他們做資料收集,能夠使搜尋引擎的準確度更高,
更有效的系統的做統計分析,以便廣告投放,對社會大眾的好處:Google Public DNS 會幫用戶檢查輸入的網址是否有安全疑慮,能夠更快速且安全的連線到網路





## 什麼是資料庫的 lock？為什麼我們需要 lock？

* Race Condition  競爭危害 以購買演唱會門票,作為例子: 當多個 request 到達 server 系統不會去檢查 票還剩下幾張,因此在最後一張時 就有可能造成超賣的現象 ,因此我們需要使用 
lock 鎖 使用後可以確保每個 query 都是執行後才執行下一筆 
```$conn->autocommit(FALSE);
$conn->begin_transaction();
$conn->query("SELECT amount from products where id = 1 for update");
$conn->commit();
--- lock 只能用在 transaction
--- 缺點 會有 效能上的消耗
```
-- 這個是一次 Lock 所有 Table
$conn->query("SELECT amount FROM products for update");
-- 比較沒必要,且會造成更大效能消耗
## NoSQL 跟 SQL 的差別在哪裡？

* Nosql 非關聯式資料庫,則是用 JSON 存入資料庫
好處是資料方便存取,讀寫快速,資料庫擴充成本低 
因為沒有固定格式所以查詢資料起來會比較複雜 

* SQL 為關聯式資料庫 要在 sql 建立資料庫 需要先建立一個Schema 及資料格式,好處是查詢資料方便,統整資料快速,但因為如果資料龐大,所需要的伺服器成本會提高,也會影響讀取速度
## 資料庫的 ACID 是什麼？
* ACID
* 原子性 atomicity :要全部失敗不然就要全部成功
* 一致性 consistency: 維持資料的一致性(錢的總數相同)
* 隔離性 isolation : 多筆資料簿會互相影響(不能同時改同一個值)
* 持久性 durability: 交易完成之後,寫入的資料不會不見
