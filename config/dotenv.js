/* eslint-env node */

"use strict";

const path = require("path");

module.exports = function(/* env */) {
  return {
    clientAllowedKeys: ["OPENWEATHERMAP_API_KEY", "GOOGLE_PLACE_API_KEY"],
    fastbootAllowedKeys: [],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), ".env")
  };
};
