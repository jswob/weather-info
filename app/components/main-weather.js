import Component from "@ember/component";
import { computed } from "@ember/object";
import { alias } from "@ember/object/computed";
import { inject as service } from "@ember/service";

export default Component.extend({
  media: service(),
  classNames: ["main-weather", "layout-align-start-start"],
  classNameBindings: ["mobile", "mobile:layout-column:layout-row"],
  mobile: alias("media.isMobile"),
  convertedTime: computed("weather.time", function() {
    return new Date(this.get("weather.time"));
  }),
  localization: computed("weather.{city,country}", function() {
    return `${this.get("weather.city")}, ${this.get("weather.country")}`;
  })
});
