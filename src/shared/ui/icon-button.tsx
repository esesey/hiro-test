import { cn } from "../utils/classnames";

export const IconButton = (props: React.ComponentProps<"button">) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={cn(
        "cursor-pointer outline-none focus:outline-none flex items-center justify-center rounded-full bg-transparent w-fit h-fit",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
