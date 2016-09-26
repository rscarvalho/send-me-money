import React, {Component, PropTypes} from 'react';
import find from 'lodash/find';

export default class BaseCurrencyStep extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
  }

  static get propTypes() {
    return {
      currencies: PropTypes.array.isRequired,
      onChange: PropTypes.func.isRequired,
    };
  }

  handleChange(event) {
    const { onChange, currencies } = this.props;
    const { target: { value }} = event;
    const currentValue = find(currencies, c => c.iso.code === value);

    onChange({
      target: {
        value: currentValue
      }
    });
  }

  renderOption(curr) {
    const symbol = curr.units.major.symbol.length ? `(${curr.units.major.symbol})` : '';

    return (
      <option key={curr.iso.code} value={curr.iso.code}>
        {curr.iso.code} - {curr.name} {symbol}
      </option>
    );
  }

  render() {
    const { currencies } = this.props;

    return (
      <div>
        <p><strong>What currency are you sending FROM?</strong></p>
        <p>
          <select onChange={this.handleChange}>
            <option value="">Select a currency</option>
            {currencies.map(this.renderOption)}
          </select>
        </p>
      </div>
    );
  }
}