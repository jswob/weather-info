import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
    city: attr("string"),
    country: attr("string"),
    owner: belongsTo("user")
});
