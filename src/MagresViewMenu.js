import { React, Component } from 'react';
import MagresViewNav from './MagresViewNav';
import MagresViewSideP from './MagresViewSideP';
import MVControlGrid from './controls/MVControlGrid';
import MVText from './controls/MVText';
import MVHeader from './controls/MVHeader';
import MVCheckbox from './controls/MVCheckbox';
import MVRadioButton from './controls/MVRadioButton';
import MVRadioGroup from './controls/MVRadioGroup';
import ms_icon from './icons/ms.png';
import efg_icon from './icons/efg.png'


class MagresViewMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            panel: 'ms'
        }
    }

    openPanel(name) {
        this.setState({
            panel: name
        });
    }

    render() {
        return (
            <>
                <MagresViewSideP open={this.state.panel == 'ms'}>
                    <MVHeader icon={ms_icon}>Magnetic Shielding</MVHeader>
                    <MVControlGrid>
                        <MVCheckbox id="ms-ellipsoids" label='Ellipsoids'/>
                        <MVText label='Scale (0 = auto):' id='ms-ell-scale' size='5' units='' inline/>
                        <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                            <MVCheckbox id="ms-labels" label='Labels'/>
                            <MVCheckbox id="ms-cscale" label='Colour scale'/>
                            <span></span>
                        </div>           
                        <MVRadioGroup name="ms-lradio" label="Display:">
                            <MVRadioButton id="ms-lradio-iso" label="Isotropic component, absolute"/>
                            <MVRadioButton id="ms-lradio-shift" label="Isotropic component, with reference"/>              
                            <MVRadioButton id="ms-lradio-aniso" label="Anisotropy"/>              
                            <MVRadioButton id="ms-lradio-asymm" label="Asymmetry"/>              
                        </MVRadioGroup>
                    </MVControlGrid>
                </MagresViewSideP>
                <MagresViewSideP open={this.state.panel == 'efg'}>
                    <MVHeader icon={efg_icon}>Electric Field Gradient</MVHeader>
                    <MVControlGrid>
                        <MVCheckbox id="efg-ellipsoids" label='Ellipsoids'/>
                        <MVText label='Scale (0 = auto):' id='efg-ell-scale' size='5' units='' inline/>
                        <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                            <MVCheckbox id="efg-labels" label='Labels'/>
                            <MVCheckbox id="efg-cscale" label='Colour scale'/>
                            <span></span>
                        </div>           
                        <MVRadioGroup name="efg-lradio" label="Display:">
                            <MVRadioButton id="efg-lradio-iso" label="V_zz"/>             
                            <MVRadioButton id="efg-lradio-aniso" label="Anisotropy"/>              
                            <MVRadioButton id="efg-lradio-asymm" label="Quadrupolar constant"/>              
                            <MVRadioButton id="efg-lradio-asymm" label="Second-order quadrupolar shift"/>              
                        </MVRadioGroup>
                    </MVControlGrid>
                </MagresViewSideP>

                <MagresViewNav onSelectPanel={this.openPanel.bind(this)} />
            </>
            );
    }
}

export default MagresViewMenu;