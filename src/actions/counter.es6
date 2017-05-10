/**
 * @file counter.es6
 * @desc 加减器
 * @email 99874405@qq.com
 */
import { actionTypes } from '/src/constants';


// 递增
export function add() {
    return {
        type: actionTypes.COUNTER_ADD
    };
}


// 递减
export function subtract() {
    return {
        type: actionTypes.COUNTER_SUBTRACT
    };
}