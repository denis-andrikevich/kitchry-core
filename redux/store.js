import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import http from '../utils/http.service';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default (httpLib) => {
    if(!httpLib) throw 'http lib err';
    http.lib = httpLib;
    //create singletons
    return store
};