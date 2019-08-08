import { module, test, skip } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import {
  render,
  fillIn,
  resumeTest,
  pauseTest,
  click
} from "@ember/test-helpers";
import { A } from "@ember/array";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | find-loacalization", function(hooks) {
  setupRenderingTest(hooks);

  test("predictions are fetched", async function(assert) {
    this.set("predictions", A([]));
    await render(hbs`<FindLocalization @predictions={{this.predictions}} />`);
    await fillIn("input", "al");
    await setTimeout(() => resumeTest(), 1000);
    await pauseTest();
    assert.equal(this.get("predictions").length, 5);
  });

  test("after selecting prediction place description is displayed", async function(assert) {
    await render(hbs`<FindLocalization />`);
    await fillIn("input", "al");
    await setTimeout(() => resumeTest(), 1000);
    await pauseTest();
    await click("li");
    assert.equal(this.element.querySelector("input").value, "Almería, Spain");
  });

  skip("passed property is formatted", async function(assert) {});
});
