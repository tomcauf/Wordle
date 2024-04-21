import type { WordleRow } from "../wordle.schema";
import Cell from "./Cell";

const Row = ({ row }: { row: WordleRow }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-0.5">
      {row.map((cell, index) => (
        <Cell
          key={index}
          variant={cell.status}
          transitionDelay={index * 400}
          value={cell.value}
        />
      ))}
    </div>
  );
};

export default Row;
