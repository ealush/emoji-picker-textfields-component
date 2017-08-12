import JSEMOJI from 'emoji-js';
import config from '../config';

function emojiConverter({supports_css = config.css,
    allow_native = config.native,
    replace_mode = config.replace,
    img_set = config.set,
    path = config.path,
    resolution = config.resolution} = {}) {

    const jsEmoji = new JSEMOJI();
    jsEmoji.supports_css = supports_css;
    jsEmoji.allow_native = allow_native;
    jsEmoji.replace_mode = replace_mode;
    jsEmoji.img_set = img_set;
    jsEmoji.img_sets[img_set].path = `${path}/${resolution}/`;

    return jsEmoji;
}

export default emojiConverter;