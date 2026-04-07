import { useEffect, useState } from "react";
import {
  getTimeUntilNextAttempt,
  type TimeRemaining,
} from "../shared/utils/time-utils";

interface TimerProps {
  lastAttempt: Date;
}

export const Timer = ({ lastAttempt }: TimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() =>
    getTimeUntilNextAttempt(lastAttempt),
  );

  useEffect(() => {
    const updateTime = () => {
      const remaining = getTimeUntilNextAttempt(lastAttempt);
      setTimeRemaining(remaining);
    };

    updateTime();
    if (timeRemaining.isAvailable) return;
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lastAttempt]);

  const hours = timeRemaining.hours;
  const minutes = timeRemaining.minutes;
  const seconds = timeRemaining.seconds;
  return (
    <div className="flex">
      <div className="flex flex-col gap-1 items-center">
        <div className="flex gap-1">
          <div className="border border-contrast rounded-sm p-2 w-10 h-15 flex items-center justify-center text-[2.75rem] leading-11 font-kelly-slab">
            {Math.floor(hours / 10)}
          </div>
          <div className="border border-contrast rounded-sm p-2 w-10 h-15 flex items-center justify-center text-[2.75rem] leading-11 font-kelly-slab">
            {hours % 10}
          </div>
        </div>
        <div className="text-[1.25rem] leading-5 tracking-[0.01em]">Часы</div>
      </div>
      <div className="w-2.5 text-[2.75rem] leading-11 font-kelly-slab my-2">
        :
      </div>
      <div className="flex flex-col gap-1 items-center">
        <div className="flex gap-1">
          <div className="border border-contrast rounded-sm p-2 w-10 h-15 flex items-center justify-center text-[2.75rem] leading-11 font-kelly-slab">
            {Math.floor(minutes / 10)}
          </div>
          <div className="border border-contrast rounded-sm p-2 w-10 h-15 flex items-center justify-center text-[2.75rem] leading-11 font-kelly-slab">
            {minutes % 10}
          </div>
        </div>
        <div className="text-[1.25rem] leading-5 tracking-[0.01em]">Минуты</div>
      </div>
      <div className="w-2.5 text-[2.75rem] leading-11 font-kelly-slab my-2">
        :
      </div>
      <div className="flex flex-col gap-1 items-center">
        <div className="flex gap-1">
          <div className="border border-contrast rounded-sm p-2 w-10 h-15 flex items-center justify-center text-[2.75rem] leading-11 font-kelly-slab">
            {Math.floor(seconds / 10)}
          </div>
          <div className="border border-contrast rounded-sm p-2 w-10 h-15 flex items-center justify-center text-[2.75rem] leading-11 font-kelly-slab">
            {seconds % 10}
          </div>
        </div>
        <div className="text-[1.25rem] leading-5 tracking-[0.01em]">
          Секунды
        </div>
      </div>
    </div>
  );
};
