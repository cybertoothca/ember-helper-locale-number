import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('percent-format', 'helper:percent-format', {
  integration: true
});


test('when formatting undefined', function (assert) {
  this.set('number', undefined);

  this.render(hbs`{{percent-format number}}`);

  assert.equal(this.$().text().trim(), '');
});

test('when formatting null', function (assert) {
  this.set('number', null);

  this.render(hbs`{{percent-format number}}`);

  assert.equal(this.$().text().trim(), '');
});

test('when formatting a string', function (assert) {
  this.set('number', 'abc');

  this.render(hbs`{{percent-format number}}`);

  assert.equal(this.$().text().trim(), '');
});

test('when formatting NaN', function (assert) {
  this.set('number', NaN);

  this.render(hbs`{{percent-format number}}`);

  assert.equal(this.$().text().trim(), '');
});

test('when formatting infinity', function (assert) {
  this.set('number', Infinity);

  this.render(hbs`{{percent-format number}}`);

  assert.equal(this.$().text().trim(), '∞%');
});

test('when formatting blank', function (assert) {
  this.set('number', '');

  this.render(hbs`{{percent-format number}}`);

  assert.equal(this.$().text().trim(), '');
});

test('when formatting a basic fraction', function (assert) {
  this.render(hbs`{{percent-format 0.123456789}}`);

  assert.equal(this.$().text().trim(), '12%');
});

test('when formatting a large percentage with no grouping', function (assert) {
  this.render(hbs`{{percent-format 123.456789 useGrouping=false}}`);

  assert.equal(this.$().text().trim(), '12346%');
});

test('when formatting a large percentage with grouping', function (assert) {
  this.render(hbs`{{percent-format 123.456789 useGrouping=true}}`);

  assert.equal(this.$().text().trim(), '12,346%');
});
