import ActionTypes from '../actions/ActionTypes';
import assign from 'lodash/assign';

const DEFAULT_STATE = {
  fromCurrency: null,
  fromAmount: null,
  toCurrency: null,
  toAmount: null
};

export default function transaction(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_FROM_CURRENCY:
      return assign({}, state, {
        fromCurrency: action.payload || null
      });

    default:
      return state;
  }
}