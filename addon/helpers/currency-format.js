import Ember from 'ember';

/**
 * The default currency options for the default Locale.  Using the USD currency of "DOLLARS"
 * @type {{style: string, currency: string}}
 */
const defaultOptions = {style: 'currency', currency: 'USD'};
/**
 * Instantiate a basic NumberFormat in the browser's locale that will be used for basic formatting.
 * @type {Intl.NumberFormat}
 */
const formatter = new Intl.NumberFormat(undefined, defaultOptions);

export function currencyFormat([number], options) {
  if (Ember.isBlank(number) || isNaN(number)) {
    return '';
  }
  if (Ember.$.isEmptyObject(options)) {
    return formatter.format(number);
  } else {
    return number.toLocaleString(undefined, Ember.$.extend(defaultOptions, options));
  }
}

export default Ember.Helper.helper(currencyFormat);
