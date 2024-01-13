/* eslint-disable no-unused-vars */
import { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isXNext, setIsXNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquare = history[currentMove];

  function handlePlay(newSquare) {
    setIsXNext(!isXNext);

    const currentHistory = [...history.slice(0, currentMove + 1), newSquare];

    setHistory(currentHistory);
    setCurrentMove(currentHistory.length - 1);
  }

  function jumpToHistory(moveIndex) {
    setCurrentMove(moveIndex);
    setIsXNext(moveIndex % 2 === 0);
  }

  return (
    <main className="min-h-screen bg-cyan-800 text-gray-300">
      <h2 className="text-5xl text-center text-semibold py-4">
        Tic-Tac-Toe Game
      </h2>
      <div className="grid grid-cols-12 ">
        <Board
          squareValue={currentSquare}
          isXNext={isXNext}
          handlePlay={handlePlay}
        />
        <History history={history} jumpToHistory={jumpToHistory} />
      </div>
    </main>
  );
};

export default Game;
