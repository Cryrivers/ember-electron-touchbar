import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  didInsertElement() {
    this._super();
    this.get('_parent').pushObject(this.get('_touchBarItem'));
  }
});
