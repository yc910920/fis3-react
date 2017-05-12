/**
 * @module counter
 * @author 小虎牙
 */
import { message } from 'antd';
import { fetch, API } from '/src/api';
import { actionTypes } from '/src/constants';


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
 * @method 更新日期
 * @return undefined
 */
export function updateTimeAction() {
    return (dispatch, getState) => {
        setInterval(
            () => {
                dispatch(
                    {
                        type: actionTypes.COUNTER_UPDATETIME,
                        payload: Date.now()
                    }
                )
            },
            1000
        );
    }
}


/**
 * @method Get: 接口测试
 * @param  String: param
 * @return undefined
 */
export function fetchInterfaceTestAction(param) {
    return (dispatch, getState) => {
        fetch.get(API.T)
             .then(res => {
                message.success('接口测试成功');
             })
             .catch(exc => {
                 message.error(exc.status + ' > ' + exc.statusText);
             });
    }
}