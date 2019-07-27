import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  actions: {
      createUser(){
          console.log("User was succesfully created");
      }
  }
});
