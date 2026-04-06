import {
  SPECIAL_QUEST_MOCKUP,
  QUESTS_MOCKUP,
} from "../shared/constants/quests-mockup";
import { IconButton } from "../shared/ui/icon-button";
import { generatePrizeList } from "../shared/utils/generate-prize-list";
import { QuestCard } from "./quest-card";
import { QuestsGrid } from "./quests-grid";
import { Roulette } from "./roulette";
import CrossIcon from "../assets/icons/close.svg?react";

export const QuestsSection = () => {
  return (
    <section>
      <div className="flex w-full justify-between items-center mb-8">
        <div className="font-kelly-slab text-[2.75rem] leading-11">Квесты</div>
        <IconButton>
          <CrossIcon />
        </IconButton>
      </div>
      <div className="flex gap-6 items-center mb-8">
        <Roulette day={6} prizes={generatePrizeList()} />
        <QuestCard special quest={SPECIAL_QUEST_MOCKUP} />
      </div>
      <QuestsGrid quests={QUESTS_MOCKUP} />
    </section>
  );
};
