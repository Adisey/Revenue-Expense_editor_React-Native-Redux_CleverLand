import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base';
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

        console.log(` -> "Charts" <- `);

        return (
            <Container>

                <View style = { styles.container }>
                    <Text>Charts</Text>
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