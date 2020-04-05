import React, { Component } from 'react'
import './App.css';
import Nav from './nav'; 
import About from './about'; 
import Home from './home'; 
import Post from './post'; 



const _changeHashTag =  (str) => {
return str.slice(1)
}

class Route extends Component{
render(){
  const {current, path, Comp} = this.props
  return current !== path ? null: <Comp/>
}
}


class App extends Component {
  constructor(){
    super()
    this.state ={
      tab:_changeHashTag(window.location.hash) || 'home'
    }
  }


componentDidMount(){
  window.addEventListener("hashchange",this.handlehashchange)
}
componentWillUnomount(){
  window.remoeEventListener(this.handlehashchange)
}
  
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
