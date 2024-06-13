import "./App.css"
import Board from "./components/Board";
import { useState } from 'react'


const App = () => {

  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setxIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let index = 0; index < lines.length; ++index) {
      const [a, b, c] = lines[index];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);

  let status;

  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = `Next player ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    const newSquares = current.squares.slice();

    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = xIsNext ? 'X' : 'O';
    setHistory([...history, { squares: newSquares }]);
    setxIsNext(prev => !prev);
  }

  const moves = history.map((step, move) => {
    const describe = move ?
      `Go to move #${move}` :
      `Go to game start`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{describe}</button>
      </li>
    );
  })

  const jumpTo = (step) => {
    setStepNumber(step);
    setxIsNext(step % 2 === 0);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
