/* eslint-disable react/prop-types */

const Square = ({ value, handleSquareClick }) => {
  return (
    <button
      className="col-span-4 h-28 w-28 border-2 border-gray-400 rounded-sm text-3xl flex justify-center items-center"
      onClick={handleSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
