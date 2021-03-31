import { Component } from 'react';
import './MVButton.scss';

class MVButton extends Component {

    constructor(props) {
        super(props);
        this.value = this.props.value || 'Button';
        this.onClick = this.props.onClick || ((e) => {});
    }

    render() {
        return  (
            <input type='button' className='MVButton' value={this.value} onClick={this.onClick}></input>
        );
    }
}

export default MVButton;