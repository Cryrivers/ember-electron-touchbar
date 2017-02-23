import TouchBarItem from './-item';

const { TouchBar } = requireNode('electron');

export default TouchBarItem.extend({
  tagName: '',
  init() {
    this._super();
    this.set('_touchBarItem', new TouchBar.Button({
      label: 'Hello World',
      backgroundColor: 'FF0000',
      labelColor: '0000FF',
      click() {
        alert('bing');
      }
    }));
  }
});
