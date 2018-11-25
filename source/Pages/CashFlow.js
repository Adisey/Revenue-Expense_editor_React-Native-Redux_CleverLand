// Core
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Icon } from 'native-base';
// Components
import { AppFooter } from '../Components';

export default class CashFlow extends Component {
    // static navigationOptions = {
    //     title:            'CashFlow',
    //     headerTitleStyle: {
    //         textAlign: 'center',
    //         alignSelf: 'center',
    //         flex:      1,
    //     },
    // };

    render () {
        const { navigate } = this.props.navigation;

        console.log(` -> "CashFlow" <- `, new Date());

        return (
            <Container>
                <View style = { styles.container }>
                    <Icon name = 'ios-refresh' style = { { color: '#FF0000' } } />
                    <Text>CashFlow</Text>
                    <Icon name = 'plane' style = { { color: '#00FF00' } } />
                </View>
                <AppFooter
                    navigate = { navigate }
                />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:            1,
        justifyContent:  'center',
        alignItems:      'center',
        backgroundColor: '#F5FCFF',
    },
});
