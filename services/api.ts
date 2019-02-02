import axios from 'axios'

import { converters } from '../utils'
import { GBPUSD } from '../shared/models'

const fixerURL = 'http://data.fixer.io/api/';
const fixerKey = '35a3ad0f2f253d37131b68cd1b5953fc';
const freeForexURL = 'https://www.freeforexapi.com/api/';

export const getEURrates = async () => {
  const fixerAPI = axios.create({
    baseURL: fixerURL,
    params: {
      base: 'EUR',
      access_key: fixerKey
    }
  });

  try {
    const res = await fixerAPI.get('latest');
    const ratesArray = converters.ratesIntoArray(res);
    return ratesArray;
  } catch (err) {
    console.error(err);
  }
}

export const getPairRate = async (currencyPair: string = GBPUSD) => {
  const freeForexAPI = axios.create({
    baseURL: freeForexURL,
    params: {
      pairs: currencyPair
    }
  });

  try {
    // const res = await fixer.get('latest');
    const res = await freeForexAPI.get('live');
    console.log('res', res);
    const ratesArray = converters.ratesIntoArray(res);
    return ratesArray;
  } catch (err) {
    console.error(err);
  }
}
