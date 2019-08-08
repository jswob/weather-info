import { module, test, skip } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import {
  render,
  fillIn,
  resumeTest,
  pauseTest,
  click
} from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | find-loacalization", function(hooks) {
  setupRenderingTest(hooks);

  skip("predictions are displayed", async function(assert) {
    
  });

  test("after selecting prediction place description is displayed", async function(assert) {
    await render(hbs`<FindLocalization />`);
    await fillIn("input", "al");
    await setTimeout(() => resumeTest(), 1000);
    await pauseTest();
    await click("li");
    assert.equal(
      this.element.querySelector('input').value,
      "Almería, Spain"
    );
  });

  skip("passed property is formatted", async function(assert) {});
});
