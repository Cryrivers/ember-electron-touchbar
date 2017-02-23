import TouchBarItem from './-item';

const { TouchBar } = requireNode('electron');

export default TouchBarItem.extend({
  init() {
    this._super();
    this.set('_touchBarItem', new TouchBar.Label({
      label: 'Hello World'
    }));
  }
});
