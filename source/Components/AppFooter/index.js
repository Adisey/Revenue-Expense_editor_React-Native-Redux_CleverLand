// Core
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { string } from 'prop-types';
import { Footer, FooterTab, Button } from 'native-base';
// Components
import { Icons } from '../';
//Styles
import styles from './styles';

export default class AppFooter extends Component {
    static propTypes = {
        activePage: string.isRequired,
    };

    static defaultProps = {
        activePage: 'SETINGS',
    };

    render () {
        const { navigate, activePage } = this.props;

        const _showCashFlow = () => {
            navigate('CashFlow');
        };
        const _showCharts = () => {
            navigate('Charts');
        };
        const _showCategory = () => {
            navigate('Categories');
        };
        const _showTools = () => {
            navigate('Tools');
        };
        const activeText = { ...styles.textButton, ...styles.activeElement };
        const passiveText = { ...styles.textButton, ...styles.passiveElement };
        const activeIcon = styles.activeElement;
        const passiveIcon = styles.passiveElement;

        return (
            <Footer >
                <FooterTab style = { styles.footerTab }>
                    <Button
                        onPress = { _showCashFlow }>
                        <Icons name = { 'cashFlow' } style = { activePage==='cashFlow'? activeIcon : passiveIcon } />
                        <Text style = { activePage==='cashFlow'? activeText : passiveText }>Операции</Text>
                    </Button>
                    <Button
                        onPress = { _showCharts }>
                        <Icons name = { 'charts' } style = { activePage==='charts'? activeIcon : passiveIcon } />
                        <Text style = { activePage==='charts'? activeText : passiveText }>Графики</Text>
                    </Button>
                    <View >
                        <Button rounded style = { styles.addButton } >
                            <Icons name = { 'add' } style = { styles.addButtonIcon } />
                        </Button>
                    </View>
                    <Button
                        onPress = { _showCategory }>
                        <Icons name = { 'categories' } style = { activePage==='categories'? activeIcon : passiveIcon } />
                        <Text style = { activePage==='categories'? activeText : passiveText }>Категории</Text>
                    </Button>
                    <Button
                        onPress = { _showTools }>
                        <Icons name = { 'tools' } style = { activePage==='tools'? activeIcon : passiveIcon } />
                        <Text style = { activePage==='tools'? activeText : passiveText }>Утилиты</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
