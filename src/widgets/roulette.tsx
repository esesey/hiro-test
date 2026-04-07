import type { Prize } from "../entities/prize";
import { Button } from "../shared/ui/button";
import RouletteIcon from "../assets/logos/roullete.svg?react";
import GiftIcon from "../assets/icons/gift.svg?react";
import { RouletteProgress } from "./roulette-progress";
import { RouletteCard } from "./roulette-card";
import { useEffect, useRef, useState } from "react";
import { PrizePopup } from "./prize-popup";
import { subDays } from "date-fns";
import { isAttemptAvailable } from "../shared/utils/time-utils";
import { Timer } from "./timer";
import { useInfiniteRoulette } from "../shared/hooks/useInfiniteRoulette";

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
    lastAttempt || subDays(new Date(), 2),
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const isAvailable = hasAttempt && isAttemptAvailable(lastTime);

  const openPopup = () => {
    setIsOpenPopup(true);
  };

  const closePopup = () => {
    setIsOpenPopup(false);
  };

  const handleWin = (prize: Prize) => {
    setActivePrize(prize);
    onWin?.(prize);
    openPopup();
    setLastTime(new Date());
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const firstCard = containerRef.current.querySelector(".roulette-card");
    if (firstCard) {
      const width = firstCard.getBoundingClientRect().width;
      const gap = 4;
      setItemWidth(width + gap);
    }
  }, [prizes]);

  const handleStop = (centerPrizeIndex: number) => {
    const prize = prizes[centerPrizeIndex];
    setIsSpinning(false);
    handleWin(prize);
  };

  const { offset, startAutoSpin, spinAndStop } = useInfiniteRoulette({
    itemWidth,
    totalItems: prizes.length,
    onStop: handleStop,
  });

  useEffect(() => {
    if (isAvailable && itemWidth > 0) {
      startAutoSpin();
    }
  }, [isAvailable, itemWidth, startAutoSpin]);

  const handleSpinClick = () => {
    if (!isAvailable || isSpinning) return;
    setIsSpinning(true);
    spinAndStop();
  };

  const tripledPrizes = [...prizes, ...prizes, ...prizes];

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
        <div
          ref={containerRef}
          className="flex gap-1 will-change-transform"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {tripledPrizes.map((prize, index) => (
            <div key={index} className="roulette-card shrink-0">
              <RouletteCard prize={prize} />
            </div>
          ))}
        </div>
      ) : (
        <Timer lastAttempt={lastTime} />
      )}

      <Button
        onClick={handleSpinClick}
        endAdorement={<GiftIcon />}
        disabled={isSpinning}
      >
        Испытать удачу
      </Button>
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
