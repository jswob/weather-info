import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | single-forecast", function(hooks) {
  setupRenderingTest(hooks);

  test("should correctly display all necessary data", async function(assert) {
    const weatherData = {
      temp: 298.77,
      icon: "10n",
      time: 1406106000
    };
    this.set("forecast", weatherData);
    await render(hbs`<SingleForecast @forecast={{this.forecast}} />`);

    assert.equal(
      this.element.querySelector(".day").textContent,
      "Sa",
      "day is correctly displayed"
    );
    assert.equal(
      this.element.querySelector(".hour").textContent,
      "7 am",
      "hour is correctly displayed"
    );
    assert.equal(
      this.element.querySelector(".weather-icon").src,
      "http://openweathermap.org/img/wn/10n@2x.png",
      "image has correct source"
    );
    assert.equal(
      this.element.querySelector(".temp-wrapper").textContent,
      "26 °C °C|F",
      "temperature is correctly displayed"
    );
  });

  test("should change temperature unit", async function(assert) {
    const weatherData = {
      temp: 298.77,
      icon: "10n",
      time: 1406106000
    };
    this.set("forecast", weatherData);
    this.set("isCelsius", true);
    await render(
      hbs`<SingleForecast @forecast={{this.forecast}} @isCelsius={{this.isCelsius}}/>`
    );

    assert.equal(
      this.element.querySelector(".temp-wrapper").textContent,
      "26 °C °C|F",
      "temperature is displayed in celsius unit"
    );

    await click(".fahrenheid-button");

    assert.equal(
      this.element.querySelector(".temp-wrapper").textContent,
      "78 F °C|F",
      "temperature is displayed in fahrenheit unit"
    );

    await click(".celsius-button");

    assert.equal(
      this.element.querySelector(".temp-wrapper").textContent,
      "26 °C °C|F",
      "temperature is displayed in celsius unit"
    );
  });

  test("should switch selected forecast on click", async function(assert) {
    const forecasts = [
      {
        temp: 290.0,
        icon: "10d",
        time: 1406106000
      },
      {
        temp: 298.77,
        icon: "10n",
        time: 1406120000
      }
    ];
    const selectedForecast = forecasts[0];
    this.set("forecasts", forecasts);
    this.set("selectedForecast", selectedForecast);
    await render(hbs`
      {{#each this.forecasts as |forecast|}}
        <SingleForecast @forecast={{forecast}} @selectedForecast={{this.selectedForecast}}/>
      {{/each}}
    `);

    assert.equal(
      this.get("selectedForecast"),
      forecasts[0],
      "starts with default forecast"
    );

    await click(".single-forecast:last-child");

    assert.equal(
      this.get("selectedForecast", forecasts[1]),
      "after clicking on second forecast switch selected forecast"
    );

    await click(".single-forecast:first-child");

    assert.equal(
      this.get("selectedForecast"),
      forecasts[1],
      "switch forecast again to default"
    );
  });

  test("should become active or unactive on click", async function(assert) {
    const forecasts = [
      {
        temp: 290.0,
        icon: "10d",
        time: 1406106000
      },
      {
        temp: 298.77,
        icon: "10n",
        time: 1406120000
      }
    ];
    const selectedForecast = forecasts[0];
    this.set("forecasts", forecasts);
    this.set("selectedForecast", selectedForecast);
    await render(hbs`
      {{#each this.forecasts as |forecast|}}
        <SingleForecast @forecast={{forecast}} @selectedForecast={{this.selectedForecast}}/>
      {{/each}}
    `);

    assert.notOk(
      this.element
        .querySelector(".single-forecast:last-child")
        .className.search("active"),
      "starts with last element marked as unactive"
    );
    assert.ok(
      this.element
        .querySelector(".single-forecast:first-child")
        .className.search("active"),
      "starts with default element active"
    );

    await click(".single-forecast:last-child");

    assert.notOk(
      this.element
        .querySelector(".single-forecast:first-child")
        .className.search("active"),
      "after clicking switch default element to unactive"
    );
    assert.ok(
      this.element
        .querySelector(".single-forecast:last-child")
        .className.search("active"),
      "after clicking switch active element to selected"
    );

    await click(".single-forecast:first-child");

    assert.notOk(
      this.element
        .querySelector(".single-forecast:last-child")
        .className.search("active"),
      "switch last element again to unactive"
    );
    assert.ok(
      this.element
        .querySelector(".single-forecast:first-child")
        .className.search("active"),
      "switch active element again to default"
    );
  });
});
