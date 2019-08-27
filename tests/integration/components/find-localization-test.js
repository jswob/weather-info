import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, fillIn, waitFor } from "@ember/test-helpers";
import { A } from "@ember/array";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | find-loacalization", function(hooks) {
  setupRenderingTest(hooks);

  test("should show list of 5 predictions after typing in input", async function(assert) {
    assert.expect(1);
    this.set("predictions", A([]));
    await render(hbs`<FindLocalization @predictions={{this.predictions}} />`);
    await fillIn("input", "al");
    await waitFor(".ember-power-select-option");
    assert.equal(this.get("predictions").length, 5);
  });
});
