import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.queryRecord("weather", {
            id: 7532559
        });
    }
});
