/**
 * @module counter
 * @author 小虎牙
 */
import { moment } from '/src/util';
import { actionTypes } from '/src/constants';
export default function counterReducer(state, action) {
    switch (action.type) {
        /**
         * @desc +
         */
        case actionTypes.COUNTER_ADD:
            return {
                ...state,
                count: state.count + 1
            };


        /**
         * @desc -
         */
        case actionTypes.COUNTER_SUBTRACT:
            return {
                ...state,
                count: state.count - 1
            };


        /**
         * @desc updater date
         */
        case actionTypes.COUNTER_UPDATETIME:
            return {
                ...state,
                currentTime: action.payload
            };


        /**
         * @desc default state
         */
        default:
            return state || {
                count: 98,
                countMax: 100,
                countMin: 0,
                currentTime: moment(Date.now()).format('YYYY-MM-DD hh:mm:ss a')
            };
    }
}