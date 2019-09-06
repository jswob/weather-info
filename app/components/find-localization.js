import Component from "@ember/component";
import { isBlank } from "@ember/utils";
import { inject as service } from "@ember/service";

export default Component.extend({
  googlePlaceAutocompleteService: service("google-place-autocomplete"),
  tagName: "",

  async _getPlaceDetails(placeId) {
    const googleRequest = {
      placeId: placeId,
      fields: ["address_components", "place_id"]
    };
    let placeDetails = await this.get(
      "googlePlaceAutocompleteService"
    ).getDetails(googleRequest);
    this._getCityName(placeDetails);
  },

  _getCityName(placeDetails) {
    placeDetails = JSON.parse(JSON.stringify(placeDetails));
    const placeServiceResult = {};
    placeDetails.address_components.forEach(place => {
      if (place.types.includes("locality"))
        placeServiceResult.city = place.short_name;
      if (place.types.includes("country"))
        placeServiceResult.country = place.short_name;
    });
    if (placeServiceResult.country && placeServiceResult.city)
      return this.set("placeServiceResult", placeServiceResult);
  },

  actions: {
    async findPlaceDetails(selectedPlace) {
      if (isBlank(selectedPlace)) {
        this.setProperties({
          selectedPlace: null,
          predictions: [],
          placeServiceResult: null
        });
        return;
      }
      await this._getPlaceDetails(selectedPlace.place_id);
      this.setProperties({
        selectedPlace: selectedPlace,
        predictions: []
      });
    },

    async requestPredictions(placeServiceInput) {
      if (isBlank(placeServiceInput)) {
        this.setProperties({ predictions: [], placeServiceResult: null });
      }
      let properties = { input: placeServiceInput };
      let predictions = await this.get(
        "googlePlaceAutocompleteService"
      ).getPlacePredictions(properties);
      this.set("predictions", predictions);
    }
  }
});
