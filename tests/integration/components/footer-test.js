import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setBreakpoint } from 'ember-responsive/test-support'

module('Integration | Component | footer', function(hooks) {
  setupRenderingTest(hooks);

  test('Footer is responsive', async function(assert) {
    setBreakpoint("desktop");
    await render(hbs`<Footer />`);
    assert.ok(this.element.querySelector("span"));
    setBreakpoint("mobile");
    assert.notOk(this.element.querySelector("span"));
  });
});
