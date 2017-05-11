/**
 * @module reducers
 * @author 小虎牙
 */

// 加减器
import counterReducer from './counter';
export default {
    reducers: {
        counter: counterReducer,
    }
};