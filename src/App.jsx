import Board from "./components/Board";
import History from "./components/History";

const Game = () => {
  return (
    <main className="min-h-screen bg-cyan-800 text-gray-300">
      <h2 className="text-5xl text-center text-semibold py-4">
        Tic-Tac-Toe Game
      </h2>
      <div className="grid grid-cols-12 ">
        <Board />
        <History />
      </div>
    </main>
  );
};

export default Game;
