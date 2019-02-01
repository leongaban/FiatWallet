import { IRatessRes } from '../store'

// Takes rates { key : value } pairs and converts into Array of objects.
export const ratesIntoArray = ({ data: { rates } }: IRatessRes) =>
  Object.keys(rates).map(data => new Object({ currency: data, rate: rates[data]}));
