import { Button } from "../shared/ui/button";
import Logo from "../assets/logos/logo.svg?react";
import ArrowDown from "../assets/icons/arrow-down.svg?react";
import { NavLink } from "../shared/ui/nav-link";
import { MobileMenu } from "./mobile-menu";

// NOTE: Хардовая реализация проверки текущей страницы
const CURRENT_PAGE = "/account";
const isCurrent = (path: string) => path === CURRENT_PAGE;

export const Header = () => {
  return (
    <header className="fix-container">
      <div className="flex justify-between items-center lg:grid lg:grid-cols-26 gap-4 py-4">
        <MobileMenu />
        <nav className="flex gap-4 lg:col-span-11">
          <a href="#">
            <Logo />
          </a>
          <NavLink
            className="hidden lg:block"
            href="#"
            selected={isCurrent("/faq")}
          >
            FAQ
          </NavLink>
          <NavLink
            className="hidden lg:block"
            href="#"
            selected={isCurrent("/tariffs")}
          >
            Тарифы
          </NavLink>
        </nav>
        <Button className="col-span-4 hidden lg:block" size="lg">
          Скачать
        </Button>
        <nav className="lg:col-span-11 flex gap-4">
          <NavLink
            className="hidden lg:block"
            href="#"
            selected={isCurrent("/blog")}
          >
            Блог
          </NavLink>
          <NavLink
            className="hidden lg:block"
            href="#"
            selected={isCurrent("/account")}
          >
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
