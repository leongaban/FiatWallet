import { IRatesRes } from '../shared/types'

// Takes rates { key : value } pairs and converts into Array of objects.
export const ratesIntoArray = ({ data: { rates } }: IRatesRes) =>
  Object.keys(rates).map(data => new Object({ currency: data, rate: rates[data]}));
