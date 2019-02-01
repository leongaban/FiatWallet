import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import { getLatest } from './services/api'

export interface IinitialState {
  assets: any[];
  wallets: any[];
  defaultCurrency: string;
}

export interface IRatessRes {
  data: IRatesData
}

export interface IRatesData {
  base: string;
  date: string;
  rates: any;
  success: boolean;
  timestamp: number;
}

const defaultInitialState = {
  assets: [],
  wallets: [],
  defaultCurrency: 'EURO'
}

// ACTION TYPES
export const actionTypes = {
  GET_RATES: 'GET_RATES'
}

// REDUCER
export const reducer = (state = defaultInitialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_RATES: {
      const { payload } = action;
      return {
        ...state,
        assets: payload
      };
    }

    default:
      return state;
  }
}

// ACTIONS CREATORS
export const actionGetRates = (rates: any) => ({
  type: actionTypes.GET_RATES,
  payload: rates
});

// ACTIONS
export const startGetRates = (defaultCurrency: string) => (dispatch: any) => getLatest(defaultCurrency).then((ratesArray) => {
  dispatch(actionGetRates(ratesArray));
});

// @ts-ignore
export function initializeStore(initialState = defaultInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
