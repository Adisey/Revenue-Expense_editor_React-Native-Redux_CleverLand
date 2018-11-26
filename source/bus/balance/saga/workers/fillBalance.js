// Core
// import { put, apply } from 'redux-saga/effects';
// Components
// import { api } from '../../../../REST';
// import { balanceActions } from '../../actions';

export function* fillBalance () {
// ToDo:  запустиь спинер
    try {
        // const response = yield apply(api, api.balance.fetch);
        // const cash = yield apply(response, response.json);
        //
        // if (response.status !== 200) {
        //     throw new Error(message);
        // }
        //
        // yield put(balanceActions.fillBalance(cash));
    } catch
    (error) {
        // ToDo:  дать сообщение пользователю о невозможности получить данные
    } finally {
        // ToDo:  остановить спинер
    }
}
