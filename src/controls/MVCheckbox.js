import { Component } from 'react';
import './MVCheckbox.scss';

class MVCheckbox extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="MVCheckbox">
                <input id={this.props.id} type="checkbox" checked={this.props.checked}/>
                <label htmlFor={this.props.id}></label>{this.props.label}
            </span>
        );
    }
}

export default MVCheckbox;