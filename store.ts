import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import { getEURrates } from './services/api'
import { IinitialState } from './shared/types'

const defaultInitialState = {
  assets: [],
  wallets: [{
    currency: 'USD',
    amount: 100
  }, {
    currency: 'EUR',
    amount: 500
  }, {
    currency: 'CHF',
    amount: 10000
  }],
  currency: 'USD',
  view: 'prices' // wallets, wallet, exchange, deposit, withdraw
}

// ACTION TYPES
export const actionTypes = {
  GET_RATES: 'GET_RATES',
  SET_CURRENCY: 'SET_CURRENCY',
  SET_VIEW: 'SET_VIEW'
}

// REDUCER /////////////////////////////////////////////////////////
export const reducer = (state = defaultInitialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_RATES: {
      const { payload } = action;
      return {
        ...state,
        assets: payload
      };
    }

    case actionTypes.SET_CURRENCY: {
      const { payload } = action;
      return {
        ...state,
        currency: payload
      };
    }

    case actionTypes.SET_VIEW: {
      const { payload } = action;
      return {
        ...state,
        view: payload
      };
    }

    default:
      return state;
  }
}

// ACTIONS CREATORS /////////////////////////////////////////////////
export const actionGetRates = (rates: any) => ({
  type: actionTypes.GET_RATES,
  payload: rates
});

export const actionSetCurrency = (currency: string) => ({
  type: actionTypes.SET_CURRENCY,
  payload: currency
});

export const actionSetView = (view: string) => ({
  type: actionTypes.SET_VIEW,
  payload: view
});

// ACTIONS //////////////////////////////////////////////////////////
export const startGetRates = (currency: string) => (dispatch: any) =>
  getEURrates(currency).then((ratesArray) => {
    dispatch(actionGetRates(ratesArray));
  });

export const setCurrency = (currency: string) => (dispatch: any) =>
  dispatch(actionSetCurrency(currency));

export const setView = (view: string) => (dispatch: any) =>
  dispatch(actionSetView(view));

export function initializeStore(initialState: IinitialState = defaultInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
