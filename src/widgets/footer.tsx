import Logo from "../assets/logos/logo.svg?react";
import TelegramIcon from "../assets/icons/telegram.svg?react";
import { FOOTER_LINKS } from "../shared/constants/footer-links";
import { Button } from "../shared/ui/button";

export const Footer = () => {
  return (
    <footer className="flex flex-col fix-container">
      <nav className="grid grid-cols-4 grid-rows-7 gap-x-12">
        <div className="grid grid-rows-subgrid row-span-full">
          <Logo />
          {FOOTER_LINKS.navigation.map(({ title, href }, index) => (
            <a
              className="block row-span-1"
              href={href}
              key={`navigation-${index}`}
            >
              {title}
            </a>
          ))}
        </div>
        <div className="grid grid-rows-subgrid row-span-full">
          <div>Скачать</div>
          {FOOTER_LINKS.download.map(({ title, href, icon }, index) => (
            <a
              className="flex gap-4 row-span-1"
              href={href}
              key={`download-${index}`}
            >
              {icon}
              {title}
            </a>
          ))}
        </div>
        <div className="grid grid-rows-subgrid row-span-full">
          <div>Способы оплаты</div>
          {FOOTER_LINKS.payment.map(({ title, href, icon }, index) => (
            <a
              className="flex gap-4 row-span-1"
              href={href}
              key={`payment-${index}`}
            >
              {icon}
              {title}
            </a>
          ))}
        </div>
        <div className="flex flex-col row-span-full">
          <div>Поддержка 24/7</div>
          <Button variant="secondary" size="lg" endAdorement={<TelegramIcon />}>
            Telegram
          </Button>
          <a href={FOOTER_LINKS.offer}>Публичная оферта</a>
          <a href={FOOTER_LINKS.accommodation}>Пользовательское соглашение</a>
        </div>
      </nav>
      <div>&copy;&nbsp;2025 Wolle Development Limited. Все права защищены.</div>
    </footer>
  );
};
