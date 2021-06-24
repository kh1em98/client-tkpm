export const dayDiff = (d1: Date, d2: Date): number => {
  const t2 = d2.getTime();
  const t1 = d1.getTime();

  return Math.floor((t2 - t1) / (24 * 3600 * 1000));
};
