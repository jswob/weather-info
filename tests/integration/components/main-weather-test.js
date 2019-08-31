import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click, pauseTest } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import { setBreakpoint } from "ember-responsive/test-support";

module("Integration | Component | main-weather", function(hooks) {
  setupRenderingTest(hooks);

  test("should display all necessary data", async function(assert) {
    assert.expect(6);

    const weatherData = {
      temp: 298.77,
      pressure: 1013,
      humidity: 62,
      country: "PL",
      description: "Light Rain",
      icon: "10n",
      wind: 3.61,
      time: 1406106000,
      city: "Wisla"
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
      "26 °C °C|F",
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
      "Sa, 7 am",
      "time is ok"
    );
  });

  test('should change temperature unit after clicking on "°C|F" buttons', async function(assert) {
    const weatherData = {
      temp: 298.77
    };
    this.set("selectedForecast", weatherData);
    await render(hbs`<MainWeather @weather={{this.selectedForecast}} />`);

    assert.equal(
      this.element.querySelector(".temp").textContent,
      "26 °C ",
      "on start show temperature in celsius"
    );

    await click(".fahrenheit-button");

    assert.equal(
      this.element.querySelector(".temp").textContent,
      "78 F ",
      "after clicking on fahrenheit-button show temperature in fahrenheit"
    );

    await click(".celsius-button");

    assert.equal(
      this.element.querySelector(".temp").textContent,
      "26 °C ",
      "after clicking on celsius-button show temperature in celsius"
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

    await pauseTest();

    assert.notOk(
      this.element.querySelector(".description"),
      "description is not displayed in mobile mod"
    );
  });
});