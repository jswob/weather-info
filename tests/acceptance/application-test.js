import { module, test } from "qunit";
import {
  visit,
  click,
  currentURL,
  fillIn,
  pauseTest,
  resumeTest
} from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | application", function(hooks) {
  setupApplicationTest(hooks);

  test("Transition to forecast route after creating localization model", async function(assert) {
    await visit("/");
    assert.equal(currentURL(), "/", "ends in forecast");
    await fillIn("input", "Ali");
    await setTimeout(() => resumeTest(), 600);
    await pauseTest();
    await click("li.ember-power-select-option");
    await setTimeout(() => resumeTest(), 200);
    await pauseTest();
    await click("button.md-icon-button");
    assert.notEqual(currentURL(), "/", "ends in forecast");
  });
});
