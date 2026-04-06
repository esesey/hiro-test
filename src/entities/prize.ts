export type PrizeType = "free_days" | "free_hours" | "discount" | "lose";

interface BasePrize {
  type: PrizeType;
  icon: React.ReactNode;
  message: [string, string];
}

export interface FreeDaysPrize extends BasePrize {
  type: "free_days";
  count: number;
}

export interface FreeHoursPrize extends BasePrize {
  type: "free_hours";
  count: number;
}

export interface DiscountPrize extends BasePrize {
  type: "discount";
  percentage: number;
}

export interface LosePrize extends BasePrize {
  type: "lose";
}

export type Prize = FreeDaysPrize | FreeHoursPrize | DiscountPrize | LosePrize;
