import Square from "./Square";

const Board = () => {
  return (
    <section className="col-span-8 min-h-screen flex justify-center items-center">
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </section>
  );
};

export default Board;
