import DS from "ember-data";
import ENV from "weather-info/config/environment";
import fetch from "fetch";

export default DS.JSONAPIAdapter.extend({
  query(store, type, { city, country }) {
    return fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "," +
        country +
        "&appid=" +
        ENV.OPENWEATHERMAP_API_KEY
    ).then(function(response) {
      return response.json();
    });
  }
});
