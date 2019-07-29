import DS from "ember-data";
import {buildValidations, validator} from 'ember-cp-validations';
const { Model, attr, hasMany } = DS;

const Validations = buildValidations({
  email: [
    validator("presence", {
      presence: true,
      message: "Email can not be empty"
    }),
    validator("format", {
      type: "email"
    }),
  ],
  password: [
    validator("presence", {
      presence: true,
      message: "Password can not be empty"
    }),
    validator('format', {
      regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/,
      message: 'Password must include at least one upper case letter, one lower case letter, and a number'
    }),
    validator("length", {
      min: 6,
      max: 40
    })
  ]
});

export default Model.extend(Validations, {
  email: attr("string"),
  password: attr("string"),
  localizations: hasMany("localization"),
  createdAt: attr("date"),
  updatedAt: attr("date")
});
