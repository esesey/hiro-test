import type {
  DiscountPrize,
  FreeDaysPrize,
  FreeHoursPrize,
  LosePrize,
  Prize,
  PrizeType,
} from "../../entities/prize";
import LoseIcon from "../../assets/prizes/lose.svg?react";
import PrizeIcon from "../../assets/prizes/prize.svg?react";
import SuperPrizeIcon from "../../assets/prizes/super-prize.svg?react";

export function generatePrize(prizeType: "lose"): LosePrize;
export function generatePrize(
  prizeType: "discount",
  percentage: number,
): DiscountPrize;
export function generatePrize(
  prizeType: "free_days",
  count: number,
): FreeDaysPrize;
export function generatePrize(
  prizeType: "free_hours",
  count: number,
): FreeHoursPrize;

export function generatePrize(prizeType: PrizeType, value?: number): Prize {
  if (prizeType === "lose")
    return {
      type: prizeType,
      icon: <LoseIcon />,
      message: ["попробуйте", "завтра"],
    };
  if (prizeType === "discount")
    return {
      type: prizeType,
      percentage: value!,
      icon: <PrizeIcon />,
      message: ["скидка", `${value}%`],
    };
  if (prizeType === "free_days")
    return {
      type: prizeType,
      count: value!,
      icon: <SuperPrizeIcon />,
      message: ["бесплатные", `${value} дней`],
    };
  if (prizeType === "free_hours")
    return {
      type: prizeType,
      count: value!,
      icon: <SuperPrizeIcon />,
      message: ["бесплатные", `${value} часов`],
    };
  throw new Error("Invalid prize type");
}
