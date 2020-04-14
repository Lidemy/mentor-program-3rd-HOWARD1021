import React, { Component } from 'react'
import './Nav.css'


class Content extends Component{
    render(){
    const {isActive,name,children} =this.props    
    return(
        <a href={'#'+name}>
        <li className={isActive && 'active' }
        >
        {children}
        </li>
        </a>
        )
    }
}


class Nav extends Component {
  render(){
    const {activeTab}=this.props
    return (
    <nav className="nav">
    <ul className='nav__list'>
    <Content  isActive = {activeTab === 'home'} name={'home'} >
    Home
    </Content>
    <Content  isActive = {activeTab === 'about'} name={'about'} >
    關於
    </Content>
    <Content  isActive = {activeTab === 'post'} name={'post'}> 
    post
    </Content>
    
    </ul>
    </nav>
    );
  }
}
export default Nav;


