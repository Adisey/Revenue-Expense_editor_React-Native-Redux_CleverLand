// Core
import { takeEvery, all, call } from 'redux-saga/effects';
// Types
import { type } from '../types';
// Workers
import { fillBalance } from './workers';

function* watcherFillBalance () {
    yield takeEvery(type.FETCH_BALANCE_ASYNC, fillBalance);
}

export function* watcherBalance () {
    yield all([
        call(watcherFillBalance)
    ]);
}
