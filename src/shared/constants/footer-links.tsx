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
    icon: <IOSIcon />,
  },
  {
    title: "Android",
    href: "#",
    icon: <AndroidIcon />,
  },
  {
    title: "Android TV",
    href: "#",
    icon: <AndroidTVIcon />,
  },
  {
    title: "Windows",
    href: "#",
    icon: <WindowsIcon />,
  },
  {
    title: "Mac OS",
    href: "#",
    icon: <MacOSIcon />,
  },
  {
    title: "Linux",
    href: "#",
    icon: <LinuxIcon />,
  },
];

const PAYMENT = [
  {
    title: "СБП",
    href: "#",
    icon: <SbpIcon />,
  },
  {
    title: "Sberpay",
    href: "#",
    icon: <SberpayIcon />,
  },
  {
    title: "Tinkoff Pay",
    href: "#",
    icon: <TpayIcon />,
  },
  {
    title: "Банковская карта",
    href: "#",
    icon: <CardIcon />,
  },
  {
    title: "Криптовалюта",
    href: "#",
    icon: <CriptoIcon />,
  },
];

export const FOOTER_LINKS = {
  navigation: NAVIGATION,
  download: DOWNLOAD,
  payment: PAYMENT,
  offer: "#",
  accommodation: "#",
};
