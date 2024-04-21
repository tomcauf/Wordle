"use client";

import { Loader } from "@/components/ui/loader";

export default function LoadingPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="flex flex-1 items-center justify-center">
        <Loader />
      </div>
    </div>
  );
}
