// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Components
import { ScrollView, Text, View } from 'react-native';
import { CategoryItem } from '../';
//Styles
import styles from './styles';
// Actions
import { categoriesActions } from '../../bus/categories/actions';

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...categoriesActions }, dispatch),
    };
};

class CategoriesList extends Component {

    render () {
        const { categories } = this.props;

        const CategoriesListJSX = categories.map((category) => {
            const categoryItem = category.toJS();

            return (
                <View key = { categoryItem.id } style = { styles.categoryItems }>
                    <CategoryItem
                        categoryItem = { categoryItem }
                    />
                </View>
            );
        });

        return (
            <ScrollView style = { styles.mainCategories }>
                {CategoriesListJSX}
            </ScrollView>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CategoriesList);
