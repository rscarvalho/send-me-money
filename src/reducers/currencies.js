import currencies from 'world-currencies';
import values from 'lodash/values';
import memoize from 'lodash/memoize';

export default memoize(() => {
  return values(currencies);
});
