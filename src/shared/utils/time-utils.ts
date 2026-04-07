import {
  addDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  isAfter,
} from "date-fns";

export interface TimeRemaining {
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
  isAvailable: boolean;
}

/**
 * Рассчитывает время, оставшееся до следующей доступной попытки
 * @param lastAttempt - дата последней попытки
 * @returns объект с оставшимся временем и флагом доступности
 */
export const getTimeUntilNextAttempt = (lastAttempt: Date): TimeRemaining => {
  const nextAvailableTime = addDays(lastAttempt, 1);
  const now = new Date();

  if (isAfter(now, nextAvailableTime)) {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalSeconds: 0,
      isAvailable: true,
    };
  }

  const totalSeconds = differenceInSeconds(nextAvailableTime, now);
  const hours = differenceInHours(nextAvailableTime, now);
  const minutes = differenceInMinutes(nextAvailableTime, now) % 60;
  const seconds = differenceInSeconds(nextAvailableTime, now) % 60;

  return {
    hours,
    minutes,
    seconds,
    totalSeconds,
    isAvailable: false,
  };
};

/**
 * Проверяет, доступна ли попытка сейчас
 * @param lastAttempt - дата последней попытки
 * @returns true, если попытка доступна
 */
export const isAttemptAvailable = (lastAttempt?: Date): boolean => {
  if (!lastAttempt) return true;
  const nextAvailableTime = addDays(lastAttempt, 1);
  return isAfter(new Date(), nextAvailableTime);
};
