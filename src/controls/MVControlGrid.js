import { Component } from 'react';
import './MVControlGrid.scss';

class MVControlGrid extends Component {

    render() {
        return(
            <div className='MVControlGrid'>
                {this.props.children}
            </div>
        );
    }
}

export default MVControlGrid;