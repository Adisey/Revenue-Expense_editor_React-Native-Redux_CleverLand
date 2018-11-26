// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '../init/store';
// Components
import { Text, View } from 'react-native';
import { Container } from 'native-base';
import { AppFooter, Icons, CategoriesList } from '../Components';
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
            <Provider store = { store }>
                <Container style = { styles.mainContainer }>
                    <View style = { styles.mainView }>
                        <CategoriesList />
                    </View>
                    <AppFooter
                        activePage = { 'categories' }
                        navigate = { navigate }
                    />
                </Container>
            </Provider>
        );
    }
}
