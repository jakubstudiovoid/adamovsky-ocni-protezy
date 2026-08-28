import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-lg border border-line bg-surface px-4 py-3 text-base text-fg placeholder:text-muted/80 transition-[border-color,box-shadow] duration-150 ease-out",
        "focus-visible:border-iris focus-visible:ring-2 focus-visible:ring-iris/40",
        "disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
