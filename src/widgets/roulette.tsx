import type { Prize } from "../entities/prize";
import { Button } from "../shared/ui/button";
import RouletteIcon from "../assets/logos/roullete.svg?react";
import GiftIcon from "../assets/icons/gift.svg?react";
import { RouletteProgress } from "./roulette-progress";
import { RouletteCard } from "./roulette-card";
import { useState } from "react";
import { PrizePopup } from "./prize-popup";
import { subDays } from "date-fns";
import { isAttemptAvailable } from "../shared/utils/time-utils";
import { Timer } from "./timer";

interface RouletteProps {
  prizes: Prize[];
  day: number;
  hasAttempt?: boolean;
  lastAttempt?: Date;
  onWin?: (prize: Prize) => void;
}

export const Roulette = ({
  prizes,
  day,
  hasAttempt = true,
  lastAttempt,
  onWin,
}: RouletteProps) => {
  const [activePrize, setActivePrize] = useState<Prize>(prizes[0]);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [lastTime, setLastTime] = useState<Date>(
    lastAttempt || subDays(new Date(), 1),
  );

  const openPopup = () => {
    setIsOpenPopup(true);
  };

  const closePopup = () => {
    setIsOpenPopup(false);
  };

  const handleWin = () => {
    onWin?.(activePrize);
    openPopup();
    setLastTime(new Date());
  };

  const isAvailable = hasAttempt && isAttemptAvailable(lastTime);

  return (
    <div className="overflow-hidden md:max-w-87 lg:max-w-113 max-w-full xl:max-w-xl p-6 rounded-lg border-gray-stroke border flex flex-col gap-4">
      <div className="flex w-full items-center justify-between lg:gap-4">
        <div className="flex flex-col">
          <div className="uppercase font-semibold text-[2rem] leading-8 tracking-[0.01em]">
            Колесо фортуны
          </div>
          <div className="text-gray text-[1.25rem] leading-5 tracking-[0.01em]">
            Испытайте удачу раз в&nbsp;день
            <br />
            и&nbsp;выигрывайте бонусы для VPN!
          </div>
        </div>
        <RouletteIcon className="w-18 h-18" />
      </div>

      {isAvailable ? (
        <ul className="flex gap-1">
          {prizes.map((prize, index) => (
            <RouletteCard key={index} prize={prize} />
          ))}
        </ul>
      ) : (
        <Timer lastAttempt={lastTime} />
      )}

      <Button endAdorement={<GiftIcon />}>Испытать удачу</Button>
      <div className="flex flex-col gap-2.5">
        <div className="text-[1.25rem] leading-5 tracking-[0.01em]">
          Крути колесо 7&nbsp;дней подряд без пропусков и&nbsp;получи
          на&nbsp;7-й день гарантированный 1&nbsp;день подписки!
        </div>
        <RouletteProgress currentDay={day} />
      </div>

      <PrizePopup
        prize={activePrize}
        isOpen={isOpenPopup}
        onClose={closePopup}
      />
    </div>
  );
};
