import { cn } from "../utils/classnames";

interface NavLinkProps extends React.ComponentProps<"a"> {
  selected?: boolean;
}

export const NavLink = (props: NavLinkProps) => {
  const { children, className, selected, ...rest } = props;
  const selectionClassName = "border border-contrast";
  return (
    <a
      className={cn(
        "block w-full text-[1.25rem] leading-5 text-center py-3.5 font-kelly-slab rounded-[2.5rem] hover:text-accent active:scale-[99%] transition-all easy-in-out duration-100",
        selected ? selectionClassName : "",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
};
