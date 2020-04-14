## 為什麼我們需要 React？可以不用嗎？
React 可以直接操作存取的資料作畫面的連動 不需要改資料後，又再去修改畫面的變更
，只需要將邏輯寫好，資料一改變，畫面就一起改變
也可不用 React，不過使用 React 可以省下很多步驟
## React 的思考模式跟以前的思考模式有什麼不一樣？
過往我們修改 畫面 我們都是使用 DOM Html 樹狀結構
當我們要修改資料 就要從 龐大的資料庫中 的 尋找我們要的 位置
就像是當事件發生時 我們要從大樹中 一層一層深入 直到找到我們要的那片葉子，可以想像這樣的方式有多消耗效能 
而且在使用 jquery 時我們要插入 相對應的id 與 class 如果當專案一大 我們會搞混我們宣告的class 背後到底代表甚麼
React 橫空出世 就是為了來拯救我們， 讓我們能夠使用 JSX  在 render 時同時處理HTML 與 JS  
讓資料的操作  與  排版  成為同一件事情
當資料做修改 我們就一律重新渲染整個畫面，一開始會有疑問說，這樣渲染所有的畫面，會不會影響到效能的問題，但是 React 有提供一個功能就做
VirtualDom 此功能會去對 舊資料與新資料的排版與資料進行比對，對有需要變動的 DOM 反映在 瀏覽器上
## state 跟 props 的差別在哪裡？
|state|props| 
|------|------|
|用於組件內部的 保存 修改 控制自己的組件資料 不可由外部做訪問與修改 可以當作是一個內部組件的資料源，state 可以使用 this.setState 做更新，setState 會重新渲染組件| 藉由父組件傳遞下來的資料，props 只能在父組件時做修改 不可以在傳遞時做修改|
- state 是讓組件自己控制自己的狀態
- props 是讓外部對組件自己進行配置
## 請列出 React 的 lifecycle 以及其代表的意義
- constructor
  - 當組件被初始化時被調用，可以設置初始化狀態與綁定 物件 
   如果沒有設置 state  或 綁定 方法的話 就不需要 construtor 
  - 一個  React component  會在其被 Mount(加入 DOM tree 中) 前呼叫 constructor 
  - 如果是在 React Component subClass 產生一個 constructor  就必須在其他宣告前，新增一個 super(props) 否則  constructor 裡面的 this.props 會出現 undefiend 這個 bug 
  - 主要目的
   1. 指定 this.state  來宣告 組件內的 state 值 
   2. 為事件處理(event handler) 綁定 instance 
  - constructor 為唯一一個設定 this.state 的地方，也不能在此 使用 this.setState 
- componentWillMount
    會在 render() 前呼叫，可以在其中設置 組件內部的變化，因為不會再從新渲染一次，但還是建議在 constructor 裡面做初始化的動作
- render 
    為 component 裡面必要的 lifeCycle 
    會去判斷 this.state this.props  的變化，並回傳組件輸出的元素，要記住 render 為一個純函數 不應該在裡面 改變 component 的 state 並且不會與瀏覽器有互動
- componentDidMount
  - 在 Component 被 Mount(加入 DOM tree 中)後 馬上被呼叫，DOM node 的初始化應該寫在這個方法裡面，如果需要向遠方終端點(Remote endpoint)，進行實例網路請求的話(network request)，要請求資料適合使用的生命週期
是個 請求 API 的好地點。 
