import DS from 'ember-data';
import ENV from "weather-info/config/environment";
import fetch from 'fetch';

export default DS.JSONAPIAdapter.extend({
    host: "https://api.openweathermap.org",
    namespace: "data/2.5",
    queryRecord(store, type, query) {
        return fetch('https://api.openweathermap.org/data/2.5/weather?id=' + query.id + "&appid=" + ENV.OPENWEATHERMAP_API_KEY);
    }
});
