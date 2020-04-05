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

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => this.setState({
    posts:json
  }))
}



componentDidUpdate(prevProps,prevState){
  if(prevState.postid !== this.state.postid){
    this.getpost(this.state.postid)
  }
}

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
    {posts.map( post =>
     ( 
     <div className='Post__item' onClick = {()=>{
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




