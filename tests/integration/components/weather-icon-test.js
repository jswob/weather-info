import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | weather-icon", function(hooks) {
  setupRenderingTest(hooks);

  test("should correctly convert icon url", async function(assert) {
    const icon = "10n";
    this.set("icon", icon);

    await render(hbs`<WeatherIcon @icon={{this.icon}} />`);

    assert.equal(
      this.element.querySelector(".weather-icon").src,
      "http://openweathermap.org/img/wn/10n@2x.png",
      "icon has correct source"
    );
  });
});
