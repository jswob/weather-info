import Route from "@ember/routing/route";

export default Route.extend({
  async model({ localization_id }) {
    const localization = await this.store.findRecord(
      "localization",
      localization_id
    );
    return this.store.query("forecast", {
      city: localization.get("city"),
      country: localization.get("country")
    });
  }
});
