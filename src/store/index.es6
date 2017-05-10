/**
 * @file store.es6
 * @email 99874405@qq.com
 */
import { createStore } from 'redux';
export default {
    store: function configure() {
        return createStore(
            function reducer(state, action) {
                return state;
            },
            [1, 2, 3]
        );
    }()
};