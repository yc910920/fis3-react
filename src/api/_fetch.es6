/**
 * @module _fetch
 * @author 小虎牙
 */
import { message } from 'antd';
import { addTimeStamp } from '/src/util';
import 'whatwg-fetch';
import fetchJsonp from 'fetch-jsonp';
export default {
    /**
     * @method get 请求
     * @param  String:   url
     * @param  String:   param
     * @param  Function: cb
     */
    get(url = '', param = '', cb) {
        if (url) {
            return new Promise((resolve, reject) => {
                fetch(
                    addTimeStamp(url, param),
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
                        return reject(
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
        message.error('miss url');
    },

    
    /**
     * @method post 请求
     * @param  String:   url
     * @param  Object:   param
     * @param  String:   type 
     * @param  Function: cb
     */
    post(url = '', param = {}, type = '*', cb) {
        if (url) {
            return new Promise((resolve, reject) => {
                fetch(
                    addTimeStamp(url, ''),
                    {
                        credentials: 'include',
                        method: 'POST',
                        body: JSON.stringify(param),
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': type === 'file' ? 'multipart/form-data' : 'application/json',
                            'Cache-Control': 'no-cache'
                        }
                    }
                ).then(
                    res => {
                        if (res.ok) return res.json();
                        return reject(
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
        message.error('miss url');
    }
};