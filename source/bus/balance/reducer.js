//Core
import { fromJS } from 'immutable';
// Types
import { type } from './types';

const initalState = fromJS({
    dayStartBalance: 5500,
});

export const balanceReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.FILL_BALANCE:
            return fromJS(action.payload);

        default:
            return state;
    }
};
