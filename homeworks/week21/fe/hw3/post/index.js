import React, { Component } from 'react'
import './Post.css'

class Post extends Component {
constructor(){
  super()
  this.state={
    posts:[],
    postid:null,
    post:{}
  }
}
// componentDidMount : 當 component 實例 instance 建立時 並顯示在 DOM 上面 
// setState  posts 為 json  
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => this.setState({
    posts:json
  }))
}



// 當我們點選其中一項 文章 我們會觸發 componentDidUpdate 他會判定 postid 是否改變
// 改變的話 套用他的id 抓取我們要的檔案
componentDidUpdate(prevProps,prevState){
  if(prevState.postid !== this.state.postid){
    this.getpost(this.state.postid)
  }
}
// 我們修改 post 的 json 資料
getpost = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/' + this.state.postid)
  .then(response => response.json())
  .then(json => this.setState({
    post:json
  }))
}

handleback = ()=>{
  this.setState({
    postid:null,
    post:{}
  })
}
render(){
  const {posts,postid,post} =this.state
  return(

<div>
{!postid  && 
  (<div className='Post__list' >
    {posts.map( (post,index) =>
     ( 
     <div className='Post__item' key={index} onClick = {()=>{
    this.setState({
      postid:post.id
    })
  }}>
       <div className='Post__id'>{post.id}</div>
       <div className='Post__title'>{post.title}</div>
       <div className='Post__body'>{post.body}</div>
     </div>
     )
     )}
  </div>)
}
{ postid && 
  (<div>
    <h1>{!post.title ? 'loading...' : post.title}</h1>
    <div>{post.body}</div>
  </div>
  )}
  {
    postid && <button onClick ={this.handleback}>回到文章列表</button>
  }
    </div>
    )
  }
 
}
export default Post;




