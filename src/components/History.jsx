/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const History = ({ history, jumpToHistory }) => {
  const moves = history?.map((squareData, moveIndex) => {
    let content;
    if (moveIndex > 0) {
      content = `Go to the move # ${moveIndex}`;
    } else {
      content = `Go to start the game`;
    }

    return (
      <li key={moveIndex} onClick={() => jumpToHistory(moveIndex)}>
        <button>{content}</button>
      </li>
    );
  });

  return (
    <div className="col-span-4 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold">History</h2>
      <ol className="text-xl mb-2">{moves}</ol>
    </div>
  );
};

export default History;
