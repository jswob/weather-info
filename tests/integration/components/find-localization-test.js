import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | find-loacalization", function(hooks) {
  setupRenderingTest(hooks);

  test("Classes in label are correctly formated", async function(assert) {
    this.set("address", "");
    await render(hbs`<FindLocalization @address={{this.address}} />`);
    assert.equal(
      this.element.querySelector("label").className,
      "material-form-field-label"
    );
    this.set("address", "smth");
    assert.equal(
      this.element.querySelector("label").className,
      "material-form-field-label active"
    );
  });
});
