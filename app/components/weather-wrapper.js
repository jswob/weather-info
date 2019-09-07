import Component from "@ember/component";

export default Component.extend({
  classNames: ["weather-wrapper"],
  isCelsius: true,
  didReceiveAttrs() {
    this._super(...arguments);
    this.set("selectedForecast", this.get("forecasts").toArray()[0]);
  },
});
