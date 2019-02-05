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
  view: 'prices', // wallets, wallet, transactions
  walletView: 'ALL' // USD, EUR, CHF,
}

// ACTION TYPES
export const actionTypes = {
  GET_RATES: 'GET_RATES',
  SET_CURRENCY: 'SET_CURRENCY',
  SET_VIEW: 'SET_VIEW',
  SET_WALLET_VIEW: 'SET_WALLET_VIEW',
  DEPOSIT_WALLET: 'DEPOSIT_WALLET',
  WITHDRAW_WALLET: 'WITHDRAW_WALLET',
  EXCHANGE_WALLET: 'EXCHANGE_WALLET'
}

// REDUCER /////////////////////////////////////////////////////////
export const reducer = (state = defaultInitialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_RATES: {
      const { payload } = action;
      return { ...state, assets: payload };
    }

    case actionTypes.SET_CURRENCY: {
      const { payload } = action;
      return { ...state, currency: payload };
    }

    case actionTypes.SET_VIEW: {
      const { payload } = action;
      return { ...state, view: payload };
    }

    case actionTypes.SET_WALLET_VIEW: {
      const { payload } = action;
      return { ...state, walletView: payload };
    }

    case actionTypes.DEPOSIT_WALLET: {
      const { payload: { walletName, depositAmount } } = action;
      const updatedWallets = state.wallets.map((wallet) => {
        if (wallet.currency === walletName) {
          wallet.amount = wallet.amount + depositAmount;
        }
        return wallet;
      });
      return { ...state, wallets: updatedWallets };
    }

    case actionTypes.WITHDRAW_WALLET: {
      const { payload: { walletName, withdrawAmount } } = action;
      const updatedWallets = state.wallets.map((wallet) => {
        if (wallet.currency === walletName) {
          const newAmount = wallet.amount - withdrawAmount;
          if (newAmount < 0) {
            alert('You cannot withdraw more than your amount.');
          }
          else {
            wallet.amount = newAmount;
          }
        }
        return wallet;
      });

      return { ...state, wallets: updatedWallets };
    }

    default: return state;
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

export const actionSetWalletView = (walletView: string) => ({
  type: actionTypes.SET_WALLET_VIEW,
  payload: walletView
});

export const actionWalletDeposit = (walletName: string, depositAmount: number) => {
  return ({
    type: actionTypes.DEPOSIT_WALLET,
    payload: {
      walletName,
      depositAmount
    }
  });
};

export const actionWalletWithdraw = (walletName: string, withdrawAmount: number) => {
  return ({
    type: actionTypes.WITHDRAW_WALLET,
    payload: {
      walletName,
      withdrawAmount
    }
  });
};

// ACTIONS //////////////////////////////////////////////////////////
export const startGetRates = (currency: string) => (dispatch: any) =>
  getEURrates(currency).then((ratesArray) => {
    dispatch(actionGetRates(ratesArray));
  });

export const setCurrency = (currency: string) => (dispatch: any) =>
  dispatch(actionSetCurrency(currency));

export const setView = (view: string) => (dispatch: any) =>
  dispatch(actionSetView(view));

export const setWalletView = (walletView: string) => (dispatch: any) =>
  dispatch(actionSetWalletView(walletView));

export const depositIntoWallet = (walletName: string, depositAmount: number) => (dispatch: any) =>
  dispatch(actionWalletDeposit(walletName, depositAmount));

export const withdrawIntoWallet = (walletName: string, withdrawAmount: number) => (dispatch: any) =>
dispatch(actionWalletWithdraw(walletName, withdrawAmount));

export function initializeStore(initialState: IinitialState = defaultInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
