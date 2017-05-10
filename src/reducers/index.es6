/**
 * @file reducers.es6
 * @email 99874405@qq.com
 */
import counterReducer from './counter';
export default {
    reducers: {
        counterReducer,
        A(state = 'a', action) {
            return state;
        },

        B(state = 'b', action) {
            return state;
        },

        C(state = 'c', action) {
            return state;
        }
    }
};