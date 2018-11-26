import React, { Component } from "react";
import { object, string } from "prop-types";
import { Icon } from 'native-base';
//Styles
import defaultStyle from './styles';

export default class Icons extends Component {
    static propTypes = {
        name:  string.isRequired,
        style: object.isRequired,
    };

    static defaultProps = {
        style: defaultStyle,
        name:  'ios-help',
    };

    render () {
        const { style, name } = this.props;
        let customName = name;

        switch (name) {
            case 'cashFlow':
                customName = 'ios-cash';
                break;
            case 'charts':
                customName = 'md-analytics';
                break;
            case 'categories':
                customName = 'ios-switch';
                break;
            case 'tools':
                customName = 'ios-construct';
                break;
            default:
                customName = name;
                break;
        }

        return (<Icon name = { customName } style = { style } />);
    }
}
