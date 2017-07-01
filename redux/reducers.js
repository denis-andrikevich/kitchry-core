import { combineReducers } from 'redux';
import loginReducer from './login/LoginReducer';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
    login: loginReducer,
    form: formReducer,
    routing: routerReducer
})

export default rootReducer;