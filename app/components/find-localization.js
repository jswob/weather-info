import Component from "@ember/component";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),
  tagName: "",
  labelClasses: computed("address", function() {
    const address = this.get("address");
    let classes = "material-form-field-label";
    if (address) classes += " active";
    return classes;
  }),
  formClasses: computed("errorMessage", function() {
    const errorMessage = this.get("errorMessage");
    let classes = "material-form-field";
    if (errorMessage) classes += " material-form-field-invalid";
    return classes;
  }),
  actions: {
    findLocalization(data) {
      const place = JSON.parse(JSON.stringify(data, undefined, 2));
      const localization = {};
      const isAlreadyInStore = this.store.peekRecord("localization", place.id);
      if (isAlreadyInStore) return this.set("localization", isAlreadyInStore);
      if (!place.address_components) {
        return this.set(
          "errorMessage",
          "Could not specify locality for that place."
        );
      }
      place.address_components.forEach(addressComponent => {
        if (addressComponent.types[0] === "locality")
          localization.city = addressComponent.long_name;
        if (addressComponent.types[0] === "country")
          localization.country = addressComponent.short_name;
      });
      localization.id = place.id;
      if (!localization.city || !localization.country)
        return this.set(
          "errorMessage",
          "Could not specify locality for that place."
        );
      this.set("errorMessage", null);
      this.set(
        "localization",
        this.store.createRecord("localization", localization)
      );
    }
  }
});
