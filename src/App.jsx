import Board from "./components/Board";
import History from "./components/History";

const Game = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <h2 className="text-4xl text-center text-semibold">Tic-Tac-Toe Game</h2>
      <div className="grid grid-cols-12 ">
        <Board />
        <History />
      </div>
    </main>
  );
};

export default Game;
