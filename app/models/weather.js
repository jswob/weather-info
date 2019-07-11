import DS from 'ember-data';
const { Model } = DS;

const {attr} = DS;

export default Model.extend({
    name: attr("string"),
    weather: attr(),
    main: attr()
});
