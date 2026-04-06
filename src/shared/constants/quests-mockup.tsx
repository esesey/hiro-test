import type { Quest } from "../../entities/quest";

export const QUESTS_MOCKUP: Quest[] = [
  {
    title: "оставь отзыв",
    description:
      "Поделитесь своим мнением о HiroVPN и получите 3 дня VPN бесплатно!",
    action: "Оставить отзыв",
    availability: "available",
    icon: null,
  },
  {
    title: "Поделиться с Друзьями",
    description: "Пригласите друга в HiroVPN и получите 1 день VPN бесплатно!",
    action: "поделиться",
    availability: "available",
    icon: null,
  },
  {
    title: "Поддержите нас лайками",
    description:
      "Поставьте лайки 5 комментариям, с которыми вы согласны, и мы подарим вам 2 дня VPN бесплатно!",
    action: "поддержать",
    availability: "available",
    icon: null,
  },
  {
    title: "Наверстай упущенное!",
    description: "Получи всё пропущенное в прошлом сезоне, с хорошей скидкой!",
    action: "Приобрести",
    availability: "hidden",
    icon: null,
  },
  {
    title: "Оцени нас в Google Картах",
    description: "Поделись впечатлением и получи 1 день VPN в подарок!",
    action: "оценить",
    availability: "available",
    icon: null,
  },
  {
    title: "Оцени нас в ЯНДЕКС Картах",
    description: "Поделись впечатлением и получи 1 день VPN в подарок!",
    action: "оценить",
    availability: "available",
    icon: null,
  },
  {
    title: "Подписаться на TG-канал ",
    description:
      "Подпишитесь на канал HIroVPN - получайте новости и апдейты самыми первыми, а так же 1 день VPN бесплатно!",
    action: "подписаться",
    availability: "available",
    icon: null,
  },
];

export const SPECIAL_QUEST_MOCKUP: Quest = {
  title: "Расскажи о Hiro",
  description:
    "Просто напиши пост/статью о нас в крупном канале или на своей странице в соцсетях со ссылкой на нас.\nПришли ссылку на пост/статью — и мы начислим тебе от 15 до 90 дней VPN бесплатно!\nЧем больше охват, тем длиннее подарок!",
  action: "Отправить ссылки",
  availability: "available",
  icon: null,
};
