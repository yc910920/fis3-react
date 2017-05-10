/**
 * @module counter
 * @author 小虎牙
 */
import { actionTypes } from '/src/constants';
export default function counterReducer(state, action) {
    switch (action.type) {
        // +
        case actionTypes.COUNTER_ADD:
            return {
                ...state,
                count: state.count + 1
            };

        // -
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