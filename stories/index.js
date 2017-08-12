import React from 'react'; // eslint-disable-line no-unused-vars
import { storiesOf, action } from '@kadira/storybook';
import { EmojiInput, EmojiTextarea } from '../src';

// eslint-disable-next-line no-undef
storiesOf('Element Wrappers', module)
    .add('Input', () => (
        <div style={{height: '100%', marginTop: '300px', width: '300px'}}>
            <EmojiInput/>
        </div>
    ))
    .add('Textarea', () => (
        <div style={{height: '100%', marginTop: '300px', width: '300px'}}>
            <div style={{height: '100px'}}>
                <EmojiTextarea/>
            </div>
        </div>
    ));