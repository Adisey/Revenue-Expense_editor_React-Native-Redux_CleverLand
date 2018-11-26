// Core
import { combineReducers } from 'redux';
// Reducers
import { balanceReducer as balance } from '../bus/balance/reducer';
import { categoriesReducer as categories } from '../bus/categories/reducer';
import { cashReducer as cash } from '../bus/cash/reducer';

export const rootReducer = combineReducers({
    balance,
    categories,
    cash,
});
