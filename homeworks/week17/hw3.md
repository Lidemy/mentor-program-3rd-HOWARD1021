```var a = 1
function fn(){
  console.log(a) //undefined
  var a = 5
  console.log(a)//5
  a++
  var a
  fn2()
  console.log(a) //20
  function fn2(){
    console.log(a) // 6
    a = 20  
    b = 100
  }
}
fn()
console.log(a) //1
a = 10
console.log(a) //10
console.log(b) //100
```
### 執行步驟
1. 編成 Global EC
2. 執行 Global EC
3. 編成 fn EC
4. 執行 fn EC
5. 編成 fn2 EC
6. 執行 fn2 EC
- scopechain:為 GlobalEC.VO + [[scope]]
- stack 形成 =>

### EC 環境
- 6. 執行 fn2 EC
```
fnEC2
AO{	
   a:20
   fn2:func
   scopechain: fn2EC.VO + fn2().[[Scope]] = 
   fnEC2.VO + fnEC.VO + GlobalEC.VO
}

fn2().[[Scope]] = fnEC.VO + GlobalEC.VO

```
- 5. 編成 fn2 EC
```
fn2().[[Scope]] = fnEC.VO + GlobalEC.VO
```
```a = 20
fnEC2
AO{	
   a:20
   fn2:func
   scopechain:fn2EC.VO + fn2().[[Scope]] = fnEC2.VO + fnEC.VO + GlobalEC.VO
}


a++ = 6
fnEC2
AO{	
   a:6
   fn:func
   fn2:func
   scopechain:fn2EC.VO + fn2().[[Scope]] = fnEC2.VO + fnEC.VO + GlobalEC.VO
}
fn2().[[Scope]] = fnEC.VO + GlobalEC.VO
```

- 4.執行 fn EC
```fnEC
var = a
AO{	
   a:undefined
   fn:func
   fn2:undefined
   scopechain:fnEC.VO + fn().[[Scope]] = fnEC.VO + GlobalEC.VO
}

a = 5 
AO{	
   a:5
   fn:func
   fn2:undefined
   scopechain:fnEC.VO + fn().[[Scope]] = fnEC.VO + GlobalEC.VO
}
```

- 3.編成 fn EC
```fn().[[Scope]] = GlobalEC.VO
```
```fnEC
AO{	
   a:undefined
   fn:undefined
   fn2:undefined
   scopechain:fnEC.VO + fn().[[Scope]] = fnEC.VO + GlobalEC.VO
}
```
- 2.執行 Global EC
```
var = 10
GlobalEC 
VO {
	a :10	
	fn:undefined
	fn2:undefined
	scopechain:GlobalEC.VO 
}

var = 1
GlobalEC 
VO {
	a :1	
	fn:undefined
	fn2:undefined
	scopechain:GlobalEC.VO 
}

scopechain:為 GlobalEC.VO + [[scope]]
```
- 1.編成 Global EC
```
GlobalEC 
VO {
	a :undefined	
	fn:undefined
	fn2:undefined
	scopechain:GlobalEC.VO 
}```
