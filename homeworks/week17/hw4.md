



```
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??


```
- 將 call 與 apply 的觀念放入, 
call(),apply() 第一個參數為 this 
我們將 function 加入 call 且將 函式前面的值帶入 this 

```
1.  => obj.inner.hello.call(obj.inner=2) =>2
2.  => obj2=obj.inner  =>obj.inner.hello.call(obj.inner=2)=>2 
3.  => hello() = hello.call(undefined)
```
