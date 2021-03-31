import aspirin from './aspirin.png';
import './MockRenderer.scss';
import { React, Component } from 'react';

class MockRenderer extends Component {

    render() {
        return (
            <div className='mock-renderer-div'>
                <img src={aspirin} alt={'Placeholder for 3D renderer'}></img>
            </div>
        );
    }
}

export default MockRenderer;