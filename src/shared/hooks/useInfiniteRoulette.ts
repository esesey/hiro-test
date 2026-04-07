import { useRef, useState, useEffect, useCallback } from "react";

interface UseInfiniteRouletteOptions {
  itemWidth: number;
  totalItems: number;
  onStop: (centerIndex: number) => void;
}

export const useInfiniteRoulette = ({
  itemWidth,
  totalItems,
  onStop,
}: UseInfiniteRouletteOptions) => {
  const [offset, setOffset] = useState(0);
  const velocityRef = useRef(0);
  const animRef = useRef<number>(0);
  const lastTimestampRef = useRef<number>(0);
  const phaseRef = useRef<"idle" | "accelerate" | "const" | "decelerate">(
    "idle",
  );
  const phaseStartTimeRef = useRef<number>(0);
  const initialSpeedRef = useRef(0);
  const maxSpeed = 400;
  const baseSpeed = 80;

  const fullSetWidth = totalItems * itemWidth;

  const wrapOffset = useCallback(
    (newOffset: number) => {
      if (newOffset > 0) return newOffset - fullSetWidth;
      if (newOffset < -fullSetWidth * 2) return newOffset + fullSetWidth;
      return newOffset;
    },
    [fullSetWidth],
  );

  const animate = useCallback(
    (now: number) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = now;
        animRef.current = requestAnimationFrame(animate);
        return;
      }
      const delta = Math.min(0.033, (now - lastTimestampRef.current) / 1000);
      if (delta <= 0) {
        lastTimestampRef.current = now;
        animRef.current = requestAnimationFrame(animate);
        return;
      }

      let newVelocity = velocityRef.current;
      const nowSec = now / 1000;

      if (phaseRef.current !== "idle") {
        const elapsed = nowSec - phaseStartTimeRef.current;
        if (phaseRef.current === "accelerate") {
          const t = Math.min(1, elapsed / 0.5);
          newVelocity =
            initialSpeedRef.current + (maxSpeed - initialSpeedRef.current) * t;
          if (t >= 1) {
            phaseRef.current = "const";
            phaseStartTimeRef.current = nowSec;
          }
        } else if (phaseRef.current === "const") {
          newVelocity = maxSpeed;
          if (elapsed >= 1.0) {
            phaseRef.current = "decelerate";
            phaseStartTimeRef.current = nowSec;
          }
        } else if (phaseRef.current === "decelerate") {
          const t = Math.min(1, elapsed / 1.5);
          newVelocity = maxSpeed * (1 - t);
          if (t >= 1) {
            newVelocity = 0;
            phaseRef.current = "idle";
            cancelAnimationFrame(animRef.current!);
            const finalOffset = offset + velocityRef.current * delta;
            const centerIndex = getCenterIndex(finalOffset);
            onStop(centerIndex);
            return;
          }
        }
        velocityRef.current = newVelocity;
      }

      let newOffset = offset + velocityRef.current * delta;
      newOffset = wrapOffset(newOffset);
      setOffset(newOffset);
      lastTimestampRef.current = now;
      animRef.current = requestAnimationFrame(animate);
    },
    [offset, wrapOffset, maxSpeed, onStop],
  );

  const getCenterIndex = useCallback(
    (currentOffset: number) => {
      let idx = Math.round(-currentOffset / itemWidth);
      idx = ((idx % totalItems) + totalItems) % totalItems;
      return idx;
    },
    [itemWidth, totalItems],
  );

  const startAutoSpin = useCallback(() => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    velocityRef.current = baseSpeed;
    phaseRef.current = "idle";
    lastTimestampRef.current = 0;
    setOffset(wrapOffset(offset));
    animRef.current = requestAnimationFrame(animate);
  }, [animate, offset, wrapOffset]);

  const spinAndStop = useCallback(() => {
    if (phaseRef.current !== "idle") return;
    if (animRef.current) cancelAnimationFrame(animRef.current);
    initialSpeedRef.current = velocityRef.current;
    phaseRef.current = "accelerate";
    phaseStartTimeRef.current = performance.now() / 1000;
    lastTimestampRef.current = 0;
    animRef.current = requestAnimationFrame(animate);
  }, [animate]);

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return { offset, startAutoSpin, spinAndStop };
};
