import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Providers } from "./providers";
import { SiteConfig } from "@/site-config";
import { NextTopLoader } from "@/features/page/NextTopLoader";
import type { LayoutParams } from "@/types/next";
import { cn } from "@/lib/utils";
import { getServerUrl } from "@/lib/server-url";
import "@/styles/code-theme.scss";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  metadataBase: new URL(getServerUrl()),
};

export default function RootLayout({
  children,
  modal,
}: LayoutParams<{}> & { modal?: ReactNode }) {
  return (
    <>
      <html lang="fr" className="h-full" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "h-full bg-background font-sans antialiased",
            GeistMono.variable,
            GeistSans.variable,
          )}
        >
          <Providers>
            <NextTopLoader
              delay={100}
              showSpinner={false}
              color="hsl(var(--primary))"
            />
            {children}
            {modal}
          </Providers>
        </body>
      </html>
    </>
  );
}
