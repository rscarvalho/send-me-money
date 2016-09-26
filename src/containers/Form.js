import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import FormPage from '../components/FormPage';
import BaseCurrencyStep from '../components/form/BaseCurrencyStep';

import * as transactionActions from '../actions/transactionActions';

export const Form = FormPage;
export const Step1 = connect(
  state => ({
    currencies: state.currencies
  }),

  dispatch => bindActionCreators({
    onChange: ({target: {value}}) => transactionActions.changeFromCurrency(value)
  }, dispatch)
)(BaseCurrencyStep);