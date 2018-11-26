import { type } from './types';

export const categoriesActions = {
    // Sync
    fillCategories: (categories) => {
        return {
            type:    type.FILL_CATEGORIES,
            payload: categories,
        };
    },
    // Async
    fetchCategoriesAsync: () => {
        return {
            type: type.FETCH_CATEGORIES_ASYNC,
        };
    },
};
