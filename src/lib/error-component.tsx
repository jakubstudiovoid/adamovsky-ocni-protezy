import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg">
      <TriangleAlert className="size-8 text-iris" strokeWidth={1.5} aria-hidden="true" />
      <h1 className="text-2xl text-display">Něco se nepovedlo</h1>
      <p className="max-w-md text-sm break-words text-muted">
        {error.message || "Neočekávaná chyba. Zkuste stránku znovu načíst."}
      </p>
    </main>
  );
}
