/**
 * @file store.es6
 * @email 99874405@qq.com
 */
import { createStore, combineReducers } from 'redux';
import { reducers } from './reducers';
export default {
    configureStore() {
        return createStore(
            combineReducers(reducers),
            [1, 2, 3]
        );
    }
};