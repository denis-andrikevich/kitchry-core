import storage from '../../utils/storage.service';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from "./LoginConstants";

const getInitialState = () => {
    const user = JSON.parse(storage.service.getItem('user_data'));

    return {
        request: false,
        isLoggedIn: !!user,
        user
    };
}

const loginReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                request: true,
                isLoggedIn: false,
                user: null
            };
        case LOGIN_ERROR:
            return {
                request: false,
                isLoggedIn: false,
                user: null
            };
        case LOGIN_SUCCESS:
            storage.service.setItem('user_data', JSON.stringify(action.payload));
            return {
                request: false,
                isLoggedIn: true,
                user: action.payload
            };
        case LOGOUT:
            storage.service.removeItem('user_data');
            storage.service.removeItem('token');
            return {
                request: false,
                isLoggedIn: false,
                user: null
            };
        default: return state;
    }
};

export default loginReducer;