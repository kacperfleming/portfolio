import * as actionTypes from '../actions/actionTypes';
import {updateObj} from '../../usefulFunc/utility';

const initialState = {
    token: null,
    userId: null,
    loading: null,
    error: null
}

const authStart = (state) => updateObj(state, {
    loading: true,
    error: null
});

const authSuccess = (state, action) => updateObj(state, {
    token: action.token,
    userId: action.userId,
    loading: null,
    error: null
});

const authFail = (state, action) => updateObj(state, {
    error: action.errMsg,
    loading: false
});

const authLogout = (state, action) => updateObj(state, {
    token: null,
    userId: null,
})

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default: return state;
    }
}

export default reducer;