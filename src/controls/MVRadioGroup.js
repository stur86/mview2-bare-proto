import './MVRadioGroup.scss';
import { Component } from 'react';
import React from 'react';
import MVRadioButton from './MVRadioButton';

class MVRadioGroup extends Component {
    render() {

        const name = this.props.name || 'radios';
        // Add name to children
        const namedChildren = React.Children.map(this.props.children, (child) => {
            if (child.type === MVRadioButton) {
                return React.cloneElement(child, {name: name});
            }
            return child;
        });

        return (
            <div className="MVRadioGroup">
                <span className="MVRadioGroupLabel">{this.props.label}</span>
                {namedChildren}
            </div>
            );
    }
}

export default MVRadioGroup;