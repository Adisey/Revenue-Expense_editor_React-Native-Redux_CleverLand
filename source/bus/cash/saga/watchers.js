// Core
import { takeEvery, all, call } from 'redux-saga/effects';
// Types
import { type } from '../types';
// Workers
import { fillCash } from './workers';

function* watcherFillCash () {
    yield takeEvery(type.FETCH_CASH_ASYNC, fillCash);
}

export function* watcherCash () {
    yield all([
        call(watcherFillCash)
    ]);
}
