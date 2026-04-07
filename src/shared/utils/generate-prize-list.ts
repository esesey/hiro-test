import type { Prize } from "../../entities/prize";
import { generatePrize } from "./generate-prize";

// NOTE: немного решил поиграться с псевдослучайной генерацией призов, необязательная часть для этого задания

interface PrizeWeights {
  lose: number;
  discount: number;
  freeDays: number;
  freeHours: number;
}

interface PrizeRanges {
  discount: {
    min: number;
    max: number;
    step: number;
  };
  freeDays: {
    min: number;
    max: number;
  };
  freeHours: {
    min: number;
    max: number;
  };
}

interface GeneratePrizeListConfig {
  weights?: Partial<PrizeWeights>;
  ranges?: Partial<PrizeRanges>;
}

const DEFAULT_WEIGHTS: PrizeWeights = {
  lose: 1,
  discount: 2,
  freeDays: 1,
  freeHours: 1,
};

const DEFAULT_RANGES: PrizeRanges = {
  discount: {
    min: 20,
    max: 70,
    step: 10,
  },
  freeDays: {
    min: 1,
    max: 3,
  },
  freeHours: {
    min: 2,
    max: 8,
  },
};

const randomInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateDiscount = (ranges: PrizeRanges["discount"]): number => {
  const { min, max, step } = ranges;
  const steps = (max - min) / step;
  const randomStep = Math.floor(Math.random() * (steps + 1));
  return min + randomStep * step;
};

const selectPrizeType = (weights: PrizeWeights): Prize["type"] => {
  const totalWeight =
    weights.lose + weights.discount + weights.freeDays + weights.freeHours;
  const random = Math.random() * totalWeight;

  let accumulated = 0;

  if (random < (accumulated += weights.lose)) return "lose";
  if (random < (accumulated += weights.discount)) return "discount";
  if (random < (accumulated += weights.freeDays)) return "free_days";
  return "free_hours";
};

export const generatePrizeList = (
  prizesCount: number = 30,
  config?: GeneratePrizeListConfig,
): Prize[] => {
  const weights: PrizeWeights = {
    ...DEFAULT_WEIGHTS,
    ...config?.weights,
  };

  const ranges: PrizeRanges = {
    discount: {
      ...DEFAULT_RANGES.discount,
      ...config?.ranges?.discount,
    },
    freeDays: {
      ...DEFAULT_RANGES.freeDays,
      ...config?.ranges?.freeDays,
    },
    freeHours: {
      ...DEFAULT_RANGES.freeHours,
      ...config?.ranges?.freeHours,
    },
  };

  const result: Prize[] = [];

  for (let i = 0; i < prizesCount; i++) {
    const prizeType = selectPrizeType(weights);

    switch (prizeType) {
      case "lose":
        result.push(generatePrize("lose"));
        break;

      case "discount": {
        const percentage = generateDiscount(ranges.discount);
        result.push(generatePrize("discount", percentage));
        break;
      }

      case "free_days": {
        const days = randomInRange(ranges.freeDays.min, ranges.freeDays.max);
        result.push(generatePrize("free_days", days));
        break;
      }

      case "free_hours": {
        const hours = randomInRange(ranges.freeHours.min, ranges.freeHours.max);
        result.push(generatePrize("free_hours", hours));
        break;
      }
    }
  }

  return result;
};
