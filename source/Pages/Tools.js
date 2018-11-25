// Core
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Icon } from 'native-base';
// Components
import { AppFooter, Icons } from '../Components';
//Styles
import styles from './styles';

export default class Tools extends Component {
    static navigationOptions = {
        title:            'Утилиты',
        headerLeft:       <Icons name = { 'tools' } style = { styles.titleIcon } />,
        headerTitleStyle: styles.headerTitleStyle,
        headerStyle:      styles.headerStyle,
    };

    render () {
        const { navigate } = this.props.navigation;

        return (
            <Container style = { styles.mainContainer }>
                <View style = { styles.mainView }>
                    <Text>Пока не придумал, что сюда положить. ;)</Text>
                    <Icon name = 'md-hand' style = { { color: '#F00' } } />
                </View>
                <AppFooter
                    activePage = { 'tools' }
                    navigate = { navigate }
                />

            </Container>
        );
    }
}
