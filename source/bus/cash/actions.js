import { type } from './types';

export const cashActions = {
    // Sync
    fillCash: (cash) => {
        return {
            type:    type.FILL_CASH,
            payload: cash,
        };
    },
    // Async
    fetchCashAsync: () => {
        return {
            type: type.FETCH_CASH_ASYNC,
        };
    },
};
