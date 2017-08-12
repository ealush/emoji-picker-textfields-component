import React from 'react'; // eslint-disable-line no-unused-vars
import { storiesOf, action } from '@kadira/storybook';
import { EmojiInput, EmojiTextarea } from '../src';
import './style.scss';

class JustAWrapper extends React.Component {

    constructor() {
        super();
        this.state = { unified: ''};
        this.onChange = this.onChange.bind(this);
    }
    onChange(e, value, unified) {
        this.setState({ unified });
    }
    render() {
        const html = {__html: this.state.unified};
        if (this.props.input) {
            return (
                <div style={{height: '100%', marginTop: '350px', width: '300px'}}>
                    <div className="unified" dangerouslySetInnerHTML={html}/>
                    <div style={{height: '25px'}}>
                        <EmojiInput onChange={this.onChange}/>
                    </div>
                </div>
            );
        }
        return (
            <div style={{height: '100%', marginTop: '300px', width: '300px'}}>
                <div className="unified" dangerouslySetInnerHTML={html}/>
                <div style={{height: '100px'}}>
                    <EmojiTextarea onChange={this.onChange}/>
                </div>
            </div>
        );
    }
}

// eslint-disable-next-line no-undef
storiesOf('Emoji TextFields', module)
    .add('Input', () => (
        <JustAWrapper input={true}/>
    ))
    .add('Textarea', () => (
        <JustAWrapper textarea={true}/>
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