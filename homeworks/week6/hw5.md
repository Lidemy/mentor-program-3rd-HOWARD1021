## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1.＜strong＞字體加粗和斜體字的效果，突出它在文章中的重要性」時，建議使用＜strong＞和＜em＞標籤！


2. <bgsound />為選擇音樂的標籤
  <bgsound src=＂（img/music.mp3）" loop="5" /> 
　SRC 為路徑，LOOP 為重複次數


3. ＜br/＞換行標籤，只應該用於內文中須要換新的一行時使用(若是換段落則應直接結束＜p＞標籤接下一個新的)。它不應該用來製造元素之間的間距。

## 請問什麼是盒模型（box modal）
* 是一個視覺化的樣板設計工具，從裡到外是> Content (內容) Padding (文字或圖片與邊框的距離) border (邊框) margin (與外邊界的距離)
 > margin >
   > border
     > Padding
       > Content
* 用於設計 網站架構，調整 css 格式
* 在使用 box modal 時可以使用
  box-sizing: border-box
  ，這樣在改變 padding 或 border 時 
  不會影響其他元素


## 請問 display: inline, block 跟 inline-block 的差別是什麼？
* display:block 可使用元素有< div , h1, p...>
程式的預設值為 block，特性是會佔滿整行，儘管還沒填滿，也會直接挑到下一行
* display:inline 可使用元素有< span, a>
  1. 特性是 調整寬高 以及上下邊距沒有用，只會看內容 調整 width height 是不會改變的
margin 左右會改變上下編劇不變(可以用比較直接的想法去記住，通常使用　inline 是為了要改變文章中的其中某些字母 , 因此改變上下會很奇怪)
	2. padding 左右會改變，改變 padding　上下會發現 元素沒有動 但是背景有影響，內容不會改變
* display:Inline-block 可使用元素有 < button, input, select>
綜合 block, inline 兩種特性
對外像 inline 可併排
對內像 block 可調整屬性



## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
1. position:static 為網頁預設的定位方式

2. position:relative <相對定位> (只會改變自己的位址不會改變其他 block 的)
    通常使用 relative 都是為了讓下面的元素可以使用 absolute 絕對定位
3. position:fixed  固定定位
在 viewport 做定位
4. 
* position:absolute; 絕對定位
往上找到非 static 的元素，如果是相對定位　relative　就針對他來做定位
如果都找不到 非 static 的元素 則定位在 body
* 也就是說往上的元素裡面要有 設定 relative
* 有趣的點是 使用了 絕對定位後，會直接抽出正常的排版程序，下一個元素會遞補上來，會假裝這 absolute 這個元素不存在,繼續做排版流程




