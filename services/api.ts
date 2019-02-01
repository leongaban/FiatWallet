import axios from 'axios'

import { converters } from '../utils'

const fixerAPI = 'http://data.fixer.io/api/';
const fixerKey = '35a3ad0f2f253d37131b68cd1b5953fc';

export const getLatest = async (defaultCurrency: string) => {
  const fixer = axios.create({
    baseURL: fixerAPI,
    params: {
      base: defaultCurrency,
      access_key: fixerKey
    }
  });

  try {
    const res = await fixer.get('latest');
    const ratesArray = converters.ratesIntoArray(res);
    return ratesArray;
  } catch (err) {
    console.error(err);
  }
}
