import { FETCH_RATES, FETCH_RATES_ERROR } from 'State/Actions/Types';

import CurrencyApi from 'Apis/CurrencyApi';

export const FetchRates = (data) => async (dispatch) => {
  try {
    const response = await CurrencyApi.get('/latest', data);
    dispatch({ type: FETCH_RATES, payload: response.data });
  } catch (e) {
    dispatch({
      type: FETCH_RATES_ERROR,
      payload:
        'sorry, there was a problem with getting the current exchange rate',
    });
  }
};
