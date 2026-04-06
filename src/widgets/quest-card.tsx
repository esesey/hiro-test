import type { Quest } from "../entities/quest";
import { Button } from "../shared/ui/button";
import { cn } from "../shared/utils/classnames";

interface QuestCardProps {
  quest: Quest;
  special?: boolean;
}

export const QuestCard = ({ quest, special = false }: QuestCardProps) => {
  const { title, description, icon, action, availability } = quest;
  if (availability === "hidden") return null;
  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-4 pb-6 px-6 ",
        special
          ? "bg-contrast text-fill"
          : "border border-gray-stroke rounded-lg w-full h-full",
      )}
    >
      <div className="flex flex-col gap-1">
        {availability === "available" && (
          <div className="bg-accent text-contrast py-0.5 px-2 w-fit text-[1.25rem] leading-5 tracking-[0.01em]">
            Доступен
          </div>
        )}
        <div className="flex flex-col gap-2">
          <div className="uppercase text-[2rem] leading-8 tracking-[0.01em] font-semibold">
            {title}
          </div>
          <div
            className={cn(
              "text-[1.25rem] leading-5 tracking-[0.01em]",
              special ? "text-fill" : "text-gray",
            )}
          >
            {description}
          </div>
        </div>
      </div>
      <Button
        variant={special ? "primary" : "secondary"}
        size="sm"
        endAdorement={icon}
      >
        {action}
      </Button>
    </div>
  );
};
