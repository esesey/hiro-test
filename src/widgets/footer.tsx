import Logo from "../assets/logos/logo.svg?react";
import TelegramIcon from "../assets/icons/telegram.svg?react";
import { FOOTER_LINKS } from "../shared/constants/footer-links";
import { Button } from "../shared/ui/button";

export const Footer = () => {
  return (
    <footer className="flex flex-col fix-container pt-10! pb-6! border-t-2 border-x-2 border-gray-stroke rounded-t-lg">
      <nav className="flex flex-col px-4 lg:px-6 pb-6 md:grid md:grid-cols-4 md:grid-rows-7 gap-6 md:gap-x-6 md:gap-y-0 lg:gap-x-12">
        <div className=" md:grid md:grid-rows-subgrid md:row-span-full">
          <Logo className="text-gray max-h-6 mb-4 md:mb-0 -ml-7.25" />
          {FOOTER_LINKS.navigation.map(({ title, href }, index) => (
            <a
              className="block max-h-12 font-kelly-slab md:row-span-1 text-[1.25rem] leading-5 py-3.5 md:py-2 lg:py-3 hover:text-accent transition-colors ease-in-out duration-300"
              href={href}
              key={`navigation-${index}`}
            >
              {title}
            </a>
          ))}
        </div>
        <div className="md:grid md:grid-rows-subgrid md:row-span-full">
          <h3 className="text-gray max-h-6 font-semibold uppercase text-[1.5rem] mb-4 md:mb-0 leading-6 tracking-[0.01em]">
            Скачать
          </h3>
          {FOOTER_LINKS.download.map(({ title, href, icon }, index) => (
            <a
              className="flex max-h-12 font-kelly-slab gap-4 md:row-span-1 text-[1.25rem] leading-5 py-3.5 md:py-2 lg:py-3 hover:text-accent transition-colors ease-in-out duration-300"
              href={href}
              key={`download-${index}`}
            >
              {icon}
              {title}
            </a>
          ))}
        </div>
        <div className="md:grid md:grid-rows-subgrid md:row-span-full">
          <h3 className="text-gray max-h-6 font-semibold uppercase text-[1.5rem] mb-4 md:mb-0 leading-6 tracking-[0.01em]">
            Способы оплаты
          </h3>
          {FOOTER_LINKS.payment.map(({ title, href, icon }, index) => (
            <a
              className="flex max-h-12 font-kelly-slab gap-4 md:row-span-1 text-[1.25rem] leading-5 py-3.5 md:py-2 lg:py-3 hover:text-accent transition-colors ease-in-out duration-300"
              href={href}
              key={`payment-${index}`}
            >
              {icon}
              {title}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-4 md:row-span-full">
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
              className="block py-2.5 text-[1.25rem] leading-5 tracking-[0.01em]  hover:text-accent transition-colors ease-in-out duration-300"
              href={FOOTER_LINKS.offer}
            >
              Публичная оферта
            </a>
            <a
              className="block lg:py-2.5 text-[1.25rem] leading-5 tracking-[0.01em]  hover:text-accent transition-colors ease-in-out duration-300"
              href={FOOTER_LINKS.accommodation}
            >
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </nav>
      <div className="text-[1.25rem] leading-5 tracking-[0.01em] text-center text-gray pt-4 border-t border-gray-stroke">
        &copy;&nbsp;2025 Wolle Development Limited. Все права защищены.
      </div>
    </footer>
  );
};
