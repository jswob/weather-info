import DS from "ember-data";
const { Model, attr, hasMany } = DS;

export default Model.extend({
  email: attr("string"),
  password: attr("string"),
  localizations: hasMany("localization"),
  createdAt: attr("date"),
  updatedAt: attr("date")
});
