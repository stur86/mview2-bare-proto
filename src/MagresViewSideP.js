import { Component } from 'react';
import './MagresViewSideP.scss'

class MagresViewSideP extends Component {

    render() {
        return (
            <div className={'MagresViewSideP' + (this.props.open? ' open' : '')}>
                {this.props.children}
            </div>
            );
    }
}

export default MagresViewSideP;