import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('currency-format', 'helper:currency-format', {
  integration: true
});

test('when formatting undefined', function (assert) {
  this.set('number', undefined);

  this.render(hbs`{{currency-format number}}`);

  assert.equal(this.$().html(), '');
});

test('when formatting null', function (assert) {
  this.set('number', null);

  this.render(hbs`{{currency-format number}}`);

  assert.equal(this.$().html(), '');
});

test('when formatting a string', function (assert) {
  this.set('number', 'abc');

  this.render(hbs`{{currency-format number}}`);

  assert.equal(this.$().html(), '');
});

test('when formatting NaN', function (assert) {
  this.set('number', NaN);

  this.render(hbs`{{currency-format number}}`);

  assert.equal(this.$().html(), '');
});

test('when formatting infinity', function (assert) {
  this.set('number', Infinity);

  this.render(hbs`{{currency-format number}}`);

  assert.equal(this.$().html(), '$∞');
});

test('when formatting blank', function (assert) {
  this.set('number', '');

  this.render(hbs`{{currency-format number}}`);

  assert.equal(this.$().html(), '');
});

test('when formatting with min & max fraction digits of 3', function (assert) {
  this.render(hbs`{{currency-format 123.456789 maximumFractionDigits=3 minimumFractionDigits=3}}`);

  assert.equal(this.$().html(), '$123.457');
});

test('when formatting with min & max fraction digits of 2', function (assert) {
  this.render(hbs`{{currency-format 123.456789 maximumFractionDigits=2 minimumFractionDigits=2}}`);

  assert.equal(this.$().html(), '$123.46');
});

test('when formatting an integer', function (assert) {
  this.render(hbs`{{currency-format 123}}`);

  assert.equal(this.$().html(), '$123.00');
});

test('when formatting a real', function (assert) {
  this.set('number', 123.456789);

  this.render(hbs`{{currency-format number}}`);

  assert.equal(this.$().html(), '$123.46');
});
