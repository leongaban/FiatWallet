import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

export interface IinitialState {
  fiatPrices: [];
  wallets: [];
  defaultCurrency: string;
}

const initialState = {
  fiatPrices: [],
  wallets: [],
  defaultCurrency: ''
}

export const actionTypes = {
  GET_PRICES: 'GET_PRICES'
}

// REDUCERS
export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_PRICES:
      return state
    default:
      return state
  }
}

// MOCK API
export async function getProgress(dispatch: any) {
  try {
    const priceList = await fetchPrices();
    return dispatch({ type: actionTypes.GET_PRICES, payload: priceList })
  }
  catch (err) {
    console.log('Error', err);
  }
}

// Wait 1 sec before resolving promise
function fetchPrices() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ progress: 100 });
      }, 1000);
  });
}

// ACTIONS
export const addLoader = () => (dispatch: any) => {
  getProgress(dispatch);
}

// @ts-ignore
export function initializeStore(initialState: IinitialState = initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
