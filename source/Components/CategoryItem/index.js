// Core
import React, { Component } from 'react';
import { object } from "prop-types";
// Components
import { Text, View, TouchableHighlight } from 'react-native';
import { Icons } from '../';

//Styles
import styles from './styles';
// Actions

export default class CategoryItem extends Component {
    static propTypes = {
        categoryItem: object.isRequired,
    };

    static defaultProps = {
        categoryItem: { id: 1, name: '????' },
    };

    render () {
        const { categoryItem } = this.props;

        const _deleteItem = () => {
            console.log(` -> "Delete" -> `, categoryItem.id);
        };
        const _editItem = () => {
            console.log(` -> "Edit" -> `, categoryItem.id);
        };

        console.log(` -> "" -> `, categoryItem.id);

        return (
            <View style = { styles.mainCategoryItem }>
                <View style = { styles.categoryItemIcon }>

                    <Icons name = { categoryItem.icon } />

                </View>
                <View style = { styles.categoryItemDisctotpion }>
                    <TouchableHighlight
                        underlayColor = '#cbcbcb'
                        onLongPress = { _editItem }>
                        <View style = { styles.categoryItemDisctotpion }>

                            <View style = { styles.categoryItemTitle }>
                                <Text style = { styles.categoryItemTitleText }>
                                    {categoryItem.name}
                                </Text>
                            </View>
                            <View style = { styles.categoryItemType }>
                                <View style = { styles.categoryItemTypeInOut }>
                                    {categoryItem.typeTransactions.includes(1) ?
                                        <Icons name = { 'ios-log-in' } style = { styles.iconStyleIn } /> : null}
                                </View>
                                <View style = { styles.categoryItemTypeInOut }>
                                    {categoryItem.typeTransactions.includes(2) ?
                                        <Icons name = { 'ios-log-out' } style = { styles.iconStyleOut } /> : null}
                                </View>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style = { styles.categoryItemToolBar }>
                    {/*<View style = { styles.categoryItemToolIconView }>*/}
                    {/*<Icons name = { 'ios-create' } style = { styles.categoryItemToolIcon } />*/}
                    {/*</View>*/}
                    <TouchableHighlight
                        underlayColor = '#cbcbcb'
                        onLongPress = { _deleteItem }>
                        <View style = { styles.categoryItemToolIconView }>
                            <Icons
                                name = { 'ios-trash' }
                                style = { styles.categoryItemToolIcon }
                            />
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
