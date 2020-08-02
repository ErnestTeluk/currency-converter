import { FETCH_RATES, FETCH_RATES_ERROR } from 'State/Actions/Types';

const INITIALSTATE = {
  currency: [],
};

export default (state = INITIALSTATE, actions) => {
  switch (actions.type) {
    case FETCH_RATES:
      return { ...state, currency: actions.payload };
    case FETCH_RATES_ERROR: {
      return { ...state, currency: actions.payload };
    }
    default:
      return state;
  }
};
