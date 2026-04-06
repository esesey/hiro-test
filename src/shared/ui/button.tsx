import { cva } from "class-variance-authority";
import { cn } from "../utils/classnames";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "lg";
  endAdorement?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { className, children, variant, size, endAdorement, ...rest } = props;

  const buttonVariantClassName = cva(
    "cursor-pointer outline-none focus:outline-none flex items-center justify-center rounded-[2.5rem] text-center gap-4",
    {
      variants: {
        variant: {
          primary: "bg-accent text-contrast",
          secondary: "bg-contrast text-fill",
          outline: "bg-transparent border border-contrast text-contrast",
          ghost: "bg-transparent text-contrast",
        },
        size: {
          sm: "px-4 py-2 text-[1.5rem] leading-none uppercase font-alumni-sans font-[600] tracking-[0.01em]",
          lg: "px-4 py-3.5 text-[1.25rem] leading-none font-kelly-slab tracking-none",
        },
      },
      defaultVariants: {
        variant: "primary",
        size: "sm",
      },
    },
  );

  return (
    <button
      className={cn(buttonVariantClassName({ variant, size }), className)}
      {...rest}
    >
      {children}
      {endAdorement}
    </button>
  );
};
