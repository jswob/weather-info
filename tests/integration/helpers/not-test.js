import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | not', function(hooks) {
  setupRenderingTest(hooks);

  test('It correctly format booleans', async function(assert) {
    this.set('value', 'true');
    await render(hbs`{{not value}}`)
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
