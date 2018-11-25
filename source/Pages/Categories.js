// Core
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
// Components
import { AppFooter, Icons } from '../Components';
//Styles
import styles from './styles';

export default class Categories extends Component {
    static navigationOptions = {
        title:            'Категории',
        headerLeft:       <Icons name = { 'categories' } style = { styles.titleIcon } />,
        headerTitleStyle: styles.headerTitleStyle,
        headerStyle:      styles.headerStyle,
    };

    render () {
        const { navigate } = this.props.navigation;

        console.log(` -> "Categories" <- `);

        return (
            <Container style = { styles.mainContainer }>
                <View style = { styles.mainView }>
                    <Text>Categories</Text>
                </View>
                <AppFooter
                    activePage = { 'categories' }
                    navigate = { navigate }
                />

            </Container>
        );
    }
}
