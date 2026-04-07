export const pluralize = (
  num: number,
  [one, few, many]: [string, string, string],
  hideNum?: boolean,
) => {
  const n = Math.abs(num) % 100;
  const n1 = n % 10;
  const numStr = hideNum ? "" : `${num} `;

  if (n > 10 && n < 20) return `${numStr}${many}`;
  if (n1 > 1 && n1 < 5) return `${numStr}${few}`;
  if (n1 === 1) return `${numStr}${one}`;
  return `${numStr}${many}`;
};
