import TouchBarItem from './-item';

const { TouchBar } = requireNode('electron');

export default TouchBarItem.extend({
  init() {
    this._super();
    this.set('_touchBarItem', new TouchBar.Slider({
      label: 'Slider 123',
      minValue: 0,
      maxValue: 1000,
      initialValue: 300,
      change(newValue) {
        console.log('Slider was changed', newValue);
      }
    }));
  }
});
