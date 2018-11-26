// Core
import { takeEvery, all, call } from 'redux-saga/effects';
// Types
import { type } from '../types';
// Workers
import { fillCategories } from './workers';

function* watcherFillCategories () {
    yield takeEvery(type.FETCH_CATEGORIES_ASYNC, fillCategories);
}

export function* watcherCategories () {
    yield all([
        call(watcherFillCategories)
    ]);
}
