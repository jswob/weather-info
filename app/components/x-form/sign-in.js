import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  actions: {
      signIn(){
          console.log("The user has successfully logged in");
      }
  }
});

