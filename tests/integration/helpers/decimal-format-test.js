import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('decimal-format', 'helper:decimal-format', {
  integration: true
});

test('when formatting undefined', function (assert) {
  this.set('number', undefined);

  this.render(hbs`{{decimal-format number}}`);

  assert.equal(this.$().html(), '');
});

test('when formatting null', function (assert) {
  this.set('number', null);

  this.render(hbs`{{decimal-format number}}`);

  assert.equal(this.$().html(), '');
});

test('when formatting a string', function (assert) {
  this.set('number', 'abc');

  this.render(hbs`{{decimal-format number}}`);

  assert.equal(this.$().html(), '');
});

test('when formatting NaN', function (assert) {
  this.set('number', NaN);

  this.render(hbs`{{decimal-format number}}`);

  assert.equal(this.$().html(), '');
});

test('when formatting infinity', function (assert) {
  this.set('number', Infinity);

  this.render(hbs`{{decimal-format number}}`);

  assert.equal(this.$().html(), '∞');
});

test('when formatting blank', function (assert) {
  this.set('number', '');

  this.render(hbs`{{decimal-format number}}`);

  assert.equal(this.$().html(), '');
});

test('when formatting an integer', function (assert) {
  this.render(hbs`{{decimal-format 123}}`);

  assert.equal(this.$().html(), '123');
});

test('when formatting an integer with no grouping', function (assert) {
  this.render(hbs`{{decimal-format 123456 useGrouping=false}}`);

  assert.equal(this.$().html(), '123456');
});

test('when formatting an integer with grouping', function (assert) {
  this.render(hbs`{{decimal-format 123456 useGrouping=true}}`);

  assert.equal(this.$().html(), '123,456');
});

test('when formatting a real', function (assert) {
  this.render(hbs`{{decimal-format 123.456789}}`);

  assert.equal(this.$().html(), '123.457');
});
