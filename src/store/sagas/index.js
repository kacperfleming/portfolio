import {takeEvery, all} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {authUserSaga, checkAuthTImeoutSaga, authLogoutSaga, authCheckStateSaga} from './auth';

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTImeoutSaga),
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, authLogoutSaga),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
    ])
}