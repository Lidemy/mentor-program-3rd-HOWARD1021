```
function time(i){
		return setTimeout(() => {
    console.log(i)
  }, i * 1000)	
		}


for(var i=0; i<5; i++) {
  time(i)
}

```

 這題會打印出 0 1 2 3 4 5 
               5 5 5 5 5 
主要是因為 setTimeout 裡面並沒有 i 這個值所以我們往上面去找 
上面迴圈都跑完了 i 當然是 5
如果想要 在一段時間後打印出 0 1 2 3 4 5  
可以使用 scope 將它們放進同一個 地方
最簡單的方法可以用 let 讓它們存取在同一個 scope　裡面


- ans1:加一個 Function  
- 第一次測試時多加了 function () 失敗
```
function time(i){
		return function(){
		setTimeout(() => {
    console.log(i)
  }, i * 1000)	
```
- 第二次成功
```
function time(i){
		return setTimeout(() => {
    console.log(i)
  }, i * 1000)	
		}


for(var i=0; i<5; i++) {
  time(i)
}
```


-ans2:用 IIFE
```
for(var i=0; i<5; i++) {
  (function(i){
		　setTimeout(() => 
    console.log(i), i * 1000)	
		})(i)
}
```
