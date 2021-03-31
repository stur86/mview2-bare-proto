import { Component } from 'react';
import './MVOption.scss';

class MVOption extends Component {

    render() {
        return (
            <option className="MVOption" value={this.props.value}>{this.props.text}</option>
        );  
    }
}

export default MVOption;