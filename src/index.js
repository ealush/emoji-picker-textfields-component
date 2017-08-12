import React from 'react';
import EmojiField from './EmojiField';

const EmojiInput = (props) => <EmojiField {...props} fieldType='input'/>;
const EmojiTextarea = (props) => <EmojiField {...props} fieldType='textarea'/>;

export {
    EmojiInput,
    EmojiTextarea
};