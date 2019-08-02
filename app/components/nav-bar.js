import Component from "@ember/component";

export default Component.extend({
  tagName: "nav",
  classNames: ["nav-bar layout-row layout-align-center-center"],
  localization: 0,
  actions: {
    searchForForecast() {
      const localization = this.get("localization");
      if (!localization.id) {
        return this.set(
          "errorMessage",
          "You need to specify valid localization if you want to find forecast"
        );
      }
      this.transitionToForecast(localization.id);
    }
  }
});
