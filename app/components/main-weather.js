import Component from "@ember/component";
import { computed } from "@ember/object";
import { alias } from "@ember/object/computed";
import { inject as service } from "@ember/service";

export default Component.extend({
  media: service(),
  classNameBindings: ["mobile"],
  mobile: alias("media.isMobile"),
  isCelsius: true,
  tempIcon: computed("isCelsius", function() {
    if (this.get("isCelsius")) return "°C";
    return "F";
  }),
  convertedTemp: computed("weather.temp", "isCelsius", function() {
    const temp = this.get("weather.temp");
    if (this.get("isCelsius")) return Math.round(temp - 273) + " °C ";
    return Math.round(9 / 5 * (temp - 273) + 32) + " F ";
  }),
  convertedTime: computed("weather.time", function() {
    return new Date(this.get("weather.time"));
  }),
  localization: computed("weather.{city,country}", function() {
    return `${this.get("weather.city")}, ${this.get("weather.country")}`;
  }),
  actions: {
    changeToCelsius() {
      this.set("isCelsius", true);
    },
    changeToFahrenheit: function() {
      this.set("isCelsius", false);
    }
  }
});
