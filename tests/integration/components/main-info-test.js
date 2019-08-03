import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import { setBreakpoint } from "ember-responsive/test-support";

module("Integration | Component | main-info", function(hooks) {
  setupRenderingTest(hooks);

  test("It is responsive", async function(assert) {
    setBreakpoint("desktop");
    await render(hbs`<MainInfo />`);
    assert.equal(
      this.element.querySelector(".main-info").className.split(" ")[3],
      "ember-view"
    );
    setBreakpoint("mobile");
    assert.equal(
      this.element.querySelector(".main-info").className.split(" ")[3],
      "mobile"
    );
  });
});
