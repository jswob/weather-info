import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  tagName: "",
  imageUrl: computed("icon", function() {
    const icon = this.get("icon");
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  })
});
