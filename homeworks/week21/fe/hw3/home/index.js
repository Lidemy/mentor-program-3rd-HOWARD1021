import React, { Component } from 'react'


class Home extends Component {
  render(){
  const style ={
  	homepage:{
  		fontSize:'40px',
  		paddingTop:'10px'
  	}
  }
  return (
    <div className='Home'>
      <h1 style={style.homepage}>home</h1>  
    </div>
    );
  }
}
export default Home;
