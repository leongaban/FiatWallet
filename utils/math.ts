export const numberWithCommas = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export function roundFloat(x: number, decimal: number) {
  const precision = Math.pow(10, decimal);
  return Math.round(x * precision) / precision;
};
