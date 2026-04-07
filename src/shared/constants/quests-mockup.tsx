import type { Quest } from "../../entities/quest";
import ShareIcon from "../../assets/icons/share.svg?react";
import GooglePlayIcon from "../../assets/icons/google-play.svg?react";
import TelegramIcon from "../../assets/icons/telegram.svg?react";

export const QUESTS_MOCKUP: Quest[] = [
  {
    id: 1,
    title: "оставь отзыв",
    description:
      "Поделитесь своим мнением о HiroVPN и получите 3 дня VPN бесплатно!",
    action: "Оставить отзыв",
    availability: "available",
    icon: null,
  },
  {
    id: 2,
    title: "Поделиться с Друзьями",
    description: "Пригласите друга в HiroVPN и получите 1 день VPN бесплатно!",
    action: "поделиться",
    availability: "done",
    icon: <ShareIcon className="text-accent" />,
  },
  {
    id: 3,
    title: "Поддержите нас лайками",
    description:
      "Поставьте лайки 5 комментариям, с которыми вы согласны, и мы подарим вам 2 дня VPN бесплатно!",
    action: "поддержать",
    availability: "available",
    icon: <GooglePlayIcon className="text-accent" />,
  },
  {
    id: 4,
    title: "Наверстай упущенное!",
    description: "Получи всё пропущенное в прошлом сезоне, с хорошей скидкой!",
    action: "Приобрести",
    availability: "hidden",
    icon: null,
  },
  {
    id: 5,
    title: "Оцени нас в Google Картах",
    description: "Поделись впечатлением и получи 1 день VPN в подарок!",
    action: "оценить",
    availability: "available",
    icon: null,
  },
  {
    id: 6,
    title: "Оцени нас в ЯНДЕКС Картах",
    description: "Поделись впечатлением и получи 1 день VPN в подарок!",
    action: "оценить",
    availability: "available",
    icon: null,
  },
  {
    id: 7,
    title: "Подписаться на TG-канал ",
    description:
      "Подпишитесь на канал HIroVPN - получайте новости и апдейты самыми первыми, а так же 1 день VPN бесплатно!",
    action: "подписаться",
    availability: "available",
    icon: <TelegramIcon className="text-accent" />,
  },
];

export const SPECIAL_QUEST_MOCKUP: Quest = {
  id: 9,
  title: "Расскажи о Hiro",
  description:
    "Просто напиши пост/статью о нас в крупном канале или на своей странице в соцсетях со ссылкой на нас.\nПришли ссылку на пост/статью — и мы начислим тебе от 15 до 90 дней VPN бесплатно!\nЧем больше охват, тем длиннее подарок!",
  action: "Отправить ссылки",
  availability: "available",
  icon: null,
};
