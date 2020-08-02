import {
  FETCH_RATES,
  FETCH_RATES_ERROR,
  LOADING_TRUE,
  LOADING_FALSE,
  SET_BASE_VALUE,
  SET_SYMBOLS_VALUE,
  FETCH_CONVERT_RATES,
  FETCH_CONVERT_RATES_ERROR,
} from 'State/Actions/Types';

import CurrencyApi from 'Apis/CurrencyApi';

export const FetchRates = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await CurrencyApi.get(`/latest?base=${data.base}`);
    dispatch({ type: FETCH_RATES, payload: response.data });
    dispatch({ type: LOADING_FALSE });
  } catch (e) {
    dispatch({
      type: FETCH_RATES_ERROR,
      payload: {
        error:
          'Sorry, there was a problem with getting the current exchange rate',
      },
    });
    dispatch({ type: LOADING_FALSE });
  }
};

export const SetBaseValue = (data) => (dispatch) => {
  dispatch({ type: SET_BASE_VALUE, payload: data });
};

export const SetSymbolsValue = (data) => (dispatch) => {
  dispatch({ type: SET_SYMBOLS_VALUE, payload: data });
};

export const FetchConvertRates = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await CurrencyApi.get(
      `/latest?base=${data.base}&symbols=${data.symbols}`
    );
    dispatch({ type: FETCH_CONVERT_RATES, payload: response.data });
    dispatch({ type: LOADING_FALSE });
  } catch (e) {
    dispatch({
      type: FETCH_CONVERT_RATES_ERROR,
      payload: {
        error:
          'Sorry, there was a problem with getting the current exchange rate',
      },
    });
    dispatch({ type: LOADING_FALSE });
  }
};
