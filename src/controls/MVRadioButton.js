import './MVRadioButton.scss';
import { Component } from 'react';

class MVRadioButton extends Component {
    render() {
        return (
            <span className="MVRadioButton">
                <input id={this.props.id} name={this.props.name} type="radio" checked={this.props.checked}/>
                <label htmlFor={this.props.id}></label>{this.props.label}
            </span>
            );
    }
}

export default MVRadioButton;
