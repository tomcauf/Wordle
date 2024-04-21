import type { WordleRow } from "../wordle.schema";
import Row from "./Row";

const Board = ({ rows }: { rows: WordleRow[] }) => {
  return (
    <div>
      <div className="flex flex-col gap-1">
        {rows.map((row, index) => (
          <Row key={index} row={row} />
        ))}
      </div>
    </div>
  );
};

export default Board;
