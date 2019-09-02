import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  classNames: ["temp-wrapper"],
  isCelsius: true,
  convertedTemp: computed("temperature", "isCelsius", function() {
    const temp = this.get("temperature");
    if (this.get("isCelsius")) return Math.round(temp - 273) + " °C ";
    return Math.round((9 / 5) * (temp - 273) + 32) + " F ";
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
