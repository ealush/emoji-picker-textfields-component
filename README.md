# React Text field components with emoji picker

[![Greenkeeper badge](https://badges.greenkeeper.io/ealush/emoji-picker-textfields-component.svg)](https://greenkeeper.io/)

[Live demo](https://ealush.github.io/emoji-picker-textfields-component/)

Companion package to [Emoji Picker React](https://github.com/ealush/emoji-picker). Comes pre-integrated, and bundled with version 1.4.0 of the picker.

![alt tag](https://raw.githubusercontent.com/ealush/emoji-picker/master/screenshots/recording.gif)

```
npm i emoji-picker-textfield --save
```

Useage:

```js
import React from 'react';
import EmojiField from 'emoji-picker-textfield';

function inputComponent(props) {
    // you need to explicitly pass 'fieldType="input"'.
    return <EmojiField name="my-input" onChange={props.onChange} fieldType="input"/>
}

function textAreaComponent(props) {
    // defaults to textarea, no need to pass fieldType
    return <EmojiField name="my-textarea" onChange={props.onChange}/>
}
```

## Note on onChange:
When you onChange function fires, it has the following params (in order):
* event | Event || null - the event triggered by the change. When triggered manually, is set to null
* value | String - the actual value of the text field
```js
onChange(e, value) { ... }
```

## Getting the emoji values
The component exposes the following functions to get the unified value manually:
`getUnicode`: Returns the field value with unicode emoji characters
`getImages`: Returns the field value with html image tags representing the emojis

To gain access to these functions, you need to store the component as a ref:
```js
<EmojiField ref={(_field) => this._field = _field}/>
```

Then, to call the function, you simply:
```js
const unicodeValue = this._field.getUnicode();
const imagesValue = this._field.getImages();
```

## Autoclosing the picker after choosing an emoji:

```js
<EmojiField autoClose={true}/>
```


![alt tag](https://raw.githubusercontent.com/ealush/emoji-picker/master/screenshots/1.png)

![alt tag](https://raw.githubusercontent.com/ealush/emoji-picker/master/screenshots/4.png)

![alt tag](https://raw.githubusercontent.com/ealush/emoji-picker/master/screenshots/2.png)

![alt tag](https://raw.githubusercontent.com/ealush/emoji-picker/master/screenshots/3.png)

# Attributions
You can use this **picker**, free of charge, no attribution is needed. The emojis have their own license.

All emoji images in this project are the property of the [Emojione](www.emojione.com). Usage of the images is subjeced to their [free license](https://www.emojione.com/developers/free-license).

* [Freepik/FlatIcon](https://www.flaticon.com/packs/emoji) For the picker-trigger icon.

Other shout-outs:
* [iamcal/emoji-data](https://github.com/iamcal/emoji-data) An amazing project, containing emoji data. All the info (names, keywords, etc) in this picker is generated from their data.
* [throttle-debounce](https://www.npmjs.com/package/throttle-debounce) npm package, used multiple times in the project.
* [iconmonstr](https://iconmonstr.com/) used for the category icons.
* [React Storybook](https://www.npmjs.com/package/@kadira/storybook), made building the live demo fast and simple.
