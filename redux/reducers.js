import { combineReducers } from 'redux';
import loginReducer from './login/LoginReducer';
import { reducer as formReducer } from 'redux-form';


let rootReducer;

export default () => {
    if (!rootReducer) {
        rootReducer = combineReducers({
            login: loginReducer,
            form: formReducer
        })
    }
    return rootReducer;
}