import IOSIcon from "../../assets/icons/app-store.svg?react";
import AndroidIcon from "../../assets/icons/google-play.svg?react";
import AndroidTVIcon from "../../assets/icons/androidtv.svg?react";
import WindowsIcon from "../../assets/icons/windows.svg?react";
import MacOSIcon from "../../assets/icons/macos.svg?react";
import LinuxIcon from "../../assets/icons/linux.svg?react";
import SbpIcon from "../../assets/icons/sbp.svg?react";
import SberpayIcon from "../../assets/icons/sberpay.svg?react";
import TpayIcon from "../../assets/icons/tpay.svg?react";
import CardIcon from "../../assets/icons/credit-card-outline.svg?react";
import CriptoIcon from "../../assets/icons/tether.svg?react";

const NAVIGATION = [
  {
    title: "FAQ",
    href: "#",
  },
  {
    title: "Тарифы",
    href: "#",
  },
  {
    title: "Блог",
    href: "#",
  },
  {
    title: "Роутеры",
    href: "#",
  },
  {
    title: "Партнёрам",
    href: "#",
  },
  {
    title: "Аккаунт",
    href: "#",
  },
];

const DOWNLOAD = [
  {
    title: "IOS",
    href: "#",
    icon: <IOSIcon className="min-w-6 min-h-6" />,
  },
  {
    title: "Android",
    href: "#",
    icon: <AndroidIcon className="min-w-6 min-h-6" />,
  },
  {
    title: "Android TV",
    href: "#",
    icon: <AndroidTVIcon className="min-w-6 min-h-6" />,
  },
  {
    title: "Windows",
    href: "#",
    icon: <WindowsIcon className="min-w-6 min-h-6" />,
  },
  {
    title: "Mac OS",
    href: "#",
    icon: <MacOSIcon className="min-w-6 min-h-6" />,
  },
  {
    title: "Linux",
    href: "#",
    icon: <LinuxIcon className="min-w-6 min-h-6" />,
  },
];

const PAYMENT = [
  {
    title: "СБП",
    href: "#",
    icon: <SbpIcon className="min-w-6 min-h-6" />,
  },
  {
    title: "Sberpay",
    href: "#",
    icon: <SberpayIcon className="min-w-6 min-h-6" />,
  },
  {
    title: "Tinkoff Pay",
    href: "#",
    icon: <TpayIcon className="min-w-6 min-h-6" />,
  },
  {
    title: "Банковская карта",
    href: "#",
    icon: <CardIcon className="min-w-6 min-h-6" />,
  },
  {
    title: "Криптовалюта",
    href: "#",
    icon: <CriptoIcon className="min-w-6 min-h-6" />,
  },
];

export const FOOTER_LINKS = {
  navigation: NAVIGATION,
  download: DOWNLOAD,
  payment: PAYMENT,
  offer: "#",
  accommodation: "#",
};
