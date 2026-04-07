import { subDays } from "date-fns";
import { useState, useRef, useEffect } from "react";
import type { Prize } from "../../entities/prize";
import { isAttemptAvailable } from "../utils/time-utils";
import { useInfiniteRoulette } from "./useInfiniteRoulette";

export const useRoulette = (
  prizes: Prize[],
  hasAttempt?: boolean,
  lastAttempt?: Date,
  onWin?: (prize: Prize) => void,
) => {
  const [activePrize, setActivePrize] = useState<Prize>(prizes[0]);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [lastTime, setLastTime] = useState<Date>(
    lastAttempt || subDays(new Date(), 2),
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [prizeTaken, setPrizeTaken] = useState(false);

  const isAvailable = hasAttempt && isAttemptAvailable(lastTime);

  const openPopup = () => {
    setIsOpenPopup(true);
  };

  const closePopup = () => {
    setIsOpenPopup(false);
  };

  const takePrize = () => {
    setPrizeTaken(true);
  };

  const handleWin = (prize: Prize) => {
    setActivePrize(prize);
    onWin?.(prize);
    openPopup();
    setLastTime(new Date());
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.getBoundingClientRect().width;
        setContainerWidth(width);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const firstCard = containerRef.current.querySelector(".roulette-card");
    if (firstCard) {
      const width = firstCard.getBoundingClientRect().width;
      const gap = 4;
      setItemWidth(width + gap);
    }
  }, [prizes]);

  const handleStop = (centerPrizeIndex: number) => {
    const prize = prizes[centerPrizeIndex];
    setTimeout(() => {
      setIsSpinning(false);
      handleWin(prize);
    }, 1000);
  };

  const { offset, startAutoSpin, spinAndStop } = useInfiniteRoulette({
    itemWidth,
    totalItems: prizes.length,
    containerWidth,
    onStop: handleStop,
  });

  useEffect(() => {
    if (isAvailable && itemWidth > 0 && !isSpinning) {
      startAutoSpin();
    }
  }, [isAvailable, itemWidth, startAutoSpin]);

  const handleSpinClick = () => {
    if (!isAvailable || isSpinning) return;
    setIsSpinning(true);
    spinAndStop();
  };

  const tripledPrizes = [...prizes, ...prizes, ...prizes];

  return {
    activePrize,
    containerRef,
    isOpenPopup,
    isAvailable,
    isSpinning,
    prizeTaken,
    offset,
    closePopup,
    handleSpinClick,
    takePrize,
    lastTime,
    prizeList: tripledPrizes,
  };
};
