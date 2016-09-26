import {combineReducers} from 'redux';

import currencies from './currencies';
import transaction from './transaction';

export default combineReducers({
  currencies,
  transaction,
});