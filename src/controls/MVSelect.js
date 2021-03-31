import { Component } from 'react';
import './MVSelect.scss';

class MVSelect extends Component {

    onChange(e) {
        this.props.onSelectValue(e.target.value);
    }

    render() {
        return (
            <select className='MVSelect' onChange={this.onChange.bind(this)}>
                {this.props.children}
            </select>
        );
    }
}

export default MVSelect;