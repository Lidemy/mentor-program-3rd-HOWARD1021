## 什麼是 Ajax？
* Asynchronous JavaScript and XML
  Asynchronous 非同步的意思: 可以使 web 在不需要從新整理的情況下，更新即時的介面及內容,讓程式可以更快速的回應使用者的操作
  可以用來獲得其他網站的資料
  先用 new XMLHttpRequest 宣告 request 
  ```js 
  const request = new XMLHttpRequest();
  ```
  
  再來 宣告當收到 response 時是要怎麼處理資料
 ```js
 equest.onload = () => {
  if (request.status >= 200 && request.status < 400){
  //如何處理
    } else {
console.log('err')
      }
      }
request.onerror = function() {
console.log('error')
}

 ```

接著使用 request.opne() request.send() 實際送出 request
```js
request.opne('GET', 'url', true)
request.send()
```
  
 
  
## 用 Ajax 與我們用表單送出資料的差別在哪？
* 用表單送出資料時,伺服器會等待,接受,處理,畫面會閃爍重整一個新的頁面
 用 Ajax 時則不須跟伺服器同步,資料在跑的過程,javaScript 的程式一樣可以動,頁面不會當掉
## JSONP 是什麼？
* 全名 JSON with Padding 是一個除了在 CORS 跨來源要求下的另一個方式
有些東西其實不受同源政策影響 像是 <script> 這個標籤,因此我們可以利用這項特點來達成跨領域請求
在遠端建立一個 JavaScript 的文件,而 JSON 還被原生 JS 支援 
  
* 舉例來說  server 提供了一個 callback 的參數讓 clinet 端帶過去
  Twich 提供一個 JSONP 的版本
```url =https://api.twitch.tv/kraken/games/top?client_id=xxx&callback=receiveData&limit=1
```
```js
  receiveData({"_total":1067,"_links":{"self":"https://api.twitch.tv/kraken/games/top?limit=1","next":"https://api.twitch.tv/kraken/games/top?limit=1\u0026offset=1"},"top":[{"game":{"name":"Dota 2","popularity":63361,"_id":29595,"giantbomb_id":32887,"box":{"large":"https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-272x380.jpg","medium":"https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x190.jpg","small":"https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-52x72.jpg","template":"https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-{width}x{height}.jpg"},"logo":{"large":"https://static-cdn.jtvnw.net/ttv-logoart/Dota%202-240x144.jpg","medium":"https://static-cdn.jtvnw.net/ttv-logoart/Dota%202-120x72.jpg","small":"https://static-cdn.jtvnw.net/ttv-logoart/Dota%202-60x36.jpg","template":"https://static-cdn.jtvnw.net/ttv-logoart/Dota%202-{width}x{height}.jpg"},"_links":{},"localized_name":"Dota 2","locale":"zh-tw"},"viewers":65622,"channels":376}]})
```
*
  透過 callback 帶過去的參數=>receiveData 當作函式名稱 把 JavaScript 內的整個物件整個傳到 function 
```js
  <script src="https://api.twitch.tv/kraken/games/top?client_id=xxx&callback=receiveData&limit=1"></script>
<script>
  function receiveData (response) {
    console.log(response);
  }
</script>
  ```
* 兩端都有 JavaScript client 端負責 宣告 function 並決定參數 
  server 端負責呼叫 function, 實際運作 
  

## 要如何存取跨網域的 API？
Server 必須在 Response 的 Header 裡面加上Access-Control-Allow-Origin。
當瀏覽器收到 Response 之後，會先檢查 Access-Control-Allow-Origin 裡面的內容，如果裡面有包含現在這個發起 Request 的 Origin 的話，就會允許通過，讓程式順利接收到 Response。重點是這一行：Access-Control-Allow-Origin: * 代表包含所有的意思 所以當瀏覽器接收到這個 Response 之後，比對目前的 Origin 符合*這個規則，檢驗通過，允許我們接受跨來源請求的回應。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為第四周是用node.js 沒有用到瀏覽器,
同源政策是使用瀏覽器會遇到的問題
