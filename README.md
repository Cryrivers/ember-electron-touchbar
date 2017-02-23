# ember-electron-touchbar

**Do not use this addon at this moment. We are still waiting for Electron to land on [Touch Bar support](https://github.com/electron/electron/pull/8095).**

Create Touch Bars for your routes right in the templates.

#### Example

```hbs
{{#touch-bar as |controls|}}
    {{controls.button label='Hello World' on-click=(action 'popupHelloWorld')}}
    {{controls.buttom image='/path/to/image.png' on-click=(action 'showBiggerImage')}}
    {{controls.color-picker on-change=(action 'blendColor')}}
    {{#controls.pop-over label='Pop Over' show-close-button=true as |controls|}}
        {{#controls.group as |controls|}}
            {{controls.button label='Option 1' on-click=(action 'goOption' 1)}}
            {{controls.button label='Option 2' on-click=(action 'goOption' 2)}}
            {{controls.button label='Option 3' on-click=(action 'goOption' 3)}}
        {{/controls.group}}
    {{/controls.pop-over}}
{{/touch-bar}}
```
