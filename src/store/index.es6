/**
 * @file store.es6
 * @desc init store
 * @email 99874405@qq.com
 */
import { createStore, combineReducers } from 'redux';
import { reducers } from './reducers';
import reduxThunk from 'redux-thunk';
export default {
    configureStore() {
        return createStore(
            combineReducers(reducers),
        );
    }
};