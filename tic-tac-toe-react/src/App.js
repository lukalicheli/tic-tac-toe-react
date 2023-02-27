import { useDebugValue, useState } from "react";
import "./App.css";

function App() {
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(""));


  const handleClick = (index) => {
    if (board[index] === "" && !winner) {
      let newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(player === "X" ? "O" : "X");
      checkWinner(newBoard)
      console.log("clicked");
    }
  };

  const checkWinner = (board) => {
    const possibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    for(let i=0; i<possibleWins.length; i++) {
      const [a,b,c] = possibleWins[i];
      if(board[a] && board[a] === board[b] && board[a]===board[c]) {
        setWinner(board[a])
      }
    }

  };

  const handleReset = () => {
    setPlayer("X") 
    setBoard(Array(9).fill(""));
    setWinner(null)
  }

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      {winner ? (
        <h2>{winner} wins!</h2>
      ) : (
        <h2>It is {player}'s turn</h2>
      )}
      <div className="board">
        {board.map((value, index) => {
          return (
            <div
              key={index}
              className={`square ${value}`}
              onClick={() => handleClick(index)}
            >
              {value}
            </div>
          );
        })}
      </div>

      <button onClick={handleReset}>Reset Game</button>
    </div>
  );
}

export default App;
