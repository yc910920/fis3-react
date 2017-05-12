/**
 * @module counter
 * @author 小虎牙
 */
import { message } from 'antd';
import { fetch, API } from '/src/api';
import { actionTypes } from '/src/constants';
import { moment } from '/src/util';


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
        );
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
        );
    }
}


/**
 * @method 更新日期
 * @return undefined
 */
export function updateTimeAction() {
    return (dispatch, getState) => {
        setTimeout(
            () => {
                dispatch(
                    {
                        type: actionTypes.COUNTER_UPDATETIME,
                        payload: moment(Date.now()).format('YYYY-MM-DD hh:mm:ss a')
                    }
                );
                dispatch(updateTimeAction());
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
        fetch.get(API.T1, param)
             .then(res => {
                //  console.log(res);
             })
             .catch(exc => {
                 message.error(exc.status + ' > ' + exc.statusText);
             });
    }
}


/**
 * @method Post: 接口测试
 * @param  Object: param
 * @return undefined
 */
export function fetchInterfaceTestAction2(param) {
    return (dispatch, getState) => {
        fetch.get(API.T2, param)
             .then(res => {
                 console.log(res);
             })
             .catch(exc => {
                 message.error(exc.status + ' > ' + exc.statusText);
             });
    }
}