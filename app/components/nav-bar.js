import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  media: service(),
  store: service(),
  tagName: "nav",
  classNames: ["nav-bar", "layout-row"],

  actions: {
    placeChanged(data) {
      const place = JSON.parse(JSON.stringify(data, undefined, 2));
      const localization = {};
      if(!place.address_components){
        return this.set("errorMessage", "Could not specify locality for that place.");
      }
      place.address_components.forEach((addressComponent) => {
        if(addressComponent.types[0] === "locality"){
          localization.city = addressComponent.long_name;
        }
        if(addressComponent.types[0] === "country"){
          localization.country = addressComponent.short_name;
        }
      })
      if(!localization.city || !localization.country){
        return this.set("errorMessage", "Could not specify locality for that place.");
      }
      return this.store.createRecord("localization", localization);

    }
  }
});
