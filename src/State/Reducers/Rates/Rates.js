import {
  FETCH_RATES,
  FETCH_RATES_ERROR,
  SET_BASE_VALUE,
  SET_SYMBOLS_VALUE,
  FETCH_CONVERT_RATES,
  FETCH_CONVERT_RATES_ERROR,
} from 'State/Actions/Types';

const INITIALSTATE = {
  currency: [],
  baseValue: 'PLN',
  symbolsValue: 'EUR',
  convert: [],
};

export default (state = INITIALSTATE, actions) => {
  switch (actions.type) {
    case FETCH_RATES:
      return { ...state, currency: actions.payload };
    case FETCH_RATES_ERROR: {
      return { ...state, currency: actions.payload };
    }
    case SET_BASE_VALUE: {
      return { ...state, baseValue: actions.payload };
    }
    case SET_SYMBOLS_VALUE: {
      return { ...state, symbolsValue: actions.payload };
    }
    case FETCH_CONVERT_RATES: {
      return { ...state, convert: actions.payload };
    }
    case FETCH_CONVERT_RATES_ERROR: {
      return { ...state, convert: actions.payload };
    }
    default:
      return state;
  }
};
