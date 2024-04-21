"use client";

import { Toaster } from "@/components/ui/sonner";
import { DialogRenderer } from "@/features/dialogs-provider/DialogProvider";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/react";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster />
      <DialogRenderer />
      {children}
      <Analytics />
    </ThemeProvider>
  );
};
