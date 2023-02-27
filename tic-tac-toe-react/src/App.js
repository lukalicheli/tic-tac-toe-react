import { useState } from 'react';
import './App.css';

function App() {

  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState('');
  const [board, setBoard] = useState(Array(9).fill(''));

  




  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>









    </div>
  );
}

export default App;
