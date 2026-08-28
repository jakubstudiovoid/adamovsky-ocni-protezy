import { cn } from "@/lib/utils";

export function IrisMark({
  className,
  title = "Oční protézy Petr Adamovský",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7", className)}
      aria-hidden={title ? undefined : true}
      role="img"
    >
      {title ? <title>{title}</title> : null}
      <circle
        cx="16"
        cy="16"
        r="14.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
      />
      <circle cx="16" cy="16" r="12.15" fill="currentColor" className="text-iris" />
      <circle cx="16" cy="16" r="5.35" fill="#000000" />
      <circle cx="18.2" cy="14.1" r="1.35" fill="#F4F3EF" />
    </svg>
  );
}
