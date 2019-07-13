import DS from "ember-data";

export default DS.JSONAPISerializer.extend({
  normalizeQueryResponse(store, type, payload) {
    const forecasts = {
      data: []
    };
    payload.list.forEach(forecast => {
      forecasts.data.push({
        id: forecast.dt,
        type: type.modelName,
        attributes: {
          temp: Math.round(forecast.main.temp - 275.15),
          pressure: forecast.main.pressure,
          humidity: forecast.main.humidity,
          country: payload.city.country,
          description: forecast.weather[0].description,
          icon: forecast.weather[0].icon,
          wind: forecast.wind.speed,
          time: forecast.dt_txt,
          city: payload.city.name
        }
      });
    });
    return forecasts;
  }
});
