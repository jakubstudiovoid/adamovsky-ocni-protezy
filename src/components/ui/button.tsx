import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-tight transition-[color,background-color,border-color,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        solid:
          "bg-fg text-bg ring-offset-bg hover:bg-fg/90",
        iris: "bg-iris text-fg ring-offset-bg hover:bg-iris-deep",
        outline:
          "border border-line bg-transparent text-fg hover:border-fg/40 hover:bg-fg/5",
        ghost: "text-fg hover:bg-fg/6",
        ink: "bg-ink text-paper ring-offset-paper hover:bg-ink/88",
        "ink-outline":
          "border border-line-ink bg-transparent text-ink hover:bg-ink/5",
      },
      size: {
        sm: "h-10 rounded-md px-3.5 text-sm",
        md: "h-12 rounded-lg px-5 text-sm",
        lg: "h-14 rounded-lg px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
