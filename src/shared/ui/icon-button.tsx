import { cn } from "../utils/classnames";

export const IconButton = (props: React.ComponentProps<"button">) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={cn(
        "cursor-pointer outline-none focus:outline-none flex items-center justify-center rounded-full bg-transparent w-fit h-fit hover:shadow-hover transition-all easy-in-out",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
