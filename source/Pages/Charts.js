import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Icon, Button } from 'native-base';
// Components
import { AppFooter, Icons } from '../Components';
//Styles
import styles from './styles';

export default class Charts extends Component {
    static navigationOptions = {
        title:            'Графики',
        headerLeft:       <Icons name = { 'charts' } style = { styles.titleIcon } />,
        headerTitleStyle: styles.headerTitleStyle,
        headerStyle:      styles.headerStyle,
    };

    render () {
        const { navigate } = this.props.navigation;

        return (
            <Container style = { styles.mainContainer }>
                <View style = { styles.mainView }>
                    <Text>Charts</Text>


                    <Button
                        rounded
                        style = { {
                            // height:          45,
                            // width:           45,
                            bottom:          30,
                            // borderWidth:     1,
                            // borderColor:     'lightgrey',
                            // borderRadius:    23,
                            backgroundColor: '#18b272',
                        } } active>
                        <Icon active name = 'add' style = { { color: '#FFFFFF' } } />
                    </Button>


                </View>
                <AppFooter
                    activePage = { 'charts' }
                    navigate = { navigate }
                />
            </Container>

        );
    }
}
