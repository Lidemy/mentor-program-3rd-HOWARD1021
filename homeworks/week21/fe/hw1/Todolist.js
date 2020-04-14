import React, { Component } from 'react'
import Todo from './Todo'
class Todolist extends Component {
	constructor(props){
    super(props)
    this.state = {
    	todos:[],
    	todoText:'',
    	filter:'all'
    }
	this.id = 1
	this.handleName=this.handleName.bind(this)
	this.handleAddTodo=this.handleAddTodo.bind(this)
	this.handleDelete=this.handleDelete.bind(this)
	this.handleMark=this.handleMark.bind(this)
		}
componentDidMount(){
	const tododata = window.localStorage.getItem('todoapp') 
	if(tododata){
		const olddata = JSON.parse(tododata)
		this.setState({
			todos:olddata
		})
		this.id = olddata[olddata.length -1 ].id +1 
	}
}
componentDidUpdate(prevProps,prevState){
	if(prevState.todos !== this.state.todos){
		window.localStorage.setItem('todoapp',JSON.stringify(this.state.todos))
	}

}

handleName(e){
	this.setState({
		todoText:e.target.value
	})
}

handleAddTodo(){
	const {todos,todoText} = this.state
	this.setState({
		todos:[...todos,{
			id:this.id,
			text:todoText,
			isComplete:false
		}],
		todoText:''
	})
	this.id++
}

// Enter 觸發
handleSubmit = (e)=>{
	if(e.key ==='Enter'){
	const {todos,todoText} = this.state
	this.setState({
		todos:[...todos,{
			id:this.id,
			text:todoText
		}],
	todoText:''
	})
this.id++	
	}
}

handleDelete(id){
	this.setState({
		todos:this.state.todos.filter(todo => todo.id !== id )
	})
}

handleMark(id){
	this.setState({
		todos:this.state.todos.map(todo=>{
			if(todo.id !== id){
				return todo
			}
			return{
				...todo,
				isComplete:!todo.isComplete
}
		})
	})

}
	render (){
	const {todos,todoText,filter}=this.state	
	return(	
	 <div className='wrapper'>
	  <div>
  <input type = "text" className = "formControl" placeholder = "todo" value={todoText} onChange={this.handleName}onKeyPress={this.handleSubmit}/>
  <button onClick={this.handleAddTodo}>送出</button>	  
      </div>
<h2>TODO</h2>
<div className='flex'>
<div className='tododone' onClick={()=>this.setState({
filter:'all'
})}>全部</div>	
<div className='todoundone' onClick={()=>this.setState({
filter:'Complete'
})}>已完成</div>
</div>
    {todos.filter(todo =>filter === 'Complete' ? todo.isComplete:true  )
    	.map( todo => <Todo key={todo.id} todo={todo} handleDelete={this.handleDelete} handleMark={this.handleMark}/>)
}
</div> 
	)
 }
}

export default Todolist;
