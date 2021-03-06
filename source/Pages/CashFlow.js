// Core
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Icon } from 'native-base';
// Components
import { AppFooter, Icons } from '../Components';
//Styles
import styles from './styles';


export default class CashFlow extends Component {
    static navigationOptions = {
        title:            'Операции',
        headerLeft:       <Icons name = { 'cashFlow' } style = { styles.titleIcon } />,
        headerTitleStyle: styles.headerTitleStyle,
        headerStyle:      styles.headerStyle,
    };

    render () {
        const { navigate } = this.props.navigation;

        return (
            <Container style = { styles.mainContainer }>
                <View style = { styles.mainView }>
                    <Icon name = 'ios-refresh' style = { { color: '#FF0000' } } />
                    <Text>CashFlow</Text>
                    <Icon name = 'plane' style = { { color: '#00FF00' } } />
                </View>
                <AppFooter
                    activePage = { 'cashFlow' }
                    navigate = { navigate }
                />
            </Container>
        );
    }
}
