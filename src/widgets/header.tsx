import { Button } from "../shared/ui/button";
import Logo from "../assets/logos/logo.svg?react";
import ArrowDown from "../assets/icons/arrow-down.svg?react";

export const Header = () => {
  return (
    <header className="fix-container">
      <div className="grid grid-cols-26 gap-4 py-4">
        <nav className="flex gap-4 col-span-11">
          <a href="#">
            <Logo />
          </a>
          <a
            href="#"
            className="block w-full text-center py-3.5 font-kelly-slab"
          >
            FAQ
          </a>
          <a
            href="#"
            className="block w-full text-center py-3.5 font-kelly-slab"
          >
            Тарифы
          </a>
        </nav>
        <Button className="col-span-4" size="lg">
          Скачать
        </Button>
        <nav className="col-span-11 flex gap-4">
          <a
            href="#"
            className="block w-full text-center py-3.5 font-kelly-slab"
          >
            Блог
          </a>
          <Button className="w-full" size="lg" variant="outline">
            Аккаунт
          </Button>
          <Button size="lg" variant="ghost" endAdorement={<ArrowDown />}>
            Ру
          </Button>
        </nav>
      </div>
    </header>
  );
};
