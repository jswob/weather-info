import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  router: service(),
  store: service(),
  tagName: "nav",
  classNames: ["nav-bar", "layout-row", "layout-align-center-center"],
  localization: 0,
  actions: {
    async searchForForecast() {
      const localizationData = this.get("localization");
      if (!localizationData.city && !localizationData.country)
        return this.set("error", "Localization is incorrect!");
      const localization = await this.store.createRecord("localization").save();
      if(localization) 
        return this.router.transitionTo("forecast", localization);
      return this.set("error", "Some bug occur");
    }
  }
});
