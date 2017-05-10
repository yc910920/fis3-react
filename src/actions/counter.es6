/**
 * @module counter
 * @author 小虎牙
 */
import { actionTypes } from '/src/constants';
import { fetch, API } from '/src/api';


/**
 * @method 递增
 * @return undefined
 */
export function addAction() {
    return (dispatch, getState) => {
        dispatch(
            {
                type: actionTypes.COUNTER_ADD
            }
        )
    }
}


/**
 * @method 递减
 * @return undefined
 */
export function subtractAction() {
    return (dispatch, getState) => {
        dispatch(
            {
                type: actionTypes.COUNTER_SUBTRACT
            }
        )
    }
}


/**
 * @method 接口测试
 * @param  {String} param
 * @return undefined
 */
export function fetchInterfaceTestAction(param) {
    return (dispatch, getState) => {
        console.log(fetch, API);
    }
}