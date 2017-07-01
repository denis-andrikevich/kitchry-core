import http from '../../utils/http.service';
import storage from '../../utils/storage.service';
import serialize from '../../utils/serialize';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from './LoginConstants';

export function loginAction(data, success, error) {
    const header = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }

    return dispatch => {
        dispatch({ type: LOGIN_REQUEST });

        http.service.post('api/v2/mobile/login', serialize(data), header)
            .then(res => {
                if (res.data.status === 'fail') throw new Error();
                
                storage.service.setItem('token', res.data.token);
                dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
            })
            .catch(err => dispatch({ type: LOGIN_ERROR }) );
    }
}

export function logoutAction() {
    return { type: LOGOUT }
}