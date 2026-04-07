import type { Prize } from "../entities/prize";
import { Button } from "../shared/ui/button";
import { Modal, type BaseModalProps } from "../shared/ui/modal";

interface PrizePopupProps extends BaseModalProps {
  prize: Prize;
}

export const PrizePopup = ({ prize, ...modalProps }: PrizePopupProps) => {
  const isWin = prize.type !== "lose";
  const title = isWin ? "Поздравляем!\nВы выиграли" : "В другой раз\nповезёт!";
  const subscript =
    prize.type === "discount"
      ? "Активируйте в течение 24 часов"
      : "Они уже добавлены к вашей подписке";

  return (
    <Modal appearance="center" {...modalProps}>
      <div className="flex flex-col gap-6 items-center w-full">
        <h2 className="text-[2.75rem] leading-11 font-semibold tracking-[0.01em]">
          {title}
        </h2>
        <div className="flex items-center justify-center">
          <div className="text-[1.5rem] leading-6 font-semibold tracking-[0.01em]">
            {prize.message[0]}
          </div>
          {prize.icon}
          <div className="text-[2rem] leading-8 font-kelly-slab">
            {prize.message[1]}
          </div>
        </div>
        {isWin && (
          <div className="text-[1.5rem] leading-6 font-semibold tracking-[0.01em]">
            {subscript}
          </div>
        )}
        <Button onClick={modalProps.onClose}>Продолжить</Button>
      </div>
    </Modal>
  );
};
