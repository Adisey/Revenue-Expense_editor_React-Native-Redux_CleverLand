// Core
import { put, apply } from 'redux-saga/effects';
// Components
// import { api } from '../../../../REST';
import { categoriesActions } from '../../actions';

export function* fillCategories () {
// ToDo:  запустиь спинер
    try {
        //         const response = yield apply(api, api.categories.fetch);
        //         const categories = yield apply(response, response.json);
        //
        //         if (response.status !== 200) {
        //             throw new Error(message);
        //         }
        //
        //         yield put(categoriesActions.fillCategories(categories));
    } catch
    (error) {
        // ToDo:  дать сообщение пользователю о невозможности получить данные
    } finally {
        // ToDo:  остановить спинер
    }
}
