import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useGameResultDialog } from "./useGameResultDialog";
import type { WordleStatus } from "../wordle.schema";
import { Button } from "@/components/ui/button";
type GameResultDialogProps = {
  gameStatus: WordleStatus;
  reset: () => void;
};
const GameResultDialog = ({ reset, gameStatus }: GameResultDialogProps) => {
  const { isOpen, close } = useGameResultDialog();
  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={(isOpen) => {
          if (!isOpen) close();
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Résultat de la partie</DialogTitle>
            <DialogDescription>
              Voici les résultats de la partie.
            </DialogDescription>
            {gameStatus === "won" ? (
              <div className="flex items-center justify-center">
                <div className="text-6xl text-green-500">🎉</div>
                <div className="text-2xl">Félicitations! Vous avez gagné!</div>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <div className="text-6xl text-red-500">😢</div>
                <div className="text-2xl">Désolé! Vous avez perdu!</div>
              </div>
            )}
          </DialogHeader>
          <DialogFooter>
            <Button
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                reset();
                close();
              }}
            >
              Rejouer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GameResultDialog;
