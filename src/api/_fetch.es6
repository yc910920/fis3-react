/**
 * @module _fetch
 * @author 小虎牙
 */
import 'whatwg-fetch';
import { message } from 'antd';
import { addTimeStamp, json2url } from '/src/util';
export default {

    /**
     * @method get 请求
     * @param  String:   url
     * @param  Object:   param
     * @param  Function: cb
     */
    get(url = '', param = {}, cb) {
        if (url === '') {
            return message.error('url miss');
        }

        return new Promise((resolve, reject) => {
            fetch(
                addTimeStamp(url, json2url(param)),
                {
                    credentials: 'include',
                    headers: {
                        'Accept': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                }
            ).then(
                res => {
                    if (res.ok) return res.json();
                    reject(
                        {
                            url: res.url,
                            status: res.status,
                            statusText: res.statusText
                        }
                    );
                }
            ).then(
                res => resolve(res)
            )
        });
    },


    /**
     * @method post 请求
     * @param  String:   url
     * @param  Object:   param
     * @param  Function: cb
     */
    post(url = '', param = {}, cb) {
        if (url === '') {
            return message.error('url miss');
        }

        return new Promise((resolve, reject) => {
            fetch(
                addTimeStamp(url),
                {
                    credentials: 'include',
                    method: 'POST',
                    body: JSON.stringify(param),
                    headers: {
                        'Accept': 'application/json',
                        'Cache-Control': 'no-cache',
                        'Content-Type': 'application/json'
                    }
                }
            ).then(
                res => {
                    if (res.ok) return res.json();
                    reject(
                        {
                            url: res.url,
                            status: res.status,
                            statusText: res.statusText
                        }
                    );
                }
            ).then(
                res => resolve(res)
            )
        });
    }
};