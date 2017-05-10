/**
 * @file reducers.es6
 * @desc reducers 入口
 * @email 99874405@qq.com
 */
// 加减器
import counterReducer from './counter';
export default {
    reducers: {
        counter: counterReducer,
    }
};