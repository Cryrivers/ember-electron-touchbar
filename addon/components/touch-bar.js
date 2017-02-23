import Ember from 'ember';
import layout from '../templates/components/touch-bar';

export default Ember.Component.extend({
  layout,
  tagName: '',

  routingService: Ember.inject.service('-routing'),
  touchBarService: Ember.inject.service('-touch-bar'),
  /**
   * @private
   * @property _controlGroup
   * Touch Bar Layout
   */
  _controlGroup: [],
  didInsertElement() {
    let { routingService, touchBarService } = this.getProperties(['routingService', 'touchBarService']);
    let currentRouteName = routingService.get('currentRouteName');
    if (!touchBarService.isTouchBarRegisteredForRoute(currentRouteName)) {
      touchBarService.registerTouchBarForRoute(this.get('_controlGroup'), currentRouteName);
    }
  }
});
