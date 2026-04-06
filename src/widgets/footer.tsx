import Logo from "../assets/logos/logo.svg?react";
import TelegramIcon from "../assets/icons/telegram.svg?react";
import { FOOTER_LINKS } from "../shared/constants/footer-links";
import { Button } from "../shared/ui/button";

export const Footer = () => {
  return (
    <footer className="flex flex-col fix-container pt-10! pb-6! border-t-2 border-x-2 border-[#2E3139] rounded-t-lg">
      <nav className="grid grid-cols-4 grid-rows-7 gap-x-12 px-6 pb-6">
        <div className="grid grid-rows-subgrid row-span-full">
          <Logo className="text-gray max-h-6 -ml-7.25" />
          {FOOTER_LINKS.navigation.map(({ title, href }, index) => (
            <a
              className="block row-span-1 text-[1.25rem] leading-5 py-3"
              href={href}
              key={`navigation-${index}`}
            >
              {title}
            </a>
          ))}
        </div>
        <div className="grid grid-rows-subgrid row-span-full">
          <h3 className="text-gray font-semibold uppercase text-[1.5rem] leading-6 tracking-[0.01em]">
            Скачать
          </h3>
          {FOOTER_LINKS.download.map(({ title, href, icon }, index) => (
            <a
              className="flex gap-4 row-span-1 text-[1.25rem] leading-5 py-3"
              href={href}
              key={`download-${index}`}
            >
              {icon}
              {title}
            </a>
          ))}
        </div>
        <div className="grid grid-rows-subgrid row-span-full">
          <h3 className="text-gray font-semibold uppercase text-[1.5rem] leading-6 tracking-[0.01em]">
            Способы оплаты
          </h3>
          {FOOTER_LINKS.payment.map(({ title, href, icon }, index) => (
            <a
              className="flex gap-4 row-span-1 text-[1.25rem] leading-5 py-3"
              href={href}
              key={`payment-${index}`}
            >
              {icon}
              {title}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-4 row-span-full">
          <h3 className="text-gray font-semibold uppercase text-[1.5rem] leading-6 tracking-[0.01em]">
            Поддержка 24/7
          </h3>
          <Button
            className="w-fit"
            variant="secondary"
            size="lg"
            endAdorement={<TelegramIcon className="text-accent" />}
          >
            Telegram
          </Button>
          <div className="flex flex-col">
            <a
              className="block py-2.5 text-[1.25rem] leading-5 tracking-[0.01em]"
              href={FOOTER_LINKS.offer}
            >
              Публичная оферта
            </a>
            <a
              className="block py-2.5 text-[1.25rem] leading-5 tracking-[0.01em]"
              href={FOOTER_LINKS.accommodation}
            >
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </nav>
      <div className="text-[1.25rem] leading-5 tracking-[0.01em] text-center text-gray pt-4 border-t border-[#2E3139]">
        &copy;&nbsp;2025 Wolle Development Limited. Все права защищены.
      </div>
    </footer>
  );
};
