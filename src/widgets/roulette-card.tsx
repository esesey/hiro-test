import type { Prize } from "../entities/prize";

interface RouletteCardProps {
  prize: Prize;
}

export const RouletteCard = ({ prize }: RouletteCardProps) => {
  const { message, icon } = prize;
  return (
    <div className="flex flex-col items-center py-4 border border-gray rounded-lg">
      <span className="text-gray text-[1.5rem] leading-6 tracking-[0.01em] font-semibold">
        {message[0]}
      </span>
      {icon}
      <h4 className="text-gray text-[2rem] leading-8 font-kelly-slab">
        {message[1]}
      </h4>
    </div>
  );
};
