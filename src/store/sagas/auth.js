import {put, delay} from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* authUserSaga(action) {
    yield put(actions.authStart());
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD-svD38PQk9EGqIlnpH3twTTJk8Ev5ifQ';
    if(action.isSignup) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-svD38PQk9EGqIlnpH3twTTJk8Ev5ifQ';
    }

    try {
        const res = yield axios.post(url, action.account);

        const expirationDate = yield new Date(new Date().getTime() + res.data.expiresIn * 1000);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('token', res.data.idToken);
        yield localStorage.setItem('userId', res.data.localId);
        console.log('set expidation date to: ' + expirationDate);

        yield put(actions.authSuccess(res.data.idToken, res.data.localId));
        yield put(actions.checkAuthTimeout(res.data.expiresIn));
    } catch(err) {
        yield put(actions.authFail(err.message));
    }
}

export function* checkAuthTImeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout());
}

export function* authLogoutSaga() {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('userId');
    yield localStorage.removeItem('expirationDate');
    yield put(actions.logout());
}

export function* authCheckStateSaga() {
    const token = yield localStorage.getItem('token');

    if(!token) {
        console.log('no token');
        yield put(actions.logout());
    } else {
        const expirationDate = new Date(yield localStorage.getItem('expirationDate'));
        console.log('expiration date: ' + expirationDate);
        if(expirationDate > new Date()) {
            const userId = localStorage.getItem('userId');
            yield put(actions.authSuccess(token, userId));
            yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        } else {
            console.log('expiration date reached');
            yield put(actions.logout());
        }
    }
}