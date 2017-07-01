import http from '../../utils/http.service';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from './LoginConstants';

export function loginAction(data, success, error) {
    return dispatch => {
        dispatch({ type: LOGIN_REQUEST });

        http.lib.post('/api/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
            })
            .catch(err => dispatch({ type: LOGIN_ERROR }) );
    }
}

export function logoutAction() {
    return { type: LOGOUT }
}