import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | is-ok', function(hooks) {
  setupRenderingTest(hooks);

  test('Return correct value', async function(assert) {
    this.set('inputValue', "hello world!");
    await render(hbs`{{is-ok inputValue}}`);
    assert.equal(this.element.textContent.trim(), "true", "Output is true");
    this.set('inputValue', false);
    assert.equal(this.element.textContent.trim(), "false", "Output is false");
  });
});