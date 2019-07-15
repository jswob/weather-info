import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
    media: service(),
    tagName: "nav",
    classNames: ["nav-bar", "layout-row"]
});
