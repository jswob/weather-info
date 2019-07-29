import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),
  tagName: "",
  init() {
    this._super(...arguments);
    return this.set("user", this.store.createRecord("user"));
  },
  willDestroyElement() {
    return this.get("user").unloadRecord();
  },
  actions: {
    createUser() {
      return this.get("user").save();
    }
  }
});
