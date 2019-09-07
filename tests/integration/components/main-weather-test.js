import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import { setBreakpoint } from "ember-responsive/test-support";

module("Integration | Component | main-weather", function(hooks) {
  setupRenderingTest(hooks);

  test("should display all necessary data", async function(assert) {
    assert.expect(8);

    const weatherData = {
      temp: 26,
      pressure: 1013,
      humidity: 62,
      country: "PL",
      description: "Light Rain",
      icon: "10n",
      wind: 3.61,
      time: 1406106000,
      city: "Wisla",
      cloudiness: 88
    };
    this.set("selectedForecast", weatherData);
    await render(hbs`<MainWeather @weather={{this.selectedForecast}} />`);

    assert.equal(
      this.element.querySelector(".localization").textContent,
      "Wisla, PL",
      "localization is ok"
    );
    assert.equal(
      this.element.querySelector(".description").textContent,
      "Light Rain",
      "description is ok"
    );
    assert.equal(
      this.element.querySelector(".temp-wrapper").textContent.trim(),
      "79 F °C|F",
      "temperature is ok"
    );
    assert.equal(
      this.element.querySelector(".pressure").textContent,
      "Pressure: 1013 hpa",
      "pressure is ok"
    );
    assert.equal(
      this.element.querySelector(".wind").textContent,
      "Wind: 3.61 km/h",
      "wind is ok"
    );
    assert.equal(
      this.element.querySelector(".time").textContent,
      "Sa, 7 AM",
      "time is ok"
    );
    assert.equal(
      this.element.querySelector(".weather-icon").src,
      "http://openweathermap.org/img/wn/10n@2x.png",
      "image has correct source"
    );
    assert.equal(
      this.element.querySelector(".cloudiness").textContent,
      "Cloudiness: 88%",
      "cloudiness is ok"
    );
  });

  test("should be responsive", async function(assert) {
    const weatherData = {
      description: "Light Rain"
    };
    this.set("selectedForecast", weatherData);
    await render(hbs`<MainWeather @weather={{this.selectedForecast}} />`);

    assert.equal(
      this.element.querySelector(".description").textContent,
      "Light Rain",
      "description is displayed in desktop mod"
    );

    setBreakpoint("mobile");

    assert.notOk(
      this.element.querySelector(".description"),
      "description is not displayed in mobile mod"
    );
  });
});
