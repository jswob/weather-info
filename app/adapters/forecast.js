import DS from "ember-data";
import ENV from "weather-info/config/environment";
import fetch from "fetch";

export default DS.JSONAPIAdapter.extend({
  query(store, type, query) {
    return fetch(
      "https://api.openweathermap.org/data/2.5/forecast?id=" +
        query.id +
        "&appid=" +
        ENV.OPENWEATHERMAP_API_KEY
    ).then(function(response) {
      return response.json();
    });
  }
});
