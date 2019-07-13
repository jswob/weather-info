import DS from 'ember-data';
const { Model } = DS;

const {attr} = DS;

export default Model.extend({
    temp: attr("number"),
    pressure: attr("number"),
    humidity: attr("number"),
    country: attr("string"),
    description: attr("string"),
    icon: attr("string"),
    wind: attr("string")
});
