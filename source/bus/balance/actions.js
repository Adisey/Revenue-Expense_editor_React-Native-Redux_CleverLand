import { type } from './types';

export const balanceActions = {
    // Sync
    fillBalance: (cash) => {
        return {
            type:    type.FILL_BALANCE,
            payload: cash,
        };
    },
    // Async
    fetchCBalanceAsync: () => {
        return {
            type: type.FETCH_BALANCE_ASYNC,
        };
    },
};
