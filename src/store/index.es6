/**
 * @file store.es6
 * @desc init store
 * @email 99874405@qq.com
 */
import reduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducers } from './reducers';
export default {
    configureStore() {
        return createStore(
            combineReducers(reducers),
            applyMiddleware(reduxThunk)
        );
    }
};