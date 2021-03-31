import { Component } from 'react';
import './MVText.scss';

class MVText extends Component {

    constructor(props) {
        super(props);
        this.label = this.props.label || '';
        this.id = this.props.id || 'mvtext-element';
        this.size = this.props.size || 12;
        this.units = this.props.units || '';
        this.inline = this.props.inline;
        this.events = {
            onChange: this.props.onChange || ((e) => {}),
            onSubmit: this.props.onSubmit || ((e) => {})
        };
        this.warnSubmit = this.props.warnSubmit;

        this.state = {
            value: '',
            submitted: true
        }
    }

    onChangeContent(event) {
        this.setState({
            ...this.state,
            value: event.target.value,
            submitted: false
        });
        this.events.onChange(event);
    }

    onKeyPress(event) {
        if (event.code == 'Enter') {
            this.setState({
                ...this.state,
                submitted: true
            });
            this.events.onSubmit(event);            
        }
    }

    render() {
        const add_inline = (this.inline? ' MVTextInline' : '');
        const add_submit = (this.warnSubmit? ' MVTextSubmit' : '');
        const show_submit = ((this.warnSubmit && !this.state.submitted)? ' MVTextSubmit' : '');

        return (
            <div className={'MVText' + add_inline}>
                <label htmlFor={this.id} className={'MVText-Label' + add_inline}>{this.label}</label>
                <span className='MVText-Units'>
                    <input id={this.id} className={'MVText-Input' + add_submit} type='text' size={this.size} maxLength={this.size}
                        onChange={this.onChangeContent.bind(this)} onKeyPress={this.onKeyPress.bind(this)}
                        value={this.state.value}>
                    </input>
                    {this.units}
                    <span className={'MVText-ToSubmit'+show_submit}>&bull;</span>
                </span>
            </div>
        );
    }
}

export default MVText;