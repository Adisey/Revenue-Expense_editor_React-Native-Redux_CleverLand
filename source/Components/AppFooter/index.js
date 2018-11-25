// Core
import React, { Component } from 'react';
import {
    Footer,
    FooterTab,
    Button,
    Text,
    Icon
} from 'native-base';
//Styles
import styles from './styles';


export default class AppFooter extends Component {

    render () {
        const { navigate } = this.props;

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
            console.log(` -> "XZ" -> `);
        };


        return (
            <Footer >
                <FooterTab style = { styles.footerTab }>
                    <Button
                        onPress = { _showCashFlow }>
                        <Icon name = 'logo-usd' style = { styles.icon } />
                        <Text>Операции</Text>
                    </Button>
                    <Button
                        onPress = { _showCharts }>
                        <Icon name = 'md-analytics' style = { styles.icon } />
                        <Text>Обзор</Text>
                    </Button>
                    <Button
                        onPress = { _showCategory }>
                        <Icon name = 'md-paper' style = { styles.icon } />
                        <Text>Категории</Text>

                    </Button>
                    <Button
                        onPress = { _showTools }>
                        <Icon name = 'md-cog' style = { styles.icon } />
                        <Text>Настройки</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
