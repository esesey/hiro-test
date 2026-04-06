import PrizeIcon from "../assets/prizes/super-prize-popup.svg?react";

interface RouletteProgressProps {
  currentDay: number;
}

export const RouletteProgress = ({ currentDay }: RouletteProgressProps) => {
  const progressWidth = `${((currentDay % 7) / 7) * 100}%`;
  return (
    <div className="isolate relative w-full h-15 grid grid-cols-7 py-2 px-4 rounded-lg border-gray-stroke border">
      {Array.from({ length: 7 }).map((_day, index) => (
        <div key={index} className="w-full  col-span-1  h-full  relative">
          <span className="absolute left-1/2 -translate-x-1/2 text-[2.75rem] leading-11 z-3 font-semibold tracking-[0.01em]">
            {index + 1}
          </span>
          {index === 6 && (
            <PrizeIcon className="absolute z-2 w-11 h-11 left-1/2 -translate-x-1/2" />
          )}
        </div>
      ))}
      <div
        className="bg-accent h-4 absolute z-1 left-0 top-1/2 -translate-y-1/2"
        style={{
          width: progressWidth,
          transition: "width 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </div>
  );
};
