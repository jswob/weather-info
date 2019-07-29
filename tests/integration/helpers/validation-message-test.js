import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | validation-message', function (hooks) {
  setupRenderingTest(hooks);

  test('it returns correct string', async function (assert) {
    const user = {
      errors: {
        username: undefined,
      },
      validations: {
        attrs: {
          username: {
            messages: []
          }
        }
      }
    }
    this.set("user", user)
    await render(hbs`{{validation-message user.validations.attrs.username.messages user.errors.username}}`);
    assert.equal(this.element.textContent.trim(), '', "On start it returns empty array");

    this.set("user.errors.username", [{ message: "something on server-side went wrong!" }]);
    assert.equal(this.element.textContent.trim(), 'something on server-side went wrong!', "When server error messages are updated it returns correct string");

    this.set("user.validations.attrs.username.messages", ["something on client-side went wrong!"]);
    assert.equal(this.element.textContent.trim(), 'something on client-side went wrong!', "When client error messages are updated it returns correct string");
  });
});
