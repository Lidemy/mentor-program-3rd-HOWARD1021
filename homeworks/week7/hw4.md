## 什麼是 DOM？
![avatar](https://d1dwq032kyr03c.cloudfront.net/upload/images/20171214/20065504EIG4UYcuGE.png)


* DOM (Document Object Model，文件物件模型)，是一個將 HTML 文件以樹狀的結構來表示的模型，而組合起來的樹狀圖，我們稱之為「DOM Tree」
而 DOM API 就是定義了讓 JavaScript 可以存取 ，改變 Html 架構，樣式，內容的方法，及對節點綁定的事件，
像是一張樹狀圖從 Document 根部開始，延伸出　一個個 html 的標籤
## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
![avatar](https://blog.techbridge.cc/img/huli/event/eventflow.png)

* 從 window 開始向下傳遞 捕獲階段(CAPTURING_PHASE)，然後到達指定目標事件本身(AT_TARGET)，最後一路回傳回 window 這時叫做(BUBBLING_PHASE)冒泡階段
* 捕獲階段是要開始尋找一個事件
* 而冒泡事件是找到事件之後的回傳
* 口訣:先捕獲，再冒泡

## 什麼是 event delegation，為什麼我們需要它？
* 為事件代理 假設 一個 ul 下面有很多的 li 我們可以不用設一堆監聽器，而是藉由 BUBBLING_PHASE 直接將監聽綁在 ul 上面  

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
* ```event.preventDefault()``` 阻擋預設行為 
 瀏覽器上面的元素有些會有預設行為，舉例來說 <a> 會帶到這個連結，如果我們希望，瀏覽器在執行做我們要求做的事情，而非預設行為，
就可以使用
event.preventDefault()，值得注意的是，它並不會停止事件傳遞，只是讓原本元素預設的行為失效。
  另外，值得一提的是，在 event handler function 的最後加上 return false; 也會有 event.preventDefault() 的效果，但切記不可以加在前面，若是加在前面 event handler function 就直接結束了。
 
*  ```event.stopPropagation()``` 阻擋事件冒泡傳遞
  
  常使用的情況為，為了增加 checkbox 的可用性，特別增加＜label＞標籤 以及 for屬性給對應的 chkkbox
  
  這時如果我們在 label 上面註冊了 click 事件時：就會發現 click 執行了兩次
  
  是因為在 label 標籤包覆 chkbox 的情況下，我們去點擊了 label 觸發 click 事件，此時瀏覽器會自動把這個 click 事件冒泡帶給 chkbox。

* 要阻擋冒泡事件得傳遞，就需要在 chkbox 的click上```event.stopPropagation()```阻止冒泡
　<注意!>是放在 chkbox 上 而不是<label>上
 <p>
  chkbox.addEventListener('click', function (e) {
  e.stopPropagation();
}, false);<p>

* ```event.preventDefault()``` 停止元素預設行為，不影響事件傳遞機制；
  而 ```event.stopPropagation()``` 停止事件傳遞機制，不會停止元素預設行為。  
  
