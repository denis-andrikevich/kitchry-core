import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from "./LoginConstants";

const user = JSON.parse(localStorage.getItem('user_data'));

const initialState = {
    request: false,
    isLoggedIn: !!user,
    user
};

const loginReducer = (state = initialState, action) => {
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
            localStorage.setItem('user_data', JSON.stringify(action.payload));
            return {
                request: false,
                isLoggedIn: true,
                user: action.payload
            };
        case LOGOUT:
            localStorage.removeItem('user_data');
            localStorage.removeItem('token');
            return {
                request: false,
                isLoggedIn: false,
                user: null
            };
        default: return state;
    }
};

export default loginReducer;