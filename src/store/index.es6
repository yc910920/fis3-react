/**
 * @module store
 * @author 小虎牙
 */
import reduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducers } from '/src/reducers';
export default {
    /**
     * @method 初始化一个状态机
     * @return {String} store
     */
    configureStore() {
        return createStore(
            combineReducers(reducers),
            applyMiddleware(reduxThunk)
        );
    }
};