import React,{Component} from 'react';
import './App.css';
import Board from './Board.js';

class App extends Component {
constructor(props){
  super(props)
  this.state={
    step:0,
    squares:Array(19*19).fill(null),
    history:[{
      squares:Array(19*19).fill(null)
    }],
    nextIsBlack:true 
  }
}
// 觸發按鈕
handleClick(i){
const {step,squares,nextIsBlack,history} = this.state

if(squares[i]|| winnerIs(squares)){
  return
}

  const newSquares = squares.slice();
  newSquares[i]= nextIsBlack ? "B":"W";
  
  this.setState({   
    step:step+1,
    history:history.concat({
        squares:newSquares      
    }),
    squares:newSquares,
    nextIsBlack:!nextIsBlack
  })
}


handleReset= () => {
  this.setState({
    step:0,
    history:[{
    squares:Array(19*19).fill(null)
    }],
    squares:Array(19*19).fill(null),
    nextIsBlack:true,  
  })
}
// 印出 state.squares
componentDidUpdate()
{
console.log(this.state.squares)

}

render(){

// 產出棋盤圖 產生在<div className="game__board__bg">
  const block = Array(18*18).fill(null)
  const {squares,nextIsBlack} = this.state
  const winner = winnerIs(squares)
  const status = '下一位: '+ (nextIsBlack ? "黑棋":"白棋")
  return (
    <div> 
    <div className='main_board'>
    <h2>五子棋</h2> 
    </div>
    <div className="game__field">
        <div className="game__board__bg">
            {block.map((item,index)=>
              <div className='block'key={index}>{item}</div>
            )}
        </div>
            <Board 
            squares = {squares}
            onClick={(i)=>this.handleClick(i)}
            />
        </div>
        <div className = 'game__info'>
            <div className='status'>
            {!winner && status}
            <div>{winner && '勝利的是' +(winner==='B' ? "黑棋":"白棋")}</div>
            <div>{!winner &&<button  className='btn'
            onClick={this.handleReset}>Restart</button> }</div>
            
            </div>
        </div>    
    </div>
  )
}

}


// 判斷勝負
function winnerIs(squares) {
    // 先定義 5*5 棋盤獲勝的 12 種連線
  const lines = [    
    [0, 1, 2 , 3, 4],
    [19, 20, 21, 22, 23],
    [38, 39, 40, 41, 42],
    [57, 58, 59, 60, 61],
    [76, 77, 78, 79, 80],
    [0, 19, 38, 57, 76],
    [1, 20, 39, 58, 77],
    [2, 21, 40, 59, 78],
    [3, 22, 41, 60, 79],
    [4, 23, 42, 61, 80],
    [0, 20, 40, 60, 80],
    [4, 22, 40, 58, 76],
    ];

for(let i=0; i<=14; i++){ // 5*5 棋盤連線橫向掃描
  for(let j=0; j<=14; j++){ // 5*5 棋盤連線y軸直向掃描
    const newlines = lines.map((line)=>{
      const newline = line.map((num)=>num+j+(i*19))
      return newline;
    })
  for(let k=0;k<newlines.length;k++){
      const [a,b,c,d,e] = newlines[k]
      if(squares[a]
        && squares[a] === squares[b]
        && squares[a] === squares[c]
        && squares[a] === squares[d]
        && squares[a] === squares[e]){
        return squares[a]
      }
  }  
  }
}
return null;  
}

/*
我們要來寫勝利條件
以三子棋來看 為 8
五子棋 則為 12

先來判斷 三子棋
lines=[
[1,2,3]

]
for(let i =0; i<length;i++){
const [a b c ] = lines[i]
if(squares[a]===squares[a]&& 
squares[b]===squares[b]&&
squares[c]===squares[c])  
{
  return squares[a]
}
return null
}





五子棋 寫法

const lines [

[0,1,2,3,4]
[5,6,7,8,9]
[10,11,12,13,14]
[15,16,17,18,19]
[20,21,22,23,24]

[0 5 10 15 20 ]
[1 6 11 16 21 ]
[2 7 12 17 22 ]

]

function winnerIs(squares) {
    // 先定義 5*5 棋盤的 12 種連線
  const lines = [
    [0, 1, 2 , 3, 4],
    [19, 20, 21, 22, 23],
    [38, 39, 40, 41, 42],
    [57, 58, 59, 60, 61],
    [76, 77, 78, 79, 80],
    [0, 19, 38, 57, 76],
    [1, 20, 39, 58, 77],
    [2, 21, 40, 59, 78],
    [3, 22, 41, 60, 79],
    [4, 23, 42, 61, 80],
    [0, 20, 40, 60, 80],
    [4, 22, 40, 58, 76],
    ];
     
            const newlines = lines.map((line) => {
                const newline = line.map((num) => num + (i*19) +j)
                return newline;
            });








*/






export default App;
