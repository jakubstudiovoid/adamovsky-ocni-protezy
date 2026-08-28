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
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="0.9"
      >
        <line x1="16" y1="10.05" x2="16" y2="4.15" />
        <line x1="18.98" y1="10.85" x2="21.93" y2="5.74" />
        <line x1="21.15" y1="13.03" x2="26.26" y2="10.07" />
        <line x1="21.95" y1="16" x2="27.85" y2="16" />
        <line x1="21.15" y1="18.97" x2="26.26" y2="21.93" />
        <line x1="18.98" y1="21.15" x2="21.93" y2="26.26" />
        <line x1="16" y1="21.95" x2="16" y2="27.85" />
        <line x1="13.02" y1="21.15" x2="10.07" y2="26.26" />
        <line x1="10.85" y1="18.98" x2="5.74" y2="21.93" />
        <line x1="10.05" y1="16" x2="4.15" y2="16" />
        <line x1="10.85" y1="13.02" x2="5.74" y2="10.07" />
        <line x1="13.02" y1="10.85" x2="10.07" y2="5.74" />
      </g>
      <circle cx="16" cy="16" r="4.45" fill="currentColor" className="text-iris" />
      <circle cx="18.2" cy="14.15" r="1.3" fill="currentColor" className="text-fg" />
      <circle cx="17.25" cy="15.45" r="0.42" fill="currentColor" className="text-fg" opacity="0.55" />
    </svg>
  );
}
