/* eslint-disable no-unused-vars */
import { useState } from "react";
import calculateWinner from "../utils/calculateWinner";
import Square from "./Square";

const Board = () => {
  const [squareValue, setSquareValue] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

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

    setSquareValue(newSquare);
    setIsXNext(!isXNext);
  };

  return (
    <section className="col-span-8 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold mb-2">{status}</h2>
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
