import { IconButton } from "../shared/ui/icon-button";
import BurgerIcon from "../assets/icons/menu.svg?react";

export const MobileMenu = () => {
  return (
    <div className="lg:hidden">
      <IconButton>
        <BurgerIcon />
      </IconButton>
    </div>
  );
};
