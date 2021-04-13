import * as actionTypes from './actionTypes';

export const checkAuthState = () => {
    return {
        type: actionTypes.AUTH_CHECK_STATE
    }
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const auth = (account, isSignup) => {
    return {
        type: actionTypes.AUTH_USER,
        account: account,
        isSignup: isSignup
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

export const authFail = (errMsg) => {
    return {
        type: actionTypes.AUTH_FAIL,
        errMsg: errMsg
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime
    }
}

export const initiateLogout = () => {
    return {
        type: actionTypes.AUTH_INITIATE_LOGOUT
    }
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}