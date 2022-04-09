import React, { useState , useEffect } from 'react';
import '../App.css';


const Game = props => {

  const [turn, setturn] = useState('X'); 
  const [array, setarray] = useState(new Array(9).fill(''))
  const [winner,setwinner] = useState('')
  let squares ;
  const Winner = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ]

  const checkWinner = () => {
      for (let index = 0; index < Winner.length; index++) {
        const [a,b,c] = Winner[index];
        if(array[a] === '' || array[b] === '' || array[c] === ''){
          continue
        }
        if(array[a] == array[b] && array[b] == array[c]){
          setwinner(array[a])
          break
        }
      } 
  } 



  const renderSquare = (i) => {
    if(array[i] !== ''){
      alert('Vous ne pouvez pas changer ')
      return ;
    }

    squares = [...array]
    if(turn == 'O') {
        squares[i] = turn
        setturn('X')
    }else{
        squares[i] = turn
        setturn('O')
    }
    setarray(squares)  
  }

  const PlayAgain = () => {
    setarray(new Array(9).fill(''))
    squares = [...array]
    setwinner('')
  }

  useEffect(()=>{
    checkWinner();
  },[array])
    

    return (
        <div>
        <main>
          <div className="mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
             <div className="text-center border-4 border-dashed rounded-lg">
               <p>Turn: {turn}</p> 
              <div className="board" id="board">
              <div className="cell" data-cell onClick={() => renderSquare(0)} ><p className='text-6xl'>{array[0]}</p> </div>   
              <div className="cell" data-cell onClick={() => renderSquare(1)} ><p className='text-6xl'>{array[1]}</p> </div>
              <div className="cell" data-cell onClick={() => renderSquare(2)} ><p className='text-6xl'>{array[2]}</p> </div>
              <div className="cell" data-cell onClick={() => renderSquare(3)} ><p className='text-6xl'>{array[3]}</p></div>
              <div className="cell" data-cell onClick={() => renderSquare(4)} ><p className='text-6xl'>{array[4]}</p></div>
              <div className="cell" data-cell onClick={() => renderSquare(5)} ><p className='text-6xl'>{array[5]}</p></div>
              <div className="cell" data-cell onClick={() => renderSquare(6)} ><p className='text-6xl'>{array[6]}</p> </div>
              <div className="cell" data-cell onClick={() => renderSquare(7)} ><p className='text-6xl'>{array[7]}</p></div>
              <div className="cell" data-cell onClick={() => renderSquare(8)} ><p className='text-6xl'>{array[8]}</p></div>
              </div>
              {winner !== '' ? <>
              <span className='text-3xl mr-10'>Winner is {winner}</span> 
              <button onClick={PlayAgain} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Rejouer</button>
              </> 
              : '' }
               
              </div>
            </div>
          </div>
        </main>
        </div>
    )
}
export default Game;