import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useGuideDialog } from "./useGuideDialog";
import Row from "../components/Row";
const GuideDialog = () => {
  const { isOpen, close } = useGuideDialog();
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
            <DialogTitle className="text-center">Comment jouer</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Le but du jeu est de deviner un mot de 5 lettres en 6 essais. Pour
            chaque essai, vous devez entrer un mot de 5 lettres. Après chaque
            essai, vous verrez des indices pour chaque lettre.
          </DialogDescription>
          <section className="mt-4">
            <Row
              row={[
                {
                  value: "A",
                  status: "correct",
                },
                {
                  value: "V",
                  status: "absent",
                },
                {
                  value: "I",
                  status: "absent",
                },
                {
                  value: "O",
                  status: "absent",
                },
                {
                  value: "N",
                  status: "absent",
                },
              ]}
            />
            <p className="mt-2 text-center">
              La lettre <strong>A</strong> est correcte.
            </p>
          </section>
          <section className="mt-4">
            <Row
              row={[
                {
                  value: "S",
                  status: "absent",
                },
                {
                  value: "A",
                  status: "present",
                },
                {
                  value: "B",
                  status: "absent",
                },
                {
                  value: "L",
                  status: "absent",
                },
                {
                  value: "E",
                  status: "absent",
                },
              ]}
            />
            <p className="mt-2 text-center">
              La lettre <strong>E</strong> est présente mais pas à la bonne
              place.
            </p>
          </section>
          <section className="mt-4">
            <Row
              row={[
                {
                  value: "C",
                  status: "absent",
                },
                {
                  value: "O",
                  status: "absent",
                },
                {
                  value: "U",
                  status: "absent",
                },
                {
                  value: "R",
                  status: "absent",
                },
                {
                  value: "S",
                  status: "absent",
                },
              ]}
            />
            <p className="mt-2 text-center">
              Aucune lettre n'est correcte ou présente.
            </p>
          </section>
          <p className="mt-6 text-center text-xl font-bold">
            Amusez-vous bien!
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GuideDialog;
