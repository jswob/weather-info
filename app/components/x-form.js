import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";

export default Component.extend({
  media: service(),

  // sign-in or sign-up classes are allowed
  classNameBindings: [
    "media.isMobile:layout-column:layout-row",
    "media.isMobile:vertical"
  ],

  classNames: ["form"],

  formNavBarClasses: computed("media.isMobile", function() {
    const isMobile = this.get("media.isMobile");
    if (isMobile)
      return "form-nav-bar layout-column layout-align-start-center vertical";
    return "form-nav-bar layout-column layout-align-start-center horizontal";
  }),

  formMainWrapperClasses: computed("media.isMobile", function() {
    const isMobile = this.get("media.isMobile");
    if (isMobile)
      return "form-main-wrapper vertical";
    return "form-main-wrapper horizontal";
  }),

  formDividerClasses: computed("media.isMobile", function() {
    const isMobile = this.get("media.isMobile");
    if (isMobile)
      return "form-divider vertical";
    return "form-divider horizontal";
  }),

  isSignUp: computed("type", function() {
    const type = this.get("type");
    if(type === "sign-up") return true;
    return false
  })
});
