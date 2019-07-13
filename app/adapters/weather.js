import DS from "ember-data";
import ENV from "weather-info/config/environment";
import fetch from "fetch";

export default DS.JSONAPIAdapter.extend({
  findRecord(store, type, id) {
    return fetch(
      "https://api.openweathermap.org/data/2.5/weather?id=" +
        id +
        "&appid=" +
        ENV.OPENWEATHERMAP_API_KEY
    ).then(function(response) {
      return response.json();
    });
  }
});
