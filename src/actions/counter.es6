/**
 * @file counter.es6
 * @desc 加减器
 * @email 99874405@qq.com
 */
import { actionTypes } from '/src/constants';


/**
 * @desc 递增
 * @type method
 */
export function addAction() {
    return {
        type: actionTypes.COUNTER_ADD
    };
}


/**
 * @desc 递减
 * @type method
 */
export function subtractAction() {
    return {
        type: actionTypes.COUNTER_SUBTRACT
    };
}