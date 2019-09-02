import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | weather-wrapper", function(hooks) {
  setupRenderingTest(hooks);

  test("should display all forecasts in list", async function(assert) {
    assert.expect();
    const forecasts = [
      { temp: 1 },
      { temp: 2 },
      { temp: 3 },
      { temp: 4 },
      { temp: 5 },
      { temp: 6 },
      { temp: 7 },
      { temp: 8 }
    ];
    this.set("forecasts", forecasts);
    await render(hbs`<WeatherWrapper @forecasts={{this.forecasts}} />`);

    assert.equal(
      this.element.querySelectorAll(".single-forecast").length,
      8,
      "Should list 8 forecasts"
    );
  });

  test("should change selected main weather on click on diffrent forecast", async function(assert) {
    const forecasts = [{ description: "foo" }, { description: "baz" }];
    this.set("forecasts", forecasts);
    await render(hbs`<WeatherWrapper @forecasts={{this.forecasts}} />`);

    assert.equal(
      this.element.querySelector(".description").textContent,
      "foo",
      "starts with first element as main"
    );

    await click(".single-forecast:last-child");

    assert.equal(
      this.element.querySelector(".description").textContent,
      "baz",
      "after click second forecast become main"
    );

    await click(".single-forecast:first-child");

    assert.equal(
      this.element.querySelector(".description").textContent,
      "foo",
      "after last click first forecast become main"
    );
  });
});
