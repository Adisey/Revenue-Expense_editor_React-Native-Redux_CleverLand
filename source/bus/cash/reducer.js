//Core
import { fromJS } from 'immutable';
// Types
import { type } from './types';

const initalState = fromJS([
    {
        id:               '1',
        sum:              1000,
        date:             new Date(),
        description:      'Снял с карточки наличные',
        categoriesId:     '1',
        typeTransactions: 1,
    },
    {
        id:               '2',
        sum:              10,
        date:             new Date(),
        description:      'Купил хлебушка',
        categoriesId:     '2',
        typeTransactions: -1,
    },
    {
        id:               '3',
        sum:              8,
        date:             new Date(),
        description:      'Прокатился в метро',
        categoriesId:     '4',
        typeTransactions: -1,
    },
    {
        id:               '4',
        sum:              57,
        date:             new Date(),
        description:      'Купил зубную пасту',
        categoriesId:     '5',
        typeTransactions: -1,
    },
    {
        id:               '5',
        sum:              27,
        date:             new Date(),
        description:      'Купил молочка',
        categoriesId:     '2',
        typeTransactions: -1,
    }
]);

export const cashReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.FILL_CASH:
            return fromJS(action.payload);

        default:
            return state;
    }
};
