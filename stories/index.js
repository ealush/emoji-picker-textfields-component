import React from 'react'; // eslint-disable-line no-unused-vars
import { storiesOf } from '@kadira/storybook';
import EmojiField from '../src';
import { debounce } from 'throttle-debounce';
import './style.scss';

class JustAWrapper extends React.Component {

    constructor() {
        super();
        this.state = { unified: ''};
        this.onChange = debounce(50, this.onChange.bind(this));
    }
    onChange(e, value) {
        const unified = this._field.getImages(value);
        this.setState({ unified });
    }
    render() {
        const html = {__html: this.state.unified};
        if (this.props.input) {
            return (
                <div style={{height: '100%', marginTop: '350px', width: '300px'}}>
                    <div className="unified" dangerouslySetInnerHTML={html}/>
                    <div style={{height: '25px'}}>
                        <EmojiField
                            {...this.props}
                            onChange={this.onChange}
                            ref={(_field) => this._field = _field}
                            fieldType='input'/>
                    </div>
                </div>
            );
        }
        return (
            <div style={{height: '100%', marginTop: '300px', width: '300px'}}>
                <div className="unified" dangerouslySetInnerHTML={html}/>
                <div style={{height: '100px'}}>
                    <EmojiField
                        {...this.props}
                        onChange={this.onChange}
                        ref={(_field) => this._field = _field}
                        fieldType='textarea'/>
                </div>
            </div>
        );
    }
}

// eslint-disable-next-line no-undef
storiesOf('Emoji TextFields', module)
    .add('Input', () => (
        <JustAWrapper input={true} autoClose/>
    ))
    .add('Textarea', () => (
        <JustAWrapper autoclose={true}/>
    ));