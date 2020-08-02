import { combineReducers } from 'redux';

import Rates from 'State/Reducers/Rates/Rates';
import Loading from 'State/Reducers/Loading/Loading';

export default combineReducers({
  Rates,
  Loading,
});
