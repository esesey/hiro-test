import type { Prize } from "../entities/prize";
import { Button } from "../shared/ui/button";
import RouletteIcon from "../assets/logos/roullete.svg?react";
import GiftIcon from "../assets/icons/gift.svg?react";
import { RouletteProgress } from "./roulette-progress";
import { RouletteCard } from "./roulette-card";
import { PrizePopup } from "./prize-popup";
import { Timer } from "./timer";
import FrameIcon from "../assets/frame.svg?react";
import { useRoulette } from "../shared/hooks/useRoulette";

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
  const {
    activePrize,
    containerRef,
    isOpenPopup,
    isAvailable,
    isSpinning,
    prizeTaken,
    offset,
    closePopup,
    handleSpinClick,
    takePrize,
    lastTime,
    prizeList,
  } = useRoulette(prizes, hasAttempt, lastAttempt, onWin);

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
        <div className="w-full relative">
          <div
            ref={containerRef}
            className="flex gap-1"
            style={{
              willChange: "transform",
              transform: `translateX(${offset}px)`,
            }}
          >
            {prizeList.map((prize, index) => (
              <div key={index} className="roulette-card shrink-0">
                <RouletteCard prize={prize} />
              </div>
            ))}
          </div>
          <FrameIcon className="absolute z-1 bottom-0 left-1/2 -translate-x-1/2" />
        </div>
      ) : (
        <Timer lastAttempt={lastTime} />
      )}

      {!prizeTaken || isAvailable ? (
        <Button
          variant={isAvailable ? "primary" : "secondary"}
          onClick={isAvailable ? handleSpinClick : takePrize}
          endAdorement={<GiftIcon />}
          disabled={isSpinning}
        >
          {isAvailable ? "Испытать удачу" : "забрать награду"}
        </Button>
      ) : null}
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
