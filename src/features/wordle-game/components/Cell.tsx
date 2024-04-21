import { Card } from "@/components/ui/card";
import type { WordleCellVariant } from "../wordle.schema";

type CellProps = {
  value: string;
  variant: WordleCellVariant;
  transitionDelay?: number;
  className?: string;
};

const Cell = ({ variant, transitionDelay, value, className }: CellProps) => {
  return (
    <Card
      className={`flex size-14 items-center justify-center rounded-sm text-2xl font-bold ${className} ${
        variant === "correct"
          ? "bg-green-400 text-primary-foreground"
          : variant === "absent"
            ? "bg-gray-400 text-primary-foreground"
            : variant === "present"
              ? "bg-yellow-400 text-primary-foreground"
              : variant === "inactive"
                ? "cursor-not-allowed bg-accent text-primary-foreground"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
      }`}
      style={{
        transition: `background-color 0.3s ease-in-out, color 0.3s ease-in-out`,
        transitionDelay: `${variant !== "guess" ? transitionDelay : "0"}ms`,
      }}
    >
      {value || "."}
    </Card>
  );
};

export default Cell;
