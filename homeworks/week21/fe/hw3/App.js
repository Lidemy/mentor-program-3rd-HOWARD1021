import React, { Component } from 'react'
import './App.css';
import Nav from './nav'; 
import About from './about'; 
import Home from './home'; 
import Post from './post'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// 顯示出# 後面的字元
const _changeHashTag =  (str) => {
return str.slice(1)
}

// 如果 現在的字元 與 path 相同 則呼叫 那個 Comp
class Route extends Component{
  render(){
  const {current, path, Comp} = this.props
  return current !== path ? null: <Comp/>
  }
}


// 設定用來判斷 路由的 tab
// 使用 window.location.hash 可以獲得現在的 #hashtag 字元  
class App extends Component {
  constructor(){
    super()
    this.state ={
      tab:_changeHashTag(window.location.hash) || 'home'
    }
  }

// 當 hashchange 當 hash 改變時 呼叫 handlehashchange
componentDidMount(){
  window.addEventListener("hashchange",this.handlehashchange)
}
componentWillUnomount(){
  window.remoeEventListener(this.handlehashchange)
}
// 我們會改變 現在的 #hashtag
handlehashchange = ()=>{
this.setState({
  tab:_changeHashTag(window.location.hash)
})
} 

  render(){
    const {tab} = this.state
    return (
    <div className='App'>
    <Nav  activeTab={tab}/>
    <div className='page'> 
<Route current={tab} path={'home'} Comp={Home}/>
<Route current={tab} path={'about'} Comp={About}/>
<Route current={tab} path={'post'} Comp={Post}/>
    </div>
    </div>
    );
  }
}
export default App;
