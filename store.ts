import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import { getLatest } from './services/api'
import { IinitialState } from './shared/types'

const defaultInitialState = {
  assets: [],
  wallets: [],
  currency: 'EUR'
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
export const startGetRates = (currency: string) => (dispatch: any) => getLatest(currency).then((ratesArray) => {
  dispatch(actionGetRates(ratesArray));
});

export function initializeStore(initialState: IinitialState = defaultInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
