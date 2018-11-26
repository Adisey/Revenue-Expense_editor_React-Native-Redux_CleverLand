//Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watcherBalance } from '../bus/balance/saga/watchers';
import { watcherCategories } from '../bus/categories/saga/watchers';
import { watcherCash } from '../bus/cash/saga/watchers';

export function* rootSaga () {
    yield all([
        call(watcherBalance),
        call(watcherCategories),
        call(watcherCash)
    ]);
}
