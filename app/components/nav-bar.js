import Component from "@ember/component";
import $ from "jquery";
import { inject as service } from "@ember/service";

export default Component.extend({
  media: service(),
  tagName: "nav",
  classNames: ["nav-bar", "layout-row"],
  fullAddress: null,
  googleAuto: null,

  actions: {
    done() {
      $("#message")
        .fadeOut(500, function(){
          this.set("message", "Focus out");
        })
        .fadeIn(500);
    },
    placeChanged(place) {
      this.set("placeJSON", JSON.stringify(place, undefined, 2));
      this.set("googleAuto", "done");
      if (place.adr_address) {
        let regexp = /(<span(?: \w+="[^"]+")*(?: \w+="[^"]+")*>([^<]*)<\/span>)/g,
          fullAddress = place.adr_address.replace(regexp, "$2");
        this.set("cleanFullAddress", fullAddress);
      }
      this.set("fullAddress", place.adr_address);
    }
  }
});
