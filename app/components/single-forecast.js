import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  tagName: "",
  isCelsius: true,
  isActive: computed("forecast", "selectedForecast", function() {
    const forecast = this.get("forecast");
    const selectedForecast = this.get("selectedForecast");
    if (forecast === selectedForecast) return true;
    return false;
  }),
  convertedTemp: computed("forecast.temp", "isCelsius", function() {
    const temp = this.get("forecast.temp");
    if (this.get("isCelsius")) return Math.round(temp - 273) + " °C ";
    return Math.round((9 / 5) * (temp - 273) + 32) + " F ";
  }),
  convertedTime: computed("forecast.time", function() {
    return new Date(this.get("forecast.time"));
  }),
  imageSource: computed("forecast.icon", function() {
    const icon = this.get("forecast.icon");
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }),
  actions: {
    changeToCelsius() {
      this.set("isCelsius", true);
    },
    changeToFahrenheit: function() {
      this.set("isCelsius", false);
    },
    selectForecast() {
      const forecast = this.get("forecast");
      this.set("selectedForecast", forecast);
    }
  }
});
