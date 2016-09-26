import { createAction } from 'redux-actions';
import ActionTypes from './ActionTypes';

export const changeFromCurrency = createAction(ActionTypes.CHANGE_FROM_CURRENCY, value => value);