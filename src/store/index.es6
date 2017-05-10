/**
 * @file store.es6
 * @email 99874405@qq.com
 */
import { createStore } from 'redux';
export default {
    configure() {
        return createStore(
            function reducer() {

            },
            [1, 2, 3, 4, 5]
        );
    },
    store: this.configure()
};