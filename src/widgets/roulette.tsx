import type { Prize } from "../entities/prize";
import { Button } from "../shared/ui/button";
import RouletteIcon from "../assets/logos/roullete.svg?react";
import GiftIcon from "../assets/icons/gift.svg?react";
import { RouletteProgress } from "./roulette-progress";
import { RouletteCard } from "./roulette-card";

interface RouletteProps {
  prizes: Prize[];
  day: number;
  // Будут использованы позже
  hasAttempt?: boolean;
  lastAttempt?: Date;
  onWin?: (prize: Prize) => void;
}

export const Roulette = ({
  prizes,
  day,
  hasAttempt,
  lastAttempt,
  onWin,
}: RouletteProps) => {
  return (
    <div className="overflow-hidden p-6 rounded-lg border-gray-stroke border flex flex-col gap-4">
      <div className="flex w-full items-center justify-between gap-4">
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
        <RouletteIcon />
      </div>

      <ul className="flex gap-1">
        {prizes.map((prize, index) => (
          <RouletteCard key={index} prize={prize} />
        ))}
      </ul>

      <Button endAdorement={<GiftIcon />}>Испытать удачу</Button>
      <div className="flex flex-col gap-2.5">
        <div>
          Крути колесо 7&nbsp;дней подряд без пропусков и&nbsp;получи
          на&nbsp;7-й день гарантированный 1&nbsp;день подписки!
        </div>
        <RouletteProgress currentDay={day} />
      </div>
    </div>
  );
};
