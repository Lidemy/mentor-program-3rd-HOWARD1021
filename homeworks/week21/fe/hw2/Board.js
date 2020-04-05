import React from 'react';

function Square(props){
return(
	<div className='square' 
	onClick={()=> props.onClick(props.index)}>
	{
		props.value&&
		<div className={props.value ==='B' ? 'black':'white'}></div>
	}
	</div>
    )		

}

function Board(props) {
    const {squares,onClick} = props;
    return(
        <div className="game__board">
        {squares.map((item,index)=>
        <Square
        key={index}
        value={item}
        index={index}
        onClick={(i)=>onClick(i)}
        />
        	)}
        </div>
    )       
}

export default Board;
