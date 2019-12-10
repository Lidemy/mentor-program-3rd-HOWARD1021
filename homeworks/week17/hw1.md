```  console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```
- 會先執行 Stack 的資料 
 接著執行伺服器提供的 api setTimeout() ,跑完後將 檔案放入 queue 裡面 
- 當 call stack 跑完 1,3,5 為空的時候 Event Loop 會將 que 的值放入 call stack 裡面
再續執行 2,4
# call stack       

```console.log(1)
 console.log(3)
 console.log(5)
```
#  api 
```     setTimeout(() => {
                     console.log(2)}
                     setTimeout(() => {
                       console.log(4)}
```
# Event Loop

# queue



- 最後輸出 >>            
 1
 3
 5
 2
 4
 


