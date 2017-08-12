# React Text field components with emoji picker

[Live demo](https://ealush.github.io/emoji-picker-textfields-component/)

Input and textarea, already integrated with [Emoji Picker React](https://github.com/ealush/emoji-picker).

![alt tag](https://raw.githubusercontent.com/ealush/emoji-picker/gh-pages/screenshots/1.png)

Useage:

```js
import React from 'react';
import { EmojiInput, EmojiTextarea } from 'emoji-picker-textfield';

function myComponent(props) {
    return <EmojiInput name="my-input" onChange={props.onChange}/>
}
```

## Note on onChange:
When you onChange function fires, it has the following params (in order):
* event | Event || null - the event triggered by the change. When triggered manually, is set to null
* value | String - the actual value of the text field
* unifiedValue | String - the content, with the emoji names replaced by either unicode emoji chars or html image tags (according to the configuration).

```js
onChange(e, value, unifiedValue) { ... }
```

## Getting the unified value manually
The component exposes the following functions to get the unified value manually:
`getUnicode`: Returns the field value with unicode emoji characters
`getImages`: Returns the field value with html image tags representing the emojis


```
npm i emoji-picker-textfield --save
```

![alt tag](https://raw.githubusercontent.com/ealush/emoji-picker/gh-pages/screenshots/2.png)

![alt tag](https://raw.githubusercontent.com/ealush/emoji-picker/gh-pages/screenshots/3.png)

![alt tag](https://raw.githubusercontent.com/ealush/emoji-picker/gh-pages/screenshots/4.png)


# Attributions
You can use this **picker**, free of charge, no attribution is needed. The emojis have their own license.

All emoji images in this project are the property of the [Emojione](www.emojione.com). Usage of the images is subjeced to their [free license](https://www.emojione.com/developers/free-license).

* [Freepik/FlatIcon](https://www.flaticon.com/packs/emoji) For the picker-trigger icon.

Other shout-outs:
* [iamcal/emoji-data](https://github.com/iamcal/emoji-data) An amazing project, containing emoji data. All the info (names, keywords, etc) in this picker is generated from their data.
* [throttle-debounce](https://www.npmjs.com/package/throttle-debounce) npm package, used multiple times in the project.
* [iconmonstr](https://iconmonstr.com/) used for the category icons.
* [React Storybook](https://www.npmjs.com/package/@kadira/storybook), made building the live demo fast and simple.
