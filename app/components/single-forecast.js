import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  tagName: "",
  isActive: computed("forecast", "selectedForecast", function() {
    const forecast = this.get("forecast");
    const selectedForecast = this.get("selectedForecast");
    if (forecast === selectedForecast) return true;
    return false;
  }),
  convertedTime: computed("forecast.time", function() {
    return new Date(this.get("forecast.time"));
  }),
  imageSource: computed("forecast.icon", function() {
    const icon = this.get("forecast.icon");
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }),
  convertedTemp: computed("forecast.temp", "isCelsius", function() {
    const temp = this.get("forecast.temp");
    if (this.get("isCelsius")) return Math.round(temp) + " °C ";
    return Math.round(temp * 9 / 5 + 32) + " F ";
  }),
  actions: {
    selectForecast() {
      const forecast = this.get("forecast");
      this.set("selectedForecast", forecast);
    }
  }
});
