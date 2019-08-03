import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { alias } from "@ember/object/computed";

export default Component.extend({
  media: service(),
  classNames: ["main-info", "layout-column", "layout-align-center-center"],
  classNameBindings: ["mobile"],
  mobile: alias("media.isMobile")
});
