import { Button } from "../shared/ui/button";
import Logo from "../assets/logos/logo.svg?react";
import ArrowDown from "../assets/icons/arrow-down.svg?react";
import { NavLink } from "../shared/ui/nav-link";

// NOTE: Хардовая реализация проверки текущей страницы
const CURRENT_PAGE = "/account";
const isCurrent = (path: string) => path === CURRENT_PAGE;

export const Header = () => {
  return (
    <header className="fix-container px-2">
      <div className="grid grid-cols-26 gap-4 py-4">
        <nav className="flex gap-4 col-span-11">
          <a href="#">
            <Logo />
          </a>
          <NavLink href="#" selected={isCurrent("/faq")}>
            FAQ
          </NavLink>
          <NavLink href="#" selected={isCurrent("/tariffs")}>
            Тарифы
          </NavLink>
        </nav>
        <Button className="col-span-4" size="lg">
          Скачать
        </Button>
        <nav className="col-span-11 flex gap-4">
          <NavLink href="#" selected={isCurrent("/blog")}>
            Блог
          </NavLink>
          <NavLink href="#" selected={isCurrent("/account")}>
            Аккаунт
          </NavLink>
          <Button size="lg" variant="ghost" endAdorement={<ArrowDown />}>
            Ру
          </Button>
        </nav>
      </div>
    </header>
  );
};
