import { Template } from 'meteor/templating';

const string = 'string';
console.log(typeof string);

Template.body.helpers({
  string,

  strings: [string],

  stringType: typeof string,

  thisType() {
    return typeof this;
  },
});

Template.stringData.onCreated(function onCreated() {
  console.log('stringData', typeof this.data);
});

Template.stringData.helpers({
  thisType() {
    return typeof this;
  },
})

Template.objectData.onCreated(function onCreated() {
  console.log('objectData', typeof this.data.string);
});

Template.objectData.helpers({
  stringType() {
    return typeof this.string;
  },
});
