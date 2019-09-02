import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | temperature-unit-switch", function(hooks) {
  setupRenderingTest(hooks);

  test("should correctly show temperature", async function(assert) {
    assert.expect(1);

    this.set("temperature", 312.23);
    await render(
      hbs`<TemperatureUnitSwitch @temperature={{this.temperature}}/>`
    );

    assert.equal(
      this.element.querySelector(".temp-wrapper").textContent.trim(),
      "39 °C °C|F",
      "temperature is ok"
    );
  });

  test("should change temperature unit on click on the unit-button", async function(assert) {
    assert.expect(3);

    this.set("temperature", 312.23);
    await render(
      hbs`<TemperatureUnitSwitch @temperature={{this.temperature}}/>`
    );

    assert.equal(
      this.element.querySelector(".temp").textContent,
      "39 °C ",
      "on start show temperature in celsius"
    );

    await click(".fahrenheit-button");

    assert.equal(
      this.element.querySelector(".temp").textContent,
      "103 F ",
      "after clicking on fahrenheit-button show temperature in fahrenheit"
    );

    await click(".celsius-button");

    assert.equal(
      this.element.querySelector(".temp").textContent,
      "39 °C ",
      "after clicking on celsius-button show temperature in celsius"
    );
  });
});
