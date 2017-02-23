/* globals requireNode: false */
import Ember from 'ember';

const { remote } = requireNode('electron');
const _touchBarMappingByRoute = {};

export default Ember.Service.extend({
  routingService: Ember.inject.service('-routing'),
  init() {
    this._super();
    let routingService = this.get('routingService');
    this.mainWindow = remote.getCurrentWindow();
    routingService.router.on('didTransition', () => {
      let currentRouteName = routingService.get('currentRouteName');
      if (this.isTouchBarRegisteredForRoute(currentRouteName)) {
        this.mainWindow.setTouchBar(_touchBarMappingByRoute[currentRouteName]);
      }
    });
  },
  isTouchBarRegisteredForRoute(routeName) {
    return Boolean(_touchBarMappingByRoute[routeName]);
  },
  registerTouchBarForRoute(controls, routeName) {
    _touchBarMappingByRoute[routeName] = controls;
  }
});
