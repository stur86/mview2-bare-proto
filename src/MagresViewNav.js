import { React, Component } from 'react';
import './MagresViewNav.scss';
import MVButton from './controls/MVButton';
import MVSelect from './controls/MVSelect';
import MVOption from './controls/MVOption';

class MagresViewNav extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className='MagresViewNav'>
                <nav>
                    <h2 className='MagresViewTitle pad-spacious'><span className='mvorange-base'>M</span>agres<span className='mvblue-base'>V</span>iew 2.0
                        <span style={{fontSize: '0.5em'}}>&nbsp;(prototype)</span>
                    </h2>
                    <span className='pad-spacious'>
                        {/* <input type="button" value="Show panel" onClick={this.props.onSelectPanel}></input> */}
                        <MVSelect onSelectValue={this.props.onSelectPanel}>
                            <MVOption value="ms" text="Magnetic Shielding"/>
                            <MVOption value="efg" text="Electric Field Gradient"/>
                            <MVOption value="none" text="Hide all"/>
                        </MVSelect>
                    </span>
                </nav>
            </header>
            );
    }
}

export default MagresViewNav;