// Core
import { put, apply } from 'redux-saga/effects';
// Components
// import { api } from '../../../../REST';
import { cashActions } from '../../actions';

export function* fillCash () {
// ToDo:  запустиь спинер
    try {
        const response = yield apply(api, api.cash.fetch);
        const cash = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(cashActions.fillCash(cash));
    } catch
    (error) {
        // ToDo:  дать сообщение пользователю о невозможности получить данные
    } finally {
        // ToDo:  остановить спинер
    }
}
