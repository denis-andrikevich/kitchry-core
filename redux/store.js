import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import http from '../utils/http.service';
import storage from '../utils/storage.service';

let store;

/**
 * httpService interface (get,post,put,delete methods)
 * storageService (setItem, removeItem methods)
 * 
 */

export default (httpService, storageService) => {
    if (!httpService) throw new Error('Http service required');
    if (!storageService) throw new Error('Storage service requiered');

    http.service = httpService;
    storage.service = storageService;

    if (!store) {
        store = createStore(
            rootReducer(),
            composeWithDevTools(applyMiddleware(thunk))
        );
    }
    return store
};