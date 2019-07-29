import DS from "ember-data";
import ENV from "weather-info/config/environment";
import fetch from "fetch";

export default DS.JSONAPIAdapter.extend({
  queryRecord(store, type, {city, country}) {
    return fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
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
