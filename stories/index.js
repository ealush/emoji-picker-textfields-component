import React from 'react'; // eslint-disable-line no-unused-vars
import { storiesOf, action } from '@kadira/storybook';
import { EmojiInput, EmojiTextarea } from '../src';

// eslint-disable-next-line no-undef
storiesOf('Emoji TextFields', module)
.add('Input', () => (
    <div style={{height: '100%', marginTop: '350px', width: '300px'}}>
            <div style={{height: '25px'}}>
                <EmojiInput/>
            </div>
        </div>
    ))
    .add('Textarea', () => (
        <div style={{height: '100%', marginTop: '300px', width: '300px'}}>
            <div style={{height: '100px'}}>
                <EmojiTextarea/>
            </div>
        </div>
    ));

// eslint-disable-next-line no-undef
storiesOf('Autoclose mode', module)
    .add('Input', () => (
        <div style={{height: '100%', marginTop: '350px', width: '300px'}}>
            <div style={{height: '25px'}}>
                <EmojiInput autoClose/>
            </div>
        </div>
    ))
    .add('Textarea', () => (
        <div style={{height: '100%', marginTop: '300px', width: '300px'}}>
            <div style={{height: '100px'}}>
                <EmojiTextarea autoClose/>
            </div>
        </div>
    ));