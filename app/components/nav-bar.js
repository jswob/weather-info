import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";

export default Component.extend({
  media: service(),
  store: service(),
  tagName: "nav",
  classNames: ["nav-bar", "layout-row"],

  inputClasses: computed("errorMessage", function() {
    let classes = "main-input-container flex-95 layout-row ";
    if(this.get("errorMessage")) {
      classes += "error";
    }
    return classes;
  }),

  actions: {
    placeChanged(data) {
      const place = JSON.parse(JSON.stringify(data, undefined, 2));
      const localization = {};
      if (!place.address_components) {
        return this.set(
          "errorMessage",
          "Could not specify locality for that place."
        );
      }
      place.address_components.forEach(addressComponent => {
        if (addressComponent.types[0] === "locality") {
          localization.city = addressComponent.long_name;
        }
        if (addressComponent.types[0] === "country") {
          localization.country = addressComponent.short_name;
        }
      });
      if (!localization.city || !localization.country) {
        return this.set(
          "errorMessage",
          "Could not specify locality for that place."
        );
      }
      this.set("errorMessage", null);
      return this.store.createRecord("localization", localization);
    }
  }
});
