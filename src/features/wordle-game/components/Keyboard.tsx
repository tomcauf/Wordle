"use client";
import type { WordleRow, WordleStatus } from "../wordle.schema";
import Cell from "./Cell";
import { useEffect, useMemo } from "react";
import { Delete } from "lucide-react";
import { KeyboardEnter } from "@/components/ui/icons";
type KeyboardProps = {
  rows: WordleRow[];
  gameStatus: WordleStatus;
  onKeyPress: (key: string) => void;
  onSubmit: () => void;
  onDelete: () => void;
};

const Keyboard = ({
  rows,
  gameStatus,
  onKeyPress,
  onSubmit,
  onDelete,
}: KeyboardProps) => {
  const keyboard = [
    ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"],
    ["W", "X", "C", "V", "B", "N"],
  ];
  const cells = useMemo(() => rows.flat(), [rows]);

  const status = (key: string) => {
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].value === key && cells[i].status === "absent")
        return "absent";
      if (cells[i].value === key && cells[i].status === "present")
        return "present";
      if (cells[i].value === key && cells[i].status === "correct")
        return "correct";
    }
    return "guess";
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (gameStatus !== "playing") return;

      if (e.code === "Enter") {
        onSubmit();
      } else if (e.code === "Backspace") {
        onDelete();
      }
      const key = e.key.toUpperCase();
      if (key.length === 1 && key >= "A" && key <= "Z") onKeyPress(key);
    };
    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  });
  return (
    <div>
      {keyboard.map((row, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-center gap-1"
        >
          {row.map((key) => (
            <div key={key} onClick={() => onKeyPress(key)}>
              <Cell
                value={key}
                variant={status(key)}
                className="mb-1 h-16 w-8 cursor-pointer sm:size-14"
              />
            </div>
          ))}
          {index === keyboard.length - 1 && (
            <>
              <div onClick={onSubmit}>
                <div className="mb-1 flex h-16 w-8 cursor-pointer items-center justify-center rounded-sm border bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90 sm:size-14">
                  <KeyboardEnter />
                </div>
              </div>
              <div onClick={onDelete}>
                <div className="mb-1 flex h-16 w-8 cursor-pointer items-center justify-center rounded-sm border bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90 sm:size-14">
                  <Delete />
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
