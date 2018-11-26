//Core
import { fromJS } from 'immutable';
// Types
import { type } from './types';

const initalState = fromJS([
    {
        id:               '1',
        name:             'Банковская операция',
        typeTransactions: [1, 2],
        icon:             'ios-card',
    },
    {
        id:               '2',
        name:             'Еда',
        typeTransactions: [2],
        icon:             'ios-pizza',
    },
    {
        id:               '3',
        name:             'Покупки',
        typeTransactions: [2],
        icon:             'ios-cart',
    },
    {
        id:               '4',
        name:             'Транспорт',
        typeTransactions: [2],
        icon:             'ios-bus',
    },
    {
        id:               '5',
        name:             'Дом',
        typeTransactions: [2],
        icon:             'ios-home',
    },
    {
        id:               '6',
        name:             'Путешествия',
        typeTransactions: [2],
        icon:             'md-jet',
    },
    {
        id:               '7',
        name:             'Другое',
        typeTransactions: [1, 2],
        icon:             'ios-pricetag',
    }
]);

export const categoriesReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.FILL_CATEGORIES:
            return fromJS(action.payload);

        default:
            return state;
    }
};
