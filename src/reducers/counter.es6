/**
 * @file counter.es6
 * @desc 加减器
 * @email 99874405@qq.com
 */
import { actionTypes } from '/src/constants';
export default function counterReducer(state, action) {
    switch (action.type) {
        case actionTypes.COUNTER_ADD:
            return {
                ...state,
                count: state.count + 1
            };

        case actionTypes.COUNTER_SUBTRACT:
            return {
                ...state,
                count: state.count - 1
            };

        default:
            return state || {
                count: 98,
                countMax: 100,
                countMin: 0
            };
    }
};