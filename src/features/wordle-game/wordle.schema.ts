import { z } from "zod";

export const WordleStatusSchema = z.enum(["won", "lost", "playing"]);

export const WordleCellVariantSchema = z.enum([
  "guess",
  "correct",
  "present",
  "absent",
  "inactive",
]);

export const WordleCellSchema = z.object({
  value: z.string(),
  status: WordleCellVariantSchema,
});

export const WordleRowSchema = z.array(WordleCellSchema);

export type WordleStatus = z.infer<typeof WordleStatusSchema>;
export type WordleCellVariant = z.infer<typeof WordleCellVariantSchema>;
export type WordleCell = z.infer<typeof WordleCellSchema>;
export type WordleRow = z.infer<typeof WordleRowSchema>;
