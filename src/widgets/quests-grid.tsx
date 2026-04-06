import type { Quest } from "../entities/quest";
import { cn } from "../shared/utils/classnames";
import { QuestCard } from "./quest-card";

interface QuestsGridProps {
  quests: Quest[];
}

export const QuestsGrid = ({ quests }: QuestsGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-6 mb-10">
      {quests.map((quest) => (
        <div
          key={quest.id}
          className={cn(
            "col-span-1",
            quest.availability === "hidden" ? "hidden" : "",
          )}
        >
          <QuestCard quest={quest} />
        </div>
      ))}
    </div>
  );
};
