/* eslint-disable no-unused-vars */
import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squareValue, setSquareValue] = useState([Array(9).fill(null)]);

  const handleSquareClick = (i) => {
    const newSquare = squareValue.slice();
    newSquare[i] = "X";
    setSquareValue(newSquare);
  };

  return (
    <section className="col-span-8 min-h-screen flex flex-col justify-center items-center">
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
    </section>
  );
};

export default Board;
