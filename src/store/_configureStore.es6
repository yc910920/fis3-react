/**
 * @module _configureStore
 * @author 小虎牙
 */
import reduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducers } from '/src/reducers';


/**
 * @method 初始化一个状态机
 * @return {String} store
 */
export default function _configureStore() {
    return createStore(
        combineReducers(reducers),
        applyMiddleware(reduxThunk)
    );
}