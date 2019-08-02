import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    transitionToForecast(id) {
      this.transitionToRoute("forecast", id);
    }
  }
});
