import DS from "ember-data";

export default DS.JSONAPISerializer.extend({
  normalizeFindRecordResponse(store, type, payload) {
    return {
      data: {
        id: payload.id,
        type: type.modelName,
        attributes: {
          temp: Math.round(payload.main.temp - 275.15),
          pressure: payload.main.pressure,
          humidity: payload.main.humidity,
          country: payload.sys.country,
          description: payload.weather[0].description,
          icon: payload.weather[0].icon,
          wind: payload.wind.speed
        }
      }
    };
  }
});
