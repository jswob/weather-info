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

  formNavBarClasses: computed("type", "media.isMobile", function() {
    const type = this.get("type");
    const isMobile = this.get("media.isMobile");
    if (isMobile)
      return "form-nav-bar layout-column layout-align-start-center vertical " + type;
    return "form-nav-bar layout-column layout-align-start-center horizontal " + type;
  }),

  formMainWrapperClasses: computed("type", "media.isMobile", function() {
    const type = this.get("type");
    const isMobile = this.get("media.isMobile");
    if (isMobile)
      return "form-main-wrapper vertical " + type;
    return "form-main-wrapper horizontal " + type;
  }),

  formDividerClasses: computed("type", "media.isMobile", function() {
    const type = this.get("type");
    const isMobile = this.get("media.isMobile");
    if (isMobile)
      return "form-divider vertical " + type;
    return "form-divider horizontal " + type;
  }),

  isSignUp: computed("type", function() {
    const type = this.get("type");
    if(type === "sign-up") return true;
    return false
  })
});
