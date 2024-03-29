/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import calculateWinner from "../utils/calculateWinner";
import Square from "./Square";

const Board = ({ isXNext, squareValue, handlePlay }) => {
  const winner = calculateWinner(squareValue);
  let status;

  if (winner) {
    status = `Winner is : ${winner}`;
  } else {
    status = `Next Player : ${isXNext ? "X" : "O"}`;
  }

  const handleSquareClick = (i) => {
    if (squareValue[i] || calculateWinner(squareValue)) {
      return;
    }
    const newSquare = squareValue.slice();

    if (isXNext) {
      newSquare[i] = "X";
    } else {
      newSquare[i] = "O";
    }

    handlePlay(newSquare);
  };

  return (
    <section className="col-span-8 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold mb-2">{status}</h2>
      <div>
        <div className="flex">
          <Square
            value={squareValue[0]}
            handleSquareClick={() => handleSquareClick(0)}
          />
          <Square
            value={squareValue[1]}
            handleSquareClick={() => handleSquareClick(1)}
          />
          <Square
            value={squareValue[2]}
            handleSquareClick={() => handleSquareClick(2)}
          />
        </div>
        <div className="flex">
          <Square
            value={squareValue[3]}
            handleSquareClick={() => handleSquareClick(3)}
          />
          <Square
            value={squareValue[4]}
            handleSquareClick={() => handleSquareClick(4)}
          />
          <Square
            value={squareValue[5]}
            handleSquareClick={() => handleSquareClick(5)}
          />
        </div>
        <div className="flex">
          <Square
            value={squareValue[6]}
            handleSquareClick={() => handleSquareClick(6)}
          />
          <Square
            value={squareValue[7]}
            handleSquareClick={() => handleSquareClick(7)}
          />
          <Square
            value={squareValue[8]}
            handleSquareClick={() => handleSquareClick(8)}
          />
        </div>
      </div>
    </section>
  );
};

export default Board;
