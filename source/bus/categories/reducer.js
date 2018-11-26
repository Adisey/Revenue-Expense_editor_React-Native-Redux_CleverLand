//Core
import { fromJS } from 'immutable';
// Types
import { type } from './types';

const initalState = fromJS([
    {
        id:               '1',
        categoriesName:   'Банковская операция',
        typeTransactions: [-1, 1],
    },
    {
        id:               '2',
        categoriesName:   'Еда',
        typeTransactions: [-1],
    },
    {
        id:               '3',
        categoriesName:   'Покупки',
        typeTransactions: [-1],
    },
    {
        id:               '4',
        categoriesName:   'Транспорт',
        typeTransactions: [-1],
    },
    {
        id:               '5',
        categoriesName:   'Дом',
        typeTransactions: [-1],
    },
    {
        id:               '6',
        categoriesName:   'Путешествия',
        typeTransactions: [-1],
    },
    {
        id:               '7',
        categoriesName:   'Другое',
        typeTransactions: [-1, 1],
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
