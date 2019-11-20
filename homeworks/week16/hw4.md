### CSS 預處理器是什麼？我們可以不用它嗎？

* 幫助我們能夠使用 變數 巢狀等更便利的程式方法去寫 css 最終表現的還是 css 可以不使用 

### 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。

* ETag (可以想像成網站內容的hash 但不完全是)
當 cache 過期 client 會請求 Get/fiel If-None-Match :(Etag(ex:x234dff)) 
給 server 去比對 有沒有做個改動 如果沒有的話 就回傳 304 未修改 
catch-control:max-age=120 Etag:'x234dff'

### Stack 跟 Queue 的差別是什麼？

* stack 為 堆疊
queue  為 佇列
stack(FILO First In Last Out) 
先進去的資料會放在最底層 最後才出來
* queue(FIFO First In First Out)先進先出
先放入的資料會先提取

### 請去查詢資料並解釋 CSS Selector 的權重是如何計算的（不要複製貼上，請自己思考過一遍再自己寫出來）
#### 首先我們要來判定 css 權重的大小是
* element < class , psuedo-class(偽類), attribute(屬性選擇器) < ID < inline style attribute 
使用全站預測值來比較大小 0-0-0-0

####  element 的種類包含不限於(div,p,ul,li)
* element 的權重為 0-0-0-1 

####  class, psuedo-class(偽類), attribute(屬性選擇器) 
- 權重為0-0-1-0
 class 種類有 .box 在css 裡面前方有一個點的
 psuedo-class 如 :link :hover :focus
 attribute 如: [type:checkbox]
#### id 權重比 0-1-0-0
- 舉例:html 裡面 id='success' css 為 #success
 inline style attribute 就是寫在 html 的 css
舉例 <h1 style=“color: #fff;”>

#### 最終大魔王!important 
* 權重比 大於所有權種 , 但是一班不建議使用 ,如果在 css 使用了!important 
,之後想要覆蓋原本的css又不想要修改檔案的話,就必須在後面的 css 也加入 !important 

### 參考資料
* HTTP Cache Header
https://blog.techbridge.cc/2017/06/17/cache-introduction/
* stack
https://ithelp.ithome.com.tw/articles/10205260
* css 權重
https://ithelp.ithome.com.tw/articles/10196454
https://cssspecificity.com/#
https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/
