import './MVHeader.scss';
import { Component } from 'react';

class MVHeader extends Component {

    render() {
        return (
            <h1 className='MVHeader'><img src={this.props.icon} /> | {this.props.children}</h1>
        )
    }
}

export default MVHeader;