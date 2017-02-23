import TouchBarItem from './-item';

const { TouchBar } = requireNode('electron');

export default TouchBarItem.extend({
  init() {
    this._super();
    this.set('_touchBarItem', new TouchBar.ColorPicker({
      change(newColor) {
        alert(`new color! ${newColor}`);
      }
    }));
  }
});
