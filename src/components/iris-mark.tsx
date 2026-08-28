import { cn } from "@/lib/utils";

export function IrisMark({
  className,
  title = "Adamovský",
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
      <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="16" cy="16" r="9.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <circle cx="16" cy="16" r="4.2" fill="currentColor" className="text-iris" />
      <circle cx="18.1" cy="14.2" r="1.15" fill="currentColor" className="text-fg" />
    </svg>
  );
}
