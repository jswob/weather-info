import DS from "ember-data";
const { Model, attr } = DS;

export default Model.extend({
  cityId: attr("string"),
  city: attr("string"),
  country: attr("string")
});
