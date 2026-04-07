import { IconButton } from "../shared/ui/icon-button";
import BurgerIcon from "../assets/icons/menu.svg?react";
import Logo from "../assets/logos/logo.svg?react";
import { useCallback, useState } from "react";
import { Modal } from "../shared/ui/modal";
import { NavLink } from "../shared/ui/nav-link";
import { Button } from "../shared/ui/button";

// NOTE: Хардовая реализация проверки текущей страницы
const CURRENT_PAGE = "/account";
const isCurrent = (path: string) => path === CURRENT_PAGE;

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);
  return (
    <div className="lg:hidden">
      <IconButton onClick={handleOpen}>
        <BurgerIcon />
      </IconButton>
      <Modal appearance="left" isOpen={isOpen} onClose={handleClose}>
        <nav className="flex flex-col gap-6">
          <a onClick={handleClose} href="#">
            <Logo />
          </a>
          <NavLink onClick={handleClose} href="#" selected={isCurrent("/faq")}>
            FAQ
          </NavLink>
          <NavLink
            onClick={handleClose}
            href="#"
            selected={isCurrent("/tariffs")}
          >
            Тарифы
          </NavLink>
          <NavLink onClick={handleClose} href="#" selected={isCurrent("/blog")}>
            Блог
          </NavLink>
          <NavLink
            onClick={handleClose}
            href="#"
            selected={isCurrent("/account")}
          >
            Аккаунт
          </NavLink>
          <Button className="block" size="lg">
            Скачать
          </Button>
        </nav>
      </Modal>
    </div>
  );
};
