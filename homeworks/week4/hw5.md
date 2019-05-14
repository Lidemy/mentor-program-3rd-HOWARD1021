## 請以自己的話解釋 API 是什麼
* API = application programming interface ＝＞　應用程式介面
API 主要就是串聯資訊的工具，以一家餐廳而言，我們要點餐，需要服務生
，API 就是這個信差，而用網路上的訂票系統來說的話，我們訂票，
從旅遊網站訂購飛機票，旅遊網站會從各個不同航空公司擷取資料，
API 這個信差會將我們的訂票資訊，點餐偏好，或是行李重量，傳遞給
航空公司，然後再將航空公司對要求所做的回應，回傳給我們消費者

API 主要目的就是要：傳送資料，創造連結．
讓我們能夠動動手指就與世界接軌

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

1. 304 Not Modified ：使用在快取模式，告訴客戶端，答覆沒有被改變，可以繼續使用
2. 413 Payload Too Large : Request 傳輸的檔案太大 server有可能會關掉連結，或是回傳一個Retry-After header field
3. 206 Partial Content　： 客戶端分批下載，大量的資料


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

base URL=https://api.FOODGRANDMA.com


本 API 支援 HTTP method 變更資源內容 GET POST PUT PATCH DELETE OPTIONS

| 說明     | Method | path       | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 獲取所有餐廳 | GET    | /restr     | _limit:限制回傳資料數量           | /restr?_limit=5 |
| 獲取單一餐廳 | GET    | /restr/:id | 無                    | /restr/10      |
| 新增餐廳   | POST   | /restr    | name: 店名 | 無              |
| 刪除餐廳   | DELETE   | /restr/:id     | 無 | 無              |
| 更改餐廳資訊   | PATCH   | /restr/:id     | name: 店名 | 無              |










