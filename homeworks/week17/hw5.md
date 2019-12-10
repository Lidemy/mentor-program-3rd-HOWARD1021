# 本周學到
```
prototype
this 
event
scope    作用域  
closure  封包 
HOESTING 提升
```
### 這周終於學到了怎麼判別 this 
之前還沒有學到要如何釐清的時候，看著同學的作業都只能大概理解，或是猜測，
一知半解的感覺真的不好，不過也能理解老師為什麼沒有在前面講解，有些資料，在初期，看了真的也沒有辦法理解，藉由導入 call 這個 funciton 後 就變得很好理解了，
雖然在看完 
<淺談 JavaScript 頭號難題 this：絕對不完整，但保證好懂>信心滿滿的情況下，最後一個範例還是踩到了坑，
- 記住重點  要看 this，就看這個函式「怎麽」被呼叫
### 該來理解 JavaScript 的原型鍊了 
- 在探討 prototype 時，反而小卡的點 是 new 到底怎麼運作，一直很疑惑就卡住了
一開始看文章對 new 充滿疑惑，後面才看到另一個影片 <所以，new 到底做了什麼事？> 以及同學的筆記
還有[[筆記] 談談 JavaScript 中的 function constructor 和關鍵字 new]
(https://pjchender.blogspot.com/2016/06/javascriptfunction-constructornew.html
) 了解是產生一個 物件後，就能夠理解了 
- 知道我們有一個 person 函數 將 Person 當作一個 constructor(建構子) 我們可以給一個 var obj = new person() new 出一個 instance(實例) ，而且也可以 利用 Person.prototype 加上你想讓 instance 共同享有的屬性或方法
- 理解 proto prototype 的差別
1. 物件 proto 屬性的值就是他所對應的原型物件
2. 只有函數才有 prototype   
### hoisting  對於提升也有更多認識
- 以前都沒有認真細想到底是甚麼東西造成 變數可以在 funciton 之後產生，程式也看得懂，只知道有時候可以，有時侯卻不行，想說應該是有什麼神秘的機關
這周課程結束後，
1. 學到了會提升宣告，而非賦值 ，
2. 知道 Let Cost的 TDZ，
(Let cosnt 也有 hoisting 但是不會初始化為 undefined，在賦值之前嘗試取直會產生錯誤)， JS 是直譯且含有編譯的程式語言
3. 知道 JS 程式語言的運作過程
知道 LHS (關心記憶體位置，賦予值) 與 
RHS (不關心記憶體位置，只關心值是多少，拿取值) 
4. Byte code(坦承有點看不明白，打算先留著)

### 所有的函式都是閉包：談 JS 中的作用域與 Closure
- scope 中里長與全球明星的舉例真的很容易理解
- 切分變數有效範圍的最小單位是 function 
- 對於 閉包的理解 :   
```var btn = document.querySelectorAll('button')
for(var i=0; i<=4; i++) {
  btn[i].addEventListener('click'， function() {
    alert(i)
  })
}
``` 
- 還記得當初寫，只是知道 要把 
var 換成 let 就可以跑，不清楚為甚麼，這周後終於知道啦，解決以前得困惑感覺真好
- 對於 scope chain 也有更多的了解，知道 ECMAScript 中的作用域的運作模型怎麼跑












