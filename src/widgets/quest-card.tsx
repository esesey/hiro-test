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
          : "border border-gray-stroke rounded-lg",
      )}
    >
      <div className="flex flex-col gap-1">
        {availability === "available" && <div>Доступен</div>}
        <div className="flex flex-col gap-2">
          <div>{title}</div>
          <div>{description}</div>
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
