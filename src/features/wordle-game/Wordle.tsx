"use client";
import { useEffect, useState } from "react";
import Board from "./components/Board";
import type { WordleRow, WordleStatus } from "./wordle.schema";
import Keyboard from "./components/Keyboard";
import { toast } from "sonner";
import { WORDS } from "./wordle.settings";
import GuideDialog from "./dialog/GuideDialog";
import { useGuideDialog } from "./dialog/useGuideDialog";
import GameResultDialog from "./dialog/GameResultDialog";
import { useGameResultDialog } from "./dialog/useGameResultDialog";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Typography } from "@/components/ui/typography";
import { Info } from "lucide-react";

const Wordle = () => {
  const { open } = useGuideDialog();
  const { open: openResult } = useGameResultDialog();
  const [rows, setRows] = useState<WordleRow[]>([]);
  const [currentRowIndex, setCurrentRowIndex] = useState(0);
  const [text, setText] = useState<string>("");
  const [solution, setSolution] = useState<string>("");
  const [gameStatus, setGameStatus] = useState<WordleStatus>("playing");

  const handleResetRows = () => {
    const tempRows: WordleRow[] = [];
    for (let i = 0; i < 6; i++) {
      tempRows.push([
        { value: "", status: i === 0 ? "guess" : "inactive" },
        { value: "", status: i === 0 ? "guess" : "inactive" },
        { value: "", status: i === 0 ? "guess" : "inactive" },
        { value: "", status: i === 0 ? "guess" : "inactive" },
        { value: "", status: i === 0 ? "guess" : "inactive" },
      ]);
    }
    setCurrentRowIndex(0);
    setText("");
    setRows(tempRows);
    loadSolution();
    setGameStatus("playing");
  };

  const handleKeyPress = (letter: string) => {
    if (text.length > 4) return;
    setText(text + letter);
  };

  const handleSubmit = () => {
    if (text.length !== 5) {
      toast.warning("Veuillez saisir un mot de 5 lettres");
      return;
    }

    const currentRow = rows[currentRowIndex];
    const solutionCounts = solution
      .split("")
      .reduce<{ [key: string]: number }>((acc, letter) => {
        acc[letter] = (acc[letter] || 0) + 1;
        return acc;
      }, {});

    for (let i = 0; i < currentRow.length; i++) {
      if (solution[i] === text[i].toLocaleLowerCase()) {
        currentRow[i].status = "correct";
        solutionCounts[text[i].toLocaleLowerCase()]--;
      }
    }

    for (let i = 0; i < currentRow.length; i++) {
      if (currentRow[i].status !== "correct") {
        const letter = text[i].toLocaleLowerCase();
        if (solutionCounts[letter] > 0) {
          currentRow[i].status = "present";
          solutionCounts[letter]--;
        } else {
          currentRow[i].status = "absent";
        }
      }
    }

    setRows([...rows]);

    setTimeout(() => {
      if (solution === text.toLocaleLowerCase()) {
        setGameStatus("won");
        openResult();
        return;
      } else if (
        currentRowIndex === 5 &&
        solution !== text.toLocaleLowerCase()
      ) {
        setGameStatus("lost");
        openResult();
        return;
      } else {
        setText("");
        setCurrentRowIndex((prev) => prev + 1);
        const nextRow = rows[currentRowIndex + 1];
        for (let i = 0; i < nextRow.length; i++) {
          nextRow[i].status = "guess";
        }
      }
    }, rows[0].length * 400);
  };

  const handleDelete = () => {
    setText((prev) => prev.slice(0, -1));
  };

  const loadSolution = () => {
    const word = WORDS[Math.floor(Math.random() * WORDS.length)];
    setSolution(word);
  };

  useEffect(() => {
    handleResetRows();
    open();
  }, []);

  useEffect(() => {
    if (rows.length === 0) return;

    const currentRow = rows[currentRowIndex];
    for (let i = 0; i < currentRow.length; i++) {
      if (i < text.length) {
        currentRow[i].value = text[i];
      } else {
        currentRow[i].value = "";
      }
    }
    setRows([...rows]);
  }, [text]);

  return (
    <>
      <div className="flex w-full flex-col gap-5 sm:w-[80vh]">
        <header className="grid grid-cols-3 items-center justify-between gap-5">
          <div>
            <Button variant="ghost" size="sm" onClick={() => open()}>
              <Info size={24} />
            </Button>
          </div>
          <Typography variant="h2" className="text-center">
            Wordle
          </Typography>
          <div className="text-end">
            <ThemeToggle />
          </div>
        </header>
        <Board rows={rows} />
        <Keyboard
          rows={rows.slice(0, currentRowIndex)}
          gameStatus={gameStatus}
          onKeyPress={handleKeyPress}
          onSubmit={handleSubmit}
          onDelete={handleDelete}
        />
        {gameStatus !== "playing" && (
          <Button onClick={handleResetRows} variant={"secondary"}>
            Rejouer
          </Button>
        )}
      </div>
      <GuideDialog />
      <GameResultDialog gameStatus={gameStatus} reset={handleResetRows} />
    </>
  );
};

export default Wordle;
